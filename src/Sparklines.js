import React from 'react';
import SparklinesLine from './SparklinesLine';
import SparklinesBars from './SparklinesBars';
import SparklinesSpots from './SparklinesSpots';
import SparklinesReferenceLine from './SparklinesReferenceLine';
import DataProcessor from './DataProcessor';

class Sparklines extends React.Component {

    constructor (props) {
        super(props);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.data.some((d, i) => d !== this.props.data[i]);
    }

    render() {

        let { width, height, data, limit } = this.props;

        let points = DataProcessor.dataToPoints(data, width, height, limit);

        return (
            <svg width={width} height={height} preserveAspectRatio="xMinYMin meet">
                { React.Children.map(this.props.children, function(child) {
                    return React.cloneElement(child, { points, width, height });
                })}
            </svg>
        );
    }
}
Sparklines.propTypes = {
    width: React.PropTypes.number,
    height: React.PropTypes.number
};
Sparklines.defaultProps = {
    width: 120,
    height: 30
};

export { Sparklines, SparklinesLine, SparklinesBars, SparklinesSpots, SparklinesReferenceLine }
