import Header from "../../components/Header";
import Footer from "../../components/Footer";

function SupportBlock({ number }: { number: string }) {
  return (
    <>
      <div className="form-section-title">
        <span>{number}</span>
        <h2>Student {number} Support & Wellness</h2>
      </div>

      <div className="form-grid">
        <select defaultValue="">
          <option value="" disabled>
            Does Student {number} have an IEP, 504 Plan, or learning support plan?
          </option>
          <option>Yes</option>
          <option>No</option>
          <option>Not Sure</option>
        </select>

        <select defaultValue="">
          <option value="" disabled>
            Has Student {number} received academic accommodations before?
          </option>
          <option>Yes</option>
          <option>No</option>
          <option>Not Sure</option>
        </select>

        <select defaultValue="">
          <option value="" disabled>
            Student {number} Preferred Academic Support
          </option>
          <option>Study hall</option>
          <option>Tutoring</option>
          <option>Executive functioning support</option>
          <option>Reading/writing support</option>
          <option>Math support</option>
          <option>No support requested</option>
        </select>

        <select defaultValue="">
          <option value="" disabled>
            Student {number} Testing Support Interest
          </option>
          <option>Extended time</option>
          <option>Small group testing</option>
          <option>Quiet testing environment</option>
          <option>No testing support requested</option>
          <option>Not sure yet</option>
        </select>

        <select defaultValue="">
          <option value="" disabled>
            Does Student {number} have allergies?
          </option>
          <option>Yes</option>
          <option>No</option>
          <option>Not Sure</option>
        </select>

        <select defaultValue="">
          <option value="" disabled>
            Does Student {number} take medication during the school day?
          </option>
          <option>Yes</option>
          <option>No</option>
          <option>Not Sure</option>
        </select>

        <select defaultValue="">
          <option value="" disabled>
            Student {number} Wellness Support Interest
          </option>
          <option>Counseling support</option>
          <option>Mentorship support</option>
          <option>Transition support</option>
          <option>Peer connection support</option>
          <option>No wellness support requested</option>
        </select>

        <select defaultValue="">
          <option value="" disabled>
            Would Student {number} benefit from a student ambassador?
          </option>
          <option>Yes</option>
          <option>No</option>
          <option>Maybe</option>
        </select>

        <textarea
          placeholder={`Describe Student ${number}'s learning needs, academic support history, or accommodations.`}
        />

        <textarea
          placeholder={`List Student ${number}'s allergies, health concerns, medications, or wellness notes.`}
        />

        <textarea
          placeholder={`What helps Student ${number} feel safe, supported, and successful?`}
        />

        <textarea
          placeholder={`Anything DPS should understand before reviewing Student ${number}'s application?`}
        />
      </div>
    </>
  );
}

export default function SupportApplicationPage() {
  return (
    <main className="application-page">
      <Header />

      <section className="application-shell">
        <div className="application-intro">
          <span>DPS APPLICATION</span>

          <h1>Student Support & Wellness</h1>

          <p>
            Share academic, wellness, medical, and learning support needs for
            each student so DPS can better understand how to support every child.
          </p>
        </div>

        <form className="application-form">
          <SupportBlock number="1" />
          <SupportBlock number="2" />
          <SupportBlock number="3" />

          <p className="application-note">
            Each student is reviewed individually and equally. Families applying
            for fewer than three students may leave unused student sections blank.
            Support information helps DPS plan responsibly and confidentially.
          </p>

          <div className="application-actions">
            <a href="/apply/family" className="back-application-btn">
              Back
            </a>

            <a href="/apply/statement" className="next-application-btn">
              Continue to Student Statement
            </a>
          </div>
        </form>
      </section>

      <Footer />
    </main>
  );
}