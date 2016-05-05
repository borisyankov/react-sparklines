import React from 'react';
import mean from './dataProcessing/mean';
import stdev from './dataProcessing/stdev';

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
        const dataMean = mean(ypoints);
        const dataStdev = stdev(ypoints);

        return (
            <rect x={points[0].x} y={dataMean - dataStdev + margin}
                width={points[points.length - 1].x - points[0].x} height={stdev * 2}
                style={style} />
        )
    }
}
