const boardingFeatures = [
  {
    number: "01",
    title: "Davidson Village",
    text: "Luxury residential living connected directly to the DPS campus with modern student housing and community spaces.",
  },
  {
    number: "02",
    title: "Residential Mentors",
    text: "Dedicated residential staff and mentors supporting student wellness, academics, structure, and personal growth.",
  },
  {
    number: "03",
    title: "Study Lounges",
    text: "Quiet academic spaces designed for collaboration, tutoring, evening study sessions, and student productivity.",
  },
  {
    number: "04",
    title: "Wellness & Support",
    text: "Mental wellness resources, counseling access, fitness areas, and student support systems across campus.",
  },
  {
    number: "05",
    title: "Evening Activities",
    text: "Movie nights, leadership events, tournaments, social gatherings, recreation, and weekend experiences.",
  },
  {
    number: "06",
    title: "Secure Campus Access",
    text: "Schedule-based ID access, monitored residence halls, gated entry systems, and campus-wide security.",
  },
];

export default function BoardingSection() {
  return (
    <section className="boarding-section">

      <div className="boarding-overlay" />

      <div className="boarding-layout">

        <div className="boarding-left">

          <span>BOARDING LIFE</span>

          <h2>
            A residential experience built for structure,
            independence, and community.
          </h2>

          <p>
            DPS boarding combines luxury residential living
            with mentorship, wellness support, academics,
            leadership development, and student life experiences.
          </p>

        </div>

        <div className="boarding-grid">

          {boardingFeatures.map((feature) => (

            <div className="boarding-card" key={feature.title}>

              <span>{feature.number}</span>

              <h3>{feature.title}</h3>

              <p>{feature.text}</p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}