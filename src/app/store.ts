import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import widgetsSlice from './slices/widgetsSlice';

export const store = configureStore({
  reducer: {
      widgets: widgetsSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
