import React from 'react';
import Sparklines from '../src/Sparklines';

class Examples extends React.Component {

    randomData() {
        return Array.apply(0, Array(30)).map(() => Math.random() * 100);
    }

    updater() {
        this.setState({
            data: this.state.data.concat([Math.random() * 100])
        });
        setTimeout(() => this.updater(), 300);
    }

    constructor(props) {
        super(props);

        this.state = { data: [20, 30, 15, 40, 18, 35, 22, 28, 33, 55, 14] };
    }

    componentDidMount() {
        setTimeout(() => this.updater(), 300);
    }

    render() {
        return (
            <div>
                <Sparklines data={this.state.data} limit={10} color="#1c8cdc" />
                <Sparklines data={this.state.data} bars={true} limit={10} color="#0a83d8" fill="#0a83d8" endSpotColor="#0a83d8" />
                <Sparklines data={this.state.data} limit={10} color="#fa7e17" fill="#fa7e17" endSpotColor="#fa7e17" />
                <Sparklines data={this.state.data} limit={10} color="#ea485c" fill="#ea485c" endSpotColor="#ea485c" />
                <Sparklines data={this.state.data} limit={10} color="#56b45d" fill="#56b45d" endSpotColor="#56b45d" />
                <Sparklines data={this.state.data} limit={10} color="#8e44af" fill="#8e44af" endSpotColor="#8e44af" />
            </div>
        );
    }
}

React.render(<Examples />, document.body);
