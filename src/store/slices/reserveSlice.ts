import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

type reserveState = {
	status: string;
};

const initialState: reserveState = {
	status: 'ready',
};

const reserveSlice = createSlice({
	name: 'reserve',
	initialState,
	reducers: {
		setStatus: (state, action: PayloadAction<string>) => {
			state.status = action.payload;
		},
	},
});

export const { setStatus } = reserveSlice.actions;
export default reserveSlice.reducer;
