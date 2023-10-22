// import { useReducer } from "react";
// import ComponentA from "./component/ComponentA"
// import ComponentB from "./component/ComponentB"
// import ComponentC from "./component/ComponentC"
// import React from "react";
// export const CountContext = React.createContext()
// const initialState = 0;
// const reducer = (state,action)=>{
//     switch(action){
//         case "increment":
//             return state+1;
//         case "decrement":
//             return state-1;
//         case "reset":
//             return initialState;
//         default:
//             return state
//     }
// }
// const App = () => {
//     const [count,dispatch] = useReducer(reducer,initialState)
//     return (
//         <div>
//             {/* <h1>Count : {count} </h1> */}
//             <CountContext.Provider value={{countState:count,countDispatch:dispatch}}>
//                 <ComponentA/>
//                 <ComponentB/>
//                 <ComponentC/>
//             </CountContext.Provider>
//         </div>
//     );
// };



// export default App;


import DataFetching from "./DataFetching/DataFetching";

const App = () => {
    return (
        <div>
            <DataFetching/>
        </div>
    );
};

export default App;