describe('Sparklines', function() {
    it('is rendered as svg', function() {
        import { TestUtils } from "react/addons";
        import { Sparklines } from '../src/Sparklines.js';

        const sparklines = TestUtils.renderIntoDocument(<Sparklines/>);

        expect(sparklines.type).toBe('svg');
    });
});
