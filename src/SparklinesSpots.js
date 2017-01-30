import React from 'react';

export default class SparklinesSpots extends React.Component {

    static propTypes = {
        size: React.PropTypes.number,
        style: React.PropTypes.object,
        spotColors: React.PropTypes.object
    };

    static defaultProps = {
        size: 2,
        spotColors: {
            '-1': 'red',
            '0': 'black',
            '1': 'green'
        }
    };

    render() {

        const {points, size, style, spotColors, indexes = [0, points.length - 1]} = this.props;

        return (
            <g>{
                indexes.map(index => {
                    if (!points[index]) {
                        return;
                    }

                var direction = points[index -1] ?
                    Math.sign(points[index -1].y - points[index].y) :
                    0;

                return <circle
                    key={index}
                    cx={points[index].x}
                    cy={points[index].y}
                    r={size}
                    style={style || { fill: spotColors[direction] }} />;
                })
            }</g>
        )
    }
}
