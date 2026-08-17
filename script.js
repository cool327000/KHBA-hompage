const games=[['AUG 16','DOOSAN BEARS','LG TWINS','5','3','FINAL'],['AUG 15','HANSHIN TIGERS','CANBERRA CAVALRY','2','4','FINAL'],['AUG 14','LG TWINS','HANSHIN TIGERS','6','6','FINAL']];
const standings=[['DOOSAN BEARS','—','—','—','—','—','—','—','—','—','—','—','—','—','—','—'],['LG TWINS','—','—','—','—','—','—','—','—','—','—','—','—','—','—','—'],['HANSHIN TIGERS','—','—','—','—','—','—','—','—','—','—','—','—','—','—','—'],['CANBERRA CAVALRY','—','—','—','—','—','—','—','—','—','—','—','—','—','—','—']];

document.addEventListener('DOMContentLoaded',()=>{
 const gamesGrid=document.getElementById('gamesGrid');
 if(gamesGrid) gamesGrid.innerHTML=games.map(g=>`<article class="game-card"><div class="date">${g[0]} · 2026</div><div class="game-teams"><div><b>${g[1]}</b><small>HOME</small></div><div class="score">${g[3]}<br><span style="font-size:11px;color:#aaa">${g[4]}</span></div><div><b>${g[2]}</b><small>AWAY</small></div></div><div class="status">${g[5]} · KHBA REGULAR SEASON</div></article>`).join('');
 const standingsBody=document.getElementById('standingsBody');
 if(standingsBody) standingsBody.innerHTML=standings.map(t=>`<tr><td><strong>${t[0]}</strong></td><td>${t[1]}</td><td>${t[2]}</td><td>${t[3]}</td><td>${t[4]}</td><td>${t[5]}</td><td>${t[6]}</td><td>${t[7]}</td><td>${t[8]}</td><td>${t[9]}</td><td>${t[10]}</td><td>${t[11]}</td><td>${t[12]}</td><td>${t[13]}</td><td>${t[14]}</td><td>${t[15]}</td></tr>`).join('');
 const tickerText=document.getElementById('tickerText');
 if(tickerText){const messages=['2026 정규시즌이 진행 중입니다. 최신 경기 결과와 순위를 확인하세요.','AUG 18 · DOOSAN BEARS vs LG TWINS · 21:30 KST','KHBA 공식 경기 기록과 리그 소식을 만나보세요.'];let i=0;setInterval(()=>{i=(i+1)%messages.length;tickerText.textContent=messages[i]},5000)}
});
