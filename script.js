const games=[['AUG 16','DOOSAN BEARS','LG TWINS','5','3','FINAL'],['AUG 15','HANSHIN TIGERS','CANBERRA CAVALRY','2','4','FINAL'],['AUG 14','LG TWINS','HANSHIN TIGERS','6','6','FINAL']];
const standings=[['DOOSAN BEARS',12,5,'.706','—'],['LG TWINS',10,7,'.588','2.0'],['HANSHIN TIGERS',8,9,'.471','4.0'],['CANBERRA CAVALRY',5,14,'.263','7.5']];

document.addEventListener('DOMContentLoaded',()=>{
 document.getElementById('gamesGrid').innerHTML=games.map(g=>`<article class="game-card"><div class="date">${g[0]} · 2026</div><div class="game-teams"><div><b>${g[1]}</b><small>HOME</small></div><div class="score">${g[3]}<br><span style="font-size:11px;color:#aaa">${g[4]}</span></div><div><b>${g[2]}</b><small>AWAY</small></div></div><div class="status">${g[5]} · KHBA REGULAR SEASON</div></article>`).join('');
 document.getElementById('standingsBody').innerHTML=standings.map((t,i)=>`<tr><td>${String(i+1).padStart(2,'0')}</td><td><strong>${t[0]}</strong></td><td>${t[1]}</td><td>${t[2]}</td><td>${t[3]}</td><td>${t[4]}</td></tr>`).join('');
 const messages=['2026 정규시즌이 진행 중입니다. 최신 경기 결과와 순위를 확인하세요.','AUG 18 · DOOSAN BEARS vs LG TWINS · 21:30 KST','KHBA 공식 경기 기록과 리그 소식을 만나보세요.'];
 let i=0;setInterval(()=>{i=(i+1)%messages.length;document.getElementById('tickerText').textContent=messages[i]},5000);
});
