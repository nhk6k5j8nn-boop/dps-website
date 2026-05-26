export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <a href="/" className="logo-area">
          <img
            src="/apex-ram-logo-v2.png"
            alt="DPS Apex Rams Logo"
            className="ram-logo"
          />

          <div className="brand-text">
            <span className="brand-subtitle">APEX RAMS</span>
            <span className="brand-title">Davidson Preparatory School</span>
          </div>
        </a>

        <nav className="nav">
          <a href="/about">About</a>
          <a href="/academics">Academics</a>
          <a href="/student-life">Student Life</a>
          <a href="/boarding">Boarding</a>
          <a href="/athletics">Athletics</a>
          <a href="/admissions">Admissions</a>
          <a href="/tuition">Tuition</a>
          <a href="/visit">Visit</a>
        </nav>

        <a href="/apply" className="apply-btn">
          APPLY NOW
        </a>
      </div>
    </header>
  );
}