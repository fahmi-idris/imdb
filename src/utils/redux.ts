import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { RootStore, AppDispatch } from 'interfaces/stores';
import configureStore from 'stores';

const initialState = window.INITIAL_REDUX_STATE || undefined;
export const { store, history } = configureStore(initialState);

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootStore> = useSelector;
