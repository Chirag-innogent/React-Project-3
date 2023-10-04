import { createSlice } from "@reduxjs/toolkit";

const initialState={
    option:'home',
    id:''
}

const optionSlice = createSlice({
    name:"option",
    initialState,
    reducers:{
        addPage(state,action){
            state.option="add"
        } ,
        homePage(state,action){
            state.option="home"
        },
        updatePage(state,action){
            state.option="update";
            state.id=action.payload;
        },
    }
})
export const{addPage,homePage,updatePage} = optionSlice.actions;
export default optionSlice.reducer;