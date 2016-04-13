import fixtures from './fixtures';
import {render} from 'enzyme';
import { expect } from 'chai';

describe('Graphical tests from fixtures.js', function() {
	for (let key of Object.keys(fixtures)) {
		describe(`${key}`, function() {
			it('should render as specified', function() {
				const wrapper = render(fixtures[key].jsx);
        		expect(wrapper.html()).to.eq(fixtures[key].svg);
			});
		});
	}
});
