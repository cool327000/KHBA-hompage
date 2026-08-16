const games=[['AUG 16','DOOSAN BEARS','LG TWINS','5','3','FINAL'],['AUG 15','HANSHIN TIGERS','CANBERRA CAVALRY','2','4','FINAL'],['AUG 14','LG TWINS','HANSHIN TIGERS','6','6','FINAL']];
const standings=[['DOOSAN BEARS',12,5,'.706','—','—','7-3','W2','86','61','+25','12-5','7-2','5-3','9-4','LG · AUG 18'],['LG TWINS',10,7,'.588','2.0','2.0','6-4','L1','78','70','+8','10-7','6-3','4-4','8-6','DB · AUG 18'],['HANSHIN TIGERS',8,9,'.471','4.0','4.0','4-6','L2','69','75','-6','8-9','5-4','3-5','6-8','CC · AUG 19'],['CANBERRA CAVALRY',5,14,'.263','7.5','7.5','3-7','W1','58','85','-27','5-14','3-6','2-8','4-12','HT · AUG 19']];

document.addEventListener('DOMContentLoaded',()=>{
 const gamesGrid=document.getElementById('gamesGrid');
 if(gamesGrid) gamesGrid.innerHTML=games.map(g=>`<article class="game-card"><div class="date">${g[0]} · 2026</div><div class="game-teams"><div><b>${g[1]}</b><small>HOME</small></div><div class="score">${g[3]}<br><span style="font-size:11px;color:#aaa">${g[4]}</span></div><div><b>${g[2]}</b><small>AWAY</small></div></div><div class="status">${g[5]} · KHBA REGULAR SEASON</div></article>`).join('');
 const standingsBody=document.getElementById('standingsBody');
 if(standingsBody) standingsBody.innerHTML=standings.map(t=>`<tr><td><strong>${t[0]}</strong></td><td>${t[1]}</td><td>${t[2]}</td><td>${t[3]}</td><td>${t[4]}</td><td>${t[5]}</td><td>${t[6]}</td><td>${t[7]}</td><td>${t[8]}</td><td>${t[9]}</td><td>${t[10]}</td><td>${t[11]}</td><td>${t[12]}</td><td>${t[13]}</td><td>${t[14]}</td><td>${t[15]}</td></tr>`).join('');
 const tickerText=document.getElementById('tickerText');
 if(tickerText){const messages=['2026 정규시즌이 진행 중입니다. 최신 경기 결과와 순위를 확인하세요.','AUG 18 · DOOSAN BEARS vs LG TWINS · 21:30 KST','KHBA 공식 경기 기록과 리그 소식을 만나보세요.'];let i=0;setInterval(()=>{i=(i+1)%messages.length;tickerText.textContent=messages[i]},5000)}
});
