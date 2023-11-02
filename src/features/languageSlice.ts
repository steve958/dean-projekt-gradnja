import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { Realestate } from "../components/PropertyCard";


export interface LanguageState {
  value: string;
  selectedProperty: Realestate
}

const initialState = {
  value: "Croatian",
  selectedProperty:{},
} as LanguageState;

export const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    changeLanguage(state, action: PayloadAction<string>) {
      state.value = action.payload;
    },
    setSelectedProperty(state, action:PayloadAction<Realestate>) {
      state.selectedProperty = action.payload
    }
  },
});

export const { changeLanguage, setSelectedProperty } = languageSlice.actions;
export default languageSlice.reducer;
