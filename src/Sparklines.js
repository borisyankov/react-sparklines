import React from 'react';
import SparklinesLine from './SparklinesLine';
import SparklinesBars from './SparklinesBars';
import SparklinesSpots from './SparklinesSpots';
import SparklinesReferenceLine from './SparklinesReferenceLine';

class Sparklines extends React.Component {

    constructor (props) {
        super(props);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.data.some((d, i) => d !== this.props.data[i]);
    }

    render() {

        let { width, height, data } = this.props;

        return (
            <svg width={width} height={height} data={data} preserveAspectRatio="xMinYMin meet">
                {this.props.children}
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
