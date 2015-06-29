import React from 'react';

class SparklinesLine extends React.Component {
    render() {

        let points = this.props.points;
        let svgPath = 'M' + points[0].x + ' ' + points[0].y +
            points.map((p, i) => ' L ' + points[i].x + ' ' + points[i].y) +
            ' L' + points[points.length - 1].x + ' 10000 L0 10000 L0 ' + points[0].y;

        return (
            <path d={svgPath}
                stroke={this.props.stroke}
                strokeWidth={this.props.strokeWidth}
                fill={this.props.fill}
                fillOpacity='0.1' />
        )
    }
}
SparklinesLine.propTypes = {
    points: React.PropTypes.array
};

class SparklinesBars extends React.Component {
    render() {

        let points = this.props.points;

        return (
            <g>
                {points.map((p, i) =>
                    <rect
                        key={i}
                        x={p.x - 10} y={p.y}
                        width="20" height={50 - p.y}
                        stroke={this.props.stroke}
                        strokeWidth={this.props.strokeWidth}
                        fill={this.props.fill}
                        fillOpacity='0.1' />
                )}
            </g>
        )
    }
}
SparklinesBars.propTypes = {
    points: React.PropTypes.array
};


class Sparklines extends React.Component {

    constructor (props) {
        super(props);
    }

    getX(i) {
        return i * 20;
    }

    getY(i) {
        return this.props.data[i];
    }

    lastDirection() {
        console.log('1');
        let data = this.props.data;
        console.log('2');
        if (data.length <= 1) {
            return 0;
        }
        console.log('3');
        let diff = data[data.length - 1] - data[data.length - 2];
        console.log(diff, diff ? diff < 0 ? -1 : 1 : 0);
        return diff ? diff < 0 ? -1 : 1 : 0;
    }

    render() {

        let { data, limit } = this.props;

        if (!data || data.length === 0) {
            return;
        }

        if (limit && limit < data.length) {
            data = data.slice(data.length - limit);
        }

        let points = data.map((d, i) => {
            return {
                x: this.getX(i),
                y: this.getY(i)
            }
        });

        let lastSpotColors = {
            '-1': 'red',
            '0': 'black',
            '1': 'green'
        }

        return (
            <svg preserveAspectRatio="xMinYMin meet">
                {this.props.bars
                    ? <SparklinesBars
                        points={points}
                        stroke={this.props.lineColor}
                        strokeWidth={this.props.lineWidth}
                        fill={this.props.fill} />
                    : <g>
                        <SparklinesLine
                            points={points}
                            stroke={this.props.lineColor}
                            strokeWidth={this.props.lineWidth}
                            fill={this.props.fill} />
                        <circle
                            cx={points[0].x}
                            cy={points[0].y}
                            r={this.props.lineWidth * 3}
                            fill={this.props.endSpotColor} />
                        <circle
                            cx={points[points.length - 1].x}
                            cy={points[points.length - 1].y}
                            r={this.props.lineWidth * 3}
                            fill={this.props.endSpotColor || lastSpotColors[this.lastDirection()] } />
                    </g>
                }
            </svg>
        );
    }
}
Sparklines.propTypes = {
    data: React.PropTypes.array,
    limit: React.PropTypes.number,
    bars: false,
    lineColor: React.PropTypes.string,
    lineWidth: React.PropTypes.number,
    fill: React.PropTypes.string
};
Sparklines.defaultProps = {
    limit: 100,
    lineColor: 'black',
    lineWidth: 1,
    fill: 'red'
};

export default Sparklines;
