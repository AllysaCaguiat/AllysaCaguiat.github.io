import React from "react";
import { usePortfolioDropdown } from "../usePortfolioDropdown";

export default function About() {
  usePortfolioDropdown();
  return (<>
<div className="page-wrapper">
<header className="main-header">
<div className="container nav-container">
<a className="logo" href="/"><span className="logo-script">Allysa.</span><span className="heart">♥</span></a>
<nav className="nav-links" aria-label="Primary navigation">
<a href="/">Home</a>
<a href="/about.html" className="active">About</a>
<div className="dropdown">
<button className="dropdown-toggle" type="button" aria-expanded="false" aria-haspopup="true">
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
<span className="page-kicker">✦ Get to know me</span>
<h1>About Me ♡</h1>
<p>I’m Allysa Sharise A. Cagui-at, an aspiring developer and creative learner who enjoys combining technology, thoughtful design, and continuous learning. I value clean work, meaningful ideas, and opportunities that help me grow both personally and professionally.</p>
</section>
<section className="container content-grid two-column">
<article className="content-card">
<span className="small-label">A little introduction</span>
<h2>Who I Am</h2>
<p>I enjoy learning how digital experiences are built and finding simple ways to turn ideas into organized, functional outputs. I’m especially interested in web development, visual design, and improving my problem-solving skills through hands-on projects.</p>
<p>Outside academics and projects, I appreciate creativity, organization, collaboration, and learning from new experiences.</p>
</article>
<article className="content-card">
<span className="small-label">What I bring</span>
<h2>My Strengths</h2>
<div className="pill-list">
<span>Creative Thinking</span>
<span>Attention to Detail</span>
<span>Communication</span>
<span>Adaptability</span>
<span>Teamwork</span>
<span>Willingness to Learn</span>
</div>
</article>
</section>
<section className="container section-space" id="skills">
<div className="center-heading">
<span className="page-kicker">Skills & tools</span>
<h2>What I’m learning and using</h2>
</div>
<div className="skill-grid">
<article className="skill-card"><span>01</span><h3>HTML</h3><p>Building clean, semantic page structures for websites.</p></article>
<article className="skill-card"><span>02</span><h3>CSS</h3><p>Creating responsive layouts, visual hierarchy, and polished interfaces.</p></article>
<article className="skill-card"><span>03</span><h3>Git & GitHub</h3><p>Organizing projects, tracking changes, and sharing code repositories.</p></article>
<article className="skill-card"><span>04</span><h3>UI Design</h3><p>Designing simple and user-friendly layouts with consistent styling.</p></article>
<article className="skill-card"><span>05</span><h3>Responsive Design</h3><p>Making pages adapt smoothly across desktop, tablet, and mobile screens.</p></article>
</div>
</section>
<section className="container content-grid two-column section-space">
<article className="content-card">
<span className="small-label">Currently</span>
<h2>What I’m Working On</h2>
<p>I’m continuing to strengthen my front-end development skills, create more personal projects, and build a portfolio that reflects my progress and personality.</p>
</article>
<article className="content-card">
<span className="small-label">Beyond coding</span>
<h2>Interests</h2>
<div className="pill-list">
<span>Web Design</span><span>Creative Projects</span><span>Learning</span><span>Digital Design</span>
</div>
</article>
</section>
</main>
<footer className="main-footer"><p>© 2026 ALLYSA SHARISE A. CAGUI-AT. All rights reserved. ♡</p></footer>
</div>
<script src="script.js"></script>
</>);
}
