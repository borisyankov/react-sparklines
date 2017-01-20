import React from 'react';

export default class SparklinesText extends React.Component {

    static propTypes = {
      text: React.PropTypes.string,
      point: React.PropTypes.object,
      fontSize: React.PropTypes.number,
      fontFamily: React.PropTypes.string
    };

    static defaultProps = {
        text: '',
        point: { x: 0, y: 0 }
    };

    render() {
        const { point, text, fontSize, fontFamily } = this.props;
        const { x, y } = point;
        return (
            <g>
              <text x={ x } y={ y } fontFamily={fontFamily || "Verdana"} fontSize={fontSize || 10}>
                { text }
              </text>
            </g>
        )
    }
}
