import React from 'react';

class SparklinesSpots extends React.Component {

    lastDirection(points) {

        return points.length < 2
            ? 0
            : Math.sign(points[points.length - 2].y - points[points.length - 1].y);
    }

    render() {

        let { points, width, height, size, style, spotColors } = this.props;

        let startSpot = <circle
                            cx={points[0].x}
                            cy={points[0].y}
                            r={size}
                            style={style} />

        let endSpot = <circle
                            cx={points[points.length - 1].x}
                            cy={points[points.length - 1].y}
                            r={size}
                            style={style || { fill: spotColors[this.lastDirection(points)] }} />

        return (
            <g>
                {style ? startSpot : {}}
                {endSpot}
            </g>
        )
    }
}
SparklinesSpots.propTypes = {
    size: React.PropTypes.number,
    style: React.PropTypes.object,
    spotColors: React.PropTypes.object
};
SparklinesSpots.defaultProps = {
    size: 2,
    spotColors: {
        '-1': 'red',
        '0': 'black',
        '1': 'green'
    }
};

export default SparklinesSpots;
