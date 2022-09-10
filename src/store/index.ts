import { configureStore } from '@reduxjs/toolkit';
import undoable from 'redux-undo';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';

import todoReducer from 'reducers/todo';

export const store = configureStore({
  reducer: {
    todo: undoable(todoReducer),
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
