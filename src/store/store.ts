import { configureStore } from '@reduxjs/toolkit';
import appReducer from './slices/reserveSlice';

export const storeRedux = configureStore({
	reducer: {
		reserve: appReducer,
	},
});

export type RootState = ReturnType<typeof storeRedux.getState>;
export type AppDispatch = typeof storeRedux.dispatch;
