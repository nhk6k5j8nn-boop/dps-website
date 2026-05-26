export default function WelcomeCenterSection() {
  return (
    <section className="home-welcome-section">

      <div className="home-welcome-overlay">

        <span className="home-welcome-tag">
          WELCOME CENTER
        </span>

        <h2>
          Your connection point for admissions, support, and campus information.
        </h2>

        <p>
          The DPS Welcome Center helps families connect with admissions,
          tours, academics, athletics, transportation, and student support.
        </p>

        <div className="home-welcome-buttons">

          <a href="/visit">
            Schedule a Visit
          </a>

          <a href="/apply">
            Start Application
          </a>

        </div>

      </div>

    </section>
  );
}