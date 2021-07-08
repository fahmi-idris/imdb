import LOADINGS from './types';

export const LOADING_IDLE = 'idle';
export const LOADING_WORK = 'work';
export const LOADING_DONE = 'done';

export function setLoading(id: string, loading: boolean | string) {
  return {
    type: LOADINGS.SET_LOADING,
    payload: {
      id,
      loading,
    },
  };
}

export function removeLoading(id: string) {
  return {
    type: LOADINGS.REMOVE_LOADING,
    payload: {
      id,
    },
  };
}
