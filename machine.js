// Toy: one click opens the lid; Nezha's hand turns the switch off again.
const dayOffSwitch = document.getElementById('day-off-switch');
const toyBox = document.getElementById('toy-box');
const toyStatus = document.getElementById('toy-status');
const toyReplies = [
    'Day off rejected. Apparently the sea looked at him funny.',
    'Request denied. The Wind Fire Wheels have no parking brake.',
    'Quiet lasted one second. A new personal best.'
];
let toyBusy = false;
let toyTurns = 0;

dayOffSwitch.disabled = false;
dayOffSwitch.addEventListener('click', function () {
    if (toyBusy) return;
    toyBusy = true;
    dayOffSwitch.setAttribute('aria-checked', 'true');
    toyBox.classList.add('is-open');
    toyStatus.textContent = 'One day off, coming right up...';
    setTimeout(function () {
        dayOffSwitch.setAttribute('aria-checked', 'false');
        toyBox.classList.remove('is-open');
        toyStatus.textContent = toyReplies[toyTurns % toyReplies.length];
        toyTurns++;
        toyBusy = false;
    }, 1100);
});

// Game: the button only moves after activation, so it also works by keyboard.
const restButton = document.getElementById('rest-button');
const restartButton = document.getElementById('restart-game');
const arena = document.getElementById('rest-arena');
const gameStatus = document.getElementById('game-status');
const counter = document.getElementById('catch-counter');
const positions = [
    { left: '8px', top: '12px' },
    { left: 'calc(100% - 164px)', top: '58px' },
    { left: '8px', top: 'calc(100% - 58px)' },
    { left: 'calc(100% - 164px)', top: 'calc(100% - 58px)' }
];
const excuses = [
    'Rest? I have only annoyed ONE dragon today.',
    'Five more minutes! The universe is still unsupervised.',
    'These are not eye bags. They are battle shadows.',
    'Fine. But my wheels are sleeping in the bed too.'
];
let catches = 0;
let wakeTimer;

restButton.disabled = false;
restButton.addEventListener('click', function () {
    if (catches >= 5) return;
    catches++;
    counter.textContent = 'Caught: ' + catches + ' / 5';
    if (catches < 5) {
        restButton.style.left = positions[catches - 1].left;
        restButton.style.top = positions[catches - 1].top;
        gameStatus.textContent = excuses[catches - 1];
    } else {
        restButton.disabled = true;
        arena.classList.add('is-resting');
        gameStatus.textContent = 'You did it. He is asleep. Nobody breathe.';
        restartButton.hidden = false;
        wakeTimer = setTimeout(function () {
            arena.classList.remove('is-resting');
            arena.classList.add('is-awake');
            gameStatus.textContent = 'Nap complete. All two seconds of it. The Dragon King has been notified.';
        }, 2200);
    }
});

restartButton.addEventListener('click', function () {
    clearTimeout(wakeTimer);
    catches = 0;
    counter.textContent = 'Caught: 0 / 5';
    arena.classList.remove('is-resting', 'is-awake');
    restButton.style.removeProperty('left');
    restButton.style.removeProperty('top');
    restButton.disabled = false;
    restartButton.hidden = true;
    gameStatus.textContent = 'Round two. Surely a second nap will work.';
    restButton.focus();
});
