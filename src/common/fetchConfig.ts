import { defaultGetInit, fetchConfig } from 'react-use-fetch-ts';

export interface SearchResult {
  id: number;
  username: string;
  profile_picture_url: string;
  introduction: string;
}

export const searchConfig = fetchConfig({
  prepare: (term: string) => [
    `/api/v1/users/search/?username=${term}`,
    defaultGetInit,
  ],
  getResult: (json: any) => json as SearchResult[],
  getError: (json: any) => json as any,
});
