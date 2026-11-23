import React from "react";
import { usePortfolioDropdown } from "../usePortfolioDropdown";

export default function Home() {
  usePortfolioDropdown();
  return (<>
<div className="page-wrapper">
<header className="main-header">
<div className="container nav-container">
<a className="logo" href="/">
<span className="logo-script">Allysa.</span>
<span className="heart">♥</span>
</a>
<nav className="nav-links" aria-label="Primary navigation">
<a href="/" className="active">Home</a>
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
<a href="/contact.html">Contact</a>
</nav>
<a href="/contact.html" className="connect-btn">Let's Connect ♡</a>
</div>
</header>
<section className="hero-section">
<div className="container hero-box">
<div className="hero-left">
<div className="tag">Hello, I'm ♡</div>
<h1>
            ALLYSA SHARISE<br />
            A. CAGUI-AT
          </h1>
<div className="mini-line"></div>
<p className="role">
            Aspiring Developer | Creative Thinker | Lifelong Learner
          </p>
<p className="description">
            I’m passionate about creating meaningful digital experiences
            through clean and functional design. I enjoy turning ideas into
            reality and continuously learning new things that help me grow
            both personally and professionally.
          </p>
<div className="hero-buttons">
<a href="/work.html" className="btn primary-btn">View My Work →</a>
<a href="/about.html" className="btn secondary-btn">About Me ⌁</a>
</div>
</div>
<div className="hero-right">
<div className="quote-note">
<p>Dream.<br />Plan. Do.<br />Repeat.</p>
<span>♡</span>
</div>
<div className="profile-circle">
<img src="/images/profile.jpg" alt="Allysa Sharise A. Cagui-at" />
</div>
<div className="flower-accent">✿</div>
<div className="star one">✦</div>
<div className="star two">✧</div>
<div className="plane">✈</div>
</div>
</div>
</section>
<section className="preview-section">
<div className="container">
<h2 className="section-title">A little more about me ♡</h2>
<div className="cards">
<div className="info-card">
<div className="card-icon">◌</div>
<h3>About Me</h3>
<p>
          Learn more about who I am, my background,
          skills, and things I love.
        </p>
<a href="/about.html">Explore →</a>
</div>
<div className="info-card">
<div className="card-icon">▢</div>
<h3>My Work</h3>
<p>
          Check out my projects and see how I turn
          ideas into real, working solutions.
        </p>
<a href="/work.html">View Projects →</a>
</div>
<div className="info-card">
<div className="card-icon">◍</div>
<h3>Contact</h3>
<p>
          Let’s connect! You can find me on my
          social media and through email.
        </p>
<a href="/contact.html">Get in Touch →</a>
</div>
</div>
</div>
</section>
<footer className="main-footer">
<p>© 2026 ALLYSA SHARISE A. CAGUI-AT. All rights reserved. ♡</p>
</footer>
</div>
<script src="script.js"></script>
</>);
}
