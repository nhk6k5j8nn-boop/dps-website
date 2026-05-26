const houses = [
  {
    number: "01",
    name: "Aurelius",
    color: "Strawberry Red",
    motto: "Lead. Honor. Legacy.",
    traits: "Leadership • Honor • Legacy",
    className: "aurelius",
  },
  {
    number: "02",
    name: "Solara",
    color: "Swan Blue",
    motto: "Shine. Grow. Renew.",
    traits: "Energy • Growth • Renewal",
    className: "solara",
  },
  {
    number: "03",
    name: "Nereon",
    color: "Concord Purple",
    motto: "Depth. Wisdom. Strength.",
    traits: "Wisdom • Knowledge • Strength",
    className: "nereon",
  },
  {
    number: "04",
    name: "Phyre",
    color: "Marigold Gold",
    motto: "Passion. Courage. Transformation.",
    traits: "Passion • Courage • Transformation",
    className: "phyre",
  },
];

const lifeCards = [
  {
    title: "Apex Cup of Excellence",
    text: "Houses compete all year through academics, athletics, fine arts, service, attendance, character, and spirit week.",
  },
  {
    title: "Spirit Weeks",
    text: "Quarterly traditions, dress-up themes, rallies, competitions, and school-wide celebrations.",
  },
  {
    title: "Clubs & Organizations",
    text: "Robotics, debate, esports, fashion, culture, media, entrepreneurship, performing arts, and more.",
  },
  {
    title: "Student Leadership",
    text: "Students lead events, broadcasts, mentorship programs, service initiatives, and campus traditions.",
  },
];

export default function StudentLifeSection() {
  return (
    <section className="student-life-section">
      <div className="student-life-header">
        <span>STUDENT LIFE</span>

        <h2>The Four Houses of Davidson Preparatory School.</h2>

        <p>
          Four houses. One family. Endless legacy. Every DPS student belongs to
          a house that builds pride, leadership, competition, service, and
          school tradition.
        </p>
      </div>

      <div className="houses-grid">
        {houses.map((house) => (
          <div className={`house-card ${house.className}`} key={house.name}>
            <span>{house.number}</span>
            <h3>{house.name}</h3>
            <p className="house-color">{house.color}</p>
            <p className="house-motto">{house.motto}</p>
            <p className="house-traits">{house.traits}</p>
          </div>
        ))}
      </div>

      <div className="student-life-mini-grid">
        {lifeCards.map((card) => (
          <div className="student-life-mini-card" key={card.title}>
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}