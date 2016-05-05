import React from 'react';
import * as dataProcessing from './dataProcessing';

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

        const { points, margin, type, style, value } = this.props;

        const ypoints = points.map(p => p.y);
        const y = type == 'custom' ? value : dataProcessing[type](ypoints);

        return (
            <line
                x1={points[0].x} y1={y + margin}
                x2={points[points.length - 1].x} y2={y + margin}
                style={style} />
        )
    }
}
