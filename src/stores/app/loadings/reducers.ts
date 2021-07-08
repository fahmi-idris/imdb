import { combineReducers } from 'redux';
import { omit } from 'lodash';

import { ReduxAction } from 'interfaces';
import { DataMap } from 'interfaces/common';
import LOADINGS from './types';

const data = (state: DataMap<boolean> = {}, action: ReduxAction) => {
  switch (action.type) {
    case LOADINGS.SET_LOADING:
      return { ...state, [action.payload.id]: action.payload.loading };
    case LOADINGS.REMOVE_LOADING:
      return omit(state, action.payload.id);
    default:
      return state;
  }
};

export default combineReducers({
  data,
});
