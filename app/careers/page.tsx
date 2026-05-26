export default function CareersPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#07110f",
        color: "white",
        padding: "120px 8%",
        fontFamily: "sans-serif",
      }}
    >
      <h1
        style={{
          fontSize: "64px",
          marginBottom: "20px",
          fontWeight: "800",
        }}
      >
        Careers at DPS
      </h1>

      <p
        style={{
          maxWidth: "700px",
          lineHeight: "1.7",
          fontSize: "18px",
          color: "#d7d7d7",
          marginBottom: "50px",
        }}
      >
        Davidson Preparatory School is seeking passionate educators,
        mentors, coaches, advisors, and innovators ready to help
        build the future of education.
      </p>

      <div
        style={{
          display: "grid",
          gap: "20px",
          maxWidth: "700px",
        }}
      >
        <div
          style={{
            padding: "24px",
            borderRadius: "18px",
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <h2>Current Openings</h2>
          <p>• Elementary Teachers</p>
          <p>• STEM Instructors</p>
          <p>• Athletic Coaches</p>
          <p>• Boarding Advisors</p>
          <p>• Fine Arts Faculty</p>
        </div>

        <div
          style={{
            padding: "24px",
            borderRadius: "18px",
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <h2>Human Resources</h2>
          <p>Email: careers@dpsacademy.org</p>
          <p>Phone: (706) 555-0148</p>
        </div>
      </div>
    </main>
  );
}