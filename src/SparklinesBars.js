import React from 'react';

export default class SparklinesBars extends React.Component {

    static propTypes = {
        points: React.PropTypes.arrayOf(React.PropTypes.number).isRequired,
        height: React.PropTypes.number.isRequired,
        style: React.PropTypes.object
    };

    static defaultProps = {
        style: { fill: 'slategray' }
    };

    render() {

        const { points, height, style } = this.props;
        const barWidth = points.length >= 2 ? Math.max(0, points[1].x - points[0].x) : 0;

        return (
            <g>
                {points.map((p, i) =>
                    <rect
                        key={i}
                        x={Math.ceil(p.x)}
                        y={Math.ceil(p.y)}
                        width={Math.ceil(barWidth)}
                        height={Math.ceil(Math.max(0, height - p.y))}
                        style={style} />
                )}
            </g>
        )
    }
}
