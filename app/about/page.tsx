import Header from "../components/Header";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <main className="about-page">
      <Header />

      <section className="about-hero">
        <div className="about-card">
          <p className="about-kicker">ABOUT DAVIDSON PREPARATORY SCHOOL</p>

          <h1>Built for students who are ready for more.</h1>

          <p>
            Davidson Preparatory School is a premier private academy designed
            for academic growth, leadership, structure, opportunity, and student
            success from infancy through Grade 12.
          </p>
        </div>
      </section>

      <section className="about-grid-section">
        <div className="about-grid">
          <div className="about-box">
            <h2>Our Mission</h2>
            <p>
              To prepare students for college, careers, leadership, and life
              through strong academics, discipline, innovation, and opportunity.
            </p>
          </div>

          <div className="about-box">
            <h2>Our Standard</h2>
            <p>
              DPS students are expected to lead with excellence, respect,
              accountability, confidence, and purpose.
            </p>
          </div>

          <div className="about-box">
            <h2>Our Campus</h2>
            <p>
              A secure, structured, and inspiring environment built for learning,
              leadership, athletics, boarding, and student life.
            </p>
          </div>
        </div>
      </section>
    <Footer />
    </main>
  );
}