import { Link } from "react-router-dom";

const HomeButton = () => (
  <Link
    to="/"
    className="fixed top-4 left-4 bg-razzmatazz-500 text-white px-4 py-2 rounded-full shadow hover:bg-razzmatazz-600 transition z-50"
  >
    ← Home
  </Link>
);

export default HomeButton;
