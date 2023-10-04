import Update from "./Update";
import Home from "./Home";
import Add from "./Add";
import { useSelector } from "react-redux";

const Display =(props)=>{
    const option= useSelector((state)=>state.optionState);
    return (
        <>
        {option.option==="home"?<Home />:null}
        {option.option==="show"?<Home />:null}
        {option.option==="update"?<Update />:null}
        {option.option==="add"?<Add />:null}
        </>
    );
}
export default Display;