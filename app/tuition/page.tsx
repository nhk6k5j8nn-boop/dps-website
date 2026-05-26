import Header from "../components/Header";
import Footer from "../components/Footer";

export default function TuitionPage() {
  return (
    <main className="tuition-page">
      <Header />

      <section className="tuition-hero">
        <div className="tuition-card">
          <span>TUITION & FINANCIAL AID</span>

          <h1>Investing in a Davidson education.</h1>

          <p>
            Davidson Preparatory School is designed as a premium private academy
            with strong academics, leadership, boarding, athletics, career
            academies, and student support.
          </p>
        </div>
      </section>

      <section className="tuition-section">
        <div className="tuition-grid">
          <div className="tuition-box">
            <h2>Day Student Tuition</h2>
            <p>
              Tuition information will be released with the official admissions
              packet. Payment plans and scholarship opportunities may be
              available.
            </p>
          </div>

          <div className="tuition-box">
            <h2>Boarding Tuition</h2>
            <p>
              Boarding tuition will include residential life, supervision,
              student support, community programming, and access to Davidson
              Village services.
            </p>
          </div>

          <div className="tuition-box">
            <h2>Scholarships</h2>
            <p>
              DPS plans to offer scholarship opportunities for qualifying
              students based on academics, leadership, talent, service, and
              financial need.
            </p>
          </div>

          <div className="tuition-box">
            <h2>Payment Plans</h2>
            <p>
              Families may be able to choose structured payment options once
              enrollment and tuition policies are finalized.
            </p>
          </div>
        </div>
      </section>

      <section className="financial-aid-section">
        <div className="financial-aid-card">
          <span>FINANCIAL AID</span>

          <h2>Access, excellence, and opportunity.</h2>

          <p>
            DPS is committed to building pathways for families who value strong
            academics, structure, leadership, and student growth. Financial aid
            details will be shared during the official admissions process.
          </p>

          <a href="/welcome-center">Contact Admissions</a>
        </div>
      </section>

      <Footer />
    </main>
  );
}