import React from 'react';
import DataProcessor from './DataProcessor';

class SparklinesReferenceLine extends React.Component {

    render() {

        let { points, type, style } = this.props;

        let ypoints = points.map(p => p.y);
        let y = DataProcessor.calculateFromData(ypoints, type);

        console.log(DataProcessor.calculateFromData([2, 3, 4, 6, 2, 5, 7, 2, 4, 5, 99], 'variance'))

        return (
            <line
                x1={points[0].x} y1={y}
                x2={points[points.length - 1].x} y2={y}
                style={style} />
        )
    }
}
SparklinesReferenceLine.propTypes = {
    points: React.PropTypes.array,
    type: React.PropTypes.string,
    style: React.PropTypes.object
};
SparklinesReferenceLine.defaultProps = {
    points: [],
    type: 'mean',
    style: { stroke: 'red', strokeOpacity: .75, strokeDasharray: '2, 2' }
};

export default SparklinesReferenceLine;
