import { checkStatus, parseJson } from '../../../helpers/fetch';
import { parseFetch } from '../../../dataParsers/questions';

const fetchApi = () => (
  fetch('https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean')
    .then(checkStatus)
    .then(parseJson)
    .then(parseFetch)
);

export default fetchApi;
