import React from 'react';

class SparklinesLine extends React.Component {

    render() {

        let { points, width, height, fill, fillOpacity } = this.props;

        let linePoints = points
            .map((p) => [p.x, p.y])
            .reduce((a, b) => a.concat(b));
        let fillPoints = linePoints.concat([points[points.length - 1].x, 10000, 0, 10000, 0, points[0].y]);

        return (
            <g>
                <polyline points={fillPoints.join(' ')}
                    stroke='none'
                    fill={fill}
                    fillOpacity={fillOpacity} />
                <polyline points={linePoints.join(' ')}
                    stroke={this.props.color}
                    strokeWidth='1'
                    strokeLinejoin='round'
                    style={{strokeLinejoin: 'round'}}
                    fill='none' />
            </g>
        )
    }
}
SparklinesLine.propTypes = {
    width: React.PropTypes.number,
    height: React.PropTypes.number,
    data: React.PropTypes.array,
    style: React.PropTypes.object,
    color: React.PropTypes.string,
    fill: React.PropTypes.string,
    fillOpacity: React.PropTypes.string
};
SparklinesLine.defaultProps = {
    points: [],
    style: { stroke: 'black' },
    color: 'black',
    fill: 'transparent',
    fillOpacity: '0.1'
};

export default SparklinesLine;
