import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function FinalReviewApplicationPage() {
  return (
    <main className="application-page">
      <Header />

      <section className="application-shell">
        <div className="application-intro">
          <span>DPS APPLICATION</span>

          <h1>Final Review & Submission</h1>

          <p>
            Review the application, upload supporting documents, confirm family
            acknowledgments, and submit the application for DPS Admissions review.
          </p>
        </div>

        <form className="application-form">
          <div className="form-section-title">
            <span>19</span>
            <h2>Application Review</h2>
          </div>

          <p className="application-note">
            Please confirm that all student, family, academic, support,
            boarding, schedule, and personal reflection information has been
            completed accurately before submitting.
          </p>

          <div className="review-grid">
            <div>Student 1 Information</div>
            <div>Student 2 Information</div>
            <div>Student 3 Information</div>
            <div>Parent / Guardian Contact</div>
            <div>Academics & Schedule Preferences</div>
            <div>Student Life & Boarding</div>
            <div>Student Support & Wellness</div>
            <div>Student Statements</div>
          </div>

          <div className="form-section-title">
            <span>20</span>
            <h2>Required & Optional Uploads</h2>
          </div>

          <div className="form-grid">
            <label className="form-field">
              <span>Student Records / Report Card</span>
              <input type="file" />
            </label>

            <label className="form-field">
              <span>Transcript</span>
              <input type="file" />
            </label>

            <label className="form-field">
              <span>Birth Certificate / ID</span>
              <input type="file" />
            </label>

            <label className="form-field">
              <span>Recommendation Letter</span>
              <input type="file" />
            </label>

            <label className="form-field">
              <span>IEP / 504 / Support Documents</span>
              <input type="file" />
            </label>

            <label className="form-field">
              <span>Portfolio / Athletic / Creative Materials</span>
              <input type="file" />
            </label>
          </div>

          <div className="form-section-title">
            <span>21</span>
            <h2>Family Acknowledgments</h2>
          </div>

          <div className="final-checklist">
            <label>
              <input type="checkbox" />
              <span>
                I confirm that all information provided is accurate to the best
                of my knowledge.
              </span>
            </label>

            <label>
              <input type="checkbox" />
              <span>
                I understand that academy placement, house placement, boarding,
                transportation, and schedule requests are reviewed but not
                guaranteed.
              </span>
            </label>

            <label>
              <input type="checkbox" />
              <span>
                I understand that DPS may request additional records,
                interviews, assessments, or meetings before an admissions
                decision is finalized.
              </span>
            </label>

            <label>
              <input type="checkbox" />
              <span>
                I understand that tuition, fees, scholarships, and payment plans
                are handled through the official enrollment process.
              </span>
            </label>
          </div>

          <div className="form-section-title">
            <span>22</span>
            <h2>Digital Signature</h2>
          </div>

          <div className="form-grid">
            <input placeholder="Parent/Guardian Full Name" />
            <input type="date" />
            <input placeholder="Relationship to Student(s)" />
            <input placeholder="Email Confirmation Address" />

            <textarea placeholder="Final notes for the DPS Admissions Team" />
          </div>

          <div className="application-actions">
            <a href="/apply/statement" className="back-application-btn">
              Back
            </a>

            <a href="/apply/complete" className="next-application-btn">
              Submit Application
            </a>
          </div>
        </form>
      </section>

      <Footer />
    </main>
  );
}