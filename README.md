# Extension Manager 

A responsive web app to manage and filter browser extension cards, built as a Frontend Mentor challenge.

## Features

- **Light/Dark Theme Toggle:** Easily switch between light and dark modes.
- **Responsive Design:** Cards and layout adapt smoothly to all screen sizes.
- **Filter Extensions:** Filter cards by "All", "Active", or "Inactive" states.
- **Remove Extensions:** Remove any extension card from the gallery.
- **Mark Active/Inactive:** Toggle the active state of each extension.

## Tech Stack

- **HTML5**
- **CSS3** (with custom properties and responsive grid)
- **JavaScript** (vanilla, for interactivity)

## Getting Started

1. **Clone or Download the Repository**
2. **Open `index.html` in your browser**

No build tools or dependencies required.

## Project Structure

```
├── Assets/
│   ├── fonts/
│   └── images/
├── index.html
├── style.css
├── script.js
└── README.md
```

## How It Works

- **Theme Toggle:**  
  Click the moon/sun icon in the header to switch themes. Your preference is saved in `localStorage`.

- **Filtering:**  
  Use the filter buttons ("All", "Active", "Inactive") to show only relevant cards.

- **Card Actions:**  
  - **Remove:** Click "Remove" to hide a card.
  - **Active Toggle:** Use the switch to mark an extension as active/inactive.

## Responsive Design

- **Desktop:** Cards are arranged in a multi-column grid.
- **Tablet:** Grid adapts to fewer columns.
- **Mobile:** Cards are centered and stack vertically for easy viewing.

## Customization

- **Add Extensions:**  
  Duplicate a `.card` block in `index.html` and update its content.
- **Change Styles:**  
  Edit `style.css` for colors, fonts, or layout tweaks.

## Credits

- Challenge by [Frontend Mentor](https://www.frontendmentor.io/)
- Icons and logos from the provided assets.

---

**Feel free to use, modify, and share!**