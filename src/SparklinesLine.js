import React from 'react';
import * as defaults from './defaults';
import SparklinesSegmentContainer from './SparklinesSegmentContainer';

function SparklinesLineSegment({points, width, height, margin, color, style}) {
    if (!style)
        style = {};

    const linePoints = points
        .map((p) => [p.x, p.y])
        .reduce((a, b) => a.concat(b));
    const closePolyPoints = [
        points[points.length - 1].x, height - margin,
        points[0].x, height - margin,
        points[0].x, points[0].y
    ];
    const fillPoints = linePoints.concat(closePolyPoints);

    const lineStyle = defaults.getLineStyle({color, style});

    const fillStyle = defaults.getFillStyle({color, style});

    return (
        <g>
            <polyline points={fillPoints.join(' ')} style={fillStyle} />
            <polyline points={linePoints.join(' ')} style={lineStyle} />
        </g>
    )
}

export default class SparklinesLine extends React.Component {

    static propTypes = {
        color: React.PropTypes.string,
        style: React.PropTypes.object
    };

    static defaultProps = {
        style: {}
    };

    render() {
        return (<SparklinesSegmentContainer {...this.props}>
                    <SparklinesLineSegment />
                </SparklinesSegmentContainer>);
    }
}