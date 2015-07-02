import React from 'react';
import DataProcessor from './DataProcessor';

class SparklinesBars extends React.Component {

    render() {

        let { width, height, data, limit } = this.props;

        let points = DataProcessor.dataToPoints(data, width, height, limit);

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
    width: React.PropTypes.number,
    height: React.PropTypes.number,
    data: React.PropTypes.array
};
SparklinesBars.defaultProps = {
    width: 120,
    height: 30,
    data: []
};

export default SparklinesBars;
