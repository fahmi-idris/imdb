/* eslint-disable no-use-before-define */
import { Action } from 'redux';

export type Json = string | number | boolean | JsonObject;

export interface JsonObject {
  [x: string]: Json;
}

export interface ObjectOfJson {
  [key: string]: JsonObject | ObjectOfJson;
}

// eslint-disable-next-line
export interface ReduxAction<T = any, P = any> extends Action<T> {
  action?: string;
  payload: P;
}

export interface TypedReduxAction<T> {
  type: string;
  payload: T;
}

export interface ExReduxAction<T, P> {
  type: T;
  payload: P;
}

export interface VoidExReduxAction<T> {
  type: T;
}
