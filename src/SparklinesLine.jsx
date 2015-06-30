import React from 'react';

class SparklinesLine extends React.Component {
    render() {

        let points = this.props.points;
        let linePoints = points
            .map((p) => [p.x, p.y])
            .reduce((a, b) => a.concat(b));
        let fillPoints = linePoints.concat([points[points.length - 1].x, 10000, 0, 10000, 0, points[0].y]);

        return (
            <g>
                <polyline points={fillPoints.join(' ')}
                    stroke='none'
                    fill={this.props.fill}
                    fillOpacity='0.1' />
                <polyline points={linePoints.join(' ')}
                    stroke={this.props.color}
                    strokeWidth='2'
                    strokeLinejoin='round'
                    fill='none' />
            </g>
        )
    }
}
SparklinesLine.propTypes = {
    points: React.PropTypes.array
};

export default SparklinesLine;
