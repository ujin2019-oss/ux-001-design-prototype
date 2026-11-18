# UX-001 — Premium Dermatology Design Prototype

**v0.2.1 Draft · UX 디자인 단계 / 총괄 PM 재검토 요청**

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
- `assets/images/` — 직접 제작한 오리지널 SVG 아트워크 (실사 이미지 아님)
- `docs/design-spec.md` — 디자인 시스템·IA·접근성 명세
- `docs/figma-diff.md` — 기존 Figma 보존 및 차이
- `docs/image-assets.md` — 이미지 제작 방식·사용권·ALT
- `docs/qa-report.md`, `qa-results.json`, `qa-extended.json` — 브라우저 QA 근거
- `docs/screenshots/` — 브라우저 렌더링 화면 캡처 (전달 ZIP 포함; GitHub 반영 여부 별도 확인)

## 승인 게이트
UX-001-R04 v1.0 보완 대응: 1차 대표 화면 검토만 진행. P01~P12 확장 또는 최종 프론트엔드 개발 미착수. D안·Low-Fi 정보 구조 유지. 기존 Figma 파일 보존. 브랜드/색상/서체/이미지 모두 제안 상태.

**주의:** Chromium 자동화 환경은 외부 URL과 localhost 네비게이션을 차단하므로, 대체 방식 `page.set_content`로 실제 Chromium DOM·CSS·JS 렌더링 및 인터랙션을 확인했습니다. GitHub Pages 원격 검증이나 실제 스크린리더/브라우저 줌 실사용과 동등하지 않습니다.
