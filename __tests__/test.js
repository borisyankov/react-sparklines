import React from 'react'
import TestUtils from 'react-addons-test-utils';
import { Sparklines } from '../build';

describe('Sparklines', function() {
    it('should render successfully', function() {
        const sparklines = TestUtils.renderIntoDocument(<Sparklines/>);
        expect(TestUtils.isCompositeComponent(sparklines)).toBeTruthy();
    });
});
