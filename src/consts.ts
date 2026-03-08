export const SITE_TITLE = 'walien.tech';
export const SITE_DESCRIPTION = '';
export const OWNER = 'Elian ORIOU';
export const FOOTER_TEXT = '© Elian ORIOU - All rights reserved.';
export const AVATAR_URL = 'https://avatars.githubusercontent.com/u/1632535?s=400&v=4';

export interface ExternalLink {
    type: 'github' | 'linkedin' | 'email';
    url: string;
}

export const links: ExternalLink[] = [
    {
        type: 'github',
        url: 'https://github.com/walien'
    },
    {
        type: 'linkedin',
        url: 'https://www.linkedin.com/in/eoriou'
    },
    {
        type: 'email',
        url: 'mailto:contact@walien.tech'
    }
];
