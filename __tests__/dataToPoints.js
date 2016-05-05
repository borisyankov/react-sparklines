import { expect } from 'chai';
import dataToPoints from '../src/dataProcessing/dataToPoints';

describe('dataToPoints', () => {

    it('should return an array', () => {
        expect(dataToPoints({ data: [] })).to.be.an('array');
        expect(dataToPoints({ data: [1, 2, 3] })).to.be.an('array');
        expect(dataToPoints({ data: [1, null, undefined] })).to.be.an('array');
    });

    it('should return only `limit` items', () => {
        expect(dataToPoints({ data: [1,2,3,4,5] })).to.have.length(5);
        expect(dataToPoints({ data: [1,2,3,4,5], limit: 2 })).to.have.length(2);
        expect(dataToPoints({ data: [1,2,3,4,5], limit: 5 })).to.have.length(5);
        expect(dataToPoints({ data: [1,2,3,4,5], limit: 10 })).to.have.length(5);
    });

    it('should return proper values for 1 value', () => {
        expect(dataToPoints({ data: [1] })).to.eql([
            {x: 0, y: 0.5}
        ])
    });

    it('should return proper values 2+ values', () => {
        expect(dataToPoints({ data: [1,1] })).to.eql([
            {x: 0, y: 0.5},
            {x: 1, y: 0.5}
        ])

        expect(dataToPoints({ data: [0,1] })).to.eql([
            {x: 0, y: 1},
            {x: 1, y: 0}
        ])

        expect(dataToPoints({ data: [1,0] })).to.eql([
            {x: 0, y: 0},
            {x: 1, y: 1}
        ])

        expect(dataToPoints({ data: [0,1,2] })).to.eql([
            {x: 0, y: 1},
            {x: 0.5, y: 0.5},
            {x: 1, y: 0}
        ])
    });

    it('should inerpolate values properly', () => {
        expect(dataToPoints({data: [0,1,2], width: 10, height: 10 })).to.eql([
            {x: 0, y: 10},
            {x: 5, y: 5},
            {x: 10, y: 0}
        ])
    });

    it('should take min and max into account', () => {
        expect(dataToPoints({ data: [1,2,3,4], width: 6, height: 10, max: 2, min: 3 })).to.eql([
            {x: 0, y: -10},
            {x: 2, y: 0},
            {x: 4, y: 10},
            {x: 6, y: 20}
        ])
    });

    it('should return y == height for 0 and null values', () => {
        expect(dataToPoints({ data: [0] })).to.eql([
            {x: 0, y: 0.5}
        ])
        expect(dataToPoints({ data: [0, null, 0] })).to.eql([
            {x: 0, y: 0.5},
            {x: 0.5, y: 0.5},
            {x: 1, y: 0.5}
        ])
    });
});
