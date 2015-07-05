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
                <h1>React Sparklines</h1>
                <h2>Static</h2>
                <Sparklines data={this.sampleData}>
                    <SparklinesLine style={{ fill: "none" }} />
                </Sparklines>
                <Sparklines data={this.sampleData}>
                    <SparklinesLine style={{ strokeWidth: 3, stroke: "#2e7ff1", fill: "none" }} />
                </Sparklines>

                <h2>Customizable</h2>
                <Sparklines data={this.sampleData}>
                    <SparklinesLine color="#1c8cdc" />
                </Sparklines>
                <Sparklines data={this.sampleData}>
                    <SparklinesLine color="#fa7e17" />
                </Sparklines>
                <br />
                <Sparklines data={this.sampleData}>
                    <SparklinesLine color="#ea485c" />
                </Sparklines>
                <Sparklines data={this.sampleData}>
                    <SparklinesLine color="#56b45d" />
                </Sparklines>
                <br />
                <Sparklines data={this.sampleData}>
                    <SparklinesLine color="#8e44af"/>
                </Sparklines>
                <Sparklines data={this.sampleData}>
                    <SparklinesLine color="#253e56" />
                </Sparklines>

                <h2>Spots</h2>
                <Sparklines data={this.sampleData}>
                    <SparklinesLine style={{ fill: "none" }} />
                    <SparklinesSpots />
                </Sparklines>
                <Sparklines data={this.sampleData}>
                    <SparklinesLine color="#56b45d" />
                    <SparklinesSpots style={{ fill: "#56b45d" }} />
                </Sparklines>
                <Sparklines data={this.sampleData} margin={6}>
                    <SparklinesLine style={{ strokeWidth: 3, stroke: "#2e7ff1", fill: "none" }} />
                    <SparklinesSpots size={4} style={{ stroke: "#2e7ff1", strokeWidth: 3, fill: "white" }} />
                </Sparklines>

                <h2>Bars</h2>
                <Sparklines data={this.sampleData}>
                    <SparklinesBars style={{ fill: "#41c3f9" }} />
                </Sparklines>
                <Sparklines data={this.sampleData}>
                    <SparklinesBars style={{ stroke: "white", fill: "#41c3f9", fillOpacity: ".25" }} />
                    <SparklinesLine style={{ stroke: "#41c3f9", fill: "none" }} />
                </Sparklines>

                <h2>Dynamic</h2>
                <Sparklines data={this.state.data}  limit={20}>
                    <SparklinesLine color="#1c8cdc" />
                    <SparklinesSpots />
                </Sparklines>
                <Sparklines data={this.state.data}  limit={20}>
                    <SparklinesBars style={{ fill: "#41c3f9", fillOpacity: ".25" }} />
                    <SparklinesLine style={{ stroke: "#41c3f9", fill: "none" }} />
                </Sparklines>
                <Sparklines data={this.state.data} limit={20}>
                    <SparklinesLine style={{ stroke: "none", fill: "#8e44af", fillOpacity: "1" }}/>
                </Sparklines>
                <Sparklines data={this.state.data} limit={10} >
                    <SparklinesBars color="#0a83d8" />
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
                    <SparklinesBars style={{ fill: 'slategray', fillOpacity: ".5" }} />
                    <SparklinesReferenceLine />
                </Sparklines>

                <h2>Normal Band</h2>
                <Sparklines data={this.sampleData}>
                    <SparklinesLine style={{ fill: "none" }}/>
                    <SparklinesNormalBand />
                </Sparklines>
                <Sparklines data={this.sampleData}>
                    <SparklinesLine style={{ fill: "none" }}/>
                    <SparklinesNormalBand />
                    <SparklinesReferenceLine type="mean" />
                </Sparklines>

                <h2>Real world examples</h2>
                <Sparklines data={this.sampleData100} width={200}>
                    <SparklinesLine style={{ stroke: "#2991c8", fill: "none"}} />
                    <SparklinesSpots />
                    <SparklinesNormalBand style={{ fill: "#2991c8", fillOpacity: .1 }} />
                </Sparklines>
                <br/>
                <Sparklines data={this.sampleData100}>
                    <SparklinesLine style={{ stroke: "black", fill: "none" }} />
                    <SparklinesSpots style={{ fill: "orange" }} />
                </Sparklines>
                <br/>
                <Sparklines data={this.sampleData}>
                    <SparklinesBars style={{ stroke: "white", strokeWidth: "1", fill: "#40c0f5" }} />
                </Sparklines>
                <br/>
                <Sparklines data={this.sampleData} height={80}>
                    <SparklinesLine style={{ stroke: "#8ed53f", strokeWidth: "1", fill: "none" }} />
                </Sparklines>
                <Sparklines data={this.sampleData} height={80}>
                    <SparklinesLine style={{ stroke: "#d1192e", strokeWidth: "1", fill: "none" }} />
                </Sparklines>
                <br/>
                <Sparklines data={this.sampleData}>
                    <SparklinesLine style={{ stroke: "#559500", fill: "#8fc638", fillOpacity: "1" }} />
                </Sparklines>
                <Sparklines data={this.sampleData} style={{background: "#272727"}} margin={10} >
                    <SparklinesLine style={{ stroke: "none", fill: "#d2673a", fillOpacity: ".5" }} />
                </Sparklines>
                <Sparklines data={this.sampleData} style={{background: "#00bdcc"}} margin={10} >
                    <SparklinesLine style={{ stroke: "white", fill: "none" }} />
                    <SparklinesReferenceLine style={{ stroke: 'white', strokeOpacity: .75, strokeDasharray: '2, 2' }} />
                </Sparklines>
            </div>
        );
    }
}

React.render(<Examples />, document.body);
