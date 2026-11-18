# UX-001 디자인 시스템 v0.2.1 — Draft

프로젝트: 프리미엄 미용 피부과 홈페이지 제작 (가상 포트폴리오) / 2026-11-18 / 상태: PM 재검토 요청

## 방향
D안 A Quiet Medical Luxury + B Evidence-led Dermatology + C Personal Skin Concierge. 시각 표현은 절제된 건축적 여백과 웜 뉴트럴, 의료정보는 누락 방지, 탐색은 고민·시술 이중 경로, 상담/예약은 구분한다.

## 토큰 (`styles/tokens.css`)
- Primitive 제안: `--ivory #F8F6F1`, `--paper #FFFEFA`, `--warm #EEE9E2`, `--taupe #B7A99A`, `--ink #292824`, `--muted #5F5C56`, `--accent #64584C`
- Semantic: `--error #8D352F`, `--success #345C48`, `--focus #255C83`, `--line #DCD5CB`
- Type: `Noto Serif KR` 제목 / `Noto Sans KR` 본문 제안. CDN 접속 실패 시 폴백; 최종 승인 전 웹폰트 다운로드 정책 미확정.
- Container 최대 1200px, 1440px 기준, 320/390/430px 대응, 720px 중간 검사. 간격 4/8/12/16/24/32/48/64/96px.
- Components: Header/Nav, CTA, Concern cards, medical sections, risk panel, FAQ details, form inputs/validation/review/result, Footer, Demo Disclosure.
- Responsive: 1350px 이하 메뉴 접기(극단 텍스트 확대 대응), 800px 1열 레이아웃 전환, 500px CTA 세로 전환, 350px 최소 폭 보정.

## P01 홈
프리미엄 아트워크 → 고민별 탐색 → 시술별 탐색 → 의료 신뢰 → 상담/예약 체험 안내 → 푸터. 아트워크는 실제 병원 사진 아님.

## P05 시술 상세
개요, 대상/제한, 과정, 기대/한계, 위험/부작용, 회복/관리, 비용/조건, 근거, FAQ. 부작용 필수 정보는 아코디언 밖에 항상 표시. 모든 의학적 주장은 검수 전 플레이스홀더.

## P09 상담 체험
3개 예시 select만 제공. 오류 필드 focus → 검토 제목 focus → 결과 제목 focus → 재시도 입력 제목 focus. 백엔드/개인정보/저장/전송 없음. 실제 예약·상담 접수 불가. P10/P11 독립 페이지는 제작 범위 밖.

## 접근성 및 검증
- 주요 색상 대비 확인: ink/paper 14.62, muted/ivory 6.17, focus/paper 7.08, error/paper 7.76.
- `aria-expanded`, 메뉴 Escape focus 반환, h2 tabindex=-1 기반 단계 포커스, select label+오류 메시지+aria-invalid.
- 실제 browser zoom 및 screen reader 실사용, 외부 배포 URL 기능 확인은 미완료; `docs/qa-report.md` 참조.

브랜드명, 컬러, 폰트, 이미지, 컴포넌트는 모두 Draft 제안이며 사용자 승인본 아님. 기존 Figma는 변경하지 않음.
