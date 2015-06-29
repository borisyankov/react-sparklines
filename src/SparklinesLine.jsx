import React from 'react';

class SparklinesLine extends React.Component {
    render() {

        let points = this.props.points;
        let svgPath = 'M' + points[0].x + ' ' + points[0].y +
            points.map((p, i) => ' L ' + points[i].x + ' ' + points[i].y) +
            ' L' + points[points.length - 1].x + ' 10000 L0 10000 L0 ' + points[0].y;

        return (
            <path d={svgPath}
                stroke={this.props.stroke}
                strokeWidth={this.props.strokeWidth}
                fill={this.props.fill}
                fillOpacity='0.1' />
        )
    }
}
SparklinesLine.propTypes = {
    points: React.PropTypes.array
};

export default SparklinesLine;
