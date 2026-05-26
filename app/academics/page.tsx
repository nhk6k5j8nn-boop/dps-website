import Header from "../components/Header";
import Footer from "../components/Footer";

const academies = [
  ["🩺", "Health & Medical Sciences", "Nursing, Pre-Med, Sports Medicine, Pediatrics, Physical Therapy, EMT, Dental, Ultrasound, Radiology"],
  ["💻", "Technology & Artificial Intelligence", "Software, Cybersecurity, AI, Apps, Web Design, Data Science, Cloud, Robotics, Game Design"],
  ["⚖️", "Law, Government & Public Service", "Criminal Justice, Law, Politics, Debate, Public Administration, Homeland Security"],
  ["💼", "Business, Finance & Entrepreneurship", "Business, Marketing, Real Estate, Investing, Entrepreneurship, Accounting, Banking"],
  ["🎬", "Film, Media & Broadcasting", "Film, Photography, Journalism, Podcasting, Broadcasting, Sports Media, Content Creation"],
  ["🎨", "Arts, Fashion & Creative Design", "Fashion, Graphic Design, Interior Design, Illustration, Animation, Fine Arts, Digital Art"],
  ["🏗️", "Engineering & Architecture", "Civil, Mechanical, Architecture, CAD, Construction Management, Urban Planning"],
  ["✈️", "Aviation & Aerospace", "Pilot Foundations, Aviation Tech, Drones, Aerospace Engineering, Flight Operations"],
  ["🔬", "Science & Research", "Biology, Chemistry, Environmental Science, Genetics, Research Methods, Laboratory Studies"],
  ["🧠", "Psychology & Human Services", "Psychology, Social Work, Counseling, Human Development, Family Studies"],
  ["🍳", "Culinary & Hospitality", "Culinary Arts, Baking, Restaurant Management, Hotel Management, Event Planning"],
  ["🛠️", "Skilled Trades & Industrial Technology", "Welding, Electrical, HVAC, Plumbing, Carpentry, Masonry, CNC"],
  ["🚘", "Automotive & Transportation", "Auto Repair, Auto Body, Performance Tuning, Diesel, EV Technology"],
  ["🌱", "Agriculture & Environmental Systems", "Animal Science, Farming, Agribusiness, Horticulture, Environmental Systems"],
  ["🪖", "Military Leadership & JROTC", "Leadership, Military Science, Physical Conditioning, National Service"],
  ["📚", "Education & Teaching", "Early Childhood, Teaching Foundations, Child Development, Classroom Leadership"],
  ["🎵", "Music & Performing Arts", "Choir, Band, Orchestra, Music Production, Theater, Dance"],
  ["🏈", "Sports Performance & Athletic Science", "Athletic Training, Sports Nutrition, Coaching, Kinesiology, Analytics"],
  ["🌍", "International Studies & Global Leadership", "International Relations, Cultural Studies, Diplomacy, Global Economics, Languages"],
  ["🏠", "Real Estate, Construction & Property Development", "Real Estate, Property Management, Luxury Development, Construction Planning"],
  ["👗", "Beauty, Wellness & Cosmetology", "Cosmetology, Esthetics, Nails, Barbering, Makeup, Wellness Business"],
  ["🚀", "Innovation, Leadership & Startup", "Startups, Venture Creation, Public Speaking, Branding, Product Development"],
];

export default function AcademicsPage() {
  return (
    <main className="academics-page">
      <Header />

      <section className="academics-hero">
        <div className="academics-card">
          <p className="academics-kicker">DPS ACADEMICS</p>
          <h1>22 Career Academies. Unlimited Futures.</h1>
          <p>
            Davidson Preparatory School combines strong academics, leadership,
            advanced learning, career pathways, certifications, internships,
            dual enrollment, mentorships, and capstone experiences.
          </p>
        </div>
      </section>

      <section className="division-section">
        <div className="division-grid">
          <div className="division-card">
            <h2>Early Learning Center</h2>
            <span className="division-grade">Infants — Grade 2</span>
            <p>Early foundations in literacy, creativity, confidence, social growth, exploration, and leadership.</p>
          </div>

          <div className="division-card">
            <h2>Elementary School</h2>
            <span className="division-grade">Grades 3 — 6</span>
            <p>Strong academics with STEM, reading growth, leadership, creative development, and advanced learning.</p>
          </div>

          <div className="division-card">
            <h2>Middle School</h2>
            <span className="division-grade">Grades 7 — 9</span>
            <p>Academic rigor, organization, career exploration, athletics, responsibility, and leadership preparation.</p>
          </div>

          <div className="division-card">
            <h2>Upper School</h2>
            <span className="division-grade">Grades 10 — 12</span>
            <p>College preparation, career academies, internships, certifications, advanced courses, and future readiness.</p>
          </div>
        </div>
      </section>

      <section className="academy-section">
        <div className="academy-header">
          <p>THE 22 DPS CAREER ACADEMIES</p>
          <h2>Every pathway gets the spotlight.</h2>
        </div>

        <div className="academy-grid">
          {academies.map(([icon, title, text]) => (
            <div className="academy-box" key={title}>
              <div className="academy-icon">{icon}</div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="difference-section">
        <div className="difference-card">
          <p className="academics-kicker">THE DPS DIFFERENCE</p>
          <h2>A launchpad, not just a school.</h2>

          <div className="difference-grid">
            <span>Internships</span>
            <span>Certifications</span>
            <span>Competitions</span>
            <span>Mentorships</span>
            <span>Dual Enrollment</span>
            <span>Real-World Experience</span>
            <span>Capstone Projects</span>
            <span>Leadership Development</span>
          </div>
        </div>
      </section>
    <Footer />
    </main>
  );
}