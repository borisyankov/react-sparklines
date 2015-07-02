import React from 'react';

class SparklinesBars extends React.Component {

    render() {

        let { points, width, height, color, fill, strokeWidth } = this.props;

        return (
            <g>
                {points.map((p, i) =>
                    <rect
                        key={i}
                        x={p.x - 10} y={p.y}
                        width="10" height={100 - p.y}
                        stroke={color}
                        strokeWidth={strokeWidth}
                        fill={fill}
                        fillOpacity='0.1' />
                )}
            </g>
        )
    }
}
SparklinesBars.propTypes = {
    points: React.PropTypes.array.required,
    width: React.PropTypes.number,
    height: React.PropTypes.number,
    color: React.PropTypes.string,
    fill: React.PropTypes.string,
    strokeWidth: React.PropTypes.string
};
SparklinesBars.defaultProps = {
    points: []
};

export default SparklinesBars;
