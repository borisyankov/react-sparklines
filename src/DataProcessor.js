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
                y: (max === min ? 1 : (max - d)) * vfactor + margin
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
        return data.reduce((a, b) => a + b) / data.length;
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
