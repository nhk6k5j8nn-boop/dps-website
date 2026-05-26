import Header from "../../components/Header";
import Footer from "../../components/Footer";

function StudentLifeBlock({ number }: { number: string }) {
  return (
    <>
      <div className="form-section-title">
        <span>{number}</span>
        <h2>Student {number} Life & Boarding Preferences</h2>
      </div>

      <div className="form-grid">
        <select defaultValue="">
          <option value="" disabled>
            Student {number} Type
          </option>
          <option>Day Student</option>
          <option>Boarding Student</option>
          <option>Not Sure Yet</option>
        </select>

        <select defaultValue="">
          <option value="" disabled>
            Student {number} House Interest
          </option>
          <option>Aurelius</option>
          <option>Solara</option>
          <option>Nereon</option>
          <option>Phyre</option>
          <option>No Preference</option>
        </select>

        <input placeholder={`Student ${number} clubs or organizations of interest`} />
        <input placeholder={`Student ${number} leadership interests`} />
        <input placeholder={`Student ${number} sports or athletic interests`} />
        <input placeholder={`Student ${number} fine arts or performing arts interests`} />

        <select defaultValue="">
          <option value="" disabled>
            Student {number} Transportation Need
          </option>
          <option>Parent/Guardian drop-off</option>
          <option>School transportation</option>
          <option>Student driver</option>
          <option>Boarding student transportation</option>
          <option>Not sure yet</option>
        </select>

        <select defaultValue="">
          <option value="" disabled>
            Student {number} Residential Support Needed
          </option>
          <option>Academic support</option>
          <option>Wellness support</option>
          <option>Social transition support</option>
          <option>No specific support</option>
          <option>Not sure yet</option>
        </select>

        <textarea placeholder={`What kind of campus experience is Student ${number} hoping for at DPS?`} />

        <textarea placeholder={`What would Student ${number} contribute to the DPS student community?`} />
      </div>
    </>
  );
}

export default function StudentLifeApplicationPage() {
  return (
    <main className="application-page">
      <Header />

      <section className="application-shell">
        <div className="application-intro">
          <span>DPS APPLICATION</span>

          <h1>Student Life & Boarding Preferences</h1>

          <p>
            Tell us how each student hopes to participate in campus life,
            leadership, athletics, clubs, houses, transportation, and boarding.
          </p>
        </div>

        <form className="application-form">
          <StudentLifeBlock number="1" />
          <StudentLifeBlock number="2" />
          <StudentLifeBlock number="3" />

          <p className="application-note">
            Each student is reviewed individually and equally. Families applying
            for fewer than three students may leave unused student sections blank.
            Boarding and transportation preferences are reviewed but not guaranteed.
          </p>

          <div className="application-actions">
            <a href="/apply/academics" className="back-application-btn">
              Back
            </a>

            <a href="/apply/family" className="next-application-btn">
              Continue to Family Details
            </a>
          </div>
        </form>
      </section>

      <Footer />
    </main>
  );
}