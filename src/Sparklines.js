import React from 'react';
import SparklinesLine from './SparklinesLine';
import SparklinesCurve from './SparklinesCurve';
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
        style: React.PropTypes.object,
        min: React.PropTypes.number,
        max: React.PropTypes.number
    };

    static defaultProps = {
        data: [],
        width: 240,
        height: 60,
        margin: 2
    };

    constructor (props) {
        super(props);
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.width != this.props.width ||
            nextProps.height != this.props.height ||
            nextProps.margin != this.props.margin ||
            nextProps.min != this.props.min ||
            nextProps.max != this.props.max ||
            nextProps.limit != this.props.limit ||
            nextProps.data.length != this.props.data.length ||
            nextProps.data.some((d, i) => !Object.is(d, this.props.data[i]));
    }

    render() {
        const { data, limit, width, height, margin, style, max, min } = this.props;

        if (data.length === 0) return null;

        const points = DataProcessor.dataToPoints(data, limit, width, height, margin, max, min );

        return (
            <svg width={width} height={height} style={style} viewBox={`0 0 ${width} ${height}`}>
                {
                    React.Children.map(this.props.children, function(child) {
                        return React.cloneElement(child, { points, width, height, margin });
                    })
                }
            </svg>
        );
    }
}

export { Sparklines, SparklinesLine, SparklinesCurve, SparklinesBars, SparklinesSpots, SparklinesReferenceLine, SparklinesNormalBand, DataProcessor }
