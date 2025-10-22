// Shared small UI helpers used by index.html
document.addEventListener('DOMContentLoaded', function(){
  // common offcanvas for index (if present)
  const hamburger = document.getElementById('hamburger');
  const off = document.getElementById('offcanvas');
  const overlay = document.getElementById('overlay');
  if(hamburger && off && overlay){
    hamburger.addEventListener('click', ()=> {
      overlay.classList.add('visible'); off.classList.add('open');
    });
    document.getElementById('closeMenu')?.addEventListener('click', ()=> {
      overlay.classList.remove('visible'); off.classList.remove('open');
    });
    overlay.addEventListener('click', ()=> { overlay.classList.remove('visible'); off.classList.remove('open'); });
  }
  // current year
  document.getElementById('year')?.textContent = new Date().getFullYear();
});
