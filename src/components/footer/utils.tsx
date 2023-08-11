const MUN_URL = 'https://mun.money/';
const MUN_STAKING_URL = 'https://staking.mun.money/';
const MUN_MEDIUM_URL = 'https://medium.com/@munblockchain';
const MUN_TG_URL = 'https://t.me/munblockchain';

const BIG_DIPPER_URL = 'https://bigdipper.live';

export const donateLink = {
  key: 'donate',
  url: '',
};

export const footerLinks = [
  {
    key: 'company',
    links: [
      {
        key: 'mun',
        url: MUN_URL,
      },
      {
        key: 'stakeNow',
        url: MUN_STAKING_URL,
      },
      {
        key: 'contact',
        url: MUN_TG_URL,
      },
      {
        key: 'blog',
        url: MUN_MEDIUM_URL,
      },
    ],
  },
  {
    key: 'bigDipper',
    links: [
      {
        key: 'about',
        url: `${BIG_DIPPER_URL}/#about`,
      },
      {
        key: 'faq',
        url: `${BIG_DIPPER_URL}/faq`,
      },
      {
        key: 'termsAndConditions',
        url: `${BIG_DIPPER_URL}/terms-and-conditions`,
      },
      {
        key: 'privacyPolicy',
        url: `${BIG_DIPPER_URL}/privacy-policy`,
      },
    ],
  },
];
