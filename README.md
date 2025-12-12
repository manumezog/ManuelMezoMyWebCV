# 📑 Manuel Mezo - Web CV & Portfolio

<div align="center">

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)

**A modern, responsive single-page portfolio website showcasing professional experience, education, AI projects, and personal interests.**

[🌐 Live Demo](https://cv.manuelmezo.com) • [💼 LinkedIn](https://www.linkedin.com/in/manuelmezo/) • [📧 Contact](mailto:manumezog@gmail.com)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Project Structure](#-project-structure)
- [Code Architecture](#-code-architecture)
- [Sections Breakdown](#-sections-breakdown)
- [How to Run Locally](#-how-to-run-locally)
- [Deployment](#-deployment)
- [Customization Guide](#-customization-guide)
- [License](#-license)

---

## 🎯 Overview

This repository contains a **self-contained, single-page static website** built with vanilla HTML, CSS, and JavaScript. No build tools or frameworks required — just open `index.html` in a browser.

The site serves as an interactive online CV and project portfolio featuring:

- Professional experience timeline
- Tech stack showcase
- Education history
- AI side projects gallery
- Interactive personal interests section

---

## ✨ Features

| Feature                            | Description                                           |
| ---------------------------------- | ----------------------------------------------------- |
| 🎨 **Modern Design**               | Clean, professional light theme with gradient accents |
| 📱 **Fully Responsive**            | Optimized layouts for desktop, tablet, and mobile     |
| 🖼️ **Horizontal Project Carousel** | Swipeable project cards with scroll indicators        |
| 🎯 **Interactive Interests**       | Click-to-reveal photo gallery for personal interests  |
| ⚡ **Zero Dependencies**           | No npm, no build step — pure HTML/CSS/JS              |
| 🔒 **SEO Optimized**               | Proper meta tags and semantic HTML structure          |
| 🚀 **Firebase Ready**              | Pre-configured for Firebase Hosting deployment        |

---

## 📁 Project Structure

```
ManuelMezoMyWebCV/
│
├── index.html              # 🏠 Main website (single-page application)
├── 404.html                # ❌ Custom 404 error page
├── README.md               # 📖 This documentation file
│
├── firebase.json           # 🔥 Firebase Hosting configuration
├── .firebaserc             # 🔥 Firebase project settings
│
├── ┌─────────────────────────────────────────────────────────┐
│   │                    PROFILE & LOGOS                       │
│   └─────────────────────────────────────────────────────────┘
├── Manuel_Mezo_Original.png    # Profile photo
├── logo-amazon-new.png         # Amazon company logo
├── logo-mckinsey.png           # McKinsey company logo
├── logo-tudelft.jpg            # TU Delft university logo
├── logo-uc3m.jpg               # UC3M university logo
├── logo-unileon.jpg            # Universidad de León logo
│
├── ┌─────────────────────────────────────────────────────────┐
│   │                    PROJECT IMAGES                        │
│   └─────────────────────────────────────────────────────────┘
├── project-medical-new.png     # X-Ray Medical Agent
├── project-monuments.jpg       # MonumentScout app
├── project-WMS.jpg             # WMS Prototype
├── project-food.jpg            # FoodStats app
├── project-AIchat.jpg          # Multi-model AI Chat
├── project-aivision.png        # AI Vision Experiments
├── project-voiceagent.jpg      # Voice Agent
├── project-github.jpg          # GitHub profile
├── project-webCV.jpg           # This website
│
├── ┌─────────────────────────────────────────────────────────┐
│   │                   INTERESTS PHOTOS                       │
│   └─────────────────────────────────────────────────────────┘
├── photo-nature.jpg            # Nature & Hiking
├── photo-space.jpg             # Space & Aeronautics
├── photo-robotics.jpg          # Robotics & AI
├── photo-basketball.jpg        # Basketball
├── photo-ski.jpg               # Skiing
├── photo-scuba.jpg             # Scuba Diving
├── photo-travel.jpg            # Travel
│
├── CV Manuel Mezo for download.pdf   # 📄 Downloadable PDF resume
│
├── archive/                    # 📦 Archived old site versions
├── public/                     # 📂 Public assets directory
└── .vscode/                    # ⚙️ VS Code workspace settings
```

---

## 🏗️ Code Architecture

The entire website is contained in a single `index.html` file with three main sections:

### 1. **CSS Styles** (Lines 9-438)

Embedded `<style>` block containing all styling:

```
:root {
    /* CSS Custom Properties (Variables) */
    --primary-text: #111827;
    --secondary-text: #4b5563;
    --bg-color: #ffffff;
    --card-bg: #f9fafb;
    --card-border: #e5e7eb;
    --accent-gradient: linear-gradient(135deg, #0ea5e9 0%, #6366f1 100%);
    --accent-color: #0284c7;
    --max-width: 1080px;
}
```

**Key CSS Components:**

| Component         | Lines   | Description                                          |
| ----------------- | ------- | ---------------------------------------------------- |
| Variables & Theme | 10-27   | CSS custom properties for colors, gradients, spacing |
| Header            | 46-60   | Fixed glassmorphism navigation bar                   |
| Hero Section      | 62-86   | Centered landing with gradient text effect           |
| Timeline Cards    | 93-136  | Experience/Education cards with date labels          |
| Project Cards     | 163-206 | Horizontal scrolling project carousel                |
| Interests Grid    | 231-238 | Interactive pill buttons with hover states           |
| Mobile Breakpoint | 245-437 | Responsive styles for screens ≤768px                 |

### 2. **HTML Structure** (Lines 440-822)

Semantic HTML5 markup organized into sections:

```html
<body>
  <header class="header">...</header>
  <!-- Fixed navigation -->
  <section id="home" class="hero">...</section>
  <!-- Landing section -->
  <section id="about">...</section>
  <!-- About with profile photo -->
  <section id="experience">...</section>
  <!-- Work experience timeline -->
  <section id="tech">...</section>
  <!-- Tech stack showcase -->
  <section id="education">...</section>
  <!-- Education timeline -->
  <section id="projects">...</section>
  <!-- AI projects carousel -->
  <section id="interests">...</section>
  <!-- Interactive interests -->
  <footer id="contact">...</footer>
  <!-- Contact & social links -->
</body>
```

### 3. **JavaScript** (Lines 824-942)

Inline `<script>` block with three main features:

#### a) Interests Photo Logic (Lines 825-881)

```javascript
const interestsMap = {
  nature: "photo-nature.jpg",
  space: "photo-space.jpg",
  // ... more mappings
};
```

- Maps interest keywords to photo filenames
- Handles fade transitions when switching photos
- Sets "Nature" as default on page load

#### b) Projects Horizontal Scroll (Lines 883-888)

```javascript
function scrollProjects(direction) {
  const container = document.getElementById("projectsContainer");
  const cardWidth = 350;
  container.scrollBy({ left: cardWidth * direction, behavior: "smooth" });
}
```

- Enables arrow button navigation on desktop
- Smooth scroll behavior between project cards

#### c) Mobile Scroll Enhancements (Lines 890-939)

```javascript
// Intersection Observer for peek animation
const projectsObserver = new IntersectionObserver(
  (entries) => {
    // Triggers when projects section enters viewport
  },
  { threshold: 0.3 }
);
```

- Updates scroll indicator dots on mobile
- Triggers "peek" animation to hint at scrollability
- Uses Intersection Observer API for performance

---

## 📑 Sections Breakdown

### 🏠 Hero Section

- Gradient text effect using `-webkit-background-clip`
- Call-to-action button with hover animation
- Centered layout with max-width constraint

### 👤 About Section

- Circular profile photo with box shadow
- Centered biography text with bold highlights

### 💼 Experience Section

- Timeline layout with year labels
- Company logos with fallback handling (`onerror`)
- Mobile-optimized card layout with inline logo + date

### 🛠️ Tech Stack Section

- Three-category breakdown (Development, AI/Cloud, Analytics)
- Consistent card styling with the experience section

### 🎓 Education Section

- Same timeline structure as experience
- University logos and degree information

### 🚀 AI Projects Section

- Horizontal scrollable carousel
- 9 project cards with images, descriptions, and links
- Desktop: Arrow buttons for navigation
- Mobile: Swipe gestures + dot indicators

### 🤓 Interests Section

- Interactive pill buttons
- Photo container with fade transitions
- Default "Nature" photo on load

### 📬 Contact Footer

- Social icons (Email, LinkedIn, GitHub)
- SVG icons with hover effects
- Dynamic year in copyright

---

## 🚀 How to Run Locally

### Option 1: Direct File Open

Simply double-click `index.html` or open it in your browser:

```
file:///path/to/ManuelMezoMyWebCV/index.html
```

### Option 2: Local Development Server

For proper path resolution and development:

**Using Node.js:**

```bash
npx serve .
```

**Using Python:**

```bash
python -m http.server 8000
```

**Using VS Code:**
Install the "Live Server" extension and click "Go Live"

---

## 🔥 Deployment

This project is configured for **Firebase Hosting**.

### Deploy to Firebase

```bash
# Login to Firebase (first time only)
firebase login

# Deploy the site
firebase deploy --only hosting
```

### Firebase Configuration

`firebase.json`:

```json
{
  "hosting": {
    "public": ".",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**", "archive/**"]
  }
}
```

> **Note:** The `archive/**` folder is ignored so old site versions are not publicly served.

---

## 🎨 Customization Guide

### Changing Colors

Edit the CSS variables in `:root` (lines 13-26):

```css
:root {
  --primary-text: #111827; /* Main text color */
  --accent-color: #0284c7; /* Links and highlights */
  --accent-gradient: linear-gradient(135deg, #0ea5e9 0%, #6366f1 100%);
}
```

### Adding a New Project

1. Add your project image to the root folder (e.g., `project-myapp.jpg`)
2. Add a new card in the `#projects` section (~line 720):

```html
<div class="project-card">
  <div class="project-img-container">
    <img src="project-myapp.jpg" alt="My App" class="project-img" />
  </div>
  <div class="project-content">
    <h4>🆕 My New Project</h4>
    <p>Description with <b>bold keywords</b>.</p>
    <a href="https://myapp.com" target="_blank">Try it out!</a>
  </div>
</div>
```

3. Add a scroll indicator dot in the `#scrollIndicator` div (~line 772)

### Adding a New Interest

1. Add your photo to the root folder (e.g., `photo-gaming.jpg`)
2. Add the mapping in the JavaScript `interestsMap` object (~line 827):

```javascript
const interestsMap = {
  // ... existing entries
  gaming: "photo-gaming.jpg",
};
```

3. Add the button in the interests grid (~line 793):

```html
<div class="interest-item" data-interest="gaming">🎮 Gaming</div>
```

---

## 📄 License

This project is personal portfolio code. Feel free to use it as inspiration for your own portfolio, but please replace the personal content (photos, text, projects) with your own.

---

<div align="center">

**Built with ❤️ by Manuel Mezo**

_Last updated: December 2024_

</div>
