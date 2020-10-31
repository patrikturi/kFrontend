import React, { useReducer, createContext } from 'react';

interface SiteState {
  isLoggedIn: boolean;
  isLoading: boolean;
  errorMessage: string;
  isProfileLoaded: boolean;
  csrfToken: string;
  userId?: number;
  username?: string;
  displayName?: string;
  availableForTransfer?: boolean;
  profilePictureUrl?: string;
  introduction?: string;
  biography?: string;
  kcoins?: number;
  goals?: number;
  assists?: number;
  matches?: number;
  dateJoined?: string;
}

const initialState: SiteState = {
  isLoggedIn: false,
  isLoading: true,
  errorMessage: '',
  isProfileLoaded: false,
  csrfToken: '',
};

type SiteAction = {
  type: 'LOGIN_SUCCESS' | 'LOGOUT_SUCCESS' | 'SET_PROFILE' | 'UPDATE_PROFILE' | 'SET_CSRF_TOKEN' | 'SET_LOADING' | 'CLEAR_LOADING' | 'SET_ERROR_MESSAGE';
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
  delete dataMod.user_details;

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
  if('user_details' in data && data.user_details.length > 0) {
    if('biography' in data.user_details[0]) {
      dataMod.biography = data.user_details[0].biography;
    }
  }
  return {
    ...state,
    ...dataMod,
  };
};

const reducer = (state: SiteState, action: SiteAction): SiteState => {
  switch (action.type) {
    case 'SET_CSRF_TOKEN':
      localStorage.setItem('csrfToken', action.data.csrftoken);
      return state;
    case 'LOGIN_SUCCESS':
      localStorage.setItem('csrfToken', action.data.csrftoken);
      localStorage.setItem('userId', action.data.id);
      localStorage.setItem('displayName', action.data.display_name);
      localStorage.setItem('profilePictureUrl', action.data.profile_picture_url);
      return updateProfile(state, {...action.data, isLoggedIn: true});
    case 'LOGOUT_SUCCESS':
      localStorage.removeItem('csrfToken');
      localStorage.removeItem('userId');
      localStorage.removeItem('displayName');
      localStorage.removeItem('profilePictureUrl');
      return { isLoggedIn: false, isLoading: true, errorMessage: '', isProfileLoaded: false, csrfToken: '' };
    case 'SET_PROFILE':
      return updateProfile(state, {...action.data, isProfileLoaded: true});
    case 'UPDATE_PROFILE':
      return updateProfile(state, action.data);
    case 'SET_LOADING':
      return {...state, isLoading: true}
    case 'CLEAR_LOADING':
      return {...state, isLoading: false}
    case 'SET_ERROR_MESSAGE':
      return {...state, errorMessage: action.data}
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
