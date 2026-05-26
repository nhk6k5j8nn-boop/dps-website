import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function UploadsApplicationPage() {
  return (
    <main className="application-page">
      <Header />

      <section className="application-shell">
        <div className="application-intro">
          <span>DPS APPLICATION</span>

          <h1>Uploads & Supporting Documents</h1>

          <p>
            Upload optional documents that help DPS understand the student’s
            academic history, talents, support needs, and achievements.
          </p>
        </div>

        <form className="application-form">
          <div className="form-section-title">
            <span>19</span>
            <h2>Academic Documents</h2>
          </div>

          <div className="form-grid">
            <input type="file" />
            <input type="file" />
            <input type="file" />
            <input type="file" />
          </div>

          <div className="form-section-title">
            <span>20</span>
            <h2>Optional Student Materials</h2>
          </div>

          <div className="form-grid">
            <input type="file" />
            <input type="file" />
            <input placeholder="Portfolio / Website Link" />
            <input placeholder="Athletic Highlight Link" />
          </div>

          <div className="form-section-title">
            <span>21</span>
            <h2>Final Notes</h2>
          </div>

          <div className="form-grid">
            <textarea placeholder="Anything else you would like to upload or explain before submitting?" />
            <textarea placeholder="List any documents you plan to send later." />
          </div>

          <p className="application-note">
            Uploads may include transcripts, report cards, recommendation
            letters, portfolios, athletic highlights, certifications, or
            support documents. Files are optional for this demo application.
          </p>

          <div className="application-actions">
            <a href="/apply/statement" className="back-application-btn">
              Back
            </a>

            <a href="/apply/review" className="next-application-btn">
              Continue to Review
            </a>
          </div>
        </form>
      </section>

      <Footer />
    </main>
  );
}