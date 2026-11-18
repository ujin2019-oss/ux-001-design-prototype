# UX-001 — Premium Dermatology Design Prototype

**v0.2.2 Draft · UX 디자인 단계 / 총괄 PM 재검토 요청**

가상의 프리미엄 미용 피부과 UI/UX 포트폴리오. 실제 진료, 상담, 예약 서비스 미제공. 이름·전화번호·건강정보 입력 없음. 서버·DB·개인정보 전송·결제 기능 없음.

## 대표 디자인 시안
- **P01 홈**: `index.html`
- **P05 시술 상세**: `pages/treatment.html`
- **P09 상담 신청 체험**: `pages/consultation.html`

GitHub Pages 배포(기존 사용자 제공 URL): https://ujin2019-oss.github.io/ux-001-design-prototype/  
저장소: https://github.com/ujin2019-oss/ux-001-design-prototype  
GitHub Pages 실제 렌더링은 재배포 후 별도로 확인 필요.

## 로컬 실행
```bash
python -m http.server 8000
```
`http://localhost:8000/` 접속. 파일을 직접 열어도 정적 UI는 동작할 수 있지만 외부 웹폰트 연결 여부는 환경에 따름.

## 폴더
- `styles/tokens.css`, `base.css`, `components.css`, `responsive.css` — 제안 디자인 시스템
- `scripts/navigation.js`, `consultation-demo.js` — 상태 전환 데모
- `assets/images/` — 기존 추상 SVG 3개 보존 + R06 공간 이미지 대체 SVG 2개. P01/P05 외부 Pexels 사진 URL 참조
- `assets/favicon.svg` — 가상 콘셉트용 오리지널 favicon (확정 브랜드 아님)
- `docs/design-spec.md` — 디자인 시스템·IA·접근성 명세
- `docs/figma-diff.md` — 기존 Figma 보존 및 차이
- `docs/image-assets.md` — 이미지 제작 방식·사용권·ALT
- `docs/qa-report.md`, `qa-results.json`, `qa-extended.json` — 브라우저 QA 근거
- `docs/screenshots/` — 브라우저 렌더링 화면 캡처 (전달 ZIP 포함; GitHub 반영 여부 별도 확인)

## 승인 게이트
UX-001-R08-A01: P01 320px 제목 4줄 사용자 수용. 문구·줄바꿈·폰트·레이아웃 변경 금지. G4 전체 승인 아님. UX-001-R04 v1.0 보완 대응: 1차 대표 화면 검토만 진행. P01~P12 확장 또는 최종 프론트엔드 개발 미착수. D안·Low-Fi 정보 구조 유지. 기존 Figma 파일 보존. 브랜드/색상/서체/이미지 모두 제안 상태.

**주의:** Chromium 자동화 환경은 외부 URL과 localhost 네비게이션을 차단하므로, 대체 방식 `page.set_content`로 실제 Chromium DOM·CSS·JS 렌더링 및 인터랙션을 확인했습니다. GitHub Pages 원격 검증이나 실제 스크린리더/브라우저 줌 실사용과 동등하지 않습니다.


## R06 이미지 방향과 제한
P01/P05는 Pexels의 라이선스 확인 스톡 공간 이미지를 외부 CDN으로 우선 제공하고 실패 시 신규 오리지널 의료 공간 SVG로 전환합니다. P09와 기존 SVG 3개는 보존합니다. docs/image-assets.md, docs/r06-review.md, docs/qa-report.md 확인. 공개 URL 직접 화면 검증과 실사진 로드, 실제 데스크톱 UI zoom 및 NVDA/VoiceOver는 현재 환경에서 미실시.

## UX-001-R08-A01 사용자 부분 승인 (2026-11-18)
- **승인 대상은 P01 모바일 320px 제목 4줄 구성만**. 제목 개선 요청 취소, 해당 구성은 고정.
- README 버전 표시를 현재 v0.2.2 Draft로 정정하고 세 페이지에 favicon 링크를 추가함. favicon은 가상 프로젝트용 제안 디자인으로 브랜드 최종 승인 아님.
- P05 사진의 외부 CDN 로딩/실제 크롭/기관 오인 검토는 **미완료**이며, 실제 사용자 환경 시각 검수가 필요.
- 기존 PNG 증빙 51개(R05 27개, R06 신규 24개)는 별도 검증 ZIP에 제공하며 GitHub 소스에 올라갔다고 주장하지 않음.
- QA 에이전트에게 QA-001-R02의 해당 디자인 수용 PARTIAL을 사용자 승인에 따른 해결 후보로 전달. **QA 상태 변경은 QA 에이전트 재검증 후 확정**.
