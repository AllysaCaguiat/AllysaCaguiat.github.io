import React from "react";
import { usePortfolioDropdown } from "../usePortfolioDropdown";

export default function Education() {
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
<span className="page-kicker">✦ My learning journey</span>
<h1>Education</h1>
<p>This page highlights my academic journey, learning experiences, and the knowledge I continue to build. Replace the placeholders with your actual school information.</p>
</section>
<section className="container timeline section-space">
<article className="timeline-item">
<div className="timeline-dot"></div>
<div className="timeline-card"><span className="small-label">Present</span><h2>College / University</h2><p className="meta">Program or Course • School Name</p><p>Add your current program, school, academic focus, achievements, or relevant subjects here.</p></div>
</article>
<article className="timeline-item">
<div className="timeline-dot"></div>
<div className="timeline-card"><span className="small-label">Previous</span><h2>Senior High School</h2><p className="meta">Track / Strand • School Name</p><p>Add your strand, school, honors, activities, or memorable learning experiences here.</p></div>
</article>
<article className="timeline-item">
<div className="timeline-dot"></div>
<div className="timeline-card"><span className="small-label">Foundation</span><h2>Junior High School</h2><p className="meta">School Name</p><p>You can include this section if you want a more complete personal academic timeline.</p></div>
</article>
</section>
<section className="container content-card education-focus section-space">
<span className="small-label">Learning focus</span><h2>Areas I Continue to Explore</h2>
<div className="pill-list"><span>Web Development</span><span>Programming</span><span>Information Technology</span><span>Design</span><span>Problem Solving</span><span>Communication</span></div>
</section>
</main>
<footer className="main-footer"><p>© 2024 ALLYSA SHARISE A. CAGUI-AT. All rights reserved. ♡</p></footer>
</div>
<script src="script.js"></script>
</>);
}
