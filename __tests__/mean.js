import { expect } from 'chai';
import mean from '../src/dataProcessing/mean';

describe('mean', () => {
    it('should return average of values', () => {
        expect(mean([0])).to.eq(0)
        expect(mean([0, 1])).to.eq(0.5)
        expect(mean([1, 2])).to.eq(3/2)
        expect(mean([0, 1, 2])).to.eq(1)
    });
});
