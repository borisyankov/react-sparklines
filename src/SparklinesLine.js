import React from 'react';
import DataProcessor from './DataProcessor';

function SparklinesLineSegment({points, width, height, margin, color, style}) {
    if (!style)
        style = {};

    const linePoints = points
        .map((p) => [p.x, p.y])
        .reduce((a, b) => a.concat(b));
    const closePolyPoints = [
        points[points.length - 1].x, height - margin,
        points[0].x, height - margin,
        points[0].x, points[0].y
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

export default class SparklinesLine extends React.Component {

    static propTypes = {
        color: React.PropTypes.string,
        style: React.PropTypes.object
    };

    static defaultProps = {
        style: {}
    };

    render() {
        const { points, height, margin, color, style } = this.props;
        return (
            <g>
                {DataProcessor.pointsToSegments(points)
                .filter(segment => !segment.isGap)
                .map((segment, i) => (
                    <SparklinesLineSegment
                        key={i}
                        points={segment.points}
                        height={height}
                        margin={margin}
                        color={color}
                        style={style} />)
                )}
            </g>
        );
    }
}
