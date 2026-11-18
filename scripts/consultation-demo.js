/* UX-001 v0.2.1: Local-only demo; no free text, storage, analytics or network requests. */
(()=>{
  const form=document.querySelector('#demo-form');if(!form)return;
  const steps={input:document.querySelector('#step-input'),review:document.querySelector('#step-review'),result:document.querySelector('#step-result')};
  const titles={input:document.querySelector('#input-title'),review:document.querySelector('#review-title'),result:document.querySelector('#result-title')};
  const fields=['concern','goal','channel'],labels={concern:'관심 분야',goal:'문의 목적',channel:'안내 방식'};
  const progress=[...document.querySelectorAll('[data-progress]')];
  const alert=document.querySelector('#form-alert');
  function show(next){
    Object.entries(steps).forEach(([key,el])=>{el.classList.toggle('hidden',key!==next);el.setAttribute('aria-hidden',String(key!==next));});
    progress.forEach((el,i)=>{const current=i===({input:0,review:1,result:2}[next]);el.classList.toggle('active',current);if(current)el.setAttribute('aria-current','step');else el.removeAttribute('aria-current');});
    // Move focus to the current STEP heading, not the general page heading.
    titles[next].focus({preventScroll:true});titles[next].scrollIntoView({block:'start',behavior:'instant'});
  }
  function validate(){
    let valid=true;
    fields.forEach(key=>{const el=form.elements[key],err=document.querySelector('#error-'+key),bad=!el.value;
      el.setAttribute('aria-invalid',String(bad));err.textContent=bad?labels[key]+'을(를) 선택해 주세요.':'';if(bad)valid=false;});
    alert.classList.toggle('hidden',valid);
    return valid;
  }
  form.addEventListener('submit',e=>{e.preventDefault();
    if(!validate()){fields.map(k=>form.elements[k]).find(el=>!el.value)?.focus();return;}
    fields.forEach(k=>{document.querySelector('#review-'+k).textContent=form.elements[k].selectedOptions[0].textContent;});
    show('review');
  });
  fields.forEach(key=>form.elements[key].addEventListener('change',()=>{const el=form.elements[key];if(el.value){el.setAttribute('aria-invalid','false');document.querySelector('#error-'+key).textContent='';}if(fields.every(k=>form.elements[k].value))alert.classList.add('hidden');}));
  document.querySelector('#edit').addEventListener('click',()=>show('input'));
  document.querySelector('#complete').addEventListener('click',()=>show('result'));
  document.querySelector('#retry').addEventListener('click',()=>{form.reset();fields.forEach(k=>{form.elements[k].removeAttribute('aria-invalid');document.querySelector('#error-'+k).textContent='';});alert.classList.add('hidden');show('input');});
  show('input');
})();
