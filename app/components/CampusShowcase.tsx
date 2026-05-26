export default function CampusShowcase() {
  return (
    <section className="campus-showcase-section">
      <div className="campus-showcase-header">
        <p>EXPLORE DPS</p>
        <h2>The Future Campus Experience</h2>
      </div>

      <div className="campus-showcase-grid">

        <div className="campus-card large">
          <span>01</span>
          <h3>Welcome Center</h3>

          <p>
            The executive gateway of DPS featuring admissions,
            leadership operations, mentor suites, conference spaces,
            and founder offices.
          </p>
        </div>

        <div className="campus-card">
          <span>02</span>
          <h3>Davidson Village</h3>

          <p>
            A luxury residential community connected directly to the DPS campus.
          </p>
        </div>

        <div className="campus-card">
          <span>03</span>
          <h3>Academic Halls</h3>

          <p>
            Advanced learning spaces built for collaboration and innovation.
          </p>
        </div>

        <div className="campus-card">
          <span>04</span>
          <h3>Apex Athletics Complex</h3>

          <p>
            Elite training facilities, stadiums, and wellness performance centers.
          </p>
        </div>

        <div className="campus-card small">
          <span>05</span>
          <h3>Career Academy Labs</h3>

          <p>
            Specialized environments for healthcare, engineering,
            technology, business, skilled trades, and media production.
          </p>
        </div>

      </div>
    </section>
  );
}