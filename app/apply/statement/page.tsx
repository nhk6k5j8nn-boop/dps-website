import Header from "../../components/Header";
import Footer from "../../components/Footer";

function StudentStatementBlock({ number }: { number: string }) {
  return (
    <>
      <div className="form-section-title">
        <span>{number}</span>
        <h2>Student {number} Statement & Reflection</h2>
      </div>

      <div className="form-grid">
        <textarea
          placeholder={`Describe Student ${number} in three words and explain why.`}
        />

        <textarea
          placeholder={`What is Student ${number} most passionate about right now?`}
        />

        <textarea
          placeholder={`What motivates Student ${number} to work hard or succeed?`}
        />

        <textarea
          placeholder={`What achievement is Student ${number} most proud of?`}
        />

        <textarea
          placeholder={`What does leadership mean to Student ${number}?`}
        />

        <textarea
          placeholder={`How would Student ${number} contribute to the DPS community?`}
        />

        <textarea
          placeholder={`Describe a challenge Student ${number} has overcome.`}
        />

        <textarea
          placeholder={`How does Student ${number} handle teamwork, pressure, or conflict?`}
        />

        <textarea
          placeholder={`Why is Student ${number} interested in Davidson Preparatory School?`}
        />

        <textarea
          placeholder={`What opportunities at DPS is Student ${number} most excited about?`}
        />

        <textarea
          placeholder={`What are Student ${number}'s goals for high school, college, or future career plans?`}
        />

        <textarea
          placeholder={`What impact does Student ${number} hope to make during their time at DPS?`}
        />

        <textarea
          placeholder={`If Student ${number} could create a new club, class, or tradition at DPS, what would it be?`}
        />

        <textarea
          placeholder={`What is something unique about Student ${number} that people may not notice at first?`}
        />

        <textarea
          placeholder={`What type of environment helps Student ${number} feel inspired and confident?`}
        />

        <textarea
          placeholder={`Anything else the admissions team should know about Student ${number}?`}
        />
      </div>
    </>
  );
}

export default function StatementApplicationPage() {
  return (
    <main className="application-page">
      <Header />

      <section className="application-shell">
        <div className="application-intro">
          <span>DPS APPLICATION</span>

          <h1>Student Statement & Personal Reflection</h1>

          <p>
            This section helps DPS learn more about each student’s
            personality, goals, leadership potential, interests,
            mindset, and voice beyond academics.
          </p>
        </div>

        <form className="application-form">
          <StudentStatementBlock number="1" />
          <StudentStatementBlock number="2" />
          <StudentStatementBlock number="3" />

          <p className="application-note">
            Each student is reviewed individually and equally. Families applying
            for fewer than three students may leave unused student sections blank.
            Student responses help DPS understand character, motivation,
            leadership, and personal growth potential.
          </p>

          <div className="application-actions">
            <a href="/apply/support" className="back-application-btn">
              Back
            </a>

            <a href="/apply/final-review" className="next-application-btn">
              Continue to Final Review
            </a>
          </div>
        </form>
      </section>

      <Footer />
    </main>
  );
}