import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function FamilyApplicationPage() {
  return (
    <main className="application-page">
      <Header />

      <section className="application-shell">
        <div className="application-intro">
          <span>DPS APPLICATION</span>

          <h1>Family Details & Emergency Contacts</h1>

          <p>
            Provide household, guardian, emergency contact, and support
            information so DPS can understand the student’s family structure
            and communication needs.
          </p>
        </div>

        <form className="application-form">
          <div className="form-section-title">
            <span>08</span>
            <h2>Household Information</h2>
          </div>

          <div className="form-grid">
            <input placeholder="Primary Household Address" />
            <input placeholder="Apartment / Unit" />
            <input placeholder="City" />
            <input placeholder="State" />
            <input placeholder="ZIP Code" />
            <input placeholder="Country" />

            <select defaultValue="">
              <option value="" disabled>
                Student Lives With
              </option>
              <option>Both Parents/Guardians</option>
              <option>Mother</option>
              <option>Father</option>
              <option>Grandparent(s)</option>
              <option>Legal Guardian</option>
              <option>Other Family Member</option>
              <option>Other</option>
            </select>

            <input placeholder="Primary Household Language" />
          </div>

          <div className="form-section-title">
            <span>09</span>
            <h2>Additional Parent / Guardian</h2>
          </div>

          <div className="form-grid">
            <input placeholder="Second Parent/Guardian First Name" />
            <input placeholder="Second Parent/Guardian Last Name" />
            <input placeholder="Relationship to Student" />
            <input placeholder="Phone Number" />
            <input placeholder="Email Address" />

            <select defaultValue="">
              <option value="" disabled>
                Should this person receive school communications?
              </option>
              <option>Yes</option>
              <option>No</option>
              <option>Only emergency communications</option>
            </select>
          </div>

          <div className="form-section-title">
            <span>10</span>
            <h2>Emergency Contact</h2>
          </div>

          <div className="form-grid">
            <input placeholder="Emergency Contact First Name" />
            <input placeholder="Emergency Contact Last Name" />
            <input placeholder="Relationship to Student" />
            <input placeholder="Phone Number" />
            <input placeholder="Alternate Phone Number" />
            <input placeholder="Email Address" />

            <textarea placeholder="List anyone who is allowed to pick up the student from campus." />

            <textarea placeholder="List anyone who is NOT allowed to pick up the student, if applicable." />
          </div>

          <div className="form-section-title">
            <span>11</span>
            <h2>Family Notes</h2>
          </div>

          <div className="form-grid">
            <textarea placeholder="Share anything DPS should know about the student’s family, support system, communication needs, custody arrangements, or household situation." />

            <textarea placeholder="What are your family’s goals for the student at Davidson Preparatory School?" />
          </div>

          <div className="application-actions">
            <a href="/apply/student-life" className="back-application-btn">
              Back
            </a>

            <a href="/apply/support" className="next-application-btn">
              Continue to Student Support
            </a>
          </div>
        </form>
      </section>

      <Footer />
    </main>
  );
}