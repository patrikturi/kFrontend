import React, { useContext } from 'react';

import { MemberSite } from './member/MemberSite';
import { PublicSite } from './public/PublicSite';
import { SiteContext } from '../context/SiteContext';

export function Site() {
  const [state] = useContext(SiteContext);

  return <>{state.isLoggedIn ? <MemberSite /> : <PublicSite />}</>;
}
