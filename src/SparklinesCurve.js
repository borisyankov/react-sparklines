import PropTypes from 'prop-types';
import React from 'react';

export default class SparklinesCurve extends React.Component {

    static propTypes = {
        color: PropTypes.string,
        style: PropTypes.object
    };

    static defaultProps = {
        style: {}
    };

    render() {
        const { points, width, height, margin, color, style, divisor = 0.25 } = this.props;
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
            margin, height - margin,
            margin, points[0].y
        ];
        const fillPoints = linePoints.concat(closePolyPoints);

        const lineStyle = {
            stroke: color || style.stroke || 'slategray',
            strokeWidth: style.strokeWidth || '1',
            strokeLinejoin: style.strokeLinejoin || 'round',
            strokeLinecap: style.strokeLinecap || 'round',
            fill: 'none'
        };
        const fillStyle = {
            stroke: style.stroke || 'none',
            strokeWidth: '0',
            fillOpacity: style.fillOpacity || '.1',
            fill: style.fill || color || 'slategray'
        };

        return (
            <g>
                <path d={"M"+fillPoints.join(' ')} style={fillStyle} />
                <path d={"M"+linePoints.join(' ')} style={lineStyle} />
            </g>
        )
    }
}
