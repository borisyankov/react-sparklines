import React from 'react';
import Sparklines from '../src/Sparklines';

React.render(<Sparklines data={[20, 30, 15, 40, 18, 35, 22, 28, 33, 55, 14]} limit={10} lineColor="#0a83d8" fill="#0a83d8" />, document.body);
