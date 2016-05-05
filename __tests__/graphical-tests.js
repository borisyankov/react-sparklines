import fixtures from './fixtures';
import { render } from 'enzyme';
import { expect } from 'chai';
import compareSvg from './compareSvg';

describe.skip('Graphical tests from fixtures.js', function() {
    for (let key of Object.keys(fixtures)) {
        describe(`${key}`, function() {
            it('should render as specified', function() {
                const wrapper = render(fixtures[key].jsx);
                const result = compareSvg(wrapper.html(), fixtures[key].svg);
                const errorMessage = 'SVG output changed:\n' + result.changes.map(change => change.message).join('\n') + '\n';
                expect(result.changes, errorMessage).to.be.empty;
            });
        });
    }
});
