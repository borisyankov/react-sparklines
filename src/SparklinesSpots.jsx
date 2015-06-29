import React from 'react';

class SparklinesSpots extends React.Component {

    lastDirection() {
        let points = this.props.points;
        if (points.length < 2) {
            return 0;
        }
        return Math.sign(points[points.length - 1].y - points[points.length - 2].y);
    }

    render() {

        let points = this.props.points;

        let lastSpotColors = {
            '-1': 'red',
            '0': this.props.color,
            '1': 'green'
        }

        return (
            <g>
                <circle
                    cx={points[0].x}
                    cy={points[0].y}
                    r={this.props.size}
                    fill={this.props.endSpotColor} />
                <circle
                    cx={points[points.length - 1].x}
                    cy={points[points.length - 1].y}
                    r={this.props.size}
                    fill={this.props.endSpotColor || lastSpotColors[this.lastDirection()] } />
            </g>
        )
    }
}
SparklinesSpots.propTypes = {
    points: React.PropTypes.array
};

export default SparklinesSpots;
