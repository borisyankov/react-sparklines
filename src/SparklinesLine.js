import React from 'react';

class SparklinesLine extends React.Component {

    render() {
        let { points, width, height, margin, color, style } = this.props;

        let linePoints = points
            .map((p) => [p.x, p.y])
            .reduce((a, b) => a.concat(b));
        let closePolyPoints = [
            points[points.length - 1].x, height - margin,
            margin, height - margin,
            margin, points[0].y
        ];
        let fillPoints = linePoints.concat(closePolyPoints);

        let lineStyle = {
            stroke: color || style.stroke || 'slategray',
            strokeWidth: style.strokeWidth || '1',
            strokeLinejoin: style.strokeLinejoin || 'round',
            strokeLinecap: style.strokeLinecap || 'round',
            fill: 'none'
        };
        let fillStyle = {
            stroke: style.stroke || 'none',
            strokeWidth: '0',
            fillOpacity: style.fillOpacity || '.1',
            fill: color || style.fill || 'slategray'
        };

        return (
            <g>
                <polyline points={fillPoints.join(' ')} style={fillStyle} />
                <polyline points={linePoints.join(' ')} style={lineStyle} />
            </g>
        )
    }
}
SparklinesLine.propTypes = {
    color: React.PropTypes.string,
    style: React.PropTypes.object
};
SparklinesLine.defaultProps = {
    style: {}
}

export default SparklinesLine;
