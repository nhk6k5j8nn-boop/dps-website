import Header from "../components/Header";
import Footer from "../components/Footer";

export default function CareersPage() {
  return (
    <main className="careers-page">
      <Header />

      <section className="careers-hero">
        <div className="careers-card">
          <span>FACULTY & CAREERS</span>

          <h1>Build the future of education with DPS.</h1>

          <p>
            Davidson Preparatory School is building a team of educators,
            coaches, residential mentors, academy instructors, and operational
            leaders who believe in structure, excellence, innovation, and
            student success.
          </p>
        </div>
      </section>

      <section className="careers-grid-section">
        <div className="careers-grid">
          <div className="careers-box">
            <h2>Teaching Faculty</h2>
            <p>
              Classroom educators across Early Learning, Elementary, Middle, and
              Upper School divisions.
            </p>
          </div>

          <div className="careers-box">
            <h2>Academy Instructors</h2>
            <p>
              Career-focused instructors for healthcare, technology, business,
              trades, aviation, media, law, and more.
            </p>
          </div>

          <div className="careers-box">
            <h2>Athletics & Coaching</h2>
            <p>
              Coaches, trainers, performance staff, spirit program leaders, and
              student-athlete support roles.
            </p>
          </div>

          <div className="careers-box">
            <h2>Boarding & Residential Life</h2>
            <p>
              Residential mentors, dorm supervisors, student life staff, and
              wellness-focused support roles.
            </p>
          </div>

          <div className="careers-box">
            <h2>Operations & Security</h2>
            <p>
              Campus operations, safety, transportation, welcome center,
              facilities, and administrative support.
            </p>
          </div>

          <div className="careers-box">
            <h2>Leadership & Administration</h2>
            <p>
              Division leaders, assistant principals, directors, coordinators,
              and executive operations staff.
            </p>
          </div>
        </div>
      </section>

      <section className="careers-benefits-section">
        <div className="careers-benefits-card">
          <span>DPS EMPLOYEE EXPERIENCE</span>

          <h2>Designed to support excellent people doing excellent work.</h2>

          <div className="careers-benefits-grid">
            <p>Professional Growth</p>
            <p>Leadership Pathways</p>
            <p>Modern Campus Culture</p>
            <p>Faculty Housing Opportunities</p>
            <p>Technology-Forward Classrooms</p>
            <p>Residential Community Access</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}