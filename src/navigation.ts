import { getPermalink, getBlogPermalink } from './utils/permalinks';

// ─────────────────────────────────────────────────────────────
// 넥스투 글로벌 내비게이션 / 푸터
// 메뉴·연락처를 이 파일에서 관리한다(클론 시 교체 지점).
// ─────────────────────────────────────────────────────────────

export const headerData = {
  links: [
    {
      text: '회사소개',
      href: getPermalink('/about'),
    },
    {
      text: '제품·서비스',
      href: getPermalink('/services'),
    },
    {
      text: '소식',
      href: getBlogPermalink(),
    },
    {
      text: '문의',
      href: getPermalink('/contact'),
    },
  ],
  actions: [{ text: '문의하기', href: getPermalink('/contact'), variant: 'primary' }],
};

export const footerData = {
  links: [
    {
      title: '회사',
      links: [
        { text: '회사소개', href: getPermalink('/about') },
        { text: '제품·서비스', href: getPermalink('/services') },
        { text: '소식', href: getBlogPermalink() },
        { text: '문의', href: getPermalink('/contact') },
      ],
    },
    {
      title: '사업 영역',
      links: [
        { text: '산업 자동화', href: getPermalink('/services') },
        { text: 'MES', href: getPermalink('/services') },
        { text: '스마트 팩토리', href: getPermalink('/services') },
        { text: 'AI 솔루션', href: getPermalink('/services') },
      ],
    },
    {
      title: '연락처',
      links: [
        { text: '서울특별시 송파구 송파대로28길 12, 607호' },
        { text: '(가락동, 밀리아나 1차)' },
        { text: 'Tel. 02-404-3350', href: 'tel:02-404-3350' },
        { text: 'Fax. 02-404-3351' },
        { text: 'gbgyu@naver.com', href: 'mailto:gbgyu@naver.com' },
      ],
    },
  ],
  secondaryLinks: [],
  socialLinks: [{ ariaLabel: 'Email', icon: 'tabler:mail', href: 'mailto:gbgyu@naver.com' }],
  footNote: `
    © ${new Date().getFullYear()} 주식회사 넥스투 (NEXTO). All rights reserved.
  `,
};
