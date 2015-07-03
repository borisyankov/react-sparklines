export default class DataProcessor {

    static dataToPoints(data, limit, width, height, margin) {

        if (limit && limit < data.length) {
            data = data.slice(data.length - limit);
        }

        let max = this.max(data);
        let min = this.min(data);

        let vfactor = (height - margin * 2) / (max - min);
        let hfactor = (width - margin * 2) / ((limit || data.length) - 1);

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
        let mean = this.mean(data);
        let sq = data.map(n => Math.pow(n - mean, 2));
        return this.mean(sq);
    }

    static stdev(data) {
        let avg = this.avg(data);
        let mean = this.mean(data);
        let sqDiff = data.map(n => Math.pow(n - mean, 2));
        let avgSqDiff = this.avg(sqDiff);
        return Math.sqrt(avgSqDiff);
    }

    static calculateFromData(data, calculationType) {
        return this[calculationType].call(this, data);
    }
}
