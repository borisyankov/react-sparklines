import mean from './mean';

export default data => {
    const dataMean = mean(data);
    const sqDiff = data.map(n => Math.pow(n - dataMean, 2));
    const avgSqDiff = mean(sqDiff);
    return Math.sqrt(avgSqDiff);
}
