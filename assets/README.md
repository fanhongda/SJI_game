# 🇺🇸 USA Trivia Quiz — SJII Global Family Day

> **St. Joseph's Institution International · USA Booth · 2026**

---

## Project Overview

A self-contained, browser-based quiz game built for the **USA Booth** at SJII's Global Family Day. Designed for **elementary school students (Grade 4+)**. Runs offline on a single laptop — no server or internet required after initial load (except canvas-confetti CDN).

---

## File Structure

```
SJI_game/
├── index.html       — HTML skeleton (5 screens)
├── style.css        — All styles, animations, responsive layout
├── game.js          — 200-question bank + full game logic
└── assets/
    └── README.md    — This file
```

---

## Features

### Gameplay
| Feature | Detail |
|---|---|
| Questions | 175-question bank, 10 randomly selected per round |
| Difficulty levels | Easy · Medium · Fun (all Grade 4+ appropriate) |
| Timer | Counts up in milliseconds, displayed in 0.1s precision |
| Feedback | Correct/wrong animation + interesting fact after each answer |
| Completion sounds | Web Audio API — no audio files needed |
| Confetti | `canvas-confetti` CDN burst on correct; full fanfare at 10/10 |

### Leaderboard
| Feature | Detail |
|---|---|
| Storage | `localStorage` — persists across sessions on the same device |
| Capacity | Top 10 entries only |
| Sorting | Primary: score (high→low) · Secondary: time (fast→slow) |
| Tie-breaker | Two players with 10/10 — faster time ranks higher |
| Difficulty shown | Each entry records which difficulty was played |
| Player highlight | Current player's entry is highlighted with a **YOU** badge |

### Difficulty Levels

| Level | Description | Count |
|---|---|---|
| 🎯 All | Random mix from all 175 questions | 175 |
| 🟢 Easy | Basic USA geography, symbols & history — Grade 4–5 | 50 |
| 🟡 Medium | Intermediate history, science & culture — Grade 5–7 | 50 |
| 🎉 Fun | Cartoons, food, holidays, sports & quirky facts | 75 |

### Score Feedback Messages

| Score | Message |
|---|---|
| **10/10** | *"Absolute Genius! 🎆 All 10 correct in just Xs!"* |
| **7–9/10** | *"Great Job, Patriot! 🦅 You really know your USA facts!"* |
| **<7/10** | *"Thanks for visiting the USA Booth! 🇺🇸 Keep exploring America!"* |

### Secret Admin Panel

For booth staff to reset or export the leaderboard without disrupting play.

| Method | How |
|---|---|
| URL parameter | Open `index.html?admin` in the browser |
| Easter egg | Click the 🇺🇸 flag **7 times** within 5 seconds on the start screen |

**Admin functions:**
- View current leaderboard with stats (player count, top score, fastest time)
- **Reset leaderboard** (with confirmation dialog)
- **Copy results to clipboard** (formatted plain text for sharing/printing)

---

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
| Storage | `localStorage` (browser, device-local) |
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

## Question Bank Summary

175 questions covering:
- US geography (states, capitals, rivers, mountains)
- American history (founding, Civil War, WWII, civil rights)
- Government & constitution (amendments, branches, landmark cases)
- US culture (food, sports, entertainment, inventions)
- Fun & quirky American facts

---

## Credits

- Built for **SJII Global Family Day** USA Booth
- Designed and developed with Claude Code (Anthropic)
- Questions curated for **Grade 4+** through high school level

---

*Last updated: March 2026*
