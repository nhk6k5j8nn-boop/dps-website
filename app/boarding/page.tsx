import Header from "../components/Header";
import Footer from "../components/Footer";

export default function BoardingPage() {
  return (
    <main className="boarding-page">
      <Header />

      <section className="boarding-hero">
        <div className="boarding-card">
          <p className="boarding-kicker">BOARDING LIFE AT DPS</p>

          <h1>A structured home away from home.</h1>

          <p>
            Davidson Preparatory School boarding life is designed to give
            students safety, structure, independence, community, academic
            support, and a strong residential experience through Davidson
            Village.
          </p>
        </div>
      </section>

      <section className="boarding-grid-section">
        <div className="boarding-grid">
          <div className="boarding-box">
            <h2>Davidson Village</h2>
            <p>
              A supervised residential community designed for comfort, safety,
              accountability, and student belonging.
            </p>
          </div>

          <div className="boarding-box">
            <h2>Residential Mentors</h2>
            <p>
              Students are supported by trained staff who help guide routines,
              study habits, behavior expectations, and daily life.
            </p>
          </div>

          <div className="boarding-box">
            <h2>Study Hall</h2>
            <p>
              Boarding students participate in structured academic time to stay
              organized, complete assignments, and receive support.
            </p>
          </div>

          <div className="boarding-box">
            <h2>Weekend Activities</h2>
            <p>
              Community events, athletics, leadership activities, campus
              experiences, and outings help students build friendships.
            </p>
          </div>
        </div>
      </section>

      <section className="boarding-routine-section">
        <div className="boarding-routine-card">
          <p className="boarding-kicker">DAILY STRUCTURE</p>

          <h2>Life in boarding is organized, supportive, and intentional.</h2>

          <div className="routine-list">
            <span>Morning check-ins</span>
            <span>Academic day</span>
            <span>Athletics & activities</span>
            <span>Evening study hall</span>
            <span>Community time</span>
            <span>Residential quiet hours</span>
          </div>
        </div>
      </section>
    <Footer />
    </main>
  );
}