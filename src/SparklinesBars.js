import React from 'react';

class SparklinesBars extends React.Component {

    render() {

        let { points, width, height, margin, style } = this.props;
        let barWidth = points.length >= 2 ? points[1].x - points[0].x : 0;

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
SparklinesBars.propTypes = {
    style: React.PropTypes.object
};
SparklinesBars.defaultProps = {
    style: { fill: 'slategray' }
};

export default SparklinesBars;
