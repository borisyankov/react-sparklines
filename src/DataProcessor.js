export default class DataProcessor {

    static dataToPoints(data, width, height, limit) {

        if (limit && limit < data.length) {
            data = data.slice(data.length - limit);
        }

        let max = this.max(data);
        let min = this.min(data);

        let vfactor = height / (max - min);
        let hfactor = width / (limit || data.length);

        return data.map((d, i) => {
            return {
                x: i * hfactor,
                y: (max - data[i]) * vfactor
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

    static stddev(data) {
        let avg = this.avg(data);
        let sqDiff = data.map(n => Math.pow(n - mean, 2));
        let avgSqDiff = this.avg(sqDiff);
        return Math.sqrt(avgSqDiff);
    }

    static calculateFromData(data, calculationType) {
        return this[calculationType].call(this, data);
    }
}
