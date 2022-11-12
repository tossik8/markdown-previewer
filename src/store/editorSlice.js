import { createSlice } from "@reduxjs/toolkit";

const editorSlice = createSlice({
    name:"editor",
    initialState:{
        input: "# H1 Heading\n## H2 Heading\n[Random Quote Generator](https://random-quote-generator.azurewebsites.net/)\n\n`<div></div>`\n\n```\n\\\\this is a multiline block of code\nfunction anotherExample(firstLine, lastLine){\n  if (firstLine == '```' && lastLine == '```') {\n   return multiLineCode;\n  else\n    int k = 2\n  }\n}\n```\n- This is a list item\n- This is another list item\n1. Numbered list\n1. Numbered list\n> Your favourite quote\n\n![book](https://upload.wikimedia.org/wikipedia/commons/9/92/Open_book_nae_02.svg)\n\n**Bold**\r",
        isOpen: false
    },
    reducers:{
        changeInput(state, action){
            state.input = action.payload;
        },
        changeIsOpen(state){
            state.isOpen = !state.isOpen;
        }
    }
});
export const editorActions = editorSlice.actions;

export default editorSlice;
