import React, { useReducer, createContext } from 'react';

interface SiteState {
  isLoggedIn: boolean;
  isProfileLoaded: boolean;
  userId?: number;
  username?: string;
  displayName?: string;
  availableForTransfer?: boolean;
  profilePictureUrl?: string;
  introduction?: string;
  kcoins?: number;
  goals?: number;
  assists?: number;
  matches?: number;
  dateJoined?: string;
}

const initialState: SiteState = {
  isLoggedIn: false,
  isProfileLoaded: false,
};

type SiteAction = {
  type: 'LOGIN_SUCCESS' | 'LOGOUT_SUCCESS' | 'SET_PROFILE' | 'UPDATE_PROFILE';
  data?: any;
};

type SiteContext = [SiteState, React.Dispatch<SiteAction>];

export const SiteContext = createContext<SiteContext>(undefined!);

const updateProfile = (state: SiteState, data: any): SiteState => {
  const dataMod = { ...data };
  delete dataMod.id;
  delete dataMod.display_name;
  delete dataMod.available_for_transfer;
  delete dataMod.profile_picture_url;
  delete dataMod.date_joined;

  if ('id' in data) {
    dataMod.userId = data.id;
  }
  if ('display_name' in data) {
    dataMod.displayName = data.display_name;
  }
  if ('available_for_transfer' in data) {
    dataMod.availableForTransfer = data.available_for_transfer;
  }
  if ('profile_picture_url' in data) {
    dataMod.profilePictureUrl = data.profile_picture_url;
  }
  if ('date_joined' in data) {
    dataMod.dateJoined = data.date_joined;
  }
  return {
    ...state,
    ...dataMod,
  };
};

const reducer = (state: SiteState, action: SiteAction): SiteState => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      localStorage.setItem('userId', action.data.id);
      localStorage.setItem('displayName', action.data.display_name);
      localStorage.setItem('profilePictureUrl', action.data.profile_picture_url);
      return updateProfile(state, {...action.data, isLoggedIn: true});
    case 'LOGOUT_SUCCESS':
      localStorage.removeItem('userId');
      localStorage.removeItem('displayName');
      localStorage.removeItem('profilePictureUrl');
      return { isLoggedIn: false, isProfileLoaded: false };
    case 'SET_PROFILE':
      return updateProfile(state, {...action.data, isProfileLoaded: true});
    case 'UPDATE_PROFILE':
      return updateProfile(state, action.data);
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
