# 🇺🇸 USA Trivia Quiz — SJII Global Family Day

> **St. Joseph's Institution International · USA Booth · 2026**

---

## Project Overview

A self-contained, browser-based quiz game built for the **USA Booth** at SJII's Global Family Day. Designed for **elementary school students (Grade 1 to 6)**. Runs offline on a single laptop — no server or internet required after initial load (except canvas-confetti CDN).

---

## File Structure

```
SJI_game/
├── index.html       — HTML skeleton (3 screens)
├── style.css        — All styles, animations, responsive layout
├── game.js          — 11 fixed questions (10 regular + 1 bonus) + full game logic
└── assets/
    └── README.md    — This file
```

---

## Features

### Gameplay
| Feature | Detail |
|---|---|
| Questions | 11 fixed questions — 10 regular + 1 bonus challenge, always in order |
| Timer | Counts up in milliseconds, displayed in 0.1s precision |
| Feedback | Correct/wrong animation + interesting fact after each answer |
| Completion sounds | Web Audio API — no audio files needed |
| Confetti | `canvas-confetti` CDN burst on correct; full fanfare at 10/10 |
| Bonus Challenge | ⭐ Special 11th question after Q10 — does not affect main score |


### Score Feedback Messages

| Score | Message |
|---|---|
| **10/10 + Bonus ✅** | *"LEGEND! 🌟 All 11 correct in just Xs — True USA Master!"* |
| **10/10** | *"Absolute Genius! 🎆 All 10 correct in just Xs!"* |
| **7–9/10** | *"Great Job, Patriot! 🦅 You really know your USA facts!"* |
| **<7/10** | *"Thanks for visiting the USA Booth! 🇺🇸 Keep exploring America!"* |



## Design System

### Color Palette

| Role | Color | Hex |
|---|---|---|
| SJII Maroon | Dark red | `#7B1D2B` |
| USA Red | Flag red | `#BF0A30` |
| USA Blue | Flag blue | `#002868` |
| USA Blue Mid | Indigo | `#3C3B6E` |
| Gold / Accent | Warm gold | `#FFD700` |
| Correct | Green | `#2ECC71` |
| Wrong | Red | `#E74C3C` |

### Background
- Animated multi-color gradient (CSS `@keyframes bgShift`, 18s loop)
- 6 floating color orbs with blur and gentle float animation
- CSS star-field overlay (20 static radial-gradient stars)

### Typography
- Font: `'Segoe UI'`, system-ui fallback
- Fluid type scale using `clamp()` for titles
- All UI text in uppercase with letter-spacing for labels

---

## Responsive / iPad Support

| Breakpoint | Target |
|---|---|
| `< 430px` | Small phones — single-column options |
| `768px` | iPad portrait — larger touch targets, bigger fonts |
| `1024px` | iPad landscape — optimal layout |
| `landscape + height < 600px` | Phone landscape — compact header |
| Safe area insets | Notch/Dynamic Island aware via `env()` |

All interactive elements meet the **44pt minimum touch target** size for iOS/iPadOS.

---

## Tech Stack

| Component | Technology |
|---|---|
| Language | Vanilla HTML5 + CSS3 + ES6 JavaScript |
| Audio | Web Audio API (no external files) |
| Confetti | [canvas-confetti](https://www.npmjs.com/package/canvas-confetti) v1.9.3 via jsDelivr CDN |
| Dependencies | **None** (CDN only for confetti) |

---

## Setup & Running

```bash
# No build step needed — open directly in browser
open index.html

# Or serve locally for consistent behavior
python3 -m http.server 8080
# Then visit http://localhost:8080
```

> **Booth tip:** Run in full-screen mode (`F11` or View → Enter Full Screen) for the best experience. Use Chrome or Safari for optimal Web Audio API support.

---

## Question List

**Q1.** How many states are there in the United States?
- A) 48 · B) 49 · **C) 50 ✅** · D) 52

**Q2.** What do the 13 stripes on the U.S. flag represent?
- A) 13 presidents · **B) 13 original colonies ✅** · C) 13 cities · D) 13 rivers

**Q3.** Which famous document begins with "We the People"?
- A) Declaration of Independence · B) Bill of Rights · **C) U.S. Constitution ✅** · D) Gettysburg Address

**Q4.** Who was President during the American Civil War?
- A) George Washington · B) Thomas Jefferson · **C) Abraham Lincoln ✅** · D) John F. Kennedy

**Q5.** What is the largest state in the USA by size?
- A) Texas · B) California · **C) Alaska ✅** · D) Florida

**Q6.** Which ocean is on the west coast of the United States?
- A) Atlantic Ocean · B) Indian Ocean · **C) Pacific Ocean ✅** · D) Arctic Ocean

**Q7.** What is the capital city of California?
- A) Los Angeles · B) San Francisco · **C) Sacramento ✅** · D) San Diego

**Q8.** What does "DC" stand for in Washington, D.C.?
- A) District City · **B) District of Columbia ✅** · C) Downtown Center · D) Direct Capital

**Q9.** Which famous American leader helped end slavery?
- A) George Washington · B) Benjamin Franklin · **C) Abraham Lincoln ✅** · D) Theodore Roosevelt

**Q10.** Which landmark is carved into a mountain with four U.S. presidents?
- A) Statue of Liberty · **B) Mount Rushmore ✅** · C) Golden Gate Bridge · D) Empire State Building

---

### ⭐ Bonus Challenge Question (Make it "WOW!")

**Q11.** Which two states are NOT connected to the mainland USA?
- A) Alaska & Puerto Rico · **B) Alaska & Hawaii ✅** · C) Hawaii & Guam · D) Hawaii & Puerto Rico

---

## Credits

- Built for **SJII Global Family Day** USA Booth
- Designed and developed with Claude Code (Anthropic)


---

*Last updated: March 2026*
