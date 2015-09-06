export default class DataProcessor {

    static dataToPoints(data, limit, width, height, margin, max, min) {

        if (limit && limit < data.length) {
            data = data.slice(data.length - limit);
        }

        if (max == null) max = this.max(data);
        if (min == null) min = this.min(data);

        const vfactor = (height - margin * 2) / ((max - min) || 1);
        const hfactor = (width - margin * 2) / ((limit || data.length) - 1);

        return data.map((d, i) => {
            return {
                x: i * hfactor + margin,
                y: (max - data[i]) * vfactor + margin
            }
        });
    }

    static max(data) {
        return Math.max.apply(Math, data);
    }

    static min(data) {
        return Math.min.apply(Math, data);
    }

    static mean(data) {
        return (this.max(data) - this.min(data)) / 2;
    }

    static avg(data) {
        return data.reduce((a, b) => a + b) / (data.length + 1);
    }

    static median(data) {
        return data.sort()[Math.floor(data.length / 2)];
    }

    static variance(data) {
        const mean = this.mean(data);
        const sq = data.map(n => Math.pow(n - mean, 2));
        return this.mean(sq);
    }

    static stdev(data) {
        const mean = this.mean(data);
        const sqDiff = data.map(n => Math.pow(n - mean, 2));
        const avgSqDiff = this.avg(sqDiff);
        return Math.sqrt(avgSqDiff);
    }

    static calculateFromData(data, calculationType) {
        return this[calculationType].call(this, data);
    }
}
