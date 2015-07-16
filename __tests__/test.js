describe('Sparklines', function() {
    it('is rendered as svg', function() {
        import React from 'react'
        import { TestUtils } from "react/addons";
        import { Sparklines } from '../build';

        const sparklines = TestUtils.renderIntoDocument(<Sparklines/>);

        expect(sparklines.type).toBe('svg');
    });
});
