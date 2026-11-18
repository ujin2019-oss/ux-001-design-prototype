/* UX-001 R06: separate image sourcing with clear provenance and local original concept fallback. No data requests from forms. */
document.querySelectorAll('img[data-fallback-src]').forEach((img) => {
  const fallback = img.getAttribute('data-fallback-src');
  if (!fallback) return;
  const recover = () => {
    if (img.dataset.fallbackApplied === 'true') return;
    img.dataset.fallbackApplied = 'true';
    img.src = fallback;
    img.alt = img.alt + ' (외부 사진을 불러오지 못해 가상 공간 콘셉트 일러스트레이션을 표시함)';
    const caption = img.closest('figure')?.querySelector('figcaption');
    if (caption) caption.textContent = '가상 의료 공간 콘셉트 아트워크 · 외부 참고 사진 로드 제한으로 대체 표시 · 실제 의료기관 아님';
  };
  img.addEventListener('error', recover, { once: true });
  if (img.complete && img.naturalWidth === 0) recover();
});
