import PropTypes from 'prop-types';
import React from 'react';

export default class SparklinesLine extends React.Component {
  static propTypes = {
    color: PropTypes.string,
    style: PropTypes.object,
  };

  static defaultProps = {
    style: {},
    onMouseMove: () => {},
  };

  render() {
    const { data, points, width, height, margin, color, style, onMouseMove } = this.props;

    const linePoints = points.map(p => [p.x, p.y]).reduce((a, b) => a.concat(b));

    const closePolyPoints = [
      points[points.length - 1].x,
      height - margin,
      margin,
      height - margin,
      margin,
      points[0].y,
    ];

    const fillPoints = linePoints.concat(closePolyPoints);

    const lineStyle = {
      stroke: color || style.stroke || 'slategray',
      strokeWidth: style.strokeWidth || '1',
      strokeLinejoin: style.strokeLinejoin || 'round',
      strokeLinecap: style.strokeLinecap || 'round',
      fill: 'none',
    };
    const fillStyle = {
      stroke: style.stroke || 'none',
      strokeWidth: '0',
      fillOpacity: style.fillOpacity || '.1',
      fill: style.fill || color || 'slategray',
      pointerEvents: 'auto',
    };

    const tooltips = points.map((p, i) => {
      return (
        <circle
          key={i}
          cx={p.x}
          cy={p.y}
          r={2}
          style={fillStyle}
          onMouseEnter={e => onMouseMove('enter', data[i], p)}
          onClick={e => onMouseMove('click', data[i], p)}
        />
      );
    });

    return (
      <g>
        {tooltips}
        <polyline points={fillPoints.join(' ')} style={fillStyle} />
        <polyline points={linePoints.join(' ')} style={lineStyle} />
      </g>
    );
  }
}
