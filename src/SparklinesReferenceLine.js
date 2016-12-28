import React from 'react';
import * as dataProcessing from './dataProcessing';
import dataToPoints from './dataProcessing/dataToPoints';

export default class SparklinesReferenceLine extends React.Component {

    static propTypes = {
        type: React.PropTypes.oneOf(['max', 'min', 'mean', 'avg', 'median', 'custom']),
        value: React.PropTypes.number,
        style: React.PropTypes.object
    };

    static defaultProps = {
        type: 'mean',
        style: { stroke: 'red', strokeOpacity: .75, strokeDasharray: '2, 2' }
    };

    render() {

        const { points, limit, width, height, margin, max, min, type, style, value } = this.props;

        const ypoints = points.map(p => p.y);
        const data = type == 'custom' ? [value] : dataProcessing[type](ypoints);
        const y = dataToPoints({ data, limit, width, height, margin, max, min })[0].y;

        return (
            <line
                x1={points[0].x} y1={y + margin}
                x2={points[points.length - 1].x} y2={y + margin}
                style={style} />
        )
    }
}
