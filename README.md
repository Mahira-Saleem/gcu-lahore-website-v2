# GCU Lahore — Website Redesign

A modern, responsive, accessible concept redesign for **Government College University Lahore** (est. 1864), built with HTML5, CSS3 and vanilla JavaScript (ES5/ES6) plus GSAP + ScrollTrigger.

## Files
- `index.html` — single-page layout with smooth section navigation
- `style.css` — design system (CSS variables), layout, dark mode, responsive rules
- `script.js` — all interactivity and GSAP animations

## Setup
No build step and no server needed — just double-click `index.html` to open it in your browser.
(Optionally you can still serve the folder with Live Server or `python -m http.server`.)

## Features
- Sticky navbar that shrinks on scroll, hides on scroll-down, active-link highlighting
- Hamburger menu on mobile (Esc to close)
- Dark/light mode saved in localStorage
- Programs rendered from the DATA object in script.js, with live search + level filter
- News & Events with category filter, sorted by date
- Testimonial slider: next/prev, dots, autoplay, pause on hover
- Gallery lightbox with arrow-key and Esc navigation, focus restore
- FAQ accordion (one open at a time, ARIA attributes)
- Animated counters triggered on scroll
- Contact form validation: name, email, Pakistani phone (+92 / 03XX), message, with success message
- Embedded Google Map, footer with social links and +92 contact numbers
- Back-to-top button
- GSAP: preloader, hero entrance timeline, hero parallax, staggered scroll reveals, counters
- `prefers-reduced-motion` respected (animations and autoplay disabled)
- JS techniques: destructuring, spread, `map/filter/forEach/sort`, template literals, closures (filter chips), IIFE scope, `async/await`

## Improvements Made
| Typical weakness of old site | Solution in redesign |
|---|---|
| Dated, cluttered layout | Clean grid, generous spacing, heritage maroon/gold palette, Playfair + Source Sans typography |
| Poor mobile experience | Mobile-first responsive grid, slide-in menu, fluid type with `clamp()` |
| Confusing, deep navigation | Seven clear top-level sections, sticky nav with active state |
| Hard to find programs | Live search and level filters |
| Static news lists | Filterable, dated news cards with images |
| No interactivity or motion | Slider, lightbox, accordion, counters, GSAP animations |
| Weak accessibility | Skip link, alt text, labels, ARIA, visible focus, keyboard support, reduced motion |
| No dark mode | Persistent dark/light theme |
| Forms without feedback | Inline validation with Pakistani phone format and success message |

*Content (figures, news, testimonials) is illustrative for this concept and should be confirmed with the university before publishing. Images from Unsplash.*
