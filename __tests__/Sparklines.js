import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Sparklines } from '../src/Sparklines';

describe('Sparklines', () => {
    it('does not throw without any parameters', () => {
        expect(() => <Sparklines />).to.not.throw;
    });

    it('renders nothing when passed no data', () => {
        const wrapper = shallow(<Sparklines />);
        expect(wrapper.find('svg')).to.have.length(0);
    });

    it('is rendered as svg', () => {
        const wrapper = shallow(<Sparklines data={[1]} />);
        expect(wrapper.find('svg')).to.have.length(1);
    });
});
