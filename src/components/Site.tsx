import React, {useContext} from 'react';

import {SiteContext} from '../context/SiteContext';
import {PublicSite} from './public/PublicSite';
import {MemberSite} from './member/MemberSite';

export function Site() {
    const [state] = useContext(SiteContext);

    return (
        <>
        {state.isLoggedIn ? <MemberSite /> : <PublicSite />}
        </>
    );
}
