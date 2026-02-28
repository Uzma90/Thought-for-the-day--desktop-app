
A simple mini short project. A thought for the day desktop application
# Thought of the Day — Electron App

A beautiful daily thought & quote desktop app built with Electron. Runs on **Windows** and **macOS**.

## Features
- 📅 **Interactive calendar** — click any date to see its thought
- 💭 **Thought for the Day** — a daily intention or focus
- 🖋️ **Quote** — a curated quote with attributed author  
- 💡 **Reflection** — a brief explanation to deepen the quote's meaning
- 30 unique thought/quote entries that cycle through the year
- Beautiful editorial design with warm parchment tones

---

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or later)
- npm (comes with Node.js)

### Install & Run

```bash
# 1. Install dependencies
npm install

# 2. Run the app in development
npm start
```

---

## Building for Distribution

### macOS (.dmg)
```bash
npm run build:mac
```

### Windows (.exe installer)
```bash
npm run build:win
```

### Both platforms
```bash
npm run build:all
```

Outputs will be in the `dist/` folder.

---

## Project Structure

```
thought-of-the-day/
├── main.js          # Electron main process (window creation, IPC)
├── index.html       # App UI (renderer process)
├── thoughts.js      # All daily thoughts and quotes data
├── package.json     # Dependencies and build config
└── README.md        # This file
```

---

## Adding More Thoughts

Open `thoughts.js` and add entries to the `thoughts` array:

```js
{
  thought: "Your daily intention here.",
  quote: "A meaningful quote.",
  author: "Author Name",
  explanation: "A brief reflection on the quote."
}
```

The app cycles through entries by day of year, so adding more entries spreads them further throughout the year.

---

## Cross-Platform Notes

| Feature | macOS | Windows |
|---|---|---|
| Title bar | Native traffic lights (hidden inset) | Custom controls (─ ▢ ✕) |
| Icon | `assets/icon.icns` or `.png` | `assets/icon.ico` |
| Build output | `.dmg` + `.zip` | `.exe` NSIS installer |

### Optional: Add an App Icon
Place your icon files in an `assets/` folder:
- `assets/icon.png` (512×512 recommended, used on macOS dev)
- `assets/icon.icns` (macOS distribution)
- `assets/icon.ico` (Windows)
