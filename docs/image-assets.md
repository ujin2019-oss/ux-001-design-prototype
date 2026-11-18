# UX-001 v0.2.1 이미지 자산 및 라이선스 장부

**상태:** 제안. 실제 의료진·의료기관·시술 부위·효과 사진은 사용하지 않음. 외부 사이트 사진을 무단 복제하거나 GitHub에 업로드하지 않음.

| 파일 | 제작·권한 | 적용 위치 | ALT | 승인 상태 |
|---|---|---|---|---|
| `assets/images/hero-editorial.svg` | 본 작업에서 코드로 직접 작성한 오리지널 SVG. 제3자 이미지 복사 없음. 프로젝트 편집·사용 가능 | P01 Hero | 자연광과 아이보리 공간을 추상화한 오리지널 건축 무드 이미지. 실제 의료시설 사진이 아님 | Draft 제안 |
| `assets/images/treatment-editorial.svg` | 본 작업에서 코드로 직접 작성한 오리지널 SVG | P01 시술 소개, P05 개요 | 아이보리 석재와 유리의 곡면을 표현한 추상 아트워크. 실제 시술 이미지가 아님 | Draft 제안 |
| `assets/images/trust-editorial.svg` | 본 작업에서 코드로 직접 작성한 오리지널 SVG | P01 의료 신뢰 영역 | 아이보리 공간에서 빛과 그림자가 교차하는 추상 아트워크. 의료기관 실사나 의료진 사진이 아님 | Draft 제안 |

**실제 사진 후보(비적용 / 검토용 링크만)**
- [Ela De Pure / Woman walking past a decorative reception desk](https://unsplash.com/photos/woman-walking-past-a-decorative-reception-desk-cefsod8L2mo) — 2025-11-23 공개, Unsplash License 표기. 브랜드 제품·모델 이미지가 들어 있어 가상 의료기관 사진으로 오인할 위험이 있으므로 적용하지 않음.
- [Ela De Pure / Elegant bathroom with modern fixtures and decor](https://unsplash.com/photos/elegant-bathroom-with-modern-fixtures-and-decor-xS608no3sTk) — 2025-08-07 공개, Unsplash License 표기. 실제 진료실과 관계없는 공간 사진이므로 적용하지 않음.

이미지 파일은 CSS 배경 자리표시자 대신 `<img>` 요소로 적용했고, HTML에 적용 목적·ALT를 기록했다. 향후 상용 이미지나 생성형 AI 사진 채택 시 **출처, 제작 모델/약관, 사용권, 인물 초상권, 실제 의료시설 오인 위험**을 다시 심사해야 한다.
