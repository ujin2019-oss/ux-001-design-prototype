(()=>{const b=document.querySelector('.menu-toggle'),n=document.querySelector('.nav-list');if(!b||!n)return;
  const close=(restore=false)=>{const wasOpen=b.getAttribute('aria-expanded')==='true';n.classList.remove('is-open');b.setAttribute('aria-expanded','false');if(restore&&wasOpen)b.focus();};
  b.addEventListener('click',()=>{const open=b.getAttribute('aria-expanded')!=='true';b.setAttribute('aria-expanded',String(open));n.classList.toggle('is-open',open);});
  n.addEventListener('click',e=>{if(e.target.closest('a'))close();});
  document.addEventListener('keydown',e=>{if(e.key==='Escape')close(true);});
  document.addEventListener('pointerdown',e=>{if(!e.target.closest('.site-header'))close();});
  window.matchMedia('(min-width: 801px)').addEventListener('change',e=>{if(e.matches)close();});
})();
