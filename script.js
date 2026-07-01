let cur=0,tot=9;
const de=document.getElementById('dots');
for(let i=0;i<tot;i++){const d=document.createElement('div');d.className='dot'+(i===0?' active':'');d.onclick=()=>goTo(i);de.appendChild(d);}
function goTo(n){document.getElementById('s'+(cur+1)).classList.remove('active');de.children[cur].classList.remove('active');cur=((n%tot)+tot)%tot;document.getElementById('s'+(cur+1)).classList.add('active');de.children[cur].classList.add('active');}
function go(d){goTo(cur+d);}
document.addEventListener('keydown',e=>{if(e.key==='ArrowRight')go(1);if(e.key==='ArrowLeft')go(-1);});
let sx=0;const cat=document.querySelector('.catalog');
cat.addEventListener('touchstart',e=>sx=e.touches[0].clientX,{passive:true});
cat.addEventListener('touchend',e=>{const d=sx-e.changedTouches[0].clientX;if(Math.abs(d)>50)go(d>0?1:-1);});
