const athleticsFeatures = [
  {
    number: "01",
    title: "Apex Rams Athletics",
    text: "A future athletic program built around discipline, teamwork, confidence, pride, and competitive growth.",
  },
  {
    number: "02",
    title: "Sports Performance",
    text: "Training concepts centered on strength, conditioning, speed, recovery, nutrition, and athlete development.",
  },
  {
    number: "03",
    title: "Student-Athlete Support",
    text: "A structure designed to support academic responsibility, eligibility, mentoring, and college preparation.",
  },
  {
    number: "04",
    title: "Spirit Programs",
    text: "Cheer, dance, school pride, rallies, house competitions, and Apex Rams traditions built into campus life.",
  },
];

const sports = [
  "Football",
  "Basketball",
  "Baseball",
  "Softball",
  "Soccer",
  "Volleyball",
  "Track & Field",
  "Cross Country",
  "Cheerleading",
  "Dance Team",
  "Tennis",
  "Golf",
  "Swimming",
  "Wrestling",
  "Lacrosse",
  "Flag Football",
  "Esports",
  "Bowling",
  "Gymnastics",
  "Weightlifting",
  "Martial Arts",
  "Rugby",
];

export default function AthleticsSection() {
  return (
    <section className="home-athletics-section">
      <div className="home-athletics-header">
        <span>APEX RAMS ATHLETICS</span>

        <h2>Built for discipline, performance, and pride.</h2>

        <p>
          DPS athletics is designed as a future student-athlete experience
          focused on competitive growth, leadership, wellness, sportsmanship,
          and Apex Rams school spirit.
        </p>
      </div>

      <div className="home-athletics-grid">
        {athleticsFeatures.map((item) => (
          <div className="home-athletics-card" key={item.title}>
            <span>{item.number}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>

      <div className="home-sports-card">
        <span>SPORTS PROGRAM VISION</span>
        <h3>A wide athletic offering for future Apex Rams.</h3>

        <div className="home-sports-grid">
          {sports.map((sport) => (
            <p key={sport}>{sport}</p>
          ))}
        </div>
      </div>
    </section>
  );
}