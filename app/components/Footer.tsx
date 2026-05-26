export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <img
            src="/apex-ram-logo-v2.png"
            alt="DPS Apex Rams Logo"
            className="footer-logo"
          />

          <div>
            <p className="footer-kicker">APEX RAMS</p>
            <h2>Davidson Preparatory School</h2>
            <p>
              A private academy built for academics, leadership, career
              preparation, boarding, athletics, and student success.
            </p>
          </div>
        </div>

        <div className="footer-links">
          <div>
            <h3>Explore</h3>
            <a href="/about">About</a>
            <a href="/academics">Academics</a>
            <a href="/student-life">Student Life</a>
            <a href="/athletics">Athletics</a>
          </div>

          <div>
            <h3>Admissions</h3>
            <a href="/admissions">Admissions</a>
            <a href="/apply">Apply Now</a>
            <a href="/tuition">Tuition & Financial Aid</a>
            <a href="/visit">Visit DPS</a>
          </div>

          <div>
            <h3>Campus</h3>
            <a href="/boarding">Boarding</a>
            <a href="/summer-camp">Summer Camp</a>
            <a href="/calendar">Calendar</a>
            <a href="/transportation">Transportation</a>
          </div>

          <div>
            <h3>Community</h3>
            <a href="/davidson-village">Davidson Village</a>
            <a href="/careers">Faculty & Careers</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 Davidson Preparatory School. All rights reserved.</span>
        <span>Reach Your Apex.</span>
      </div>
    </footer>
  );
}