import Header from "../../components/Header";
import Footer from "../../components/Footer";

const academies = [
  "Health & Medical Sciences",
  "Technology & Artificial Intelligence",
  "Law, Government & Public Service",
  "Business, Finance & Entrepreneurship",
  "Film, Media & Broadcasting",
  "Arts, Fashion & Creative Design",
  "Engineering & Architecture",
  "Aviation & Aerospace",
  "Science & Research",
  "Psychology & Human Services",
  "Culinary & Hospitality",
  "Skilled Trades & Industrial Technology",
  "Automotive & Transportation",
  "Agriculture & Environmental Systems",
  "Military Leadership & JROTC",
  "Education & Teaching",
  "Music & Performing Arts",
  "Sports Performance & Athletic Science",
  "International Studies & Global Leadership",
  "Real Estate & Property Development",
  "Beauty, Wellness & Cosmetology",
  "Innovation, Leadership & Startup",
];

function StudentAcademicBlock({ number }: { number: string }) {
  return (
    <>
      <div className="form-section-title">
        <span>{number}</span>
        <h2>Student {number} Academic Preferences</h2>
      </div>

      <div className="form-grid">
        <input placeholder={`Student ${number} Current GPA or Average`} />

        <select defaultValue="">
          <option value="" disabled>
            Student {number} Preferred Academic Level
          </option>
          <option>Standard</option>
          <option>Honors</option>
          <option>Advanced</option>
          <option>AP / Dual Enrollment Interest</option>
        </select>

        <input placeholder={`Student ${number} Favorite Subject`} />
        <input placeholder={`Student ${number} Subject Needing Support`} />

        <select defaultValue="">
          <option value="" disabled>
            Student {number} First Choice Academy
          </option>
          {academies.map((academy) => (
            <option key={academy}>{academy}</option>
          ))}
        </select>

        <select defaultValue="">
          <option value="" disabled>
            Student {number} Second Choice Academy
          </option>
          {academies.map((academy) => (
            <option key={academy}>{academy}</option>
          ))}
        </select>

        <input placeholder={`Student ${number} Future Career Goal`} />

        <select defaultValue="">
          <option value="" disabled>
            Student {number} Preferred Schedule Style
          </option>
          <option>Balanced Schedule</option>
          <option>Morning Core Classes</option>
          <option>Afternoon Core Classes</option>
          <option>STEM-Heavy Schedule</option>
          <option>Creative/Fine Arts-Heavy Schedule</option>
          <option>Athletics/Performance-Friendly Schedule</option>
        </select>

        <textarea placeholder={`Describe Student ${number}'s learning style.`} />
        <textarea placeholder={`Describe Student ${number}'s ideal school day.`} />
      </div>
    </>
  );
}

export default function AcademicsApplicationPage() {
  return (
    <main className="application-page">
      <Header />

      <section className="application-shell">
        <div className="application-intro">
          <span>DPS APPLICATION</span>
          <h1>Academics & Schedule Preferences</h1>
          <p>
            Share each student’s academic interests, academy preferences, and
            ideal schedule. Schedule requests are considered but not guaranteed.
          </p>
        </div>

        <form className="application-form">
          <StudentAcademicBlock number="1" />
          <StudentAcademicBlock number="2" />
          <StudentAcademicBlock number="3" />

          <p className="application-note">
            Each student is reviewed individually and equally. Families applying
            for fewer than three students may leave unused student sections blank.
            Final schedules are based on graduation requirements, staffing,
            course availability, placement recommendations, and division needs.
          </p>

          <div className="application-actions">
            <a href="/apply/start" className="back-application-btn">
              Back
            </a>

            <a href="/apply/student-life" className="next-application-btn">
              Continue to Student Life
            </a>
          </div>
        </form>
      </section>

      <Footer />
    </main>
  );
}