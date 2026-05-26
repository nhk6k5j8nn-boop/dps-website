import Header from "../components/Header";
import Footer from "../components/Footer";

export default function VisitPage() {
  return (
    <main className="visit-page">
      <Header />

      <section className="visit-hero">
        <div className="visit-card">
          <span>VISIT DPS</span>

          <h1>Schedule your Davidson experience.</h1>

          <p>
            Request a campus tour, admissions call, boarding visit, athletics
            visit, academy showcase, or summer camp inquiry.
          </p>
        </div>
      </section>

      <section className="visit-form-section">
        <form className="visit-form">
          <div className="form-section-title">
            <span>01</span>
            <h2>Visit Information</h2>
          </div>

          <div className="form-grid">
            <input placeholder="Parent/Guardian First Name" />
            <input placeholder="Parent/Guardian Last Name" />
            <input placeholder="Email Address" />
            <input placeholder="Phone Number" />

            <select defaultValue="">
              <option value="" disabled>
                Visit Type
              </option>
              <option>Campus Tour</option>
              <option>Admissions Call</option>
              <option>Boarding Tour</option>
              <option>Athletics Visit</option>
              <option>Academy Showcase</option>
              <option>Summer Camp Inquiry</option>
            </select>

            <select defaultValue="">
              <option value="" disabled>
                Student Division
              </option>
              <option>Early Learning Center</option>
              <option>Elementary School</option>
              <option>Middle School</option>
              <option>Upper School</option>
              <option>Summer Camp</option>
            </select>

            <input type="date" />
            <input placeholder="Preferred Time" />

            <textarea placeholder="Tell us what you would like to learn about during your visit." />
            <textarea placeholder="Any accessibility needs, questions, or special notes?" />
          </div>

          <div className="application-actions">
            <a href="/" className="back-application-btn">
              Back Home
            </a>

            <a href="/welcome-center" className="next-application-btn">
              Submit Request
            </a>
          </div>
        </form>
      </section>

      <Footer />
    </main>
  );
}