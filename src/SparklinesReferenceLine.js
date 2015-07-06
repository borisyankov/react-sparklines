import React from 'react';
import DataProcessor from './DataProcessor';

class SparklinesReferenceLine extends React.Component {

    static propTypes = {
        type: React.PropTypes.string,
        style: React.PropTypes.object
    };

    static defaultProps = {
        type: 'mean',
        style: { stroke: 'red', strokeOpacity: .75, strokeDasharray: '2, 2' }
    };

    render() {

        const { points, margin, type, style } = this.props;

        const ypoints = points.map(p => p.y);
        const y = DataProcessor.calculateFromData(ypoints, type);

        return (
            <line
                x1={points[0].x} y1={y + margin}
                x2={points[points.length - 1].x} y2={y + margin}
                style={style} />
        )
    }
}

export default SparklinesReferenceLine;
