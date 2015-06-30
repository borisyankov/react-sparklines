import React from 'react';
import SparklinesLine from './SparklinesLine';
import SparklinesBars from './SparklinesBars';
import SparklinesSpots from './SparklinesSpots';


class Sparklines extends React.Component {

    constructor (props) {
        super(props);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.data.some((d, index) => d !== this.props.data[index]);
    }

    render() {

        let { data, limit } = this.props;

        if (!data || data.length === 0) {
            return;
        }

        if (limit && limit < data.length) {
            data = data.slice(data.length - limit);
        }

        let points = data.map((d, i) => {
            return {
                x: i * 20,
                y: 100 - data[i]
            }
        });

        return (
            <svg preserveAspectRatio="xMinYMin meet">
                {this.props.bars
                    ? <SparklinesBars
                        points={points}
                        color={this.props.color}
                        strokeWidth={this.props.lineWidth}
                        fill={this.props.fill} />
                    : <g>
                        <SparklinesLine
                            points={points}
                            color={this.props.color}
                            strokeWidth={this.props.lineWidth}
                            fill={this.props.fill} />
                        <SparklinesSpots
                            points={points}
                            size={this.props.lineWidth * 3}
                            color={this.props.endSpotColor} />
                    </g>
                }
            </svg>
        );
    }
}
Sparklines.propTypes = {
    data: React.PropTypes.array,
    limit: React.PropTypes.number,
    bars: false,
    color: React.PropTypes.string,
    lineWidth: React.PropTypes.number,
    fill: React.PropTypes.string
};
Sparklines.defaultProps = {
    limit: 100,
    color: 'black',
    lineWidth: 1,
    fill: 'transparent'
};

export default Sparklines;
