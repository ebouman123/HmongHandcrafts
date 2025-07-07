import HomeButton from "../../components/HomeButton";

const Contact = () => {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12 text-raisin_black-500">
      <HomeButton />

      <h1 className="text-3xl font-bold mb-6 text-razzmatazz-500">
        Contact Mandora
      </h1>

      <p className="mb-6">
        Interested in booking a one-on-one lesson or commissioning a piece?
        Please send a message below! You can also email her directly at{" "}
        <a
          href="mailto:mypajntaub@gmail.com"
          className="text-risd_blue-500 underline"
        >
          mypajntaub@gmail.com
        </a>
        .
      </p>

      <form
        action="mailto:evan.bouman@gmail.com"
        method="POST"
        encType="text/plain"
        className="space-y-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full border border-gray-300 rounded px-4 py-2"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full border border-gray-300 rounded px-4 py-2"
        />
        <textarea
          name="message"
          rows="6"
          placeholder="What would you like to ask or request?"
          required
          className="w-full border border-gray-300 rounded px-4 py-2"
        ></textarea>
        <button
          type="submit"
          className="bg-razzmatazz-500 hover:bg-razzmatazz-600 text-white font-semibold px-6 py-2 rounded"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
