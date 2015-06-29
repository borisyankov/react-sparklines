import React from 'react';
import Sparklines from '../src/Sparklines';

class Examples extends React.Component {
    render() {
        return (
            <div>
                <Sparklines data={[20, 30, 15, 40, 18, 35, 22, 28, 33, 55, 14]} limit={10} lineColor="#1c8cdc" fill="#1c8cdc" endSpotColor="#1c8cdc" />
                <Sparklines data={[20, 30, 15, 40, 18, 35, 22, 28, 33, 55, 14]} bars="true" limit={10} lineColor="#0a83d8" fill="#0a83d8" endSpotColor="#0a83d8" />
                <Sparklines data={[20, 30, 15, 40, 18, 35, 22, 28, 33, 55, 14]} limit={10} lineColor="#fa7e17" fill="#fa7e17" endSpotColor="#fa7e17" />
                <Sparklines data={[20, 30, 15, 40, 18, 35, 22, 28, 33, 55, 14]} limit={10} lineColor="#ea485c" fill="#ea485c" endSpotColor="#ea485c" />
                <Sparklines data={[20, 30, 15, 40, 18, 35, 22, 28, 33, 55, 14]} limit={10} lineColor="#56b45d" fill="#56b45d" endSpotColor="#56b45d" />
                <Sparklines data={[20, 30, 15, 40, 18, 35, 22, 28, 33, 55, 14]} limit={10} lineColor="#8e44af" fill="#8e44af" endSpotColor="#8e44af" />
            </div>
        );
    }
}

React.render(<Examples />, document.body);
