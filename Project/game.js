// game.js

let clickCount = 0;
let timeLeft = 10;
let timer;

const clickButton = document.getElementById('clickButton');
const clickCountDisplay = document.getElementById('clickCount');
const timeLeftDisplay = document.getElementById('timeLeft');

clickButton.addEventListener('click', () => {
    if (timeLeft > 0) {
        clickCount++;
        clickCountDisplay.textContent = clickCount;
    }
});

function startGame() {
    timer = setInterval(() => {
        timeLeft--;
        timeLeftDisplay.textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            alert(`游戏结束！你点击了 ${clickCount} 次。`);
        }
    }, 1000);
}

window.onload = startGame;