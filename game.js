const btns = document.querySelectorAll('button');
const msg = document.querySelector('.message');
const winner = document.querySelector('.winner');
const result = document.querySelector('.result');


let score = [0,0];


const randNum = function(){
    let computerGuess = Math.trunc(Math.random() * 2) + 1;
    let playerGuess = Math.trunc(Math.random() * 2) + 1;
    
    if(playerGuess === computerGuess){
        msg.innerHTML = `Computer selected ${computerGuess}`
        score[0]++;
        winner.textContent = 'Player wins';
    } else {
        winner.textContent = 'Computer wins';
        score[1]++;
    }
    result.textContent = 'Player ' + score[0] + ' Computer ' + score[1];
}

btns.forEach(btn => {
    btn.addEventListener('click', randNum);
})