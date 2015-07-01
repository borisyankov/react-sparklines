import React from 'react';

class SparklinesReferenceLine extends React.Component {
    
    render() {

        let points = this.props.points;

        return (
            <line
                x1={points[0].x} y1={points[0].y}
                x2={points[points.length - 1].x} y2={points[points.length - 1].y}
                stroke="red" />
        )
    }
}
SparklinesReferenceLine.propTypes = {
    points: React.PropTypes.array
};

export default SparklinesReferenceLine;
