export default class DataProcessor {

    static dataToPoints(data, width, height, limit) {

        if (limit && limit < data.length) {
            data = data.slice(data.length - limit);
        }

        let max = Math.max.apply(Math, data);
        let min = Math.min.apply(Math, data);

        let vfactor = height / (max - min);
        let hfactor = width / (limit || data.length);

        return data.map((d, i) => {
            return {
                x: i * hfactor,
                y: (max - data[i]) * vfactor
            }
        });
    }
}
