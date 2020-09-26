import React, { useReducer, createContext } from 'react';

interface SiteState {
  isLoggedIn: boolean;
}

const initialState: SiteState = {
  isLoggedIn: false,
};

type SiteAction = { type: 'LOGIN_SUCCESS' };

type SiteContext = [SiteState, React.Dispatch<SiteAction>];

export const SiteContext = createContext<SiteContext>(undefined!);

const reducer = (state: SiteState, action: SiteAction): SiteState => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return { ...state, isLoggedIn: true };
    default:
      return state;
  }
};

export const SiteContextProvider: React.FC = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <SiteContext.Provider value={[state, dispatch]}>
      {props.children}
    </SiteContext.Provider>
  );
};
