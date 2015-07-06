import React from 'react';

class SparklinesBars extends React.Component {

    static propTypes = {
        style: React.PropTypes.object
    };

    static defaultProps = {
        style: { fill: 'slategray' }
    };

    render() {

        const { points, width, height, margin, style } = this.props;
        const barWidth = points.length >= 2 ? points[1].x - points[0].x : 0;

        return (
            <g>
                {points.map((p, i) =>
                    <rect
                        key={i}
                        x={p.x} y={p.y}
                        width={barWidth} height={height - p.y}
                        style={style} />
                )}
            </g>
        )
    }
}

export default SparklinesBars;
