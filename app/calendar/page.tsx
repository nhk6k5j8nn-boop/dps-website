import Header from "../components/Header";
import Footer from "../components/Footer";

export default function CalendarPage() {
  return (
    <main className="calendar-page">
      <Header />

      <section className="calendar-section">
        <div className="calendar-card">
          <p className="calendar-kicker">DPS SCHOOL CALENDAR</p>

          <h1>School Calendar</h1>

          <p className="calendar-description">
            View upcoming school events, orientation dates, breaks, activities,
            deadlines, testing days, and campus schedules.
          </p>

          <a
            href="https://outlook.live.com/owa/calendar/00000000-0000-0000-0000-000000000000/b34ca7fe-5d2a-4b53-a82f-e6b3711db245/cid-7D819B9C77FE4017/index.html"
            target="_blank"
            className="primary-btn"
          >
            OPEN SCHOOL CALENDAR
          </a>
        </div>
      </section>
    <Footer />
    </main>
  );
}