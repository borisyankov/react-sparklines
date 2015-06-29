import React from 'react';

class SparklinesBars extends React.Component {
    render() {

        let points = this.props.points;

        return (
            <g>
                {points.map((p, i) =>
                    <rect
                        key={i}
                        x={p.x - 10} y={p.y}
                        width="20" height={50 - p.y}
                        stroke={this.props.stroke}
                        strokeWidth={this.props.strokeWidth}
                        fill={this.props.fill}
                        fillOpacity='0.1' />
                )}
            </g>
        )
    }
}
SparklinesBars.propTypes = {
    points: React.PropTypes.array
};

export default SparklinesBars;
