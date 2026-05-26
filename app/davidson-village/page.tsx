import Header from "../components/Header";
import Footer from "../components/Footer";

export default function DavidsonVillagePage() {
  return (
    <main className="village-page">
      <Header />

      <section className="village-hero">
        <div className="village-card">
          <span>DAVIDSON VILLAGE</span>

          <h1>A luxury residential community built for modern living.</h1>

          <p>
            Davidson Village is a planned mixed-use luxury community located
            near Davidson Preparatory School in Madison, Georgia. The village is
            designed for families, professionals, graduates, retirees, students,
            and residents seeking a connected and elevated lifestyle.
          </p>
        </div>
      </section>

      <section className="village-grid-section">
        <div className="village-grid">
          <div className="village-box">
            <h2>Luxury Apartments</h2>

            <p>
              Modern apartment residences designed with upscale finishes,
              wellness-focused environments, and community-centered living.
            </p>
          </div>

          <div className="village-box">
            <h2>Townhomes & Family Living</h2>

            <p>
              Spacious residential options for families and long-term residents
              who want access to a safe and connected community atmosphere.
            </p>
          </div>

          <div className="village-box">
            <h2>Retail & Community Spaces</h2>

            <p>
              Planned village concepts may include cafés, wellness spaces,
              fitness centers, walking trails, study lounges, parks, and local
              businesses.
            </p>
          </div>

          <div className="village-box">
            <h2>Graduate & Professional Living</h2>

            <p>
              Davidson Village is designed to support independent living for
              graduates, professionals, educators, and community residents.
            </p>
          </div>
        </div>
      </section>

      <section className="village-feature-section">
        <div className="village-feature-card">
          <span>DPS RESIDENTIAL DIVISION</span>

          <h2>A separate residential experience for boarding students.</h2>

          <p>
            Within Davidson Village, Davidson Preparatory School operates a
            secured boarding residential division exclusively for enrolled DPS
            boarding students. The residential division includes supervision,
            study support, structured living, student lounges, and student
            wellness services.
          </p>
        </div>
      </section>

      <section className="village-feature-section">
        <div className="village-feature-card">
          <span>DPS FAMILY BENEFIT</span>

          <h2>Village residents with enrolled DPS students may qualify for a 15% tuition reduction.</h2>

          <p>
            Davidson Village and DPS are connected through long-term community
            partnership initiatives focused on education, leadership, and family
            support.
          </p>

          <a href="/welcome-center">Contact Davidson Village</a>
        </div>
      </section>

      <Footer />
    </main>
  );
}