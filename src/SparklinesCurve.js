import React from 'react';
import * as defaults from './defaults';
import SparklinesSegmentContainer from './SparklinesSegmentContainer';

function SparklinesCurveSegment({ points, width, height, margin, color, style, divisor = 0.25 }) {
    let prev;
    const curve = (p) => {
        let res;
        if (!prev) {
            res = [p.x, p.y]
        } else {
            const len = (p.x - prev.x) * divisor;
            res = [ "C",
                //x1
                prev.x + len,
                //y1
                prev.y,
                //x2,
                p.x - len,
                //y2,
                p.y,
                //x,
                p.x,
                //y
                p.y
            ];
        }
        prev = p;
        return res;

    }
    const linePoints = points
        .map((p) => curve(p))
        .reduce((a, b) => a.concat(b));
    const closePolyPoints = [
        "L" + points[points.length - 1].x, height - margin,
        points[0].x, height - margin,
        points[0].x, points[0].y
    ];
    const fillPoints = linePoints.concat(closePolyPoints);

    const lineStyle = defaults.getLineStyle({color, style});

    const fillStyle = defaults.getFillStyle({color, style});

    return (
            <g>
                <path d={"M"+fillPoints.join(' ')} style={fillStyle} />
                <path d={"M"+linePoints.join(' ')} style={lineStyle} />
            </g>
        );
}

export default class SparklinesCurve extends React.Component {

    static propTypes = {
        color: React.PropTypes.string,
        style: React.PropTypes.object
    };

    static defaultProps = {
        style: {}
    };

    render() {
        return (<SparklinesSegmentContainer {...this.props}>
                    <SparklinesCurveSegment />
                </SparklinesSegmentContainer>);
    }
}
