import React from "react";
import { usePortfolioDropdown } from "../usePortfolioDropdown";

export default function Work() {
  usePortfolioDropdown();
  return (<>
<div className="page-wrapper">
<header className="main-header">
<div className="container nav-container">
<a className="logo" href="/"><span className="logo-script">Allysa.</span><span className="heart">♥</span></a>
<nav className="nav-links" aria-label="Primary navigation">
<a href="/">Home</a>
<a href="/about.html">About</a>
<div className="dropdown">
<button className="dropdown-toggle active" type="button" aria-expanded="false" aria-haspopup="true">
              Work <span className="dropdown-arrow" aria-hidden="true">▼</span>
</button>
<ul className="dropdown-menu">
<li><a href="/work.html#web-development">Web Development</a></li>
<li><a href="/work.html#school-project">School Project</a></li>
<li><a href="/work.html#personal-project">Personal Project</a></li>
</ul>
</div>
<a href="/contact.html">Contact</a>
</nav>
<a href="/contact.html" className="connect-btn">Let's Connect ♡</a>
</div>
</header>
<main className="inner-page">
<section className="container page-hero-card">
<span className="page-kicker">✦ Selected projects</span>
<h1>My Work</h1>
<p>A collection of school, personal, and coding projects that reflect what I’m learning. Replace the sample titles and links below with your real projects whenever you’re ready.</p>
</section>
<section className="container project-grid section-space">
<article className="project-card" id="web-development">
<div className="project-preview">PROJECT 01</div>
<div className="project-content"><span className="small-label">Web Development</span><h2>Municipality Website</h2><p>A simple informational website that introduces the municipality by presenting its background, basic information, and popular tourist spots in a clean and easy-to-navigate layout.</p><div className="tech-tags"><span>HTML</span><span>CSS</span></div><a className="text-link" href="https://github.com/AllysaCaguiat/Municipality-Website" target="_blank">View on GitHub →</a></div>
</article>
<article className="project-card" id="school-project">
<div className="project-preview">PROJECT 02</div>
<div className="project-content"><span className="small-label">School Project</span><h2>Pong Game</h2><p>A simple recreation of the classic Pong game that demonstrates basic game development concepts such as player controls, ball movement, collision detection, and score tracking.</p><div className="tech-tags"><span>HTML</span><span>CSS</span></div><a className="text-link" href="https://github.com/AllysaCaguiat/Pong-Game" target="_blank">View on GitHub →</a></div>
</article>
<article className="project-card" id="personal-project">
<div className="project-preview">PROJECT 03</div>
<div className="project-content"><span className="small-label">Personal Project</span><h2>Meal Prep Website</h2><p>Meal Prep Website
A simple meal preparation website designed to help users organize meal ideas, plan food choices, and view prepared dishes in a clean and easy-to-use layout.</p><div className="tech-tags"><span>HTML</span><span>CSS</span></div><a className="text-link" href="https://github.com/AllysaCaguiat/meal-prep-planner" target="_blank">View on GitHub →</a></div>
</article>
</section>
<section className="container github-banner">
<div><span className="small-label">More projects</span><h2>Explore my GitHub</h2><p>See my repositories, coding exercises, and future projects in one place.</p></div>
<a className="btn primary-btn" href="https://github.com/AllysaCaguiat" target="_blank">Visit GitHub →</a>
</section>
</main>
<footer className="main-footer"><p>© 2026 ALLYSA SHARISE A. CAGUI-AT. All rights reserved. ♡</p></footer>
</div>
<script src="script.js"></script>
</>);
}
