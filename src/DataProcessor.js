export default class DataProcessor {

    static dataToPoints(data, limit, width = 1, height = 1, margin = 0, max = this.max(data), min = this.min(data)) {

        const len = data.length;

        if (limit && limit < len) {
            data = data.slice(len - limit);
        }

        const vfactor = (height - margin * 2) / ((max - min) || 2);
        const hfactor = (width - margin * 2) / ((limit || len) - (len > 1 ? 1 : 0));

        return data.map((d, i) => {
            return {
                x: i * hfactor + margin,
                y: this.isGapValue(d) ? d : ((max === min ? 1 : (max - d)) * vfactor + margin)
            }
        });
    }

    static nonGapValues(data) {
        return data.filter(d => !this.isGapValue(d));
    }

    static max(data) {
        return Math.max.apply(Math, this.nonGapValues(data));
    }

    static min(data) {
        return Math.min.apply(Math, this.nonGapValues(data));
    }

    static mean(data) {
        data = this.nonGapValues(data);
        return (this.max(data) - this.min(data)) / 2;
    }

    static avg(data) {
        data = this.nonGapValues(data);
        return data.reduce((a, b) => a + b) / data.length;
    }

    static median(data) {
        data = this.nonGapValues(data);
        return data.sort((a,b) => a - b)[Math.floor(data.length / 2)];
    }

    static variance(data) {
        data = this.nonGapValues(data);
        const mean = this.mean(data);
        const sq = data.map(n => Math.pow(n - mean, 2));
        return this.mean(sq);
    }

    static stdev(data) {
        data = this.nonGapValues(data);
        const mean = this.mean(data);
        const sqDiff = data.map(n => Math.pow(n - mean, 2));
        const avgSqDiff = this.avg(sqDiff);
        return Math.sqrt(avgSqDiff);
    }

    static calculateFromData(data, calculationType) {
        return this[calculationType].call(this, data);
    }

    static pointsToSegments(points) {
        let segment, segments = [];
        const newSegment = (isGap) => ({points: [], isGap});
        for (let point of points) {
            if (!segment)
                segment = newSegment(false);
            const isGapHere = this.isGapValue(point.y);
            if (segment.isGap != isGapHere) {
                if (segment.points.length)
                    segments.push(segment);
                segment = newSegment(isGapHere);
            }
            segment.points.push(point);            
        }
        if (segment && segment.points.length)
            segments.push(segment);
        return segments;
    }

    static isGapValue(y)
    {
        return !Number.isFinite(y);
    }
}
