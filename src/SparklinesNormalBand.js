import React from 'react';
import DataProcessor from './DataProcessor';

class SparklinesNormalBand extends React.Component {

    render() {

        let { points, margin, type, style } = this.props;

        let ypoints = points.map(p => p.y);
        let mean = DataProcessor.calculateFromData(ypoints, 'mean');
        let stdev = DataProcessor.calculateFromData(ypoints, 'stdev');

        return (
            <rect x={points[0].x} y={mean - stdev + margin}
                width={points[points.length - 1].x - points[0].x} height={stdev * 2}
                style={style} />
        )
    }
}
SparklinesNormalBand.propTypes = {
    type: React.PropTypes.string,
    style: React.PropTypes.object
};
SparklinesNormalBand.defaultProps = {
    points: [],
    style: { fill: 'red', fillOpacity: .1 }
};

export default SparklinesNormalBand;
