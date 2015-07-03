import React from 'react';
import DataProcessor from './DataProcessor';

class SparklinesReferenceLine extends React.Component {

    render() {

        let { points, type, style } = this.props;

        let ypoints = points.map(p => p.y);
        let y = DataProcessor.calculateFromData(ypoints, type);
        
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
