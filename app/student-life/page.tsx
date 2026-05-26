import Header from "../components/Header";
import Footer from "../components/Footer";

export default function StudentLifePage() {
  return (
    <main className="student-life-page">
      <Header />

      <section className="student-life-hero">
        <div className="student-life-card">

          <p className="student-life-kicker">
            STUDENT LIFE AT DPS
          </p>

          <h1>
            More than a school.
            <br />
            A student experience.
          </h1>

          <p>
            Davidson Preparatory School creates a student experience
            built around leadership, traditions, community,
            school spirit, friendships, opportunities,
            and unforgettable moments.
          </p>

        </div>
      </section>

      {/* STUDENT LIFE GRID */}

      <section className="student-life-grid-section">

        <div className="student-life-grid">

          <div className="student-life-box">
            <h2>Clubs & Organizations</h2>

            <p>
              Students can explore interests through leadership clubs,
              academic organizations, creative groups,
              STEM activities, gaming, media,
              entrepreneurship, and more.
            </p>
          </div>

          <div className="student-life-box">
            <h2>Spirit Weeks</h2>

            <p>
              DPS spirit weeks bring energy, creativity,
              traditions, competitions,
              themed days, and unforgettable school memories.
            </p>
          </div>

          <div className="student-life-box">
            <h2>House Competitions</h2>

            <p>
              Students compete in academics, athletics,
              leadership events, service projects,
              and school-wide challenges throughout the year.
            </p>
          </div>

          <div className="student-life-box">
            <h2>Student Leadership</h2>

            <p>
              DPS students are encouraged to lead through
              student government, mentoring,
              public speaking, leadership councils,
              and community involvement.
            </p>
          </div>

          <div className="student-life-box">
            <h2>Events & Traditions</h2>

            <p>
              From dances and pep rallies to gala events,
              showcases, field trips, senior experiences,
              and celebrations,
              student life stays active year-round.
            </p>
          </div>

          <div className="student-life-box">
            <h2>Community & Belonging</h2>

            <p>
              DPS focuses on creating an environment where
              students feel supported, challenged,
              included, and connected.
            </p>
          </div>

        </div>

      </section>

      {/* DPS EXPERIENCE */}

      <section className="experience-section">

        <div className="experience-card">

          <p className="student-life-kicker">
            THE DPS EXPERIENCE
          </p>

          <h2>
            Leadership, structure,
            memories, and opportunities.
          </h2>

          <div className="experience-grid">

            <span>Leadership Programs</span>
            <span>Student Government</span>
            <span>Service Projects</span>
            <span>School Dances</span>
            <span>Clubs & Organizations</span>
            <span>House Competitions</span>
            <span>Field Trips</span>
            <span>Spirit Weeks</span>
            <span>Campus Traditions</span>

          </div>

        </div>

      </section>
    <Footer />
    </main>
  );
}