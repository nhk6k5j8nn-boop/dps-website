import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function CompleteApplicationPage() {
  return (
    <main className="application-page">
      <Header />

      <section className="application-complete-section">

        <div className="application-complete-card">

          <span>DPS APPLICATION COMPLETE</span>

          <h1>
            Welcome to the Future of Davidson Preparatory School.
          </h1>

          <p>
            Your application has been successfully submitted for review.
            The DPS Admissions Team will review the application,
            supporting documents, academy interests, and placement needs.
          </p>

          <div className="complete-grid">

            <div className="complete-item">
              <h3>Application Review</h3>

              <p>
                Applications are reviewed based on student fit,
                academics, conduct, placement availability,
                and program interests.
              </p>
            </div>

            <div className="complete-item">
              <h3>Admissions Communication</h3>

              <p>
                Families will receive updates through the email
                provided during the application process.
              </p>
            </div>

            <div className="complete-item">
              <h3>Orientation & Next Steps</h3>

              <p>
                Accepted students will receive orientation,
                onboarding, schedule planning,
                and academy information.
              </p>
            </div>

          </div>

          <div className="complete-buttons">

            <a href="/" className="complete-home-btn">
              Return Home
            </a>

            <a href="/admissions" className="complete-admissions-btn">
              Admissions Information
            </a>

          </div>

        </div>

      </section>

      <Footer />
    </main>
  );
}