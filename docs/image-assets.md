# UX-001 이미지 자산 명세 v0.2.2 Draft

확정 이미지 방향: P01=B(프리미엄 의료 상담 공간), P05=B(절제된 의료 관련 공간), P09=A(기존 추상 구성). 모든 사진은 가상 의료기관의 실제 촬영 시설이나 시술 효과를 입증하지 않습니다.

## P01 Hero 스톡 사진
- 출처/저작자: Pexels 7789614, Ivan Babydov, Desk and Chairs in Doctor Office
- 원본: https://www.pexels.com/photo/desk-and-chairs-in-doctor-office-7789614/
- 배포용 URL: https://images.pexels.com/photos/7789614/pexels-photo-7789614.jpeg?auto=compress&dpr=1&h=750&w=1260
- 사용권: Pexels 페이지 Free to use 및 https://www.pexels.com/license/ 확인 (2026-11-18). 웹 사용 및 수정 가능, 제3자 보증/지지 암시 금지.
- ALT: 차분한 뉴트럴 톤의 진료 상담 공간 예시. 가상 브랜드와 무관한 스톡 촬영 이미지
- 적용: index.html의 Hero. 네트워크 차단 시 home-medical-concept.svg 대체.

## P05 의료 관련 스톡 사진
- 출처/저작자: Pexels 7789616, Ivan Babydov, Special, Medical Bed, Desk and Chairs in Medical Cabinet
- 원본: https://www.pexels.com/photo/special-medical-bed-desk-and-chairs-in-medical-cabinet-7789616/
- 배포용 URL: https://images.pexels.com/photos/7789616/pexels-photo-7789616.jpeg?cs=srgb&dl=pexels-babydov-7789616.jpg&fm=jpg
- 사용권: Pexels License 동일. 실제 특정 시술·검증되지 않은 장비 효능·의료기관의 권위 표현 금지.
- ALT: 인물과 특정 의료장비가 없는 절제된 진료 공간의 예시 사진. 실제 시술·의료기관 모습이 아님
- 적용: pages/treatment.html의 개요 이미지. 네트워크 차단 시 treatment-medical-concept.svg 대체.

## 신규 자체 제작 오리지널 의료 공간 이미지
- assets/images/home-medical-concept.svg: 코드 기반 직접 제작 가상 상담/접수 공간, 외부 사진 장애시 사용, 프로젝트 사용 가능.
- assets/images/treatment-medical-concept.svg: 코드 기반 직접 제작 가상 진료 환경, 외부 사진 장애시 사용, 프로젝트 사용 가능.
- scripts/editorial-image.js: 외부 이미지 로드 실패시 로컬 SVG 및 해당 ALT/캡션 안내로 전환.

## v0.2.1 원본 보존
- hero-editorial.svg, treatment-editorial.svg, trust-editorial.svg 3개 삭제하지 않음. P01 보조 이미지와 신뢰 섹션에서 기존 A안 사용.
- P09 HTML/JS, 상담 오류·검토·결과 흐름 변경 없음.

중요: Pexels 사진은 외부 CDN 참조이고 GitHub에 사진 bytes를 복제하지 않음. 이 환경에서 실 CDN 이미지 로드 성공과 실제 공개 URL 사진 크롭은 검증하지 못했음. 인물/상표/실제 기관 오인 위험의 최종 법률 검수 필요. 모든 이미지 Draft 제안.