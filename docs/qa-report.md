# UX-001-R04 QA 및 재검수 보고서 v0.2.1 — Draft

- 프로젝트: 프리미엄 미용 피부과 홈페이지 제작 (가상 포트폴리오)
- 문서: UX-001 디자인 단계 자체 QA / 상태: PM 재검토 요청 전 자체 QA
- 검사일: 2026-11-18
- 기준: UX-001-R04 v1.0 및 후속 GitHub main 브랜치 지시
- 검사 대상: P01 `index.html`, P05 `pages/treatment.html`, P09 `pages/consultation.html`
- 원본: GitHub `main`의 v0.2.0 Draft. 기존 Figma 파일 수정 없음

## A. 실제 Chromium 브라우저 레이아웃 검사 (대체 로드 방식)

Playwright + 설치된 Chromium으로 HTML/CSS/JS와 SVG 자산을 **실제 브라우저 엔진에 인라인 로드(`page.set_content`)**하여 레이아웃 및 DOM 이벤트를 검사했다. `file://`, `http://127.0.0.1` URL 네비게이션은 이 실행 환경에서 `ERR_BLOCKED_BY_ADMINISTRATOR`이므로 웹 서버 URL에서의 수동 검수로 오인하지 말 것. 외부 웹폰트는 차단된 상태에서 시스템 대체 폰트를 사용했다. SVG 이미지는 테스트 중 data URI로 변환해 실제 렌더링했다.

- 검사 개수: 15종 (3페이지 × 1440·390·320·430·720px)
- 가로 스크롤/요소 viewport 이탈/브라우저 JS 예외 검사: 15/15 통과
- 이미지 로드: P01 3/3, P05 1/1, P09 해당 없음
- 화면 캡처: `docs/screenshots/` 내부 27개 PNG; 고충실도 전체 화면 캡처 및 P09 상태별 캡처 포함
- P05 위험 안내 본문을 6배로 늘려 확인: **가로 스크롤 없음**, 섹션 높이 자동 증가

| 페이지 | CSS viewport | scrollWidth | 넘침 요소 | JS 예외 | 결과 | 증빙 |
|---|---:|---:|---:|---:|---|---|
| P01 | 1440px | 1440px | 0 | 0 | Pass | `docs/screenshots/p01_1440.png` |
| P01 | 390px | 390px | 0 | 0 | Pass | `docs/screenshots/p01_390.png` |
| P01 | 320px | 320px | 0 | 0 | Pass | `docs/screenshots/p01_320.png` |
| P01 | 430px | 430px | 0 | 0 | Pass | `docs/screenshots/p01_430.png` |
| P01 | 720px | 720px | 0 | 0 | Pass | `docs/screenshots/p01_720.png` |
| P05 | 1440px | 1440px | 0 | 0 | Pass | `docs/screenshots/p05_1440.png` |
| P05 | 390px | 390px | 0 | 0 | Pass | `docs/screenshots/p05_390.png` |
| P05 | 320px | 320px | 0 | 0 | Pass | `docs/screenshots/p05_320.png` |
| P05 | 430px | 430px | 0 | 0 | Pass | `docs/screenshots/p05_430.png` |
| P05 | 720px | 720px | 0 | 0 | Pass | `docs/screenshots/p05_720.png` |
| P09 | 1440px | 1440px | 0 | 0 | Pass | `docs/screenshots/p09_1440.png` |
| P09 | 390px | 390px | 0 | 0 | Pass | `docs/screenshots/p09_390.png` |
| P09 | 320px | 320px | 0 | 0 | Pass | `docs/screenshots/p09_320.png` |
| P09 | 430px | 430px | 0 | 0 | Pass | `docs/screenshots/p09_430.png` |
| P09 | 720px | 720px | 0 | 0 | Pass | `docs/screenshots/p09_720.png` |

## B. 오류 재현·수정·재검수

| ID / 심각도 | 재현 조건 | 수정 | 재검수 결과 |
|---|---|---|---|
| R04-Q01 / High | P01/P05 390·320·430px, CTA `width:100%` + padding 계산 | `.btn{box-sizing:border-box}`, 작은 화면 너비 제한 및 유동 grid | 3페이지 × 4 기본 너비에서 scrollWidth=viewport, viewport 밖 요소 0 (Pass) |
| R04-Q02 / Medium | P01 1440px H1 한글 단어 가운데 줄바꿈 | 제목 크기 축소, `word-break:keep-all` | 1440px 스크린샷에서 단어 분절 없는 2줄 타이틀 확인 (Pass) |
| R04-Q03 / High | P09 유효 입력 후 검토/결과/재시도에서 포커스가 페이지 전체 제목으로 이동 | `#input-title`, `#review-title`, `#result-title`에 tabindex=-1, show() 단계 제목에 focus | 검토=review-title, 완료=result-title, 수정/재시도=input-title (Pass) |
| R04-Q04 / High | P09 빈 필수값 3개 | 선택 오류 표시 및 첫 누락 필드 포커스, 오류 상태에서 다음 단계 차단 | 3개 오류, focus=concern, review/result 숨김 (Pass) |
| R04-Q05 / Medium | P09 오류 수정 후 재제출 | 필드 change 시 aria-invalid와 개별 오류 제거 | 입력→검토→수정→검토→결과→재시도 (Pass) |
| R04-Q06 / Medium | 메뉴 열기, Escape, 키보드 | Escape 닫기+메뉴 버튼 포커스 복귀, 1350px 이하 조기 메뉴 전환 | Enter expanded=true, Escape=false, 포커스 복귀, Tab 다음 입력 항목 이동 (Pass) |
| R04-Q07 / Medium | 본문 텍스트 400% 확대 모사 시 1280px에서 내비게이션 넘침 | 중간 너비에서 메뉴로 조기 접기 | 텍스트-only 확대 모사 9회 전부 가로 넘침 없음 (Pass, 실제 browser zoom 아님) |

## C. P09 데모 기능 검증 (390px, 실제 DOM 상호작용)

- 빈 필수값 3개: 오류 3개, 첫 오류 `#concern`으로 포커스, 검토·결과 미노출
- 수정 후 검토: 검토 영역 표시, 현재 `#review-title` 포커스, 실제 전송 미실행
- 입력 수정 버튼: 입력 영역 복귀, `#input-title` 포커스
- 검토 완료 버튼: 데모 결과 표시, `#result-title` 포커스
- 다시 체험하기: `#input-title` 포커스, 값 초기화 확인
- `page.on('request')` 관측: 데모 상호작용 과정 **요청 0개** (테스트 인라인 환경 한정)
- 소스 검사: `fetch` / XHR / localStorage / cookies / form action로 실명·건강정보 전송 없음. select의 예시 값만 로컬 DOM에 반영.

## D. 확대·키보드·대비 및 한계

200%/400% 테스트는 HTML 루트 글꼴 크기를 200/400%로 바꿔 Chromium에 로드한 **텍스트 확대 모사**, 일반 브라우저 zoom과 동일하지 않다. 1280px에서 400%, 390/1440px에서 200%를 시험했다.

| 페이지 | 뷰포트 | 확대 모사 | 판정 |
|---|---:|---|---|
| P01 | 1440px | text-only zoom proxy 200% | No overflow |
| P01 | 390px | text-only zoom proxy 200% | No overflow |
| P01 | 1280px | text-only zoom proxy 400% | No overflow |
| P05 | 1440px | text-only zoom proxy 200% | No overflow |
| P05 | 390px | text-only zoom proxy 200% | No overflow |
| P05 | 1280px | text-only zoom proxy 400% | No overflow |
| P09 | 1440px | text-only zoom proxy 200% | No overflow |
| P09 | 390px | text-only zoom proxy 200% | No overflow |
| P09 | 1280px | text-only zoom proxy 400% | No overflow |

WCAG 2.2 AA 대비 기본 토큰 산출(정상 배경 기준): ink/paper **14.62:1**; muted/ivory **6.17:1**; accent/ivory **6.39:1**; error/paper **7.76:1**; focus/paper **7.08:1**. 단, 페이지 모든 조합/이미지 오버레이/브라우저 상태에 대한 자동 WCAG 평가 완료를 의미하지 않는다.

- 키보드 시나리오: 메뉴 버튼 Enter 열기 → Escape 닫기 → 버튼으로 포커스 복귀; form select에서 Tab으로 다음 select 이동 (자동 Chromium 통과).
- 실제 NVDA/VoiceOver 사용성 검증, 다양한 브라우저 간 차이 및 사용자 테스트는 미실시.
- GitHub Pages의 실제 원격 배포 페이지 렌더링은 이 컨테이너의 URL 정책으로 미검증. GitHub 커밋/배포는 별도 API 및 외부 확인 결과를 따로 기록할 것.

## E. 모바일 Low-Fi 시각 대조 (원본 PDF v1.2)

| 원본 페이지 | 확인된 필수 순서 | v0.2.1 디자인 반영 | 차이 및 승인 필요성 |
|---|---|---|---|
| P01 모바일 2쪽 | 로고·메뉴 → 가상기관 → 히어로 → 고민 → 시술 → 신뢰 → 상담/예약 → 방문/FAQ → 푸터 | 주요 섹션·고지 유지, 카드/이미지·CTA 제공 | 방문·FAQ·예약 독립 페이지는 아직 제작 미승인. 해당 링크는 안내/대표 시안으로 연결 (후속 의사결정 필요) |
| P05 모바일 10쪽 | 메뉴 → 가상기관 → 개요 → 대상 → 과정 → 기대/한계 → 위험 → 회복 → 비용 → 근거 → FAQ → 푸터 | 필수 9개 섹션 순서 보존; 위험 기본 노출 | 모바일에서는 aside 목차가 본문 앞에 위치, 시각적 재배치이며 콘텐츠 삭제 없음 |
| P09 모바일 18쪽 | 메뉴 → 가상기관 → 상담 안내 → 채널 설명 → 데모 입력 → 비수집 고지 → 검토 → 결과 → 푸터 | 예시 선택, 단계별 화면, 오류·검토·결과, 고지 유지 | P11은 전체 확장 미승인으로 별도 페이지 미제작; 현재 결과는 P09 내부 데모 상태. 별도 P11은 다음 단계에서 일치 확인 필요 |

원본은 실제 브라우저 화면이 아니라 PDF의 Low-Fi schematic임. 실제 상태 UX는 상태별 검증 기록에 따름.

## F. 미해결 이슈

| ID | 심각도 | 재현/영향 | 처리 제안 | 상태 |
|---|---|---|---|---|
| OPEN-01 | High | GitHub Pages에서 실제 원격 페이지 확인 필요 | GitHub 커밋 이후 PM 로컬/공개 브라우저에서 320·390·430·1440px 검증 | Pending |
| OPEN-02 | Medium | 이미지가 사진 실사가 아닌 자체 제작 아트워크 시안 | PM 아트디렉션 검토 후 촬영/라이선스 확인 사진 채택 여부 결정 | Proposal |
| OPEN-03 | Medium | 모바일 실제 NVDA/VoiceOver, 브라우저 실제 zoom 200·400% 미확인 | QA/FE 단계에서 실사용 장비 테스트 | Pending |
| OPEN-04 | High | 의료·법률 검수·실제 사용자 테스트 없음 | 자료 확보 전 진료·시술 효과 정보 및 실제 예약 기능 금지 | Deferred |
| OPEN-05 | Medium | P02~P12 미제작 | 사용자 대표 시안 승인 뒤 확장 | Deferred |
| OPEN-06 | Low | Figma v0.1 전체 레이어 실측 재확인 불가 | 보존 후 차이 문서 유지, 검증 가능 시 별도 QA | Pending |

## G. 자체 QA 판정

**대표 3화면의 Chromium 인라인 로드 기반 시각·동작 검사 통과(한정적).** GitHub Pages 실제 배포/실사용 보조기술/실제 zoom에 대한 완전한 QA 완료 또는 사용자 승인으로 보고하지 않는다. PM 재검토 요청 단계.


## R06 v0.2.2 신규 보완 및 재검수 (2026-11-18)

- Chromium page.set_content 대체 방식으로 P01/P05/P09 각 1440/430/390/320/720px, 15개 조합 신규 검사. 15/15 scrollWidth가 viewport와 동일, DOM 이탈 요소 0, JS 예외 0. GitHub Pages 원격 렌더링 테스트는 아님.
- P01/P05의 새 Pexels 사진 URL은 외부 접속이 차단되어, 테스트에서 새 로컬 의료 공간 콘셉트 SVG로 대체되는 것만 확인. P09 원본 유지.
- P05 모바일 목차 링크 9개 확인, 위험 링크 클릭 후 #risks 해시 및 실제 섹션 타깃 확인.
- P09 빈 필수값 3개 오류, 첫 오류 concern으로 포커스, 선택값 수정시 오류 0, 검토 focus=review-title, 수정=input-title, 데모 결과=result-title, 재시도=input-title 및 값 초기화 확인.
- 모바일 메뉴 Enter 열기, Escape 닫기, 메뉴버튼으로 포커스 복귀. 데모 상호작용에서 POST 등 비GET 요청 0건 관찰.
- Chromium CDP visualViewport.scale 2/4 핀치 배율을 측정하고 720/360 CSS viewport 리플로우를 별도 확인. 일반 Chrome UI Zoom 200/400% 자체 테스트는 미실시.
- Chrome Accessibility Tree 자동 분석 수행. NVDA/VoiceOver 실제 사용성 검증 아님.
- GitHub Pages URL 탐색 ERR_BLOCKED_BY_ADMINISTRATOR. 원격 12개 조합 및 실제 스톡 사진 로딩 확인 미실시.
- 기존 R05 ZIP의 PNG 27개 존재 확인, 신규 R06 PNG 24개는 별도 ZIP으로 제공. GitHub 바이너리 캡처 업로드로 오인 금지.
- 상세 원자료: docs/r06-qa-results.json. 심각도별 미해결 및 PM 조치: docs/r06-review.md.

판정: 코드 수정과 Chromium 대체 테스트는 제한적으로 PASS, 공개 페이지/실제 사진/실제 확대/스크린리더 검수는 보류. 대표 시안 승인 전 PM 재검토 필요.

## UX-001-R08-A01 사용자 부분 승인 전달 (2026-11-18)
- P01 모바일 320px 제목 **현행 4줄 구성 사용자 최종 수용**. 제목 문구·줄바꿈·크기·레이아웃을 변경하지 않음. 디자인 변경 제안 취소.
- QA-001-R02 관련 PARTIAL은 **디자인 수용 조건 해소 요청**으로 QA 담당자에게 인계. QA 에이전트의 실제 판정/보고서 수정은 별도 필요; 여기서 QA 상태를 임의로 PASS로 바꾸지 않음.
- README 버전 표기 정정 및 세 페이지 favicon 링크 추가. 실제 공개 URL favicon 표시와 캐시 갱신은 별도 검증 필요.
- P05 사진의 실제 외부 CDN 로딩, 모바일 크롭, 의료기관 오인 가능성은 검토 대기. 실기기·공개 브라우저 검수 전 PASS 처리하지 않음.
- 기존 PNG 증빙 R05 27건, R06 24건은 별도 ZIP 제공. 해당 51개 캡처는 신규 R08 브라우저 실검수 증빙이 아님.
