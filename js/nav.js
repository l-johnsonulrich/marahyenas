// Mara Hyena Project — Donor/US Site Navigation
// Edit this file to update the nav across all pages on this site.

document.getElementById('nav-placeholder').innerHTML = `
<nav>
  <div class="nav-inner">
    <a href="index.html" class="nav-logo">
      <img src="img/logo.png" alt="Mara Hyena Project">
      <span class="nav-logo-text">Mara Hyena<br>Project</span>
    </a>
    <button class="hamburger" aria-label="Toggle menu" onclick="toggleMenu()">
      <span></span><span></span><span></span>
    </button>
    <ul class="nav-links" id="nav-links">
      <li>
        <button onclick="toggleDropdown(this)">About Us &#9662;</button>
        <div class="dropdown">
          <a href="history.html">History</a>
          <a href="mission.html">Mission</a>
          <a href="team.html">Our Team</a>
          <a href="news.html">In the News</a>
        </div>
      </li>
      <li>
        <button onclick="toggleDropdown(this)">Join the MHP &#9662;</button>
        <div class="dropdown">
          <a href="join-ra.html">Volunteer Research Assistants</a>
          <a href="join-ra.html#grad">Graduate Students</a>
          <a href="join-ra.html#field">Life in the Field</a>
          <a href="join-ra.html#camp-photos">Camp Photos</a>
          <a href="beam.html">BEAM Study Abroad</a>
        </div>
      </li>
      <li>
        <button onclick="toggleDropdown(this)">Research &#9662;</button>
        <div class="dropdown">
          <a href="why-hyenas.html">Why Study Spotted Hyenas?</a>
          <a href="projects.html">Current Projects</a>
          <a href="publications.html">Publications</a>
        </div>
      </li>
      <li>
        <button onclick="toggleDropdown(this)">Conservation &#9662;</button>
        <div class="dropdown">
          <a href="community-outreach.html">Community Outreach</a>
          <a href="conservation.html">Hyena Conservation &amp; Threats</a>
        </div>
      </li>
      <li>
        <button onclick="toggleDropdown(this)">About Hyenas &#9662;</button>
        <div class="dropdown">
          <a href="myths.html">Myths &amp; Misconceptions</a>
          <a href="gallery.html">Photo Gallery</a>
        </div>
      </li>
      <li>
        <button onclick="toggleDropdown(this)">Support &#9662;</button>
        <div class="dropdown">
          <a href="donate.html">Donate</a>
          <a href="donate.html#adopt">Adopt a Hyena</a>
          <a href="donate.html#volunteer">Volunteer Remotely</a>
        </div>
      </li>
      <li><a href="donate.html" class="donate-btn">Donate</a></li>
    </ul>
  </div>
</nav>
`;

// Nav interaction functions — loaded once here, available to all pages
function toggleMenu() {
  document.getElementById('nav-links').classList.toggle('open');
}
function toggleDropdown(btn) {
  btn.parentElement.classList.toggle('open');
}
