# Yasanga Nirmal — Portfolio Website

A personal portfolio website for **Yasanga Nirmal**, a BICT undergraduate and Web & Mobile App Developer. The site showcases skills, projects, education, and contact information with a modern, responsive, dark-themed design.

🔗 **Live Demo:** _add your deployed link here_

## About

This portfolio highlights hands-on experience in web and Android mobile app development, including AI/ML integration (Google ML Kit, Google Gemini API) into production-style applications.

## Features

- Responsive design (desktop, tablet, and mobile — including small phone screens)
- Mobile hamburger navigation menu with slide-in panel
- Smooth scroll-reveal animations on section elements
- Animated hero background video
- Skills section with animated progress bars
- Featured projects showcase with images/video previews
- Education timeline and coursework/achievements grid
- Contact section with quick links (email, GitHub)
- Downloadable CV button

## Tech Stack

- **HTML5** — semantic page structure
- **CSS3** — custom properties (CSS variables), Flexbox, Grid, media queries for responsiveness
- **JavaScript (Vanilla)** — mobile nav toggle, IntersectionObserver for scroll animations
- **Google Fonts** — Space Grotesk, Inter, IBM Plex Mono

## Project Structure

```
├── index.html      # Main HTML page
├── style.css       # All styling (variables, layout, responsive breakpoints)
├── script.js       # Mobile nav toggle + scroll-reveal animations
├── image/          # Images (logo, profile photo, project screenshots)
└── video/          # Background and project demo videos
```

## Responsive Breakpoints

| Breakpoint | Target |
|---|---|
| `max-width: 980px` | Tablets / smaller laptops |
| `max-width: 760px` | Mobile — hamburger menu activates |
| `max-width: 480px` | Small phones — tightened spacing, font sizes, and single-column layouts |

## Getting Started

No build tools required — this is a static site.

1. Clone the repository:
   ```bash
   git clone https://github.com/yasanganirmal2727-bit/<repo-name>.git
   ```
2. Open `index.html` directly in your browser, or serve it locally:
   ```bash
   npx serve .
   ```

## Sections

- **Hero** — Introduction and call-to-action
- **About** — Background and focus areas
- **Skills** — Mobile development, web development, AI/ML, tools & databases
- **Projects** — Featured work with descriptions and links
- **Education** — Academic background and relevant coursework
- **Contact** — Get in touch

## Contact

- **Email:** yasanganirmal2727@gmail.com
- **GitHub:** [yasanganirmal2727-bit](https://github.com/yasanganirmal2727-bit)

## License

This project is open for personal reference. Feel free to fork it for inspiration, but please don't reuse the personal content (name, photos, resume) as your own.
