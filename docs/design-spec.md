# UX-001 디자인 시스템 v0.2 — 제안안

- 상태: Draft / 총괄 PM 검토 전 / 2026-11-18
- 방향: D안 = A Quiet Medical Luxury(시각) + B Evidence-led Dermatology(의료정보) + C Personal Skin Concierge(탐색 UX)
- 구현: HTML5 / CSS3 / Vanilla JS. 디자인 단계용 프로토타입이며 FE 최종 개발본이 아님.
- 공식 근거: UX-001-H03 v1.0, UX-001-W02 v1.1, UX-001-CR01 v1.0, CP-001 v1.1, CA-001 v1.0, MR-001 v1.1, UX-001 Low-Fi v1.2.

## 토큰
- Primitive: ivory `#F8F6F1`, paper `#FFFEFA`, warm `#EEE9E2`, taupe `#B7A99A`, ink `#292824`, muted `#5F5C56`, accent `#64584C`, line `#DCD5CB`.
- Semantic: background=ivory, surface=paper, body=ink, secondary=muted, CTA=ink, error=`#8D352F`, success=`#345C48`, focus=`#255C83`.
- Type: Noto Serif KR(제목) + Noto Sans KR(본문) Google Fonts 제안. 웹폰트 로드 실패 시 시스템 대체 폰트. 실제 라이선스/서비스 정책 최종 확인 필요.
- Spacing: 4/8/12/16/24/32/48/64/96px. Container max 1200px; PC viewport 1440px; 모바일 390px; 보조 320/430px. 800px 이하 내비게이션 접힘, 500px 이하 단일 컬럼.
- Components: Header/Nav, disclosure, hero, button, concern card, medical information section, trust block, FAQ details, form select/error/review/result, footer.
- Interactive: visible focus outline, required select validation, error text, review before result, no personal/health inputs, no network/storage code.

## 접근성 / 사용성
- WCAG 2.2 AA 목표. 일반 텍스트 4.5:1, 큰 텍스트 3:1, UI 경계 3:1 검토 필요.
- 의미 있는 label/aria-describedby/aria-invalid/aria-live, skip link, keyboard navigation, reduced motion.
- 200%/400% 확대, 스크린리더 실사용은 후속 검증 대상.

## 콘텐츠 및 UX 추적
- P01: hero→concerns→treatments→trust→separate consultation/reservation intent→visit/FAQ placeholder.
- P05: overview→eligibility→process→expectations/limits→risks→recovery→cost→evidence→FAQ→CTA. 위험 정보 기본 노출.
- P09: input→required error→edit→review→demo result→retry. 결과에서 자신으로 완료 CTA 이동 없음.
- 승인 전 미구현: P02/P03/P04/P06/P07/P08/P10/P11/P12. 현재 P01의 일부 탐색 링크는 대표 화면 내부 또는 P05 샘플로 안내하며 실제 전체 IA 완성으로 오인 금지.
