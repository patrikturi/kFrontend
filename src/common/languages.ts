export type LanguageCode = 'en' | 'es' | 'pt';

export interface Language {
    name: string;
    flag: string;
};

export const languages: Record<LanguageCode, Language> = {
    'en': {name: 'English', flag: 'gb'},
    'es': {name: 'Spanish', flag: 'es'},
    'pt': {name: 'Portuguese', flag: 'br'},
}
