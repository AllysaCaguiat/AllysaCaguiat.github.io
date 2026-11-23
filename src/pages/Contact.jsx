import React from "react";
import { usePortfolioDropdown } from "../usePortfolioDropdown";

export default function Contact() {
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
<button className="dropdown-toggle" type="button" aria-expanded="false" aria-haspopup="true">
              Work <span className="dropdown-arrow" aria-hidden="true">▼</span>
</button>
<ul className="dropdown-menu">
<li><a href="/work.html#web-development">Web Development</a></li>
<li><a href="/work.html#school-project">School Project</a></li>
<li><a href="/work.html#personal-project">Personal Project</a></li>
</ul>
</div>
<a href="/contact.html" className="active">Contact</a>
</nav>
<a href="/contact.html" className="connect-btn">Let's Connect ♡</a>
</div>
</header>
<main className="inner-page">
<section className="container page-hero-card contact-hero">
<span className="page-kicker">✦ Say hello</span>
<h1>Let’s Connect ♡</h1>
<p>Whether you’d like to talk about a project, an opportunity, or simply connect, you can reach me through the links below.</p>
</section>
<section className="container contact-grid section-space">
<a className="contact-card" href="https://www.facebook.com/allysa.sharise" target="_blank"><span className="contact-icon">f</span><div><span className="small-label">Social</span><h2>Facebook</h2><p>facebook.com/allysa.sharise</p></div><span className="arrow">→</span></a>
<a href="mailto:allysasharise@gmail.com" className="contact-card">
<div className="contact-icon">
    @
  </div>
<div>
<span className="contact-label">Message me</span>
<h3>Email</h3>
<p>allysasharise@gmail.com</p>
</div>
<span className="contact-arrow">→</span>
</a>
<a className="contact-card" href="https://github.com/AllysaCaguiat" target="_blank"><span className="contact-icon">⌘</span><div><span className="small-label">Code</span><h2>GitHub</h2><p>github.com/AllysaCaguiat</p></div><span className="arrow">→</span></a>
</section>
<section className="container contact-note"><span>♡</span><div><h2>Thank you for visiting my portfolio.</h2><p>I’m always happy to learn, connect, and discover new opportunities.</p></div></section>
</main>
<footer className="main-footer"><p>© 2026 ALLYSA SHARISE A. CAGUI-AT. All rights reserved. ♡</p></footer>
</div>
<script src="script.js"></script>
</>);
}
