import React from 'react';
import DataProcessor from './DataProcessor';

class SparklinesSpots extends React.Component {

    lastDirection(points) {

        if (points.length < 2) {
            return 0;
        }
        return Math.sign(points[points.length - 2].y - points[points.length - 1].y);
    }

    render() {

        let { width, height, data, limit, size, color } = this.props;

        let points = DataProcessor.dataToPoints(data, width, height, limit);

        let lastSpotColors = {
            '-1': 'red',
            '0': this.props.color,
            '1': 'green'
        }

        let startSpot = !this.props.color
            ? {}
            : <circle
                cx={points[0].x}
                cy={points[0].y}
                r={this.props.size}
                fill={this.props.color} />

        let endSpot = <circle
                            cx={points[points.length - 1].x}
                            cy={points[points.length - 1].y}
                            r={size}
                            fill={color || lastSpotColors[this.lastDirection(points)] } />

        return (
            <g>
                {startSpot}
                {endSpot}
            </g>
        )
    }
}
SparklinesSpots.propTypes = {
    width: React.PropTypes.number,
    height: React.PropTypes.number,
    data: React.PropTypes.array,
    size: React.PropTypes.number,
    fill: React.PropTypes.string
};
SparklinesSpots.defaultProps = {
    width: 120,
    height: 30,
    data: [],
    size: 2
};

export default SparklinesSpots;
