# TODO — (주)넥스투 홈페이지

> 살아있는 작업 추적. 완료 항목은 `[x]` 체크, 종료된 Phase는 `완료_이력.md`로 이관.
> 최종 갱신: 2026-07-03

---

## ▶ 세션 재시작 후 여기서 이어서 (2026-07-03)

**현재 상태**
- 배포처 확정: **Cloudflare Pages** / 문의 폼: **Web3Forms**(env `PUBLIC_WEB3FORMS_KEY`). 상세 → [06_배포.md](../설계/06_배포.md)
- **git init 완료(`main` 브랜치)**. `.env` 등 민감파일 없음 확인. `.gitignore` OK.
- ⛔ 아직 안 됨: **원격 연결·커밋·push** (세션 중 권한 확인창 이슈로 중단 → 재시작으로 해소)
- GitHub 저장소: `https://github.com/BK-4308/Nexto-Site.git`

**재시작 직후 실행할 것 (git 연결·push)**
1. `git remote add origin https://github.com/BK-4308/Nexto-Site.git`
2. `git add -A` → `git commit` (첫 커밋)
3. `git push -u origin main`
   - ⚠️ push 인증 방식 사용자에게 확인 필요: `gh` 로그인 / SSH / PAT 중 무엇인지
   - 원격에 초기 커밋(README 등) 있으면 `git pull --rebase origin main` 후 push

**그다음 남은 작업**
- 무료 스톡 이미지 교체(사료·제조 도메인, Hero/서비스/회사소개 — 현재 Unsplash 임시 URL) → `src/assets/`
- OG 이미지·favicon 넥스투용 제작
- (사용자) Web3Forms 키 발급 · Cloudflare Pages 연결 · nexto.co.kr 도메인(www 여부) → `config.yaml` site URL 반영
- (선택) 연혁 마일스톤 실제 연도·내용 확정(현재 2019/2021/2023 임시)

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
- [ ] 회사소개: 연혁 마일스톤 실제 연도·내용 확정(현재 2019/2021/2023 임시), '10+년' vs 설립2018 정합성 결정
- [x] 문의 페이지: 폼 전송 동작(문의 유형 select + 회사명 + Mobile 번호), 빌드/HTML 검증
- [x] 배포처 확정: **Cloudflare Pages** → 폼 **Web3Forms**로 교체(환경변수 `PUBLIC_WEB3FORMS_KEY`), 배포 가이드 [06_배포.md](../설계/06_배포.md)
- [ ] (사용자) Web3Forms 키 발급 + GitHub 저장소 + Cloudflare Pages 연결 + nexto.co.kr 도메인 (06_배포.md §6 체크리스트)
- [ ] 무료 스톡 이미지 선별·삽입 (`src/assets/images/`)
- [ ] 플레이스홀더(`[확인 필요]`) 실데이터 교체
- [ ] 빌드 검증

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
- [ ] OG 이미지·favicon 넥스투용 제작
- [ ] 배포 도메인 확정 후 `config.yaml` site URL 반영
- [ ] 반응형·접근성 실제 브라우저 점검

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
- [ ] 반응형·접근성 실제 브라우저 점검
- [ ] 배포 도메인 확정 후 site URL 반영

## 추후: P4 (별도 논의)
- [ ] 영문 콘텐츠 작성
- [ ] 문의 폼 백엔드(서버리스/이메일 API)
- [ ] 신규 사업 사이트 클론 가이드 실행
