import HomeButton from "../../components/HomeButton";

const Bio = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-10 max-w-4xl mx-auto text-raisin_black">
      <HomeButton />

      <section className="text-center mb-12">
        <img
          src="/images/1000005442.jpg"
          alt="Mandora Young"
          className="w-40 h-40 mx-auto rounded-full object-cover border-4 border-kelly_green-400 shadow-md mb-4"
        />
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">Mandora Young</h1>
        <p className="text-lg text-gray-700 max-w-xl mx-auto">
          A traditional Hmong textile artist preserving and sharing paj ntaub
          with the community.
        </p>
      </section>

      <section className="space-y-6 mb-12">
        <p>
          Mandora was born in Vientiane, Laos, and came to the United States as
          a refugee in 1979. She learned Hmong embroidery from her mother and
          grandmother, both skilled in cross-stitching, reverse applique, and
          story cloth techniques.
        </p>
        <p>
          Since 2018, she has been teaching Hmong paj ntaub (flower cloth) to
          students, adults, and anyone interested in learning this traditional
          craft.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Traditional Art</h2>
        <p className="mb-6">
          She specializes in traditional White Hmong cross-stitch motif
          patterns. Mandora believes that paj ntaub making is a powerful way to
          preserve and continue Hmong culture — a craft passed down through
          generations by memory and practice.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <img
            src="/images/1000005487.jpg"
            alt="Cross-stitch"
            className="w-full rounded-lg shadow-sm object-cover"
          />
          <img
            src="/images/1000007028.jpg"
            alt="Story cloth"
            className="w-full rounded-lg shadow-sm object-cover"
          />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Teaching Experience</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-800">
          <li>Brookdale Library (Brooklyn Center, MN)</li>
          <li>Rockford Road Library (Crystal, MN)</li>
          <li>Marine Mills Folk School</li>
          <li>Textile Center (Minneapolis, MN)</li>
          <li>Hmong Museum (St. Paul, MN)</li>
          <li>Jackson Middle School (Champlin, MN)</li>
          <li>Monroe Elementary (Brooklyn Park, MN)</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Featured Work</h2>
        <p className="mb-4">
          Mandora was featured in the{" "}
          <strong>Craft in America: INSPIRATION</strong> episode in 2022.
        </p>
        <div
          className="relative w-full overflow-hidden rounded-lg"
          style={{ paddingTop: "56.25%" }}
        >
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/hzR5OrWepDQ"
            title="Craft in America: Hmong Paj Ntaub"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      <section className="mt-8">
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 hover:shadow-md transition">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">
            Contact & Social
          </h2>

          <p className="text-base text-gray-700 mb-6">
            Email:{" "}
            <a
              href="mailto:Mypajntaub@gmail.com"
              className="text-kelly_green-700 hover:underline"
            >
              Mypajntaub@gmail.com
            </a>
          </p>

          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/mypajntaub?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <img
                src="/images/Instagram Logo.jpg"
                alt="Instagram"
                className="w-12 h-12 object-contain"
              />
            </a>
            <span className="text-base text-gray-700">
              Follow Mandora on Instagram
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Bio;
