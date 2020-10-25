import {
  defaultGetInit,
  fetchConfig,
  defaultFormDataPostInit,
  defaultPostInit,
} from 'react-use-fetch-ts';


const API_PREFIX = 'https://backend.ksoccersl.com';

export interface SearchResult {
  id: number;
  username: string;
  display_name: string;
  profile_picture_url: string;
  introduction: string;
}

export const searchConfig = fetchConfig({
  prepare: (term: string) => [
    `${API_PREFIX}/api/v1/users/search/?username=${term}`,
    defaultGetInit,
  ],
  getResult: (json: any) => json as SearchResult[],
  getError: (json: any) => json as any,
});

export interface UserDetails {
  biography?: string;
  updated_at?: string;
}

export interface PlayerProfile {
  id: number;
  username: string;
  display_name: string;
  profile_picture_url: string;
  introduction: string;
  user_details: UserDetails[];
  kcoins: number;
  goals: number;
  assists: number;
  matches: number;
  available_for_transfer: boolean;
  date_joined: string;
}

export const getProfileConfig = fetchConfig({
  prepare: (id: string) => [
    `${API_PREFIX}/api/v1/users/profile/${id}/`,
    defaultGetInit,
  ],
  getResult: (json: any) => json as PlayerProfile,
  getError: (json: any) => json as any,
});

export const getMyProfileConfig = fetchConfig({
  prepare: () => [
    `${API_PREFIX}/api/v1/users/me/profile/`,
    defaultGetInit,
  ],
  getResult: (json: any) => json as PlayerProfile,
  getError: (json: any) => json as any,
});

function initFormPost(
  formData: FormData,
  csrf: string
): RequestInit {
  const entries = Array.from(formData.entries());
  if (entries.some((entry) => entry[1] instanceof File)) {
    return {
      ...defaultFormDataPostInit,
      body: formData,
    };
  }
  const allHeaders: { [key: string]: string } = {
    Accept: 'application/json',
    'Content-Type': 'application/x-www-form-urlencoded',
    'X-CSRFToken': csrf,
  };
  return {
    ...defaultPostInit,
    body: entries
      .map(([key, value]) => `${key}=${encodeURIComponent(value.toString())}`)
      .join('&'),
    headers: allHeaders,
  };
}

export const loginConfig = fetchConfig({
  prepare: (formData: FormData, csrf: string) => [
    `${API_PREFIX}/api/v1/users/login/`,
    {
      ...initFormPost(formData, csrf),
      method: 'POST',
    },
  ],
  getResult: (json: any) => json as any,
  getError: (json: any) => json as any,
});

export const patchProfileConfig = fetchConfig({
  prepare: (id: number, body: object, csrf: string) => [
    `${API_PREFIX}/api/v1/users/profile/${id}/`,
    {
      method: 'PATCH',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-CSRFToken': csrf,
      },
      body: JSON.stringify(body),
    },
  ],
  getResult: (json: any) => json as any,
  getError: (json: any) => json as any,
});

export const logoutConfig = fetchConfig({
  prepare: () => [`${API_PREFIX}/api/v1/users/logout/`, defaultGetInit],
  getResult: (json: any) => json as any,
  getError: (json: any) => json as any,
});
