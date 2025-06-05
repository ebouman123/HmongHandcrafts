import "./Landing.css";
import Layout from "../../components/Layout/Layout.jsx";

const LandingPage = () => {
  return (
    <Layout>
      <div className="landing">
        <main className="landing-main">
          <h2>Celebrate Hmong Heritage Through Art</h2>
          <p>
            Join Mandora in exploring traditional Hmong arts and crafts. Attend
            free community classes, learn cultural history, and get inspired.
          </p>
          <a className="landing-button" href="/calendar">
            View Upcoming Classes
          </a>
        </main>

        <footer className="landing-footer">
          © {new Date().getFullYear()} Mandora’s Craft Studio. All rights
          reserved.
        </footer>
      </div>
    </Layout>
  );
};

export default LandingPage;
