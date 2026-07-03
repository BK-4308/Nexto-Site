/**
 * 넥스투 서비스 상세 데이터 (단일 소스)
 * -------------------------------------------------------------
 * - 홈 '핵심 사업 영역'(4종)과 동일한 taxonomy로 일관성 유지한다.
 * - 서비스 추가/수정 시 이 배열만 변경하면 목록(services.astro)과
 *   상세 페이지([slug].astro)에 일괄 반영된다. (변경 최소화 설계)
 * - 카피는 넥스투 실제 도메인(식품·사료 제조 중심 + 제조 전반)에 맞춘다.
 *   실적 수치·고객사 등 사실 정보는 임의로 만들지 않는다.
 */

/** 서비스 상세 한 건의 구조 */
export interface ServiceDetail {
  /** URL 슬러그 (/services/{slug}) */
  slug: string;
  /** 서비스명 */
  title: string;
  /** tabler 아이콘 이름 (astro-icon) */
  icon: string;
  /** 목록 카드용 한 줄 요약 */
  summary: string;
  /** 상세 Hero 서브카피 */
  intro: string;
  /** 문제 정의 (고객이 겪는 현장 문제) */
  problem: string;
  /** 넥스투 접근 단계 */
  approach: { title: string; description: string }[];
  /** 주요 범위 (제공 항목) */
  scope: string[];
  /** 기대 효과 */
  effects: string[];
  /** 대표 이미지 (임시 무료 스톡 — 추후 실사진 교체) */
  image: string;
}

/** 서비스 상세 목록 (표시 순서 = 배열 순서) */
export const services: ServiceDetail[] = [
  {
    slug: 'industrial-automation',
    title: '산업 자동화',
    icon: 'tabler:cpu',
    summary: 'PLC·모션 제어 기반 설비 자동화와 검사 자동화로 생산성과 품질을 높입니다.',
    intro: '반복·위험 공정을 자동화 라인으로 전환해 생산성과 안전성을 동시에 끌어올립니다.',
    problem:
      '수작업에 의존하는 공정은 생산 편차와 병목, 안전 리스크가 크고, 숙련 인력 확보도 갈수록 어려워집니다. 특히 분쇄·배합·계량·포장·출하처럼 반복성이 높은 공정일수록 자동화 효과가 큽니다.',
    approach: [
      { title: '공정 분석', description: '현장 공정을 분석해 자동화 우선순위와 범위를 정합니다.' },
      { title: '자동화 설계', description: '설비·제어(PLC)·센서 구성을 설계합니다.' },
      { title: '구축 · 시운전', description: '라인을 구축하고 시운전으로 안정성을 검증합니다.' },
      { title: '안정화', description: '운영 초기 이슈를 잡아 안정 가동에 이르게 합니다.' },
    ],
    scope: [
      '자동화 라인 설계 및 구성',
      'PLC·모션 제어 프로그래밍',
      '센서·계량·계근 연동',
      '벌크·포장·출하 자동화',
      '설비 인터페이스·라인 통합',
    ],
    effects: ['생산성 향상', '품질 편차 감소', '현장 안전 강화', '인력 의존도 완화'],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1740&q=80',
  },
  {
    slug: 'mes',
    title: 'MES (생산 실행 시스템)',
    icon: 'tabler:layout-dashboard',
    summary: '현장 데이터를 실시간 수집·관리해 생산 흐름을 한눈에 보이게 만듭니다.',
    intro: '흩어진 생산·출하 데이터를 하나로 연결해, 보이지 않던 현장을 실시간으로 가시화합니다.',
    problem:
      '생산 실적·설비·품질 데이터가 수기나 엑셀로 분산되면 실시간 파악이 어렵고, 문제는 발생한 뒤에야 대응하게 됩니다. 출하·재고 정보가 생산과 따로 놀면 관리 비용도 커집니다.',
    approach: [
      { title: '현장 진단', description: '데이터 흐름과 관리 포인트를 진단합니다.' },
      { title: '데이터 표준화', description: '설비·공정 데이터를 표준화·수집합니다.' },
      { title: '시스템 구축', description: '생산 실행·추적 기능을 설계·구축합니다.' },
      { title: '가시화', description: '실적·가동 현황을 대시보드로 제공합니다.' },
    ],
    scope: [
      '생산 실적 집계·가동률 모니터링',
      '작업 지시·공정 진척 관리',
      '품질·불량 이력 추적',
      '출하·재고 데이터 관리',
      'ERP(SAP 등) 데이터 인터페이스',
    ],
    effects: ['생산 가시성 확보', '불량 원인 추적 시간 단축', '데이터 기반 의사결정', '관리 비용 절감'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1740&q=80',
  },
  {
    slug: 'smart-factory',
    title: '스마트 팩토리 구축',
    icon: 'tabler:building-factory-2',
    summary: '설비·공정·데이터를 연결한 지능형 공장을 단계적으로 구축합니다.',
    intro: '진단부터 자동화, 데이터, 지능화까지 — 스마트 팩토리를 단계적으로 함께 만듭니다.',
    problem:
      '한 번에 모든 것을 바꾸려다 리스크가 커지는 경우가 많습니다. 투자 대비 효과가 큰 영역부터 단계적으로 접근해야 안정적으로 스마트 팩토리에 도달할 수 있습니다.',
    approach: [
      { title: '1단계 진단', description: '현재 자동화·데이터 수준을 진단하고 우선순위를 정합니다.' },
      { title: '2단계 자동화', description: '효과가 큰 핵심 공정부터 자동화를 적용합니다.' },
      { title: '3단계 데이터', description: '설비·공정 데이터를 수집·시각화합니다.' },
      { title: '4단계 지능화', description: 'AI로 공정을 고도화합니다.' },
    ],
    scope: [
      '설비 IoT 데이터 수집',
      '공정 통합 모니터링 대시보드',
      '단계적 도입 로드맵 설계',
      '자동화·MES·AI 연계',
    ],
    effects: ['단계적 리스크 관리', '투자 대비 효과 극대화', '일관된 시스템 아키텍처', '지속 확장 가능'],
    image: 'https://images.unsplash.com/photo-1565514020179-026b92b2d70b?auto=format&fit=crop&w=1740&q=80',
  },
  {
    slug: 'ai',
    title: 'AI 솔루션',
    icon: 'tabler:sparkles',
    summary: 'AI로 이상을 미리 감지하고 품질을 예측해 스스로 판단하는 공장으로.',
    intro: '자동화에 AI를 더해, 이상을 미리 감지하고 품질을 예측하는 지능형 공장을 지향합니다.',
    problem:
      '설비 고장과 품질 이탈은 사후 대응 시 손실이 크고, 숙련자의 경험에만 기대기 어렵습니다. 축적된 데이터를 활용하면 문제를 사전에 예측할 수 있습니다.',
    approach: [
      { title: '데이터 수집', description: '설비·공정 데이터를 수집·정제합니다.' },
      { title: 'AI 모델링', description: '이상 감지·예지보전·품질 예측 모델을 만듭니다.' },
      { title: '현장 적용', description: '모델을 현장에 적용하고 피드백으로 개선합니다.' },
    ],
    scope: ['설비 이상 감지', '예지보전', '품질 예측', '공정 변수 최적화'],
    effects: ['비계획 정지 감소', '불량률 개선', '숙련 노하우의 데이터화', '검사 정확도 향상'],
    image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=1740&q=80',
  },
];

/** 슬러그로 서비스 한 건 조회 */
export const getServiceBySlug = (slug: string): ServiceDetail | undefined =>
  services.find((s) => s.slug === slug);
