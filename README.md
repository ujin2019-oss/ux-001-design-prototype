# UX-001 — Premium Dermatology Design Prototype

**v0.2.0 · Draft / PM review pending**

가상의 프리미엄 미용 피부과 UI/UX 포트폴리오를 위한 **디자인 단계 프로토타입**. 실제 진료·상담·예약 서비스 아님. 실제 개인정보 및 건강정보 입력 없음. 백엔드/DB/전송/결제 없음.

## 실행

폴더의 `index.html`을 브라우저에서 열거나 로컬 서버를 실행하세요.

```bash
python -m http.server 8000
```

브라우저에서 `http://localhost:8000/` 접속. 대표 화면: `/`, `/pages/treatment.html`, `/pages/consultation.html`.

## 구성
- `styles/tokens.css`: v0.2 디자인 토큰
- `styles/base.css`, `components.css`, `responsive.css`: 공통/컴포넌트/반응형
- `scripts/navigation.js`, `consultation-demo.js`: 데모 상호작용
- `docs/design-spec.md`, `figma-diff.md`, `image-assets.md`, `qa-report.md`: 디자인 명세/차이/자산/QA

## 승인 및 관리

기존 Figma 파일은 수정하지 않음. P01/P05/P09 대표 화면만 구현. 전체 페이지 확장 및 FE 착수는 승인 전 금지. 브랜드명·컬러·폰트·이미지는 모두 제안 상태.

GitHub 저장소 생성 및 커밋, 외부 배포는 아직 미완료. 이 ZIP은 로컬 실행 가능 전달본입니다.
