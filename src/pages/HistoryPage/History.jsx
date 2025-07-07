import HomeButton from "../../components/HomeButton";

const History = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 text-raisin_black-500">
      <HomeButton />

      <h1 className="text-3xl font-bold mb-6 text-razzmatazz-500">
        The History of Hmong Embroidery
      </h1>

      <section className="space-y-6">
        <p>
          Hmong embroidery — also known as <em>paj ntaub</em> ("flower cloth") —
          is a centuries-old textile tradition practiced by the Hmong people of
          Southeast Asia. It is used to express identity, pass down stories, and
          celebrate cultural heritage.
        </p>

        <p>
          Traditionally created by hand, paj ntaub incorporates intricate
          geometric patterns, animal motifs, and symbolic storytelling — often
          stitched from memory. These designs are passed down through
          generations from mother to daughter, and each stitch carries personal,
          spiritual, and historical meaning.
        </p>

        <p>
          During and after the Vietnam War, Hmong refugees brought this
          tradition with them to new countries. In refugee camps and resettled
          communities, paj ntaub evolved into new formats, including “story
          cloths” — narrative embroideries depicting war, migration, and Hmong
          folklore.
        </p>

        <p>
          Today, Hmong embroidery continues to thrive as both cultural practice
          and art form. Teachers like Mandora are helping preserve this
          tradition by passing it on to new generations.
        </p>
      </section>
    </div>
  );
};

export default History;
