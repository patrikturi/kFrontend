import { defaultGetInit, fetchConfig } from 'react-use-fetch-ts';

const BACKEND_URL = 'https://backend.ksoccersl.com';
const IS_PRODUCTION = process.env.NODE_ENV !== 'development';

const API_PREFIX = IS_PRODUCTION ? BACKEND_URL : '';

export interface SearchResult {
  id: number;
  username: string;
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
