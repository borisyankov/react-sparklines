import React from 'react';
import SparklinesLine from './SparklinesLine';
import SparklinesBars from './SparklinesBars';
import SparklinesSpots from './SparklinesSpots';
import SparklinesReferenceLine from './SparklinesReferenceLine';
import SparklinesNormalBand from './SparklinesNormalBand';

import DataProcessor from './DataProcessor';

class Sparklines extends React.Component {

    constructor (props) {
        super(props);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.data.some((d, i) => d !== this.props.data[i]);
    }

    render() {

        let { data, limit, width, height, margin  } = this.props;

        let points = DataProcessor.dataToPoints(data, limit, width, height, margin);

        return (
            <svg width={width} height={height} preserveAspectRatio="xMinYMin meet">
                {
                    React.Children.map(this.props.children, function(child) {
                        return React.cloneElement(child, { points, width, height, margin });
                    })
                }
            </svg>
        );
    }
}
Sparklines.propTypes = {
    data: React.PropTypes.array,
    limit: React.PropTypes.number,
    width: React.PropTypes.number,
    height: React.PropTypes.number,
    margin: React.PropTypes.number
};
Sparklines.defaultProps = {
    data: [],
    width: 120,
    height: 30,
    margin: 2
};

export { Sparklines, SparklinesLine, SparklinesBars, SparklinesSpots, SparklinesReferenceLine, SparklinesNormalBand }
