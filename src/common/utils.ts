import * as H from 'history';
import { FetchState } from 'react-use-fetch-ts';
import { TFunction } from 'i18next';

export const checkResponseErrors = (
  requestResult: FetchState<any, any>,
  t: TFunction,
  setErrorMessage: (value: any) => void,
  setHasError?: (hasError: any) => void
) => {
  const responseStatus = requestResult.responseStatus;
  const error = requestResult.error;
  const cause = requestResult.cause;
  const errorResult = requestResult.errorResult;

  const setError = setHasError ? setHasError : (hasError: any) => {};

  if (responseStatus && responseStatus > 0) {
    if (responseStatus >= 500) {
      setErrorMessage(t('Request failed. Please try again later.'));
      setError(true);
      console.log(`HTTP ${responseStatus}: `);
    } else if (responseStatus === 400) {
      setErrorMessage(t('Invalid input. Try with different parameters.'));
      setError(true);
    } else if (responseStatus > 400 || error) {
      setErrorMessage(t('Something went wrong'));
      setError(true);
      console.log(`Error: ${cause || errorResult}`);
    }
  } else if (error) {
    setErrorMessage(t('Unable to reach the server. Please try again later.'));
    setError(true);
  }
};

export const checkResponseErrorsWithLogout = (
  requestResult: FetchState<any, any>,
  t: TFunction,
  dispatch: React.Dispatch<any>,
  history: H.History<any>,
  setErrorMessage: (value: any) => void,
  setHasError?: (hasError: any) => void
) => {
  if(requestResult.responseStatus === 401) {
    dispatch({ type: 'LOGOUT_SUCCESS' });
    history.push('/login/');
  } else {
    checkResponseErrors(requestResult, t, setErrorMessage, setHasError);
  }
}

export const checkResponseLogout = (
  requestResult: FetchState<any, any>,
  dispatch: React.Dispatch<any>,
  history: H.History<any>,
) => {
  if(requestResult.responseStatus === 401) {
    dispatch({ type: 'LOGOUT_SUCCESS' });
    history.push('/login/');
  }
}
