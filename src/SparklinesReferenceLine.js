import PropTypes from 'prop-types';
import React from 'react';
import * as dataProcessing from './dataProcessing';

export default class SparklinesReferenceLine extends React.Component {

    static propTypes = {
        type: PropTypes.oneOf(['max', 'min', 'mean', 'avg', 'median', 'custom']),
        value: PropTypes.number,
        style: PropTypes.object
    };

    static defaultProps = {
        type: 'mean',
        style: { stroke: 'red', strokeOpacity: .75, strokeDasharray: '2, 2' }
    };

    render() {

        const { points, margin, type, style, value, width = 1, height = 1, max, min } = this.props;

        const ypoints = points.map(p => p.y);

        const y = type == 'custom' ? valueToY(value, height, margin, max, min) : dataProcessing[type](ypoints);

        return (
            <line
                x1={points[0].x} y1={y}
                x2={points[points.length - 1].x} y2={y}
                style={style} />
        )
    }
}

function valueToY(value, height, margin, max, min) {
    const vfactor = (height - margin * 2) / ((max - min) || 2);
    return (max === min ? 1 : (max - value)) * vfactor + margin;
}