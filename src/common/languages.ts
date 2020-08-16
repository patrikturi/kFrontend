export type LanguageCode = 'en' | 'es' | 'pt';

export interface Language {
    name: string;
    flag: string;
};

export const languages: Record<LanguageCode, Language> = {
    'en': {name: 'English', flag: 'gb'},
    'es': {name: 'Spanish', flag: 'es'},
    'pt': {name: 'Portugese', flag: 'br'},
}
