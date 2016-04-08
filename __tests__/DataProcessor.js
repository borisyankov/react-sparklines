import { expect } from 'chai';
import DataProcessor from '../src/DataProcessor';

describe('DataProcessor', () => {

    describe('dataToPoints', () => {

        it('should return an array', () => {
            expect(DataProcessor.dataToPoints([])).to.be.an('array')
            expect(DataProcessor.dataToPoints([], null, null, null)).to.be.an('array')
            expect(DataProcessor.dataToPoints([1, 2, 3], null, null, null)).to.be.an('array')
            expect(DataProcessor.dataToPoints([1, null, undefined], null, null, null)).to.be.an('array')
        });

        it('should return only `limit` items', () => {
            expect(DataProcessor.dataToPoints([1,2,3,4,5])).to.have.length(5)
            expect(DataProcessor.dataToPoints([1,2,3,4,5], 2)).to.have.length(2)
            expect(DataProcessor.dataToPoints([1,2,3,4,5], 5)).to.have.length(5)
        });

        it('should return proper values for 1 value', () => {
            expect(DataProcessor.dataToPoints([1])).to.eql([
                {x: 0, y: 0.5}
            ])
        });

        it('should return proper values 2+ values', () => {
            expect(DataProcessor.dataToPoints([1,1])).to.eql([
                {x: 0, y: 0.5},
                {x: 1, y: 0.5}
            ])

            expect(DataProcessor.dataToPoints([0,1])).to.eql([
                {x: 0, y: 1},
                {x: 1, y: 0}
            ])

            expect(DataProcessor.dataToPoints([1,0])).to.eql([
                {x: 0, y: 0},
                {x: 1, y: 1}
            ])

            expect(DataProcessor.dataToPoints([0,1,2])).to.eql([
                {x: 0, y: 1},
                {x: 0.5, y: 0.5},
                {x: 1, y: 0}
            ])
        });

        it('should inerpolate values properly', () => {
            expect(DataProcessor.dataToPoints([0,1,2], null, 10, 10, 0)).to.eql([
                {x: 0, y: 10},
                {x: 5, y: 5},
                {x: 10, y: 0}
            ])
        });

        it('should take min and max into account', () => {
            expect(DataProcessor.dataToPoints([1,2,3,4], null, 6, 10, 0, 2, 3)).to.eql([
                {x: 0, y: -10},
                {x: 2, y: 0},
                {x: 4, y: 10},
                {x: 6, y: 20}
            ])
        });

        it('should return y == height for 0 and null values', () => {
            expect(DataProcessor.dataToPoints([0])).to.eql([
                {x: 0, y: 0.5}
            ])
            expect(DataProcessor.dataToPoints([0, null, 0])).to.eql([
                {x: 0, y: 0.5},
                {x: 0.5, y: 0.5},
                {x: 1, y: 0.5}
            ])
        });
    });

    describe('avg', () => {
        it('should return average of values', () => {
            expect(DataProcessor.avg([0])).to.eq(0)
            expect(DataProcessor.avg([0, 1])).to.eq(0.5)
            expect(DataProcessor.avg([1, 2])).to.eq(3/2)
            expect(DataProcessor.avg([0, 1, 2])).to.eq(1)
        });
    });

    describe('median', () => {
        it('should return median of values', () => {
            expect(DataProcessor.median([0])).to.eq(0)
            expect(DataProcessor.median([0, 1])).to.eq(1)
            expect(DataProcessor.median([1, 2, 3])).to.eq(2)
            expect(DataProcessor.median([5, 4, 3, 2, 1])).to.eq(3)
            expect(DataProcessor.median([2, 4, 1, 3, 5])).to.eq(3)
        });

        it('should calculate median by correctly sorting numbers, not lexicographically', () => {
            expect(DataProcessor.median([0, 20, 100])).to.eq(20)
            expect(DataProcessor.median([1, 3, 5, 7, 100, 1000, 10000])).to.eq(7)
        });

        it('should calculate median for real-world data', () => {
            const data = [6161.719669666667,4995.179579999999,4040.0326529999998,3776.188567,2969.1544076666664,4701.473427,3128.7432525,3299.3572713333333,4272.681012,3422.561293333333,3462.3769910000005,4303.3568116666665,12118.759180333333,5272.167418666666,3130.953679666666,3830.7221036666665,4253.371313333333,6885.048253666668,4065.784471333334,4051.3181206666673,3312.486034666667,3519.332053333333,3578.4504983333336,3061.1413410000005,82353.92672433333,3166.496492,3962.746236333333,3355.8355669999996,3234.4706403333334,3319.0170516666667,3334.766027666667,7453.3247703333345,3356.1106466666665,7517.256305666666,6227.504952666667,2999.276804666666,3185.139871,2740.3619040000003,3554.696368,3908.206846,3055.0123826666663,3224.6066153333336,3576.984728,4848.392336666667,5388.439963000001,3662.7132256666664,6323.533573333332,3432.6356856666666,6223.385519666666,3137.5223516666665,4890.759132333333,3131.3128269999997,3814.362825333333,3452.1440953333336,2932.7764999999995,2816.087773333333,3989.263918666667,3113.313537,4504.276532333333,3561.8186296666663,3505.547739666667,4404.111484,4417.891140666666,4269.754091666667,3434.4542200000005,5476.430249666667,6312.4283306666675,5366.578057333334,3830.2674359999996,4812.407597333333,3376.3011166666674,3358.902772,6465.302481,3668.810244,2920.755890666667,4098.664499333333,3245.7028793333334,3443.5763826666666,3053.3344556666666,5223.266786,4993.329616000001,4095.5644090000005,3369.0089953333336,4341.683867,3377.744091666667,6399.325108333333,3453.0122806666664,2891.474329333333,4122.205589333334,4019.51985,3977.8773416666663,3615.6507353333336,4873.987182666668,3638.5405246666664,2889.41178];
            expect(DataProcessor.median(data)).to.eq(3668.810244)
        })
    });
});
