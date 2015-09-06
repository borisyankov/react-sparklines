import React from 'react';
import { Sparklines, SparklinesBars, SparklinesLine, SparklinesNormalBand, SparklinesReferenceLine, SparklinesSpots } from '../src/Sparklines';

function boxMullerRandom () {
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

function randomData(n = 30) {
    return Array.apply(0, Array(n)).map(boxMullerRandom);
}

const sampleData = randomData(30);
const sampleData100 = randomData(100);

class Header extends React.Component {

    render() {
        return (
            <Sparklines data={sampleData} width={300} height={50}>
                <SparklinesLine style={{ stroke: "white", fill: "none" }} />
                <SparklinesReferenceLine style={{ stroke: 'white', strokeOpacity: .75, strokeDasharray: '2, 2' }} />
            </Sparklines>
        );
    }
}


class Simple extends React.Component {

    render() {
        return (
            <Sparklines data={sampleData}>
                <SparklinesLine />
            </Sparklines>
        );
    }
}

class Customizable1 extends React.Component {

    render() {
        return (
            <Sparklines data={sampleData}>
                <SparklinesLine color="#1c8cdc" />
            </Sparklines>
        );
    }
}

class Customizable2 extends React.Component {

    render() {
        return (
            <Sparklines data={sampleData}>
                <SparklinesLine color="#fa7e17" />
            </Sparklines>
        );
    }
}

class Customizable3 extends React.Component {

    render() {
        return (
            <Sparklines data={sampleData}>
                <SparklinesLine color="#ea485c" />
            </Sparklines>
        );
    }
}

class Customizable4 extends React.Component {

    render() {
        return (
            <Sparklines data={sampleData}>
                <SparklinesLine color="#56b45d" />
            </Sparklines>
        );
    }
}

class Customizable5 extends React.Component {

    render() {
        return (
            <Sparklines data={sampleData}>
                <SparklinesLine color="#8e44af" />
            </Sparklines>
        );
    }
}

class Customizable6 extends React.Component {

    render() {
        return (
            <Sparklines data={sampleData}>
                <SparklinesLine color="#253e56" />
            </Sparklines>
        );
    }
}

class Bounds1 extends React.Component {

    render() {
        return (
            <Sparklines data={sampleData} max={0.5}>
                <SparklinesLine />
            </Sparklines>
        );
    }
}

class Spots1 extends React.Component {

    render() {
        return (
            <Sparklines data={sampleData}>
                <SparklinesLine style={{ fill: "none" }} />
                <SparklinesSpots />
            </Sparklines>
        );
    }
}

class Spots2 extends React.Component {

    render() {
        return (
            <Sparklines data={sampleData}>
                <SparklinesLine color="#56b45d" />
                <SparklinesSpots style={{ fill: "#56b45d" }} />
            </Sparklines>
        );
    }
}

class Spots3 extends React.Component {

    render() {
        return (
            <Sparklines data={sampleData} margin={6}>
                <SparklinesLine style={{ strokeWidth: 3, stroke: "#336aff", fill: "none" }} />
                <SparklinesSpots size={4} style={{ stroke: "#336aff", strokeWidth: 3, fill: "white" }} />
            </Sparklines>
        );
    }
}

class Bars1 extends React.Component {

    render() {
        return (
            <Sparklines data={sampleData}>
                <SparklinesBars style={{ fill: "#41c3f9" }} />
            </Sparklines>
        );
    }
}

class Bars2 extends React.Component {

    render() {
        return (
            <Sparklines data={sampleData}>
                <SparklinesBars style={{ stroke: "white", fill: "#41c3f9", fillOpacity: ".25" }} />
                <SparklinesLine style={{ stroke: "#41c3f9", fill: "none" }} />
            </Sparklines>
        );
    }
}

class Dynamic1 extends React.Component {

    constructor(props) {
        super(props);
        this.state = { data: [] };
        setInterval(() =>
            this.setState({
                data: this.state.data.concat([boxMullerRandom()])
            }), 100);
    }

    render() {
        return (
            <Sparklines data={this.state.data} limit={20}>
                <SparklinesLine color="#1c8cdc" />
                <SparklinesSpots />
            </Sparklines>
        );
    }
}

class Dynamic2 extends React.Component {

    constructor(props) {
        super(props);
        this.state = { data: [] };
        setInterval(() =>
            this.setState({
                data: this.state.data.concat([boxMullerRandom()])
            }), 100);
    }

    render() {
        return (
            <Sparklines data={this.state.data} limit={20}>
                <SparklinesBars style={{ fill: "#41c3f9", fillOpacity: ".25" }} />
                <SparklinesLine style={{ stroke: "#41c3f9", fill: "none" }} />
            </Sparklines>
        );
    }
}


class Dynamic3 extends React.Component {

    constructor(props) {
        super(props);
        this.state = { data: [] };
        setInterval(() =>
            this.setState({
                data: this.state.data.concat([boxMullerRandom()])
            }), 100);
    }

    render() {
        return (
            <Sparklines data={this.state.data} limit={20}>
                <SparklinesLine style={{ stroke: "none", fill: "#8e44af", fillOpacity: "1" }}/>
            </Sparklines>
        );
    }
}


class Dynamic4 extends React.Component {

    constructor(props) {
        super(props);
        this.state = { data: [] };
        setInterval(() =>
            this.setState({
                data: this.state.data.concat([boxMullerRandom()])
            }), 100);
    }

    render() {
        return (
            <Sparklines data={this.state.data} limit={10} >
                <SparklinesBars color="#0a83d8" />
            </Sparklines>
        );
    }
}


class ReferenceLine1 extends React.Component {

    render() {
        return (
            <Sparklines data={sampleData}>
                <SparklinesLine />
                <SparklinesReferenceLine type="max" />
            </Sparklines>
        );
    }
}


class ReferenceLine2 extends React.Component {

    render() {
        return (
            <Sparklines data={sampleData}>
                <SparklinesLine />
                <SparklinesReferenceLine type="min" />
            </Sparklines>
        );
    }
}


class ReferenceLine3 extends React.Component {

    render() {
        return (
            <Sparklines data={sampleData}>
                <SparklinesLine />
                <SparklinesReferenceLine type="mean" />
            </Sparklines>
        );
    }
}


class ReferenceLine4 extends React.Component {

    render() {
        return (
            <Sparklines data={sampleData}>
                <SparklinesLine />
                <SparklinesReferenceLine type="avg" />
            </Sparklines>
        );
    }
}

class ReferenceLine5 extends React.Component {

    render() {
        return (
            <Sparklines data={sampleData}>
                <SparklinesLine />
                <SparklinesReferenceLine type="median" />
            </Sparklines>
        );
    }
}

class ReferenceLine6 extends React.Component {

    render() {
        return (
            <Sparklines data={sampleData}>
                <SparklinesBars style={{ fill: 'slategray', fillOpacity: ".5" }} />
                <SparklinesReferenceLine />
            </Sparklines>
        );
    }
}

class NormalBand1 extends React.Component {

    render() {
        return (
            <Sparklines data={sampleData}>
                <SparklinesLine style={{ fill: "none" }}/>
                <SparklinesNormalBand />
            </Sparklines>
        );
    }
}

class NormalBand2 extends React.Component {

    render() {
        return (
            <Sparklines data={sampleData}>
                <SparklinesLine style={{ fill: "none" }}/>
                <SparklinesNormalBand />
                <SparklinesReferenceLine type="mean" />
            </Sparklines>
        );
    }
}

class RealWorld1 extends React.Component {

    render() {
        return (
            <Sparklines data={sampleData}>
                <SparklinesLine style={{ strokeWidth: 3, stroke: "#336aff", fill: "none" }} />
            </Sparklines>
        );
    }
}

class RealWorld2 extends React.Component {

    render() {
        return (
            <Sparklines data={sampleData100} width={200}>
                <SparklinesLine style={{ stroke: "#2991c8", fill: "none"}} />
                <SparklinesSpots />
                <SparklinesNormalBand style={{ fill: "#2991c8", fillOpacity: .1 }} />
            </Sparklines>
        );
    }
}

class RealWorld3 extends React.Component {

    render() {
        return (
            <Sparklines data={sampleData100}>
                <SparklinesLine style={{ stroke: "black", fill: "none" }} />
                <SparklinesSpots style={{ fill: "orange" }} />
            </Sparklines>
        );
    }
}

class RealWorld4 extends React.Component {

    render() {
        return (
            <Sparklines data={sampleData}>
                <SparklinesBars style={{ stroke: "white", strokeWidth: "1", fill: "#40c0f5" }} />
            </Sparklines>
        );
    }
}

class RealWorld5 extends React.Component {

    render() {
        return (
            <Sparklines data={sampleData} height={80}>
                <SparklinesLine style={{ stroke: "#8ed53f", strokeWidth: "1", fill: "none" }} />
            </Sparklines>
        );
    }
}

class RealWorld6 extends React.Component {

    render() {
        return (
            <Sparklines data={sampleData} height={80}>
                <SparklinesLine style={{ stroke: "#d1192e", strokeWidth: "1", fill: "none" }} />
            </Sparklines>
        );
    }
}

class RealWorld7 extends React.Component {

    render() {
        return (
            <Sparklines data={sampleData} height={40}>
                <SparklinesLine style={{ stroke: "#559500", fill: "#8fc638", fillOpacity: "1" }} />
            </Sparklines>
        );
    }
}

class RealWorld8 extends React.Component {

    render() {
        return (
            <Sparklines data={sampleData} style={{background: "#272727"}} margin={10} height={40}>
                <SparklinesLine style={{ stroke: "none", fill: "#d2673a", fillOpacity: ".5" }} />
            </Sparklines>
        );
    }
}

class RealWorld9 extends React.Component {

    render() {
        return (
            <Sparklines data={sampleData} style={{background: "#00bdcc"}} margin={10} height={40}>
                <SparklinesLine style={{ stroke: "white", fill: "none" }} />
                <SparklinesReferenceLine style={{ stroke: 'white', strokeOpacity: .75, strokeDasharray: '2, 2' }} />
            </Sparklines>
        );
    }
}

const demos = {
    'headersparklines': Header,
    'simple': Simple,
    'customizable1': Customizable1,
    'customizable2': Customizable2,
    'customizable3': Customizable3,
    'customizable4': Customizable4,
    'customizable5': Customizable5,
    'customizable6': Customizable6,
    'spots1': Spots1,
    'spots2': Spots2,
    'spots3': Spots3,
    'bounds1': Bounds1,
    'bars1': Bars1,
    'bars2': Bars2,
    'dynamic1': Dynamic1,
    'dynamic2': Dynamic2,
    'dynamic3': Dynamic3,
    'dynamic4': Dynamic4,
    'referenceline1': ReferenceLine1,
    'referenceline2': ReferenceLine2,
    'referenceline3': ReferenceLine3,
    'referenceline4': ReferenceLine4,
    'referenceline5': ReferenceLine5,
    'referenceline6': ReferenceLine6,
    'normalband1': NormalBand1,
    'normalband2': NormalBand2,
    'realworld1': RealWorld1,
    'realworld2': RealWorld2,
    'realworld3': RealWorld3,
    'realworld4': RealWorld4,
    'realworld5': RealWorld5,
    'realworld6': RealWorld6,
    'realworld7': RealWorld7,
    'realworld8': RealWorld8,
    'realworld9': RealWorld9
};

for (let d in demos) {
    React.render(React.createElement(demos[d]), document.getElementById(d));
}

