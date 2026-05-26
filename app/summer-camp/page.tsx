import Header from "../components/Header";
import Footer from "../components/Footer";

export default function SummerCampPage() {
  return (
    <main className="summer-page">
      <Header />

      <section className="summer-hero">
        <div className="summer-card">
          <p className="summer-kicker">DPS SUMMER CAMP</p>

          <h1>
            A summer built for fun,
            growth, and discovery.
          </h1>

          <p>
            Davidson Preparatory School Summer Camp gives students a premium
            summer experience filled with activities, academics, sports,
            creativity, field trips, leadership, and unforgettable memories.
          </p>

          <div className="summer-actions">
            <a href="/summer-camp/register" className="summer-camp-primary-btn">
  Apply Now
</a>
            <a href="#programs" className="secondary-btn">Explore Camps</a>
          </div>
        </div>
      </section>

      <section id="programs" className="summer-grid-section">
        <div className="summer-grid">
          <div className="summer-box">
            <h2>Adventure Camp</h2>
            <p>Outdoor games, campus challenges, team activities, field days, and summer competitions.</p>
          </div>

          <div className="summer-box">
            <h2>Sports Camp</h2>
            <p>Basketball, football, cheer, dance, soccer, track, strength training, and athletic skill development.</p>
          </div>

          <div className="summer-box">
            <h2>STEM & Tech Camp</h2>
            <p>Robotics, coding, AI projects, app design, digital creation, experiments, and innovation labs.</p>
          </div>

          <div className="summer-box">
            <h2>Arts & Media Camp</h2>
            <p>Film, photography, fashion, music, theater, painting, content creation, and creative production.</p>
          </div>

          <div className="summer-box">
            <h2>Leadership Camp</h2>
            <p>Public speaking, confidence building, entrepreneurship, service projects, and student leadership.</p>
          </div>

          <div className="summer-box">
            <h2>Discovery Trips</h2>
            <p>Weekly field trips, local experiences, educational outings, entertainment days, and summer adventures.</p>
          </div>
        </div>
      </section>

      <section className="summer-experience-section">
        <div className="summer-experience-card">
          <p className="summer-kicker">THE SUMMER EXPERIENCE</p>

          <h2>Every week feels different.</h2>

          <div className="summer-experience-grid">
            <span>Field Trips</span>
            <span>Spirit Days</span>
            <span>Water Days</span>
            <span>STEM Labs</span>
            <span>Sports Tournaments</span>
            <span>Arts Showcases</span>
            <span>Leadership Challenges</span>
            <span>End-of-Summer Celebration</span>
          </div>
        </div>
      </section>
    <Footer />
    </main>
  );
}