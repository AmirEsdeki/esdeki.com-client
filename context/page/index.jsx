import React from "react";
import { reducer, initialState } from "./reducer";

export const PageContext = React.createContext({
  state: initialState,
  dispatch: () => null,
});

export const PageProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <PageContext.Provider value={[state, dispatch]}>
      {children}
    </PageContext.Provider>
  );
};
