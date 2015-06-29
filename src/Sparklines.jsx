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
                    <rect x={p.x - 10} y={p.y} width="20" height={50 - p.y}
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

        return (
            <svg preserveAspectRatio="xMinYMin meet">
                {this.props.bars
                    ? <SparklinesBars points={points}
                        stroke={this.props.lineColor}
                        strokeWidth={this.props.lineWidth}
                        fill={this.props.fill} />
                    : <SparklinesLine points={points}
                        stroke={this.props.lineColor}
                        strokeWidth={this.props.lineWidth}
                        fill={this.props.fill} />
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
