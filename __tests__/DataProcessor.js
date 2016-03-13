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
    })

});
