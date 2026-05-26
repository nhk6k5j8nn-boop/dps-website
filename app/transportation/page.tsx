import Header from "../components/Header";
import Footer from "../components/Footer";

export default function TransportationPage() {
  return (
    <main className="transportation-page">
      <Header />

      <section className="transportation-hero">
        <div className="transportation-card">
          <span>TRANSPORTATION & CAMPUS ACCESS</span>

          <h1>Designed for safe arrivals, secure access, and smooth movement.</h1>

          <p>
            DPS transportation is planned around safety, structure, parent
            convenience, boarding student access, student drivers, bus systems,
            and controlled campus entry.
          </p>
        </div>
      </section>

      <section className="transportation-grid-section">
        <div className="transportation-grid">
          <div className="transportation-box">
            <h2>Bus Transportation</h2>
            <p>
              Planned bus services support student arrival, dismissal, campus
              events, field trips, summer camp, and boarding transportation.
            </p>
          </div>

          <div className="transportation-box">
            <h2>Parent Pickup & Drop-Off</h2>
            <p>
              Separate parent arrival and dismissal zones help reduce traffic,
              improve safety, and keep student movement organized by division.
            </p>
          </div>

          <div className="transportation-box">
            <h2>Student Parking</h2>
            <p>
              Upper School student drivers may register vehicles, receive
              parking assignments, and follow campus driving expectations.
            </p>
          </div>

          <div className="transportation-box">
            <h2>Boarding Transportation</h2>
            <p>
              Boarding students may access supervised transportation for
              campus needs, weekend activities, appointments, and approved trips.
            </p>
          </div>

          <div className="transportation-box">
            <h2>Vehicle Decals</h2>
            <p>
              Registered vehicles may receive role-based decals for parents,
              staff, students, vendors, emergency services, and boarding access.
            </p>
          </div>

          <div className="transportation-box">
            <h2>Controlled Gate Access</h2>
            <p>
              DPS gate systems are designed for approved access by role, time,
              location, and campus purpose.
            </p>
          </div>
        </div>
      </section>

      <section className="transportation-feature-section">
        <div className="transportation-feature-card">
          <span>CAMPUS ACCESS FLOW</span>

          <h2>Every arrival point has a purpose.</h2>

          <div className="transportation-flow-grid">
            <p>Main Welcome Gate</p>
            <p>Parent Drop-Off</p>
            <p>Student Parking</p>
            <p>Faculty & Staff Entry</p>
            <p>Bus Loop</p>
            <p>Boarding Residential Access</p>
            <p>Vendor Access</p>
            <p>Emergency Access</p>
          </div>
        </div>
      </section>

      <section className="transportation-feature-section">
        <div className="transportation-feature-card">
          <span>SAFETY FIRST</span>

          <h2>Built around structure, supervision, and accountability.</h2>

          <p>
            DPS transportation and access procedures are designed to help
            students arrive safely, reduce unauthorized movement, support
            campus security, and keep families informed through organized
            arrival and dismissal systems.
          </p>

          <a href="/welcome-center">Contact Transportation</a>
        </div>
      </section>

      <Footer />
    </main>
  );
}