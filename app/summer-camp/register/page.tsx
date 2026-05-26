import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function SummerCampRegisterPage() {
  return (
    <main className="camp-register-page">
      <Header />

      <section className="camp-register-shell">
        <div className="camp-register-intro">
          <span>DPS SUMMER CAMP</span>

          <h1>Summer Camp Registration</h1>

          <p>
            Register your child for Davidson Preparatory School Summer Camp.
            Select programs, provide guardian information, and share important
            pickup, medical, and student support details.
          </p>
        </div>

        <form className="camp-register-form">
          <div className="form-section-title">
            <span>01</span>
            <h2>Camper Information</h2>
          </div>

          <div className="form-grid">
            <input placeholder="Camper First Name" />
            <input placeholder="Camper Middle Name" />
            <input placeholder="Camper Last Name" />
            <input type="date" />

            <select defaultValue="">
              <option value="" disabled>
                Grade Entering
              </option>
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
          </div>

          <div className="form-section-title">
            <span>02</span>
            <h2>Parent / Guardian Contact</h2>
          </div>

          <div className="form-grid">
            <input placeholder="Parent/Guardian First Name" />
            <input placeholder="Parent/Guardian Last Name" />
            <input placeholder="Relationship to Camper" />
            <input placeholder="Email Address" />
            <input placeholder="Phone Number" />
            <input placeholder="Home Address" />
            <input placeholder="City" />
            <input placeholder="State" />
          </div>

          <div className="form-section-title">
            <span>03</span>
            <h2>Camp Program Choices</h2>
          </div>

          <div className="form-grid">
            <select defaultValue="">
              <option value="" disabled>
                First Choice Camp
              </option>
              <option>Adventure Camp</option>
              <option>Sports Camp</option>
              <option>STEM & Tech Camp</option>
              <option>Arts & Media Camp</option>
              <option>Leadership Camp</option>
              <option>Discovery Trips</option>
            </select>

            <select defaultValue="">
              <option value="" disabled>
                Second Choice Camp
              </option>
              <option>Adventure Camp</option>
              <option>Sports Camp</option>
              <option>STEM & Tech Camp</option>
              <option>Arts & Media Camp</option>
              <option>Leadership Camp</option>
              <option>Discovery Trips</option>
            </select>

            <select defaultValue="">
              <option value="" disabled>
                Camp Schedule
              </option>
              <option>Full Summer</option>
              <option>One Week</option>
              <option>Two Weeks</option>
              <option>Monthly Option</option>
              <option>Not Sure Yet</option>
            </select>

            <select defaultValue="">
              <option value="" disabled>
                Extended Day Interest
              </option>
              <option>Yes, before care</option>
              <option>Yes, after care</option>
              <option>Both before and after care</option>
              <option>No extended day needed</option>
            </select>

            <textarea placeholder="List any camp interests, activity preferences, or programs your child is most excited about." />

            <textarea placeholder="Are there any activities your child should avoid or may need support with?" />
          </div>

          <div className="form-section-title">
            <span>04</span>
            <h2>Medical, Pickup & Safety</h2>
          </div>

          <div className="form-grid">
            <select defaultValue="">
              <option value="" disabled>
                Does the camper have allergies?
              </option>
              <option>Yes</option>
              <option>No</option>
              <option>Not Sure</option>
            </select>

            <select defaultValue="">
              <option value="" disabled>
                Medication during camp hours?
              </option>
              <option>Yes</option>
              <option>No</option>
              <option>Not Sure</option>
            </select>

            <input placeholder="Emergency Contact Name" />
            <input placeholder="Emergency Contact Phone" />

            <textarea placeholder="List allergies, medical needs, medications, or wellness notes." />

            <textarea placeholder="List approved pickup adults and any pickup instructions." />
          </div>

          <div className="form-section-title">
            <span>05</span>
            <h2>Agreement</h2>
          </div>

          <p className="application-note">
            By submitting this registration, the parent or guardian understands
            that camp placement, program choices, extended day options, and
            trip availability are reviewed but not guaranteed until confirmed
            by DPS Summer Camp staff.
          </p>

          <div className="application-actions">
            <a href="/summer-camp" className="back-application-btn">
              Back
            </a>

            <a href="/summer-camp/complete" className="next-application-btn">
              Submit Registration
            </a>
          </div>
        </form>
      </section>

      <Footer />
    </main>
  );
}