import React from 'react';

class Sparklines extends React.Component {
    
    constructor (props) {
        super(props);
    }

    render() {

        let { data, limit } = this.props;

        if (!data || data.length === 0) {
            return;
        }

        if (limit && limit < data.length) {
            data = data.slice(data.length - limit);
        }
        return (
            <svg>
                {data.map((p, i) => <line
                                    x1={i * 10} y1={p}
                                    x2={(i + 1) * 10} y2={p}
                                    stroke="black"
                                    stroke-width="2"/>
                )}
            </svg>
        );
    }
}

Sparklines.propTypes = {
    data: React.PropTypes.array,
    limit: React.PropTypes.number
};
Sparklines.defaultProps = {
    data: [],
    limit: 100
};

export default Sparklines;
