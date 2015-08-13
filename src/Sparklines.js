import React from 'react';
import SparklinesLine from './SparklinesLine';
import SparklinesBars from './SparklinesBars';
import SparklinesSpots from './SparklinesSpots';
import SparklinesReferenceLine from './SparklinesReferenceLine';
import SparklinesNormalBand from './SparklinesNormalBand';
import DataProcessor from './DataProcessor';

class Sparklines extends React.Component {

    static propTypes = {
        data: React.PropTypes.array,
        limit: React.PropTypes.number,
        width: React.PropTypes.number,
        height: React.PropTypes.number,
        margin: React.PropTypes.number,
        style: React.PropTypes.object
    };

    static defaultProps = {
        data: [],
        width: 120,
        height: 30,
        margin: 2
    };

    constructor (props) {
        super(props);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.data.some((d, i) => d !== this.props.data[i]);
    }

    render() {

        const { data, limit, width, height, margin, style  } = this.props;

        if (data.length === 0) return false;

        const points = DataProcessor.dataToPoints(data, limit, width, height, margin);

        return (
            <svg width={width} height={height} style={style}>
                {
                    React.Children.map(this.props.children, function(child) {
                        return React.cloneElement(child, { points, width, height, margin });
                    })
                }
            </svg>
        );
    }
}

export { Sparklines, SparklinesLine, SparklinesBars, SparklinesSpots, SparklinesReferenceLine, SparklinesNormalBand, DataProcessor }
