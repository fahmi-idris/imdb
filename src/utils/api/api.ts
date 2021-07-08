/* eslint-disable import/prefer-default-export */
import axios from 'axios';

import { AxiosParams } from 'interfaces/common';

const API_URL = process.env.REACT_APP_GATEWAY_API_URL || 'http://www.omdbapi.com';
const API_KEY = process.env.REACT_APP_GATEWAY_API_KEY || 'faf7e5bb';

export default async function callApi({ url, params, data, type, base }: AxiosParams) {
  return axios({
    url,
    params: {
      apikey: API_KEY,
      ...params,
    },
    data,
    method: type,
    baseURL: base || API_URL,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  }).then((resp) => resp.data);
}
