import React from 'react';
import * from '../src/Sparklines';

class Examples extends React.Component {

    randomData() {
        return Array.apply(0, Array(30)).map(() => Math.random() * 100);
    }

    updater() {
        this.setState({
            data: this.state.data.concat([Math.random() * 100])
        });
        setTimeout(() => this.updater(), 100);
    }

    constructor(props) {
        super(props);

        this.state = { data: [0] };
    }

    componentDidMount() {
        setTimeout(() => this.updater(), 100);
    }

    render() {

        let sampleData = [23.88, 23.68, 24.35, 24.4, 24.39, 24.67, 24.52, 24.75, 24.41, 24.34, 24.18, 24.07, 24.33, 24.21, 24.33, 24.6];

        return (
            <div>
                <h2>Static</h2>

                <Sparklines data={sampleData}>
                    <SparklinesLine />
                    <SparklinesSpots />
                </Sparklines>

                <h2>Customizable</h2>
                <Sparklines data={sampleData}>
                    <SparklinesLine color="#1c8cdc" fill="#1c8cdc" />
                    <SparklinesSpots color="#1c8cdc" endSpotColor="#1c8cdc" />
                </Sparklines>
                <Sparklines data={sampleData}>
                    <SparklinesLine color="#fa7e17" fill="#fa7e17" />
                </Sparklines>
                <br />
                <Sparklines data={sampleData}>
                    <SparklinesLine color="#ea485c" fill="#ea485c" />
                </Sparklines>
                <Sparklines data={sampleData}>
                    <SparklinesLine color="#56b45d" fill="#56b45d" />
                </Sparklines>
                <br />
                <Sparklines data={sampleData}>
                    <SparklinesLine color="#8e44af" fill="#8e44af"/>
                </Sparklines>
                <Sparklines data={sampleData}>
                    <SparklinesLine color="#253e56" fill="#253e56" />
                </Sparklines>

                <h2>Bars</h2>
                <Sparklines data={sampleData}>
                    <SparklinesBars color="transparent" fill="#41c3f9" />
                </Sparklines>
                <Sparklines data={sampleData}>
                    <SparklinesLine fill="#41c3f9" />
                    <SparklinesBars color="transparent" fill="#41c3f9" />
                </Sparklines>

                <h2>Dynamic</h2>
                <Sparklines data={this.state.data}  limit={20}>
                    <SparklinesLine color="#1c8cdc" fill="#1c8cdc" />
                    <SparklinesSpots />
                </Sparklines>
                <Sparklines data={this.state.data}  limit={20}>
                    <SparklinesBars color="transparent" fill="#56b45d" />
                    <SparklinesLine color="#1c8cdc" />
                    <SparklinesSpots />
                </Sparklines>
                <Sparklines data={this.state.data} limit={20}>
                    <SparklinesLine color="#8e44af" fill="#8e44af" fillOpacity="1"/>
                </Sparklines>
                <Sparklines data={this.state.data} limit={10} >
                    <SparklinesBars color="#0a83d8" fill="#0a83d8" />
                </Sparklines>

                <h2>Reference Line</h2>
                <Sparklines data={sampleData}>
                    <SparklinesLine />
                    <SparklinesReferenceLine type="max" />
                </Sparklines>
                <Sparklines data={sampleData}>
                    <SparklinesLine />
                    <SparklinesReferenceLine type="min" />
                </Sparklines>
                <Sparklines data={sampleData}>
                    <SparklinesLine />
                    <SparklinesReferenceLine type="mean" />
                </Sparklines>
                <Sparklines data={sampleData}>
                    <SparklinesLine />
                    <SparklinesReferenceLine type="avg" />
                </Sparklines>
                <Sparklines data={sampleData}>
                    <SparklinesLine />
                    <SparklinesReferenceLine type="median" />
                </Sparklines>
                <Sparklines data={sampleData}>
                    <SparklinesBars />
                    <SparklinesReferenceLine />
                </Sparklines>

                <h2>Normal Band</h2>
                <Sparklines data={sampleData}>
                    <SparklinesLine />
                    <SparklinesNormalBand />
                </Sparklines>
                <Sparklines data={sampleData}>
                    <SparklinesLine />
                    <SparklinesNormalBand />
                    <SparklinesReferenceLine type="mean" />
                </Sparklines>
            </div>
        );
    }
}

React.render(<Examples />, document.body);
