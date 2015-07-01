export default class DataProcessor {

    static dataToPoints(data) {

        let width = 300;
        let height = 150;

        let max = Math.max.apply(Math, data);
        let min = Math.min.apply(Math, data);

        let vfactor = height / (max - min);

        console.log(max, min, vfactor);

        return data.map((d, i) => {
            return {
                x: i * 20,
                y: (max - data[i]) * vfactor
            }
        });
    }
}
