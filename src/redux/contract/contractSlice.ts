import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../store";

export interface ContractState {
  value: number | null;
  period: number | null;
}

const initialState: ContractState = {
  value: null,
  period: null,
};

export const contractSlice = createSlice({
  name: "contract",
  initialState,
  reducers: {
    addValue: (state, action: PayloadAction<number>) => {
      // eslint-disable-next-line no-param-reassign
      state.value = action.payload;
    },
    addPeriod: (state, action: PayloadAction<number>) => {
      // eslint-disable-next-line no-param-reassign
      state.period = action.payload;
    },
  },
});

export const { addValue, addPeriod } = contractSlice.actions;

export const selectContract = (state: RootState) => state.contract;

export default contractSlice.reducer;
