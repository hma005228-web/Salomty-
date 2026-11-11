const $=id=>document.getElementById(id),fls=['🌸','🌷','🌹','💮','🌺'],hs=['❤️','💖','💕','🌸','🌷','🤍'];
const pick=a=>a[Math.floor(Math.random()*a.length)];
setInterval(()=>{const d=7+Math.random()*7;let s=document.createElement('span');
  if(Math.random()<.7){s.className='pt';s.style.opacity=.5+Math.random()*.4;s.style.transform='scale('+(.7+Math.random()*.8)+')'}
  else{s.className='fw';s.textContent=pick(fls);s.style.fontSize=16+Math.random()*14+'px'}
  s.style.left=Math.random()*100+'%';s.style.animationDuration=d+'s';$('fx').appendChild(s);setTimeout(()=>s.remove(),d*1000)},450);
function burst(x,y,n){for(let i=0;i<n;i++){const p=document.createElement('span');p.className='pop';p.textContent=pick(hs);p.style.left=x+'px';p.style.top=y+'px';const a=Math.random()*6.283,r=60+Math.random()*150;p.style.setProperty('--x',Math.cos(a)*r+'px');p.style.setProperty('--y',Math.sin(a)*r-40+'px');document.body.appendChild(p);setTimeout(()=>p.remove(),1600)}}
function toast(t,ms){const e=$('toast');e.textContent=t;e.classList.add('on');setTimeout(()=>e.classList.remove('on'),ms||3500)}
const p2=n=>String(n).padStart(2,'0');let fake=null;
function tick(){const cd=$('cd');let diff;
  if(fake!==null)diff=fake;else{const t=new Date(new Date().getFullYear(),10,11,11,11,0);diff=Math.floor((t-new Date())/1000)}
  if(fake===0||(fake===null&&diff<=0&&diff>-60)){cd.textContent='✨ دلوقتي! اعملي أمنيتك ✨';return}
  if(diff>0&&diff<86400){cd.textContent='باقي '+p2(Math.floor(diff/3600))+':'+p2(Math.floor(diff%3600/60))+':'+p2(diff%60);if(fake!==null)fake=Math.max(0,fake-1)}else cd.textContent=''}
setInterval(tick,1000);tick();
$('d1').onclick=()=>{fake=201;tick()};$('d2').onclick=()=>{fake=0;tick()};
$('env').onclick=e=>{if($('env').classList.contains('open'))return;$('env').classList.add('open');
  const r=$('env').getBoundingClientRect();burst(r.left+r.width/2,r.top+r.height/2,26);
  setTimeout(()=>{$('intro').classList.add('gone');toast('🌸 اعملي أمنيتك دلوقتي 🌸')},1700)};
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('show');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.card,.gal').forEach(c=>io.observe(c));
document.querySelectorAll('.pol').forEach(p=>p.onclick=e=>burst(e.clientX,e.clientY,8));
$('heart').onclick=e=>{const r=e.target.getBoundingClientRect();burst(r.left+r.width/2,r.top+r.height/2,28)};
$('wb').onclick=()=>{if(!$('wt').value.trim()){toast('اكتبي أمنيتك الأول 🤍',2000);return}
  for(let i=0;i<14;i++){const f=document.createElement('span');f.className='fly';f.textContent=i%2?'⭐':'🌸';f.style.left=20+Math.random()*60+'vw';f.style.top=60+Math.random()*30+'vh';f.style.animationDelay=Math.random()*.6+'s';document.body.appendChild(f);setTimeout(()=>f.remove(),3600)}
  $('wt').value='';toast('الأمنية وصلت للنجوم ✨ يا رب تتحقق',4000)};
$('mus').onclick=()=>toast('هنا هتشتغل الموسيقى لما تبعتلي الملف 🎵',3000);
