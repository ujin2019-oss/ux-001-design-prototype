# UX-001 Figma ↔ HTML 디자인 차이 기록 v0.2.1 Draft

- 기존 Figma: https://www.figma.com/design/FFElEaQjzmkDGbwMwmhxDj
- **보존 정책:** Figma 읽기·수정·삭제 없이 디자인 프로토타입 코드만 변경. 본 문서는 기존 v0.1 제작 시 확인된 내용과 Low-Fi를 기준으로 작성했으며, Figma 전체 레이어 재조회는 하지 않았음.
- D안 확정: Quiet Medical Luxury 시각 / Evidence-led Dermatology 의료정보 / Personal Skin Concierge 탐색 UX.

| 구분 | Figma v0.1 (기존 확인 가능 범위) | v0.2.1 브라우저 시안 | 검수 상태 |
|---|---|---|---|
| 컬러 | ivory/off-white, taupe, charcoal 계열 제안 | CSS `tokens.css`, 정확한 값은 Draft | 최종 HEX 미승인 |
| 서체 | 나눔명조/나눔고딕 임시 제안 | Noto Serif KR / Noto Sans KR 웹폰트 제안, 네트워크 차단 시 폴백 | 웹폰트·라이선스·로딩 성능 최종 확인 필요 |
| P01 | 브랜드 소개·고민/시술·신뢰·CTA | 동일 IA, 3개 편집 가능한 SVG 이미지 아트워크 적용 | 시각 표현 차이, 정식 승인 필요 |
| P05 | 개요·대상·과정·기대·위험·회복·비용·근거·FAQ | 필수 9항목 공개 순서 유지, 보조 이미지 | 순서 정합, 의료 검수 보류 |
| P09 | 예시 입력·검토·결과 데모 시안 | 필드 단위 오류, 오류 수정, 제목 포커스, 결과, 재시도 | Chromium 동작 검증 |
| 반응형 | 1440/390 대표 프레임 | CSS 320/390/430/720/1440 및 모바일 내비 | 실제 원격 페이지 검증 필요 |
| 이미지 | 자리표시자 | 원본 SVG 3종 적용 · 실제 사진과 구분 명시 | 자료 승인 대기 |
| 컴포넌트 | Figma 기초 컴포넌트·토큰 초안 | HTML/CSS 공통 컴포넌트·상태 | 단일 소스 자동 동기화 아님 |

Figma 보존 사실은 이 채팅에서 해당 Figma 연결의 수정 호출을 하지 않았다는 범위에 한한다. 외부 사용자의 변경 여부는 확인하지 않았다.


## R06 v0.2.2: Figma와 이미지 적용 차이
- Figma v0.1 원본 수정·삭제하지 않음. 전체 노드 픽셀 재측정 미실시.
- P01 Hero: 기존 추상 SVG → Pexels 7789614 공간 사진, 사진 실패시 신규 home-medical-concept.svg. P01 다른 추상 이미지 및 신뢰 영역 유지.
- P05: 기존 추상 SVG → Pexels 7789616 의료 관련 공간 사진, 실패시 신규 treatment-medical-concept.svg. 의료정보 9섹션 삭제 없음.
- P09: 기존 HTML/JS와 A안 유지, 상담 체험 기능 변경 없음.
- 새 CSS는 이미지 비율·색감만 조정, 브랜드명·HEX·서체 미확정, 전체 IA와 D안 유지. 기존 SVG 3개 보존.
- 외부 사진 CDN 크롭 및 Figma v0.1 노드별 픽셀 비교는 미검증.