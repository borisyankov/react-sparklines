import React from 'react';

class SparklinesLine extends React.Component {

    render() {

        let { points, width, height, margin, color, strokeWidth, fill, fillOpacity } = this.props;

        let linePoints = points
            .map((p) => [p.x, p.y])
            .reduce((a, b) => a.concat(b));
        let fillPoints = linePoints.concat([points[points.length - 1].x, height, margin, height, margin, points[0].y]);

        return (
            <g>
                <polyline points={fillPoints.join(' ')}
                    stroke='none'
                    fill={fill}
                    fillOpacity={fillOpacity} />
                <polyline points={linePoints.join(' ')}
                    stroke={color}
                    strokeWidth={strokeWidth}
                    strokeLinejoin='round'
                    style={{strokeLinejoin: 'round', strokeLinecap: 'round'}}
                    fill='none' />
            </g>
        )
    }
}
SparklinesLine.propTypes = {
    width: React.PropTypes.number,
    height: React.PropTypes.number,
    data: React.PropTypes.array,
    color: React.PropTypes.string,
    strokeWidth: React.PropTypes.number,
    fill: React.PropTypes.string,
    fillOpacity: React.PropTypes.string
};
SparklinesLine.defaultProps = {
    points: [],
    style: { stroke: 'grey' },
    color: 'slategray',
    strokeWidth: 1,
    fill: 'transparent',
    fillOpacity: .1
};

export default SparklinesLine;
