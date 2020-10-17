// set up data layer
// need to track the basket and user info

import React, { createContext, useContext, useReducer } from "react";

// prepares the data layer
export const StateContext = createContext();

// wrap our app and provide data layer (provider)
export const StateProvider = ({ reducer, initialState, children }) => (
    // use data layer as a place to store info
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// pull information from the data layer
// This is how we use it inside a component
export const useStateValue = () => useContext(StateContext);
