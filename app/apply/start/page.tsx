import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function StartApplicationPage() {
  return (
    <main className="application-page">
      <Header />

      <section className="application-shell">
        <div className="application-intro">
          <span>DPS APPLICATION</span>
          <h1>Student Information</h1>
          <p>
            Begin with student and family information. Families applying for
            more than one child may include additional children below.
          </p>
        </div>

        <form className="application-form">
          <div className="form-section-title">
            <span>01</span>
            <h2>Student 1 Information</h2>
          </div>

          <div className="form-grid">
            <input placeholder="Student Legal First Name" />
            <input placeholder="Student Legal Last Name" />
            <input placeholder="Student Middle Name" />

            <label className="form-field">
              <span>Student Birthdate</span>
              <input type="date" />
            </label>

            <select defaultValue="">
              <option value="" disabled>
                Grade Applying For
              </option>
              <option>Infant Program</option>
              <option>Pre-K</option>
              <option>Kindergarten</option>
              <option>Grade 1</option>
              <option>Grade 2</option>
              <option>Grade 3</option>
              <option>Grade 4</option>
              <option>Grade 5</option>
              <option>Grade 6</option>
              <option>Grade 7</option>
              <option>Grade 8</option>
              <option>Grade 9</option>
              <option>Grade 10</option>
              <option>Grade 11</option>
              <option>Grade 12</option>
            </select>

            <input placeholder="Current School" />
            <input placeholder="Student Email Address" />
            <input placeholder="Student Phone Number" />
          </div>

          <div className="form-section-title">
            <span>02</span>
            <h2>Student 2 & Student 3 Info</h2>
          </div>

          <p className="application-note">
            Families applying for multiple children may complete each
            student section below. DPS Admissions reviews every student
            individually and equally.
          </p>

          <div className="form-grid">
            <input placeholder="Child 2 First Name" />
            <input placeholder="Child 2 Last Name" />
            <input placeholder="Child 2 Middle Name" />

            <label className="form-field">
              <span>Child 2 Birthdate</span>
              <input type="date" />
            </label>

            <select defaultValue="">
              <option value="" disabled>
                Child 2 Grade Applying For
              </option>
              <option>Infant Program</option>
              <option>Pre-K</option>
              <option>Kindergarten</option>
              <option>Grade 1</option>
              <option>Grade 2</option>
              <option>Grade 3</option>
              <option>Grade 4</option>
              <option>Grade 5</option>
              <option>Grade 6</option>
              <option>Grade 7</option>
              <option>Grade 8</option>
              <option>Grade 9</option>
              <option>Grade 10</option>
              <option>Grade 11</option>
              <option>Grade 12</option>
            </select>

            <input placeholder="Child 2 Current School" />

            <input placeholder="Child 3 First Name" />
            <input placeholder="Child 3 Last Name" />
            <input placeholder="Child 3 Middle Name" />

            <label className="form-field">
              <span>Child 3 Birthdate</span>
              <input type="date" />
            </label>

            <select defaultValue="">
              <option value="" disabled>
                Child 3 Grade Applying For
              </option>
              <option>Infant Program</option>
              <option>Pre-K</option>
              <option>Kindergarten</option>
              <option>Grade 1</option>
              <option>Grade 2</option>
              <option>Grade 3</option>
              <option>Grade 4</option>
              <option>Grade 5</option>
              <option>Grade 6</option>
              <option>Grade 7</option>
              <option>Grade 8</option>
              <option>Grade 9</option>
              <option>Grade 10</option>
              <option>Grade 11</option>
              <option>Grade 12</option>
            </select>

            <input placeholder="Child 3 Current School" />

            <textarea placeholder="If applying for more than three children, list their names, birthdates, grades, and current schools here." />
          </div>

          <div className="form-section-title">
            <span>03</span>
            <h2>Parent / Guardian Contact</h2>
          </div>

          <div className="form-grid">
            <input placeholder="Parent/Guardian First Name" />
            <input placeholder="Parent/Guardian Last Name" />
            <input placeholder="Relationship to Student" />
            <input placeholder="Parent/Guardian Email" />
            <input placeholder="Parent/Guardian Phone Number" />
            <input placeholder="Home Address" />
            <input placeholder="City" />
            <input placeholder="State" />
          </div>

          <div className="application-actions">
            <a href="/apply" className="back-application-btn">
              Back
            </a>

            <a href="/apply/academics" className="next-application-btn">
              Continue to Academics
            </a>
          </div>
        </form>
      </section>

      <Footer />
    </main>
  );
}