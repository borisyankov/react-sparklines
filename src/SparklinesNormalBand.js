import React from 'react';
import DataProcessor from './DataProcessor';

export default class SparklinesNormalBand extends React.Component {

    static propTypes = {
        style: React.PropTypes.object
    };

    static defaultProps = {
        style: { fill: 'red', fillOpacity: .1 }
    };

    render() {

        const { points, margin, style } = this.props;

        const ypoints = points.map(p => p.y);
        const mean = DataProcessor.calculateFromData(ypoints, 'mean');
        const stdev = DataProcessor.calculateFromData(ypoints, 'stdev');

        return (
            <rect x={points[0].x} y={mean - stdev + margin}
                width={points[points.length - 1].x - points[0].x} height={stdev * 2}
                style={style} />
        )
    }
}
