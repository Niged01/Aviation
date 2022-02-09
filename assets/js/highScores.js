window.addEventListener('DOMContentLoaded', (event) => {
    readScore()
});

const usernameRef = document.querySelector('#username');
const saveScoreRef= document.querySelector('#saveScoreBtn');
const finalScoreRef = document.querySelector('#finalScore');
const score = localStorage.getItem('score');



usernameRef.addEventListener('keyup', () => {
    saveScoreRef.disabled = !usernameRef.ariaValueMax;
});

finalScoreRef.innerText = score;

saveHighScore = e => {
    e.preventDefault();
}