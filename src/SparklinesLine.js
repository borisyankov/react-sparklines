import React from 'react';
import DataProcessor from './DataProcessor';

class SparklinesLine extends React.Component {

    render() {

        let { width, height, data, limit } = this.props;

        let points = DataProcessor.dataToPoints(data, width, height, limit);

        let linePoints = points
            .map((p) => [p.x, p.y])
            .reduce((a, b) => a.concat(b));
        let fillPoints = linePoints.concat([points[points.length - 1].x, 10000, 0, 10000, 0, points[0].y]);

        return (
            <g>
                <polyline points={fillPoints.join(' ')}
                    stroke='none'
                    fill={this.props.fill}
                    fillOpacity='0.1' />
                <polyline points={linePoints.join(' ')}
                    stroke={this.props.color}
                    strokeWidth='1'
                    strokeLinejoin='round'
                    style={{strokeLinejoin: 'round'}}
                    fill='none' />
            </g>
        )
    }
}
SparklinesLine.propTypes = {
    width: React.PropTypes.number,
    height: React.PropTypes.number,
    data: React.PropTypes.array,
    color: React.PropTypes.string,
    fill: React.PropTypes.string
};
SparklinesLine.defaultProps = {
    width: 120,
    height: 30,
    data: [],
    color: 'black',
    fill: 'transparent'
};

export default SparklinesLine;
