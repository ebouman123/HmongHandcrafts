import "../BioPage/Bio.css";
import Layout from "../../components/Layout/Layout.jsx";

const Bio = () => {
  return (
    <Layout>
      <div className="bio-container">
        <h1>About Mandora Young</h1>

        <section className="bio-section">
          <p>
            Mandora was born in Vientiane, Laos, and came to the United States
            as a refugee in 1979. She learned Hmong embroidery from her mother
            and grandmother, both skilled in cross-stitching, reverse applique,
            and story cloth techniques.
          </p>
          <img
            src="/images/1000005442.jpg"
            alt="Mandora Young"
            className="bio-image"
          />
          <p>
            Since 2018, she has been teaching Hmong paj ntaub (flower cloth) to
            students, adults, and anyone interested in learning this traditional
            craft.
          </p>
        </section>

        <section className="bio-section">
          <h2>Traditional Art</h2>
          <p>
            She specializes in traditional White Hmong cross-stitch motif
            patterns. Mandora believes that paj ntaub making is a powerful way
            to preserve and continue Hmong culture — a craft passed down through
            generations by memory and practice.
          </p>
          <div className="bio-image-row">
            <img
              src="/images/1000005487.jpg"
              alt="Cross-stitch"
              className="bio-image"
            />
            <img
              src="/images/1000007028.jpg"
              alt="Story cloth"
              className="bio-image"
            />
          </div>
        </section>

        <section className="bio-section">
          <h2>Teaching Experience</h2>
          <ul>
            <li>Brookdale Library (Brooklyn Center, MN)</li>
            <li>Rockford Road Library (Crystal, MN)</li>
            <li>Marine Mills Folk School</li>
            <li>Textile Center (Minneapolis, MN)</li>
            <li>Hmong Museum (St. Paul, MN)</li>
            <li>Jackson Middle School (Champlin, MN)</li>
            <li>Monroe Elementary (Brooklyn Park, MN)</li>
          </ul>
        </section>

        <section className="bio-section">
          <h2>Featured Work</h2>
          <p>
            Mandora was featured in the{" "}
            <strong>Craft in America: INSPIRATION</strong> episode in 2022.
          </p>
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/hzR5OrWepDQ"
            title="Craft in America: Hmong Paj Ntaub"
            frameBorder="0"
            allowFullScreen
            className="bio-image"
          ></iframe>
        </section>

        <section className="bio-section">
          <h2>Contact & Social</h2>
          <ul>
            <li>
              📧 Email:{" "}
              <a href="mailto:Mypajntaub@gmail.com">Mypajntaub@gmail.com</a>
            </li>
            <li>
              📱 Instagram:{" "}
              <a
                href="https://www.instagram.com/mypajntaub"
                target="_blank"
                rel="noreferrer"
              >
                @mypajntaub
              </a>
            </li>
          </ul>
        </section>
      </div>
    </Layout>
  );
};

export default Bio;
