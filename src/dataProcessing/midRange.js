import min from './min';
import max from './max';

export default data =>
    max(data) - min(data) / 2;
