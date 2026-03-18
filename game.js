'use strict';

/* ═══════════════════════════════════════════════════════════
   FIXED 11 QUESTIONS  (10 regular + 1 bonus challenge)
   Questions are always presented in this order — no randomness
═══════════════════════════════════════════════════════════ */
const FIXED_QUESTIONS = [
  {
    q: 'How many states are there in the United States?',
    opts: ['A) 48', 'B) 49', 'C) 50', 'D) 52'],
    ans: 'C',
    fact: 'Hawaii became the 50th state on August 21, 1959! 🌺'
  },
  {
    q: 'What do the 13 stripes on the U.S. flag represent?',
    opts: ['A) 13 presidents', 'B) 13 original colonies', 'C) 13 cities', 'D) 13 rivers'],
    ans: 'B',
    fact: 'The 13 original colonies declared independence from Britain in 1776! 🦅'
  },
  {
    q: 'Which famous document begins with "We the People"?',
    opts: ['A) Declaration of Independence', 'B) Bill of Rights', 'C) U.S. Constitution', 'D) Gettysburg Address'],
    ans: 'C',
    fact: 'The U.S. Constitution was signed in Philadelphia on September 17, 1787! 📜'
  },
  {
    q: 'Who was President during the American Civil War?',
    opts: ['A) George Washington', 'B) Thomas Jefferson', 'C) Abraham Lincoln', 'D) John F. Kennedy'],
    ans: 'C',
    fact: 'Lincoln served as the 16th President from 1861 until his assassination in 1865! 🎩'
  },
  {
    q: 'What is the largest state in the USA by size?',
    opts: ['A) Texas', 'B) California', 'C) Alaska', 'D) Florida'],
    ans: 'C',
    fact: 'Alaska is more than twice the size of Texas — bought from Russia in 1867! 🧊'
  },
  {
    q: 'Which ocean is on the west coast of the United States?',
    opts: ['A) Atlantic Ocean', 'B) Indian Ocean', 'C) Pacific Ocean', 'D) Arctic Ocean'],
    ans: 'C',
    fact: 'The Pacific Ocean is the largest and deepest ocean on Earth! 🌊'
  },
  {
    q: 'What is the capital city of California?',
    opts: ['A) Los Angeles', 'B) San Francisco', 'C) Sacramento', 'D) San Diego'],
    ans: 'C',
    fact: 'Sacramento became California\'s permanent state capital in 1854! 🌉'
  },
  {
    q: 'What does "DC" stand for in Washington, D.C.?',
    opts: ['A) District City', 'B) District of Columbia', 'C) Downtown Center', 'D) Direct Capital'],
    ans: 'B',
    fact: 'Washington D.C. was established in 1790 and named after Christopher Columbus! 🏛️'
  },
  {
    q: 'Which famous American leader helped end slavery?',
    opts: ['A) George Washington', 'B) Benjamin Franklin', 'C) Abraham Lincoln', 'D) Theodore Roosevelt'],
    ans: 'C',
    fact: 'Lincoln signed the Emancipation Proclamation on January 1, 1863! ✊'
  },
  {
    q: 'Which landmark is carved into a mountain with four U.S. presidents?',
    opts: ['A) Statue of Liberty', 'B) Mount Rushmore', 'C) Golden Gate Bridge', 'D) Empire State Building'],
    ans: 'B',
    fact: 'Mount Rushmore features Washington, Jefferson, Theodore Roosevelt & Lincoln! ⛰️'
  },
  // ⭐ Bonus Challenge Question (index 10)
  {
    bonus: true,
    q: 'Which two states are NOT connected to the mainland USA?',
    opts: ['A) Alaska & Puerto Rico', 'B) Alaska & Hawaii', 'C) Hawaii & Guam', 'D) Hawaii & Puerto Rico'],
    ans: 'B',
    fact: 'Alaska borders Canada and Hawaii is 2,400 miles into the Pacific — both became US states in 1959! 🌺🧊'
  }
];

/* ═══════════════════════════════════════════════════════════
   STATE
═══════════════════════════════════════════════════════════ */
const state = {
  playerName:   '',
  currentQ:     0,
  score:        0,
  startMs:      0,
  endMs:        0,
  timerHandle:  null,
  answered:     false,
  bonusCorrect: false,
};

/* ═══════════════════════════════════════════════════════════
   AUDIO ENGINE (Web Audio API — no external files needed)
═══════════════════════════════════════════════════════════ */
let _ctx = null;
function getCtx() {
  if (!_ctx) _ctx = new (window.AudioContext || window.webkitAudioContext)();
  return _ctx;
}
function tone(freq, dur, type = 'sine', vol = 0.28) {
  try {
    const c = getCtx();
    const osc  = c.createOscillator();
    const gain = c.createGain();
    osc.connect(gain);
    gain.connect(c.destination);
    osc.type = type;
    osc.frequency.setValueAtTime(freq, c.currentTime);
    gain.gain.setValueAtTime(vol, c.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, c.currentTime + dur);
    osc.start(c.currentTime);
    osc.stop(c.currentTime + dur);
  } catch (_) {}
}
function sndCorrect() {
  [523, 659, 784].forEach((f, i) => setTimeout(() => tone(f, 0.22), i * 90));
}
function sndWrong() {
  tone(220, 0.12, 'sawtooth', 0.22);
  setTimeout(() => tone(175, 0.22, 'sawtooth', 0.18), 100);
}
function sndFanfare() {
  const notes = [523, 659, 784, 1047, 784, 1047, 1319];
  const times = [0, 110, 220, 340, 490, 590, 720];
  notes.forEach((f, i) => setTimeout(() => tone(f, 0.28, 'sine', 0.32), times[i]));
}

/* ═══════════════════════════════════════════════════════════
   SCREEN MANAGEMENT
═══════════════════════════════════════════════════════════ */
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

/* ═══════════════════════════════════════════════════════════
   UTILITIES
═══════════════════════════════════════════════════════════ */
function esc(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/* ═══════════════════════════════════════════════════════════
   INIT
═══════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  // Enter key on name field
  document.getElementById('playerName').addEventListener('keydown', e => {
    if (e.key === 'Enter') startGame();
  });
});

/* ═══════════════════════════════════════════════════════════
   GAME FLOW
═══════════════════════════════════════════════════════════ */
function startGame() {
  const inp  = document.getElementById('playerName');
  const name = inp.value.trim();
  if (!name) {
    inp.classList.add('error');
    inp.placeholder = '⚠ Please enter your name!';
    inp.focus();
    setTimeout(() => { inp.classList.remove('error'); inp.placeholder = 'e.g. Alex Johnson'; }, 2200);
    return;
  }
  state.playerName  = name;
  state.currentQ    = 0;
  state.score       = 0;
  state.answered    = false;
  state.bonusCorrect = false;
  state.startMs     = performance.now();
  state.endMs       = 0;

  startTimer();
  loadQuestion();
  showScreen('screen-quiz');
}

function resetToStart() {
  clearInterval(state.timerHandle);
  state.currentQ    = 0;
  state.score       = 0;
  state.answered    = false;
  state.bonusCorrect = false;
  document.getElementById('playerName').value = '';
  showScreen('screen-start');
}

/* Timer */
function startTimer() {
  clearInterval(state.timerHandle);
  state.timerHandle = setInterval(() => {
    const sec = ((performance.now() - state.startMs) / 1000).toFixed(1);
    document.getElementById('timerDisplay').textContent = sec + 's';
  }, 100);
}
function stopTimer() {
  clearInterval(state.timerHandle);
  state.endMs = performance.now();
}
function elapsedMs() { return state.endMs - state.startMs; }

/* Load a question */
function loadQuestion() {
  const q = FIXED_QUESTIONS[state.currentQ];
  state.answered = false;

  // Progress bar — fill to 100% at bonus question
  const pct = state.currentQ >= 10 ? 100 : (state.currentQ / 10) * 100;
  document.getElementById('progressFill').style.width = `${pct}%`;

  // Counter and score
  if (q.bonus) {
    document.getElementById('qCounter').textContent  = '⭐ BONUS CHALLENGE';
    document.getElementById('scoreLive').textContent = `Score: ${state.score}/10`;
  } else {
    document.getElementById('qCounter').textContent  = `Question ${state.currentQ + 1} / 10`;
    document.getElementById('scoreLive').textContent = `Score: ${state.score}`;
  }

  // Bonus badge
  const badge = document.getElementById('diffBadge');
  if (q.bonus) {
    badge.textContent = '⭐ BONUS CHALLENGE';
    badge.className   = 'diff-badge bonus';
    badge.style.display = '';
  } else {
    badge.style.display = 'none';
  }

  document.getElementById('qText').textContent = q.q;

  const fb = document.getElementById('feedback');
  fb.className = 'feedback';
  document.getElementById('feedbackStatus').textContent = '';
  document.getElementById('feedbackFact').textContent   = '';
  document.getElementById('nextWrap').style.display     = 'none';

  if (q.bonus) {
    document.getElementById('nextBtn').textContent = 'See My Results →';
  } else if (state.currentQ === 9) {
    document.getElementById('nextBtn').textContent = '⭐ Bonus Challenge →';
  } else {
    document.getElementById('nextBtn').textContent = 'Next Question →';
  }

  const grid = document.getElementById('optionsGrid');
  grid.innerHTML = '';
  q.opts.forEach((opt, idx) => {
    const letter = String.fromCharCode(65 + idx);
    const text   = opt.substring(3);
    const btn    = document.createElement('button');
    btn.className = 'opt-btn';
    btn.innerHTML = `<span class="opt-letter">${letter}</span><span>${esc(text)}</span>`;
    btn.addEventListener('click', () => pickAnswer(letter, btn, q));
    grid.appendChild(btn);
  });
}

/* Player picks an answer */
function pickAnswer(letter, btnEl, q) {
  if (state.answered) return;
  state.answered   = true;
  const isCorrect  = letter === q.ans;
  const allBtns    = document.querySelectorAll('.opt-btn');
  const correctIdx = q.ans.charCodeAt(0) - 65;

  allBtns.forEach(b => b.disabled = true);

  if (isCorrect) {
    btnEl.classList.add('correct');
    if (q.bonus) {
      state.bonusCorrect = true;
    } else {
      state.score++;
      document.getElementById('scoreLive').textContent = `Score: ${state.score}`;
    }
    sndCorrect();
    launchConfetti();
  } else {
    btnEl.classList.add('wrong');
    allBtns[correctIdx].classList.add('correct');
    sndWrong();
  }

  const fb = document.getElementById('feedback');
  fb.className = 'feedback ' + (isCorrect ? 'correct-fb' : 'wrong-fb');

  if (q.bonus) {
    document.getElementById('feedbackStatus').textContent =
      isCorrect ? '⭐ BONUS CORRECT! WOW! 🌟' : '❌ Not quite — the answer is Alaska & Hawaii!';
  } else {
    document.getElementById('feedbackStatus').textContent =
      isCorrect ? '✅ Correct! Well done!' : '❌ Not quite…';
  }
  document.getElementById('feedbackFact').textContent = '💡 ' + q.fact;
  document.getElementById('nextWrap').style.display   = 'flex';
}

/* Advance to next question or finish */
function nextQuestion() {
  state.currentQ++;
  if (state.currentQ >= 11) finishGame();
  else loadQuestion();
}

/* Game over */
function finishGame() {
  stopTimer();
  document.getElementById('progressFill').style.width = '100%';

  const ms     = elapsedMs();
  const secStr = (ms / 1000).toFixed(1);
  const wrong  = 10 - state.score;
  const avgSec = (ms / 1000 / 10).toFixed(1);

  let emoji, msg, stars;
  if (state.score === 10 && state.bonusCorrect) {
    emoji = '🌟'; stars = '🌟🌟🌟🌟🌟🌟';
    msg   = `LEGEND! 🌟 All 11 correct in just ${secStr}s — True USA Master!`;
    sndFanfare();
    setTimeout(bigConfetti, 150);
  } else if (state.score === 10) {
    emoji = '🎆'; stars = '⭐⭐⭐⭐⭐';
    msg   = `Absolute Genius! 🎆  All 10 correct in just ${secStr}s!`;
    sndFanfare();
    setTimeout(bigConfetti, 150);
  } else if (state.score >= 7) {
    emoji = '🦅'; stars = '⭐⭐⭐⭐';
    msg   = 'Great Job, Patriot! 🦅  You really know your USA facts!';
  } else {
    emoji = '🇺🇸'; stars = '⭐⭐⭐';
    msg   = 'Thanks for visiting the USA Booth! 🇺🇸  Keep exploring America!';
  }

  document.getElementById('rEmoji').textContent   = emoji;
  document.getElementById('rScore').textContent   = `${state.score}/10`;
  document.getElementById('rTime').textContent    = `⏱  Time: ${secStr} s`;
  document.getElementById('rStars').textContent   = stars;
  document.getElementById('rMsg').textContent     = msg;
  document.getElementById('sCorrect').textContent = state.score;
  document.getElementById('sWrong').textContent   = wrong;
  document.getElementById('sAvg').textContent     = avgSec + ' s';

  showScreen('screen-result');
}

/* ═══════════════════════════════════════════════════════════
   CONFETTI
═══════════════════════════════════════════════════════════ */
const USA_COLORS = ['#BF0A30', '#002868', '#FFD700', '#FFFFFF', '#7B1D2B', '#00c6ff'];

function launchConfetti() {
  if (typeof confetti === 'undefined') return;
  confetti({ particleCount: 55, spread: 65, origin: { y: 0.6 }, colors: USA_COLORS });
}

function bigConfetti() {
  if (typeof confetti === 'undefined') return;
  [0, 200, 400].forEach(d =>
    setTimeout(() => confetti({ particleCount: 90, spread: 90, origin: { y: 0.5 }, colors: USA_COLORS }), d)
  );
  setTimeout(() => {
    confetti({ particleCount: 80, angle:  60, spread: 55, origin: { x: 0, y: 0.6 }, colors: USA_COLORS });
    confetti({ particleCount: 80, angle: 120, spread: 55, origin: { x: 1, y: 0.6 }, colors: USA_COLORS });
  }, 550);
}
