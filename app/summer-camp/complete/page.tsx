import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function SummerCampCompletePage() {
  return (
    <main className="camp-complete-page">
      <Header />

      <section className="camp-complete-section">
        <div className="camp-complete-card">
          <span>DPS SUMMER CAMP</span>

          <h1>Registration Received.</h1>

          <p>
            Your summer camp registration has been submitted for review. DPS
            Summer Camp staff will review program selections, availability,
            medical notes, pickup information, and extended day requests.
          </p>

          <div className="camp-complete-grid">
            <div>
              <h3>Program Review</h3>
              <p>
                Camp selections are reviewed based on space, grade level,
                staffing, and program availability.
              </p>
            </div>

            <div>
              <h3>Family Communication</h3>
              <p>
                Families will receive updates using the contact information
                provided during registration.
              </p>
            </div>

            <div>
              <h3>Next Steps</h3>
              <p>
                Confirmed campers will receive schedules, arrival details,
                activity notes, and preparation information.
              </p>
            </div>
          </div>

          <div className="camp-complete-buttons">
            <a href="/summer-camp">Return to Summer Camp</a>
            <a href="/">Return Home</a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}