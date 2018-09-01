import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

class Spot extends PureComponent {
  render() {
    return (
      <circle cx={this.props.cx} cy={this.props.cy} r={2}/>
    )
  }
}

class Cursor extends PureComponent {
  render() {
    return (
      <line x1={this.props.x1} x2={this.props.x2} y1={0} y2={this.props.height} style={{strokeWidth: 1, stroke: "red"}}/>
    )
  }
}

const offscreen = -1000

class SparklinesInteractiveLayer extends PureComponent {

  static propTypes = {
    points: PropTypes.arrayOf(PropTypes.object),
    height: PropTypes.number,
    width: PropTypes.number,
    onMouseMove: PropTypes.func,
    onMouseLeave: PropTypes.func,
    onClick: PropTypes.func,
  };

  static defaultProps = {
    onMouseMove: () => {},
    onMouseLeave: () => {},
    onClick: () => {}
  };

  constructor(props) {
    super(props);
    this.state = {
      cx: offscreen,
      cy: offscreen,
      isActive: false
    }
  }

  onMouseMove = (datapoints, width) => {
    const lastItemIndex = datapoints[datapoints.length - 1]
    return ((event) => {
      if (this.state.isActive) {
        return;
      }
      
      const mouseX = Math.floor(event.nativeEvent.offsetX/(this.rectWidth/width));
      
      let pointIndex = 0
      let nextDataPoint = datapoints.find(entry => {
        const match = entry.x >= mouseX;
        if (match && !pointIndex) {
          return match;
        }
        pointIndex = pointIndex + 1;
        return match;
      });


      if (!nextDataPoint) {
        nextDataPoint = datapoints[lastItemIndex];
      }

      let previousDataPoint = datapoints[datapoints.indexOf(nextDataPoint) - 1];
      let currentDataPoint;
      let halfway;

      if (previousDataPoint) {
        halfway = previousDataPoint.x + ((nextDataPoint.x - previousDataPoint.x) / 2);
        currentDataPoint = mouseX >= halfway ? nextDataPoint : previousDataPoint;
      } else {
        currentDataPoint = nextDataPoint;
      }

      if (!currentDataPoint) return;

      const x = currentDataPoint.x;
      const y = currentDataPoint.y;

      this.setState({ cx: x, cy: y });
      this.props.onMouseMove(currentDataPoint, Math.max(0, pointIndex - 1), event.nativeEvent.offsetX, event.nativeEvent.offsetY)
    })
  }

  onMouseLeave = () => {
    if (this.state.isActive) {
      return;
    }

    this.setState({ cx: offscreen, cy: offscreen });
    this.props.onMouseLeave();
  }

  onClick = () => {
    this.setState((prevState) => {
      return { isActive: !prevState.isActive };
    });
  }

  componentDidMount() {
    this.rectWidth = this.rect.getBoundingClientRect().width
  }

  render() {
    const { height, width, points, style } = this.props;
    const { cx, cy } = this.state;
    return (
      <React.Fragment>
        <Spot cx={cx} cy={cy}/>
        <Cursor x1={cx} x2={cx} height={height}/>
        <rect
          ref={((_ref) => {this.rect = _ref})}
          height={height}
          width={width}
          style={{fill: 'transparent', stroke: 'transparent', ...style}}
          onMouseMove={this.onMouseMove(points, width)}
          onMouseLeave={this.onMouseLeave}
          onClick={this.onClick}
        />
      </React.Fragment>
    )
  }
}


export default SparklinesInteractiveLayer;