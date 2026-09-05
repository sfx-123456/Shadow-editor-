// scroll scrubber
  const fill = document.getElementById('scrubFill');
  const tc = document.getElementById('timecode');
  const totalSeconds = 4*60+12;
  function fmt(s){const m=Math.floor(s/60);const ss=Math.floor(s%60);return String(m).padStart(2,'0')+':'+String(ss).padStart(2,'0');}
  function onScroll(){
    const h = document.documentElement;
    const pct = h.scrollTop / (h.scrollHeight - h.clientHeight);
    const p = Math.min(Math.max(pct,0),1);
    fill.style.width = (p*100)+'%';
    tc.textContent = fmt(p*totalSeconds)+' / '+fmt(totalSeconds);
  }
  document.addEventListener('scroll', onScroll, {passive:true});
  onScroll();

  // mobile menu
  const burger = document.getElementById('burger');
  const menu = document.getElementById('mobileMenu');
  burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    menu.classList.toggle('open');
  });
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    burger.classList.remove('open'); menu.classList.remove('open');
  }));

  document.getElementById('year').textContent = new Date().getFullYear();
