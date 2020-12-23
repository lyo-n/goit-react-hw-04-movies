import queryString from 'query-string';

export default function queryParams(qStr) {
    return queryString.parse(qStr);
}
