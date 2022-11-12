import editorSlice from "./editorSlice";
import { configureStore } from '@reduxjs/toolkit';
import previewerSlice from "./previewerSlice";


const store = configureStore({
    reducer: {
        editorReducer: editorSlice.reducer,
        previewerReducer: previewerSlice.reducer
    }
});

export default store;
