import React from 'react';

export default class SparklinesBars extends React.Component {

    static propTypes = {
        points: React.PropTypes.arrayOf(React.PropTypes.object),
        height: React.PropTypes.number,
        style: React.PropTypes.object,
        barWidth: React.PropTypes.number
    };

    static defaultProps = {
        style: { fill: 'slategray' }
    };

    render() {

        const { points, height, style, barWidth } = this.props;
        const strokeWidth = 1 * ((style && style.strokeWidth) || 0);
        const width = barWidth || (points && points.length >= 2 ? Math.ceil(Math.max(0, points[1].x - points[0].x - strokeWidth)) : 0);

        return (
            <g>
                {points.map((p, i) =>
                    <rect
                        key={i}
                        x={Math.ceil(p.x - strokeWidth * i)}
                        y={Math.ceil(p.y)}
                        width={Math.ceil(width)}
                        height={Math.ceil(Math.max(0, height - p.y))}
                        style={style} />
                )}
            </g>
        )
    }
}
