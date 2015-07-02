import React from 'react';

class SparklinesBars extends React.Component {

    render() {

        let { points, width, height } = this.props;

        return (
            <g>
                {points.map((p, i) =>
                    <rect
                        key={i}
                        x={p.x - 10} y={p.y}
                        width="10" height={100 - p.y}
                        stroke={this.props.color}
                        strokeWidth={this.props.strokeWidth}
                        fill={this.props.fill}
                        fillOpacity='0.1' />
                )}
            </g>
        )
    }
}
SparklinesBars.propTypes = {
    points: React.PropTypes.array,
    width: React.PropTypes.number,
    height: React.PropTypes.number
};
SparklinesBars.defaultProps = {
    points: []
};

export default SparklinesBars;
