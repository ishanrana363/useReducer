import { useContext } from "react";
import { CountContext } from "../App";
const ComponentE = () => {
    const countContext = useContext(CountContext)
    return (
        <div>
            ComponentD
            <h1>Count value of D : {countContext.countState} </h1>
        <button onClick={()=>{countContext.countDispatch("increment")}} >Increment</button>
        <button onClick={()=>{countContext.countDispatch("decrement")}} >decrement</button>
        <button onClick={()=>{countContext.countDispatch("reset")}} >reset</button>
        </div>
    );
};

export default ComponentE;