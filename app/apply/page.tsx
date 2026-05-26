import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ApplyPage() {
  return (
    <main className="apply-page">

      <Header />

      <section className="apply-hero">

        <div className="apply-hero-overlay" />

        <div className="apply-hero-content">

          <span>DPS APPLICATION</span>

          <h1>
            Begin Your Journey to Davidson Preparatory School.
          </h1>

          <p>
            Apply to DPS and explore academics, boarding,
            athletics, leadership opportunities, and career academies
            designed for future innovators and leaders.
          </p>

          <div className="apply-info-grid">

            <div className="apply-info-card">
              <h3>Estimated Time</h3>
              <p>25–40 Minutes</p>
            </div>

            <div className="apply-info-card">
              <h3>Application Includes</h3>
              <p>
                Student information, academics,
                extracurriculars, interests, and schedule preferences.
              </p>
            </div>

            <div className="apply-info-card">
              <h3>Save Progress</h3>
              <p>
                Families may save progress and return later
                before submitting the final application.
              </p>
            </div>

          </div>

          <div className="apply-buttons">

            <a href="/apply/start" className="start-application-btn">
              Start Application
            </a>

            <a href="/admissions" className="learn-more-btn">
              Learn More
            </a>

          </div>

        </div>

      </section>

      <Footer />

    </main>
  );
}