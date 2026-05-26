export default function ExploreDPS() {
  return (
    <section id="explore-dps" className="explore-section">
      <div className="explore-card">
        <p className="explore-kicker">EXPLORE DPS</p>

        <h2>Discover the Davidson experience.</h2>

        <p className="explore-intro">
          DPS brings together academics, boarding life, athletics, student
          leadership, career academies, summer programs, and a school culture
          built for growth.
        </p>

        <div className="explore-grid">
          <a href="/about" className="explore-box">
            <h3>About DPS</h3>
            <p>Learn the mission, standards, and vision behind Davidson.</p>
          </a>

          <a href="/academics" className="explore-box">
            <h3>Academics</h3>
            <p>Explore divisions, advanced learning, and 22 career academies.</p>
          </a>

          <a href="/boarding" className="explore-box">
            <h3>Boarding Life</h3>
            <p>Discover Davidson Village, residential support, and student routines.</p>
          </a>

          <a href="/student-life" className="explore-box">
            <h3>Student Life</h3>
            <p>Clubs, traditions, leadership, spirit weeks, and community.</p>
          </a>

          <a href="/athletics" className="explore-box">
            <h3>Athletics</h3>
            <p>Meet Apex Rams sports, performance training, and athlete development.</p>
          </a>

          <a href="/summer-camp" className="explore-box">
            <h3>Summer Camp</h3>
            <p>Fun, field trips, STEM, sports, arts, leadership, and discovery.</p>
          </a>

          <a href="/contact" className="explore-box">
            <h3>Contact DPS</h3>
            <p>Ask questions about admissions, academics, boarding, athletics, summer camp, or student life.</p>
          </a>
        </div>

        <div className="calendar-highlight">
          <div className="calendar-highlight-content">
            <p className="explore-kicker">DPS SCHOOL CALENDAR</p>

            <h2>Stay connected to campus life.</h2>

            <p>
              View important dates, orientation schedules, school breaks,
              athletic events, testing days, student activities, and upcoming
              DPS experiences.
            </p>

            <a href="/calendar" className="primary-btn">
              VIEW CALENDAR
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}