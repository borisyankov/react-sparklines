import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Sparklines, SparklinesBars, SparklinesLine, SparklinesCurve,  SparklinesNormalBand, SparklinesReferenceLine, SparklinesSpots, SparklinesInteractiveLayer } from '../src/Sparklines';

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

const Header = () =>
    <Sparklines data={sampleData} width={300} height={50}>
        <SparklinesLine style={{ stroke: "white", fill: "none" }} />
        <SparklinesReferenceLine style={{ stroke: 'white', strokeOpacity: .75, strokeDasharray: '2, 2' }} />
    </Sparklines>

const Simple = () =>
    <Sparklines data={sampleData}>
        <SparklinesLine />
    </Sparklines>

const SimpleCurve = () =>
    <Sparklines data={sampleData}>
        <SparklinesCurve />
    </Sparklines>

const Customizable1 = () =>
    <Sparklines data={sampleData}>
        <SparklinesLine color="#1c8cdc" />
    </Sparklines>

const Customizable2 = () =>
    <Sparklines data={sampleData}>
        <SparklinesLine color="#fa7e17" />
    </Sparklines>

const Customizable3 = () =>
    <Sparklines data={sampleData}>
        <SparklinesLine color="#ea485c" />
    </Sparklines>

const Customizable4 = () =>
    <Sparklines data={sampleData}>
        <SparklinesLine color="#56b45d" />
    </Sparklines>

const Customizable5 = () =>
    <Sparklines data={sampleData}>
        <SparklinesLine color="#8e44af" />
    </Sparklines>

const Customizable6 = () =>
    <Sparklines data={sampleData}>
        <SparklinesLine color="#253e56" />
    </Sparklines>

const Bounds1 = () =>
    <Sparklines data={sampleData} max={0.5}>
        <SparklinesLine />
    </Sparklines>

const Spots1 = () =>
    <Sparklines data={sampleData}>
        <SparklinesLine style={{ fill: "none" }} />
        <SparklinesSpots />
    </Sparklines>

const Spots2 = () =>
    <Sparklines data={sampleData}>
        <SparklinesLine color="#56b45d" />
        <SparklinesSpots style={{ fill: "#56b45d" }} />
    </Sparklines>

const Spots3 = () =>
    <Sparklines data={sampleData} margin={6}>
        <SparklinesLine style={{ strokeWidth: 3, stroke: "#336aff", fill: "none" }} />
        <SparklinesSpots size={4} style={{ stroke: "#336aff", strokeWidth: 3, fill: "white" }} />
    </Sparklines>

const Bars1 = () =>
    <Sparklines data={sampleData}>
        <SparklinesBars style={{ fill: "#41c3f9" }} />
    </Sparklines>

const Bars2 = () =>
    <Sparklines data={sampleData}>
        <SparklinesBars style={{ stroke: "white", fill: "#41c3f9", fillOpacity: ".25" }} />
        <SparklinesLine style={{ stroke: "#41c3f9", fill: "none" }} />
    </Sparklines>

class Dynamic1 extends Component {

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

class Dynamic2 extends Component {

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


class Dynamic3 extends Component {

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
                <SparklinesLine style={{ stroke: "none", fill: "#8e44af", fillOpacity: "1" }} />
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

const ReferenceLine1 = () =>
    <Sparklines data={sampleData}>
        <SparklinesLine />
        <SparklinesReferenceLine type="max" />
    </Sparklines>

const ReferenceLine2 = () =>
    <Sparklines data={sampleData}>
        <SparklinesLine />
        <SparklinesReferenceLine type="min" />
    </Sparklines>

const ReferenceLine3 = () =>
    <Sparklines data={sampleData}>
        <SparklinesLine />
        <SparklinesReferenceLine type="mean" />
    </Sparklines>

const ReferenceLine4 = () =>
    <Sparklines data={sampleData}>
        <SparklinesLine />
        <SparklinesReferenceLine type="avg" />
    </Sparklines>

const ReferenceLine5 = () =>
    <Sparklines data={sampleData}>
        <SparklinesLine />
        <SparklinesReferenceLine type="median" />
    </Sparklines>

const ReferenceLine6 = () =>
    <Sparklines data={sampleData}>
        <SparklinesBars style={{ fill: 'slategray', fillOpacity: ".5" }} />
        <SparklinesReferenceLine />
    </Sparklines>

const NormalBand1 = () =>
    <Sparklines data={sampleData}>
        <SparklinesLine style={{ fill: "none" }} />
        <SparklinesNormalBand />
    </Sparklines>

const NormalBand2 = () =>
    <Sparklines data={sampleData}>
        <SparklinesLine style={{ fill: "none" }}/>
        <SparklinesNormalBand />
        <SparklinesReferenceLine type="mean" />
    </Sparklines>

const RealWorld1 = () =>
    <Sparklines data={sampleData}>
        <SparklinesLine style={{ strokeWidth: 3, stroke: "#336aff", fill: "none" }} />
    </Sparklines>

const RealWorld2 = () =>
    <Sparklines data={sampleData100} svgWidth={200}>
        <SparklinesLine style={{ stroke: "#2991c8", fill: "none"}} />
        <SparklinesSpots />
        <SparklinesNormalBand style={{ fill: "#2991c8", fillOpacity: .1 }} />
    </Sparklines>

const RealWorld3 = () =>
    <Sparklines data={sampleData100}>
        <SparklinesLine style={{ stroke: "black", fill: "none" }} />
        <SparklinesSpots style={{ fill: "orange" }} />
    </Sparklines>

const RealWorld4 = () =>
    <Sparklines data={sampleData}>
        <SparklinesBars style={{ stroke: "white", strokeWidth: "1", fill: "#40c0f5" }} />
    </Sparklines>

const RealWorld5 = () =>
    <Sparklines data={sampleData} height={80}>
        <SparklinesLine style={{ stroke: "#8ed53f", strokeWidth: "1", fill: "none" }} />
    </Sparklines>

const RealWorld6 = () =>
    <Sparklines data={sampleData} height={80}>
        <SparklinesLine style={{ stroke: "#d1192e", strokeWidth: "1", fill: "none" }} />
    </Sparklines>

const RealWorld7 = () =>
    <Sparklines data={sampleData} height={40}>
        <SparklinesLine style={{ stroke: "#559500", fill: "#8fc638", fillOpacity: "1" }} />
    </Sparklines>

const RealWorld8 = () =>
    <Sparklines data={sampleData} style={{background: "#272727"}} margin={10} height={40}>
        <SparklinesLine style={{ stroke: "none", fill: "#d2673a", fillOpacity: ".5" }} />
    </Sparklines>

const RealWorld9 = () =>
    <Sparklines data={sampleData} style={{background: "#00bdcc"}} margin={10} height={40}>
        <SparklinesLine style={{ stroke: "white", fill: "none" }} />
        <SparklinesReferenceLine style={{ stroke: 'white', strokeOpacity: .75, strokeDasharray: '2, 2' }} />
    </Sparklines>

const Tooltip = (props) => 
    <div style={{position: "absolute", top: props.y, left: props.x, width: "100px"}}>
        <span style={{fontSize: "12px"}}>x: {props.x}, </span>
        <span style={{fontSize: "12px"}}>y: {props.y}</span>
    </div>

const offscreen = -1000

class RealWorld10 extends Component {
    state = {
        showTooltip: false,
        x: offscreen,
        y: offscreen,
    }

    onMouseMove = (point, index, x, y) => {
        this.setState({
            showTooltip: true,
            x: x + 10,
            y: y
        })
    }

    onMouseLeave = () => {
        this.setState({showTooltip: false, x: offscreen, y: offscreen})
    }

    render() {
        const { showTooltip, x, y} = this.state
        return (
            <div style={{position: 'relative'}}>
                <Sparklines data={sampleData} style={{background: '#ccc'}} margin={10} height={40}>
                    <SparklinesLine style={{ stroke: 'white', fill: 'none' }} />
                    <SparklinesInteractiveLayer style={{cursor: 'pointer'}} onMouseMove={this.onMouseMove} onMouseLeave={this.onMouseLeave} />
                </Sparklines>
                <Tooltip showTooltip={showTooltip} x={x} y={y}/>
            </div>
        )
    }
}


const demos = {
    'headersparklines': Header,
    'simple': Simple,
    'simpleCurve': SimpleCurve,
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
    'realworld9': RealWorld9,
    'realworld10': RealWorld10
};

for (let d in demos) {
    ReactDOM.render(React.createElement(demos[d]), document.getElementById(d));
}
