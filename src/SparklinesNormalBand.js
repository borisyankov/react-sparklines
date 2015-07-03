import React from 'react';
import DataProcessor from './DataProcessor';

class SparklinesNormalBand extends React.Component {

    render() {

        let { points, type, style } = this.props;

        let ypoints = points.map(p => p.y);
        let mean = DataProcessor.calculateFromData(ypoints, 'mean');
        let stdev = DataProcessor.calculateFromData(ypoints, 'stdev');

        console.log(ypoints, mean, stdev);

        return (
            <rect x={points[0].x} y={mean - stdev}
                width={points[points.length - 1].x - points[0].x} height={stdev * 2}
                style={style} />
        )
    }
}
SparklinesNormalBand.propTypes = {
    points: React.PropTypes.array,
    type: React.PropTypes.string,
    style: React.PropTypes.object
};
SparklinesNormalBand.defaultProps = {
    points: [],
    style: { fill: 'red', fillOpacity: .1 }
};

export default SparklinesNormalBand;
