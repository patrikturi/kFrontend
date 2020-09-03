import React from 'react';
import styled from 'styled-components';
import { Dropdown, NavDropdown } from 'react-bootstrap';
import { LanguageCode, languages } from '../../../common/languages';
import { useTranslation } from 'react-i18next';

const StyledNavDropdown = styled(NavDropdown)`
  height: 24px !important;
  padding-top: 8px;
`;

const StyledCurrentLanguageComp = styled.span`
  height: 24px;
  font-size: 24px!important;
  padding 0;
`;

const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();

  const currentCode = (i18n.language || 'en') as LanguageCode;
  const currentLanguage = languages[currentCode];

  const currentLanguageComp = (
    <StyledCurrentLanguageComp
      className={`flag-icon flag-icon-${currentLanguage.flag}`}
    />
  );

  const handleLanguageChange = (
    eventKey: any,
    event: React.SyntheticEvent<unknown>
  ) => {
    const target = event.target as HTMLElement;
    const newLanguageName = target.textContent?.trim();
    const newLanguageCode = Object.keys(languages).find((key) => {
      const k = key as LanguageCode;
      return languages[k].name === newLanguageName;
    });
    i18n.changeLanguage(newLanguageCode!);
  };

  const languageMenuItems = Object.entries(languages)
    .filter(([code, _lang]) => code !== currentCode)
    .map(([code, lang]) => (
      <Dropdown.Item key={code} onSelect={handleLanguageChange}>
        <span className={`flag-icon flag-icon-${lang.flag}`} /> {lang.name}
      </Dropdown.Item>
    ));

  return (
    <StyledNavDropdown title={currentLanguageComp}>
      {languageMenuItems}
    </StyledNavDropdown>
  );
};

export default LanguageSelector;
