import mean from './mean'

export default data => {
    const dataMean = mean(data);
    const sq = data.map(n => Math.pow(n - dataMean, 2));
    return mean(sq);
}
