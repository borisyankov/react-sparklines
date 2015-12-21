import React from 'react';

export default class SparklinesLine extends React.Component {

    static propTypes = {
        color: React.PropTypes.string,
        style: React.PropTypes.object
    };

    static defaultProps = {
        style: {}
    };

    render() {
        const { points, width, height, margin, color, style } = this.props;

        const linePoints = points
            .map((p) => [p.x, p.y])
            .reduce((a, b) => a.concat(b));
        const closePolyPoints = [
            points[points.length - 1].x, height - margin,
            margin, height - margin,
            margin, points[0].y
        ];
        const fillPoints = linePoints.concat(closePolyPoints);

        const lineStyle = {
            stroke: color || style.stroke || 'slategray',
            strokeWidth: style.strokeWidth || '1',
            strokeLinejoin: style.strokeLinejoin || 'round',
            strokeLinecap: style.strokeLinecap || 'round',
            fill: 'none'
        };
        const fillStyle = {
            stroke: style.stroke || 'none',
            strokeWidth: '0',
            fillOpacity: style.fillOpacity || '.1',
            fill: style.fill || color || 'slategray'
        };

        return (
            <g>
                <polyline points={fillPoints.join(' ')} style={fillStyle} />
                <polyline points={linePoints.join(' ')} style={lineStyle} />
            </g>
        )
    }
}
