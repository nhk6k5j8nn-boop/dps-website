import Header from "../components/Header";
import Footer from "../components/Footer";

export default function AdmissionsPage() {
  return (
    <main className="admissions-page">
      <Header />

      <section className="admissions-hero">
        <div className="admissions-card">
          <p className="admissions-kicker">DPS ADMISSIONS</p>

          <h1>
            Begin your
            journey at
            Davidson Preparatory School.
          </h1>

          <p>
            Davidson Preparatory School welcomes students who are ready to
            grow academically, personally, creatively, and professionally in
            an elite learning environment designed for the future.
          </p>

          <div className="admissions-actions">
            <a href="/apply" className="primary-btn">
              Start Application
            </a>

            <a href="#steps" className="secondary-btn">
              View Process
            </a>
          </div>
        </div>
      </section>

      <section id="steps" className="admissions-steps-section">
        <div className="admissions-steps-card">
          <p className="admissions-kicker">APPLICATION PROCESS</p>

          <h2>Simple, structured, and personalized.</h2>

          <div className="admissions-grid">
            <div className="admissions-box">
              <span>01</span>
              <h3>Submit Application</h3>
              <p>
                Complete the online DPS application with student, academic,
                and family information.
              </p>
            </div>

            <div className="admissions-box">
              <span>02</span>
              <h3>Application Review</h3>
              <p>
                The DPS Admissions Team carefully reviews all submitted
                applications and records.
              </p>
            </div>

            <div className="admissions-box">
              <span>03</span>
              <h3>Family Meeting</h3>
              <p>
                Families may be invited for a campus meeting, virtual
                interview, or student assessment.
              </p>
            </div>

            <div className="admissions-box">
              <span>04</span>
              <h3>Admissions Decision</h3>
              <p>
                Accepted students receive enrollment details, orientation
                access, and next-step instructions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="admissions-info-section">
        <div className="admissions-info-grid">
          <div className="admissions-info-card">
            <p className="admissions-mini-title">GRADE LEVELS</p>

            <h3>Infant — Grade 12</h3>

            <p>
              DPS serves students across Early Learning, Elementary, Middle,
              and Upper School divisions with advanced academics and
              leadership development.
            </p>
          </div>

          <div className="admissions-info-card">
            <p className="admissions-mini-title">BOARDING PROGRAM</p>

            <h3>Residential Student Life</h3>

            <p>
              Select students may apply for the DPS Boarding Program with
              supervised residential living, academic support, and campus
              experiences.
            </p>
          </div>

          <div className="admissions-info-card">
            <p className="admissions-mini-title">CAREER ACADEMIES</p>

            <h3>22 Career Pathways</h3>

            <p>
              DPS students gain access to elite academies, certifications,
              internships, competitions, mentorships, and real-world
              experiences.
            </p>
          </div>

          <div className="admissions-info-card">
            <p className="admissions-mini-title">ORIENTATION</p>

            <h3>July 2 — July 19</h3>

            <p>
              Orientation includes device pickup, uniforms, student IDs,
              schedules, parent onboarding, tours, and DPS preparation.
            </p>
          </div>
        </div>
      </section>

      <section className="admissions-final-section">
        <div className="admissions-final-card">
          <p className="admissions-kicker">THE DPS DIFFERENCE</p>

          <h2>
            More than a school.
            A launchpad for the future.
          </h2>

          <div className="admissions-tags">
            <span>Advanced Academics</span>
            <span>Leadership Development</span>
            <span>Athletics</span>
            <span>Innovation</span>
            <span>Career Academies</span>
            <span>Boarding Life</span>
            <span>Technology</span>
            <span>Real-World Experience</span>
          </div>
        </div>
      </section>
    <Footer />
    </main>
  );
}