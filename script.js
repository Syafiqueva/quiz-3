const questions=[
{q:'What are the first two essential elements needed to form a contract?',k:['offer','acceptance'],e:'A valid agreement begins with an offer and acceptance.'},
{q:'What must acceptance be under the Contracts Act 1950?',k:['absolute'],e:'Acceptance must be absolute and unqualified.'},
{q:'What is the legal term for something of value exchanged between parties?',k:['consideration'],e:'Consideration is value exchanged for a promise.'},
{q:'What type of consent is required for a valid contract?',k:['free consent'],e:'Contracts must be made with free consent.'},
{q:'A contract induced by coercion is void or voidable?',k:['voidable'],e:'Lack of free consent makes it voidable.'},
{q:'An agreement that has no legal effect is called?',k:['void'],e:'A void agreement is unenforceable.'},
{q:'Fraud affects what legal requirement?',k:['consent'],e:'Fraud affects free consent.'},
{q:'A person under 18 generally lacks what to contract?',k:['capacity'],e:'Capacity is required to contract.'},
{q:'An agreement enforceable by law is called a?',k:['contract'],e:'Section 2(h) recognises enforceable agreements as contracts.'},
{q:'Ali buys a phone based on a false statement. Is the contract void or voidable?',k:['voidable'],e:'Misrepresentation usually makes the contract voidable.'}
];
let current=0,score=0,timer,intimed=false,locked=false;
function showScreen(id){document.querySelectorAll('.screen').forEach(x=>x.classList.remove('active'));document.getElementById(id).classList.add('active');}
function goHome(){showScreen('home');}
function startGame(u){untimed=u;showScreen('game');loadQuestion();}
function loadQuestion(){locked=false;document.getElementById('answer').value='';document.getElementById('feedback').innerHTML='';document.getElementById('continueBtn').style.display='none';document.getElementById('progress').innerText=`Case ${current+1}/10`;document.getElementById('score').innerText=`Score ${score}`;document.getElementById('question').innerText=questions[current].q;if(!untimed)startTimer();else document.getElementById('timer').innerText='Untimed';}
function startTimer(){clearInterval(timer);let t=30;document.getElementById('timer').innerText=t+'s';timer=setInterval(()=>{t--;document.getElementById('timer').innerText=t+'s';if(t<=0){clearInterval(timer);jail();}},1000);}
function jail(){showScreen('end');document.getElementById('ending').innerText='⛓️ Sentenced To Jail';document.getElementById('finalResults').innerText=`Final Score: ${score}/100`;}
document.getElementById('submitBtn').onclick=function(){if(locked)return;let ans=document.getElementById('answer').value.toLowerCase();let q=questions[current];let correct=q.k.some(k=>ans.includes(k));if(correct){locked=true;score+=10;clearInterval(timer);document.getElementById('feedback').innerHTML='✅ Correct! '+q.e;document.getElementById('continueBtn').style.display='inline-block';}else{document.getElementById('feedback').innerHTML='❌ Incorrect. Hint: '+q.e;}};
document.getElementById('continueBtn').onclick=function(){current++;if(current>=questions.length){showScreen('end');document.getElementById('ending').innerText='🏆 Acquitted By The Court';document.getElementById('finalResults').innerText=`Score ${score}/100`;return;}loadQuestion();};
