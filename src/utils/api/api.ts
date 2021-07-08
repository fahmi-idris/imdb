/* eslint-disable import/prefer-default-export */
import axios, { Method } from 'axios';

import { JsonObject } from 'interfaces';

const API_URL = process.env.REACT_APP_GATEWAY_API_URL || 'http://www.omdbapi.com';
const API_KEY = process.env.REACT_APP_GATEWAY_API_KEY || 'faf7e5bb';
const ENDPOINT = `${API_URL}?apikey=${API_KEY}`;

export default async function callApi(type?: Method, url?: string, data?: JsonObject | FormData, base?: string) {
  return axios({
    url,
    data,
    method: type,
    baseURL: base || ENDPOINT,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  }).then((resp) => resp.data);
}
