import { createSlice } from "@reduxjs/toolkit";

const previewerSlice = createSlice({
    name:"previewer",
    initialState:{
        isOpen: false
    },
    reducers:{
        changeIsOpen(state){
            state.isOpen = !state.isOpen;
        }
    }
});
export const previewerActions = previewerSlice.actions;

export default previewerSlice;
