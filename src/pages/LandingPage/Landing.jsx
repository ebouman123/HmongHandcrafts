import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Fullscreen hero image */}
      <div className="w-full h-[90vh] overflow-hidden">
        <img
          src="/images/mandora-feature.jpg"
          alt="Mandora teaching"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content block */}
      <div className="max-w-3xl mx-auto px-4 py-8 -mt-16 bg-white rounded-xl shadow-lg text-center z-10">
        <h1 className="text-3xl font-bold mb-2">Mandora Young</h1>
        <h2 className="text-xl text-red-600 font-medium mb-4">
          Hmong Textile Artist & Educator
        </h2>
        <p className="text-gray-700 mb-6">
          Preserving traditional Hmong embroidery through hands-on teaching,
          storytelling, and art.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/calendar"
            className="bg-pink-200 text-white px-6 py-3 rounded-full font-semibold hover:bg-pink-300 transition"
          >
            View Upcoming Classes
          </Link>
          <Link
            to="/bio"
            className="bg-pink-200 text-white px-6 py-3 rounded-full font-semibold hover:bg-pink-300 transition"
          >
            Learn About Mandora
          </Link>
          <Link
            to="/admin"
            className="bg-pink-200 text-white px-6 py-3 rounded-full font-semibold hover:bg-pink-300 transition"
          >
            Admin Panel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
