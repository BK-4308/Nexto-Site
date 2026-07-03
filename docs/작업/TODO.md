# TODO — (주)넥스투 홈페이지

> 살아있는 작업 추적. 완료 항목은 `[x]` 체크, 종료된 Phase는 `완료_이력.md`로 이관.
> 최종 갱신: 2026-07-03 (원격 push 완료)

---

## ▶ 세션 재시작 후 여기서 이어서 (2026-07-03)

**현재 상태**
- 배포처 확정: **Cloudflare Pages** / 문의 폼: **Web3Forms**(env `PUBLIC_WEB3FORMS_KEY`). 상세 → [06_배포.md](../설계/06_배포.md)
- **git init 완료(`main` 브랜치)**. `.env` 등 민감파일 없음 확인. `.gitignore` OK.
- [x] **원격 연결·첫 커밋·push 완료 (2026-07-03)** — HTTPS+PAT(osxkeychain, user BK-4308)로 push. `origin/main` 추적 설정됨.
- GitHub 저장소: `https://github.com/BK-4308/Nexto-Site.git`
- ⚠️ **CI 워크플로 커밋 보류**: keychain PAT에 `workflow` 스코프 없어 `.github/workflows/actions.yaml` push 거부됨 → `.gitignore`에 `.github/workflows/` 추가하고 커밋에서 제외(**파일은 로컬 유지**). 재추가하려면: (a) PAT에 workflow 스코프 부여 후 `.gitignore`에서 해당 줄 제거→커밋, 또는 (b) GitHub 웹UI에서 직접 워크플로 추가(웹은 스코프 무관). 배포는 Cloudflare Pages 자체 빌드라 기능 영향 없음.
- ℹ️ `.claude/settings.local.json`도 머신 로컬 설정이라 `.gitignore` 처리(커밋 제외).

**그다음 남은 작업**
- [x] **무료 스톡 이미지 교체 완료 (2026-07-03)** — Unsplash 임시 URL 전량 제거 → **산업/플랜트 일반** 이미지 8종을 `src/assets/images/`에 로컬화(Astro webp 최적화). 홈/회사소개/서비스 Hero·콘텐츠·서비스4종·블로그2건 매핑, 빌드 검증(12페이지). ⚠️ 후속: 각 이미지 라이선스/출처(Unsplash 무료 라이선스) 최종 확인.
- [x] **OG 이미지·favicon 넥스투용 제작 완료 (2026-07-03)** — favicon.svg/ico/apple-touch-icon "N" 모노그램(브랜드 블루 #1C75BC), Safari mask-icon 색상 교정, OG 이미지 `og-nexto.png`(1200×630, NEXTO 워드마크+태그라인+서비스) 제작 후 `config.yaml` openGraph 반영. AstroWind 데모 이미지(default/hero-image/app-store/google-play) 정리. 빌드 검증(12페이지).
- (사용자) Web3Forms 키 발급 · Cloudflare Pages 연결 · nexto.co.kr 도메인(www 여부) → `config.yaml` site URL 반영
- [x] **연혁 섹션 제거 (2026-07-03)** — 실연도 미확정으로 회사소개에서 연혁(Steps2) 블록 삭제. **향후 실데이터 확보 시 재추가 예정.**

---

> ⚠️ **방향 전환(2026-06-18)**: 자체 컴포넌트 구현 대신 **무료 템플릿 AstroWind 채택 후 개조**로 전환.
> 아래 P0~P2의 "자체 구현" 항목들은 초기 버전 산출물이며, 현재 코드베이스는 AstroWind 기반으로 교체됨.
> 신규 진행 상황은 아래 **"AstroWind 개조"** 섹션 참조.

---

## 진행 중: AstroWind 고도화(컨설팅 룩) + 콘텐츠 제작

> **방향 확정(2026-07-03)**: 유료 템플릿(Consultech) 구매 검토했으나 비용(₩75,678~) 대비 불필요로 판단.
> **현재 무료 AstroWind(MIT) 기반을 컨설팅/IT 기업 룩으로 고도화**하기로 결정. 유료 템플릿 코드/디자인 복제는 하지 않음(저작권).
> 콘텐츠는 참조 사이트(Miracom, EMAX)의 **업계 관행 구조만** 참조해 신규 제작 → [05_콘텐츠_초안.md](../설계/05_콘텐츠_초안.md).

- [x] 참조 사이트 2곳(Miracom/EMAX) 구조·메시지 분석
- [x] 콘텐츠 맵 + 홈 카피 초안 작성 ([05_콘텐츠_초안.md](../설계/05_콘텐츠_초안.md))
- [x] 홈 카피 초안 사용자 확정
- [x] 서비스 5종(S1~S5) 상세 카피 확장 + 회사소개/문의/적용산업 카피
- [x] 현재 사이트 상태 점검(페이지/컴포넌트 인벤토리) → 고도화 계획 확정
- [x] 홈: Stats 실수치 반영(고객사 15) + **적용 산업 섹션 추가**(빌드 검증 완료)
- [x] 홈: 고객사례 섹션 추가(실사례 4건: 대한사료·고려산업·부국사료·하림, 빌드 검증 완료)
- [x] 홈: 적용 분야 섹션 재조정(식품·사료 강점 + 제조 전반 확장, 무관 산업 제외, 빌드 검증)
- [x] 서비스 상세 페이지 반영 — 데이터 주도(`src/data/services.ts`) + `/services/[slug]` 4종(산업자동화·MES·스마트팩토리·AI), 목록/홈 카드 → 상세 링크 연결, 빌드 검증(12페이지)
- [x] 회사소개: 설립 2018 반영(연혁 2016→2018 수정), Stats 동기화(고객사 15), 연혁 내용 실도메인화
- [x] 회사소개: 연혁 섹션 제거(실연도 미확정, 향후 재추가) — '10+년' vs 설립2018 정합성은 재추가 시 함께 결정 (2026-07-03)
- [x] 문의 페이지: 폼 전송 동작(문의 유형 select + 회사명 + Mobile 번호), 빌드/HTML 검증
- [x] 배포처 확정: **Cloudflare Pages** → 폼 **Web3Forms**로 교체(환경변수 `PUBLIC_WEB3FORMS_KEY`), 배포 가이드 [06_배포.md](../설계/06_배포.md)
- [ ] (사용자) Web3Forms 키 발급 + GitHub 저장소 + Cloudflare Pages 연결 + nexto.co.kr 도메인 (06_배포.md §6 체크리스트)
- [x] 무료 스톡 이미지 선별·삽입 (`src/assets/images/`) — 산업/플랜트 일반 8종 로컬화, 빌드 검증(2026-07-03)
- [x] 플레이스홀더(`[확인 필요]`) 점검 — 실콘텐츠용 플레이스홀더 없음 확인(폼 field placeholder·프레임워크 주석만 존재), 연락처 실값 확인 (2026-07-03)
- [x] 빌드 검증 — 12페이지 정상 (2026-07-03)
- [x] **정적 반응형·접근성 감사 + 개선 (2026-07-03)** — theme-color(브랜드/다크), 본문 바로가기(skip-to-content) 링크, 연락처 죽은 링크(`href="#"` 5곳) 제거. 이미지 반응형(w-full/width:100%)·viewport·모바일 메뉴·alt·폼 라벨·heading 계층 정상 확인.
- [ ] **반응형 실브라우저 시각 점검** — 자동화 도구(playwright) 미설치. 설치 후 스크린샷 or 사용자 수동 확인 필요 (특히 회사소개 Hero의 세로형 plant-structure 이미지 레이아웃)

---

## (보류) AstroWind 개조

- [x] AstroWind 이식 (docs/CLAUDE.md/.claude 보존) + 의존성 설치
- [x] 브랜딩: `config.yaml`(사이트명/SEO/언어 ko), 블루 컬러(`CustomStyles.astro`), Pretendard 폰트
- [x] `navigation.ts` 한글 메뉴 + 넥스투 연락처 푸터
- [x] `Logo.astro` NEXTO 워드마크(블루 "T")
- [x] 홈/회사소개/제품·서비스/문의 페이지 넥스투 콘텐츠
- [x] 데모 페이지 제거(homes/landing/pricing/영문 terms·privacy), 넥스투 블로그 글 2건
- [x] 한글 태그/카테고리 슬러그 이슈 → 블로그 tag/category 페이지 비활성화
- [x] 빌드 검증 (8 페이지 정상)
- [ ] 실데이터 교체(연혁/실적 숫자/서비스 상세/이미지)
- [x] OG 이미지·favicon 넥스투용 제작 — "N" 모노그램 파비콘 + og-nexto.png(2026-07-03)
- [ ] 배포 도메인 확정 후 `config.yaml` site URL 반영
- [x] 접근성 정적 감사 + 개선(theme-color/skip-link/죽은 링크 제거), 반응형 정적 확인 (2026-07-03)
- [ ] 반응형 실제 브라우저 시각 점검 (playwright 설치 or 수동)

---

## (초기 자체 구현 버전 — 교체됨) 완료: P0 — 설계 & 스캐폴드

- [x] 요구사항 확인 (목적/스택/디자인/페이지/확장전략/다국어)
- [x] 설계 문서 작성 (01_PRD, 02_IA_사이트맵, 03_디자인시스템, 04_아키텍처)
- [x] Astro + Tailwind + TypeScript 프로젝트 스캐폴드
- [x] `src/config/site.ts` 브랜드/연락처/내비 단일 설정
- [x] `tailwind.config.mjs` 브랜드 컬러/폰트 토큰
- [x] `src/styles/global.css` (Tailwind + Pretendard)
- [x] Content Collections 스키마(`src/content/config.ts`)
- [x] `npm run build` 최초 검증 (11 페이지 빌드 성공)

## 완료: P1 — 공통 레이아웃 & 홈
- [x] BaseLayout (head/SEO + Header + Footer)
- [x] Header (로고 + 내비 + 모바일 메뉴 + 문의 CTA)
- [x] Footer (회사정보/연락처/메뉴)
- [x] 공통 컴포넌트: Hero, SectionHeading, Card, Button, CTASection, Icon, ContactForm
- [x] 홈(index) — Hero / 핵심사업 / 강점 / 대표서비스 / 최신소식 / CTA

## 완료: P2 — 콘텐츠 페이지
- [x] /about 회사소개
- [x] /services 목록 + /services/[slug] 상세
- [x] /blog 목록 + /blog/[slug] 상세
- [x] /contact 문의 폼 + 연락처 + 오시는 길
- [x] 샘플 콘텐츠(services 4종, blog 2건)

## 진행 중: P3 — SEO & 마무리
- [x] sitemap / robots.txt
- [x] Organization JSON-LD
- [x] i18n 라벨 사전(ko 채움, en 골격)
- [x] favicon
- [ ] OG 이미지(og-image.png) 제작 — 현재 경로만 지정됨
- [ ] 실제 콘텐츠 교체(연혁/숫자/서비스 상세 실데이터)
- [x] 접근성 정적 감사 + 개선(theme-color/skip-link/죽은 링크 제거), 반응형 정적 확인 (2026-07-03)
- [ ] 반응형 실제 브라우저 시각 점검 (playwright 설치 or 수동)
- [ ] 배포 도메인 확정 후 site URL 반영

## 추후: P4 (별도 논의)
- [ ] 영문 콘텐츠 작성
- [ ] 문의 폼 백엔드(서버리스/이메일 API)
- [ ] 신규 사업 사이트 클론 가이드 실행
