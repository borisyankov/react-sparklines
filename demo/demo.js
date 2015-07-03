import React from 'react';
import { Sparklines, SparklinesBars, SparklinesLine, SparklinesNormalBand, SparklinesReferenceLine, SparklinesSpots } from '../src/Sparklines';

class Examples extends React.Component {

    boxMullerRandom () {
        let phase = false,
            x1, x2, w, z;

        return (function() {

            if (phase = !phase) {
                do {
                    x1 = 2.0 * Math.random() - 1.0;
                    x2 = 2.0 * Math.random() - 1.0;
                    w = x1 * x1 + x2 * x2;
                } while (w >= 1.0);

                w = Math.sqrt((-2.0 * Math.log(w)) / w);
                return x1 * w;
            } else {
                return x2 * w;
            }
        })();
    }

    randomData(n = 30) {
        return Array.apply(0, Array(n)).map(this.boxMullerRandom);
    }

    updater() {
        this.setState({
            data: this.state.data.concat([this.boxMullerRandom()])
        });
        setTimeout(() => this.updater(), 100);
    }

    constructor(props) {
        super(props);

        this.state = { data: [0] };

        this.sampleData = this.randomData(30);
        this.sampleData100 = this.randomData(100);
    }

    componentDidMount() {
        setTimeout(() => this.updater(), 100);
    }

    render() {

        return (
            <div>
                <h2>Static</h2>

                <Sparklines data={this.sampleData}>
                    <SparklinesLine />
                    <SparklinesSpots />
                </Sparklines>
                <Sparklines data={this.sampleData}>
                    <SparklinesLine strokeWidth={3} color="#2e7ff1" />
                </Sparklines>

                <h2>Customizable</h2>
                <Sparklines data={this.sampleData}>
                    <SparklinesLine color="#1c8cdc" fill="#1c8cdc" />
                    <SparklinesSpots color="#1c8cdc" endSpotColor="#1c8cdc" />
                </Sparklines>
                <Sparklines data={this.sampleData}>
                    <SparklinesLine color="#fa7e17" fill="#fa7e17" />
                </Sparklines>
                <br />
                <Sparklines data={this.sampleData}>
                    <SparklinesLine color="#ea485c" fill="#ea485c" />
                </Sparklines>
                <Sparklines data={this.sampleData}>
                    <SparklinesLine color="#56b45d" fill="#56b45d" />
                </Sparklines>
                <br />
                <Sparklines data={this.sampleData}>
                    <SparklinesLine color="#8e44af" fill="#8e44af"/>
                </Sparklines>
                <Sparklines data={this.sampleData}>
                    <SparklinesLine color="#253e56" fill="#253e56" />
                </Sparklines>

                <h2>Bars</h2>
                <Sparklines data={this.sampleData}>
                    <SparklinesBars color="transparent" fill="#41c3f9" />
                </Sparklines>
                <Sparklines data={this.sampleData}>
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
                <Sparklines data={this.sampleData}>
                    <SparklinesLine />
                    <SparklinesReferenceLine type="max" />
                </Sparklines>
                <Sparklines data={this.sampleData}>
                    <SparklinesLine />
                    <SparklinesReferenceLine type="min" />
                </Sparklines>
                <Sparklines data={this.sampleData}>
                    <SparklinesLine />
                    <SparklinesReferenceLine type="mean" />
                </Sparklines>
                <Sparklines data={this.sampleData}>
                    <SparklinesLine />
                    <SparklinesReferenceLine type="avg" />
                </Sparklines>
                <Sparklines data={this.sampleData}>
                    <SparklinesLine />
                    <SparklinesReferenceLine type="median" />
                </Sparklines>
                <Sparklines data={this.sampleData}>
                    <SparklinesBars />
                    <SparklinesReferenceLine />
                </Sparklines>

                <h2>Normal Band</h2>
                <Sparklines data={this.sampleData}>
                    <SparklinesLine />
                    <SparklinesNormalBand />
                </Sparklines>
                <Sparklines data={this.sampleData}>
                    <SparklinesLine />
                    <SparklinesNormalBand />
                    <SparklinesReferenceLine type="mean" />
                </Sparklines>

                <h2>Real world examples</h2>
                <Sparklines data={this.sampleData100} width={200}>
                    <SparklinesLine color="#2991c8"/>
                    <SparklinesSpots />
                    <SparklinesNormalBand style={{fill: '#2991c8', fillOpacity: .1 }} />
                </Sparklines>
            </div>
        );
    }
}

React.render(<Examples />, document.body);
