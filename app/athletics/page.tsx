import Header from "../components/Header";
import Footer from "../components/Footer";

export default function AthleticsPage() {
  return (
    <main className="athletics-page">
      <Header />

      {/* HERO */}

      <section className="athletics-hero">

        <div className="athletics-card">

          <p className="athletics-kicker">
            APEX RAMS ATHLETICS
          </p>

          <h1>
            Discipline on the field.
            <br />
            Excellence in life.
          </h1>

          <p>
            Davidson Preparatory School athletics builds discipline,
            leadership, teamwork, confidence, school pride,
            and competitive character through a strong
            Apex Rams athletic culture.
          </p>

        </div>

      </section>

      {/* ATHLETICS GRID */}

      <section className="athletics-grid-section">

        <div className="athletics-grid">

          <div className="athletics-box">
            <h2>Competitive Programs</h2>

            <p>
              DPS athletics provides students opportunities
              to compete, develop skill, build confidence,
              and represent the Apex Rams with pride.
            </p>
          </div>

          <div className="athletics-box">
            <h2>Sports Performance</h2>

            <p>
              Student-athletes train through strength,
              conditioning, recovery, nutrition,
              athletic development, and performance preparation.
            </p>
          </div>

          <div className="athletics-box">
            <h2>Leadership & Character</h2>

            <p>
              Athletes are expected to lead with discipline,
              accountability, confidence,
              teamwork, and responsibility.
            </p>
          </div>

          <div className="athletics-box">
            <h2>Student-Athlete Support</h2>

            <p>
              Academic support, mentorship,
              eligibility standards,
              leadership development,
              and college preparation are part
              of the athlete experience.
            </p>
          </div>

        </div>

      </section>

      {/* SPORTS */}

      <section className="sports-section">

        <div className="sports-card">

          <p className="athletics-kicker">
            RAMS SPORTS PROGRAMS
          </p>

          <h2>
            Built for competition,
            pride, and growth.
          </h2>

          <p className="sports-intro">
            Davidson Preparatory School offers a wide range
            of competitive athletic programs across team sports,
            performance athletics,
            spirit programs,
            and student-athlete development.
          </p>

          <div className="sports-grid">

            <span>Football</span>
            <span>Basketball</span>
            <span>Baseball</span>
            <span>Softball</span>
            <span>Soccer</span>
            <span>Volleyball</span>
            <span>Track & Field</span>
            <span>Cross Country</span>
            <span>Cheerleading</span>
            <span>Dance Team</span>
            <span>Tennis</span>
            <span>Golf</span>
            <span>Swimming</span>
            <span>Wrestling</span>
            <span>Lacrosse</span>
            <span>Flag Football</span>
            <span>Esports</span>
            <span>Bowling</span>
            <span>Gymnastics</span>
            <span>Competitive Weightlifting</span>
            <span>Martial Arts</span>
            <span>Rugby</span>
            <span>Ultimate Frisbee</span>
            <span>Surf & Water Sports</span>

          </div>

        </div>

      </section>

      {/* DPS ATHLETE EXPERIENCE */}

      <section className="athlete-experience-section">

        <div className="athlete-experience-card">

          <p className="athletics-kicker">
            THE DPS ATHLETE EXPERIENCE
          </p>

          <h2>
            Built for athletes,
            leaders, and future competitors.
          </h2>

          <div className="athlete-experience-grid">

            <span>Strength Training</span>
            <span>Film Study</span>
            <span>Sports Medicine</span>
            <span>Performance Analytics</span>
            <span>Leadership Development</span>
            <span>Nutrition Support</span>
            <span>College Recruitment Prep</span>
            <span>Championship Culture</span>

          </div>

        </div>

      </section>
    < Footer />
    </main>
  );
}