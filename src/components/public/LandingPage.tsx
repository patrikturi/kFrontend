import React, { useState } from 'react';
import { RegistrationForm } from './RegistrationForm';
import { LOGIN_ENABLED } from '../../Settings';
import { Trans, useTranslation } from 'react-i18next';

export const LandingPage = () => {
  const { t, i18n } = useTranslation();

  const [isRegistering, setRegistering] = useState(false);

  const handleRegisterNow = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    setRegistering(true);
  };

  const handleGoBack = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    setRegistering(false);
  };

  const welcomeText = (
    <>
      <p className="text-left">
        <Trans i18nKey="kSoccerIntroduction">
          <b>kSoccer</b> is a football mod in the game SecondLife. You can
          customize and play with your own football palyer. Be part of a team
          and compete for trophies. Make your name among other players and
          become a superstar!
        </Trans>
      </p>
      <p className="lead text-left">
        {t('Are you')}...
        <ul>
          <li>
            <Trans i18nKey="areYouNew">
              new? <br />{' '}
              <a
                href="https://secondlife.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Started in SecondLife here
              </a>
            </Trans>
          </li>
          <li>
            <Trans i18nKey="areYouAsecondlifePlayer">
              a SecondLife player? <br />{' '}
              <a href="/getting-started">Get Started with kSoccer here</a>
            </Trans>
          </li>
          <li>
            <Trans i18nKey="areYouAksoccerPlayer">
              a kSoccer player? <br />{' '}
              <a href="/leagues/1/results">Go to the League</a>
            </Trans>
          </li>
          {LOGIN_ENABLED && (
            <>
              <a href="/register" onClick={handleRegisterNow}>
                {t('Register now!')}
              </a>
              <br />
              <small>
                <Trans i18nKey="orLoginIfAlreadyRegistered2">
                  or <a href="/login">Log in</a> if you already have an account
                </Trans>
              </small>
            </>
          )}
        </ul>
      </p>
    </>
  );

  return (
    <>
      <div
        className="col-md-4 d-none d-md-block text-right"
        style={{ minWidth: 300 }}
      ></div>
      <div className="col-md-4">
        {isRegistering ? (
          <RegistrationForm onGoBack={handleGoBack} />
        ) : (
          welcomeText
        )}
      </div>
    </>
  );
};
