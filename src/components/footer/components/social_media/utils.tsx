import React from 'react';
import {
  TelegramIcon,
  LinkedinIcon,
  TwitterIcon,
  GithubIcon,
  DiscordIcon,
} from '@icons';

export const socialMediaLinks:{
  component: React.ReactNode;
  className: string;
  url: string;
}[] = [
  {
    component: <TelegramIcon />,
    className: 'telegram',
    url: 'https://t.me/munchain',
  },
  {
    component: <DiscordIcon />,
    className: 'linkedin',
    url: 'https://dsc.gg/munmoney',
  },
  {
    component: <TwitterIcon />,
    className: 'twitter',
    url: 'https://twitter.com/munblockchain',
  },
  {
    component: <GithubIcon />,
    className: 'github',
    url: 'https://github.com/munblockchain',
  },
];
