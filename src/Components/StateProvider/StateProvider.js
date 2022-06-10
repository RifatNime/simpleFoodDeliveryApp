import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();
//our app is children here...app k wrap kortesi data layer diye without parants help
//reducer, initialState holo data layer provider
export const StateProvider = ({ reducer, initialState, children }) => (
    //data intialise hosse
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);
//data layer a data pull kore antese 
export const useStateValue = () => useContext(StateContext);