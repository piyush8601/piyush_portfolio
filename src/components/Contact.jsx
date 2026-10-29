import { motion } from "framer-motion";
import { FiSend } from "react-icons/fi";
import { CONTACT } from "../constants";

const inputClasses = "w-full rounded-lg border border-neutral-800 bg-neutral-900 px-4 py-3 text-sm leading-6 text-neutral-100 outline-none transition-all duration-200 placeholder:text-neutral-400 hover:border-purple-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30";

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const body = [
      `Name: ${formData.get("name")}`,
      `Email: ${formData.get("email")}`,
      `Mobile: ${formData.get("mobile") || "Not provided"}`,
      "",
      "Message:",
      formData.get("description"),
    ].join("\n");
    const gmailUrl = new URL("https://mail.google.com/mail/");
    gmailUrl.search = new URLSearchParams({
      view: "cm",
      fs: "1",
      to: CONTACT.email,
      su: String(formData.get("title")),
      body,
    }).toString();

    window.open(gmailUrl.toString(), "_blank", "noopener,noreferrer");
  };

  return (
    <section className="border-b border-neutral-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="my-20 text-center text-4xl"
      >
        Get in Touch
      </motion.h2>

      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.15 }}
        className="mx-auto max-w-5xl rounded-xl border border-neutral-800 bg-neutral-950/60 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-purple-800 hover:shadow-xl hover:shadow-purple-950/20 sm:p-6 lg:p-8"
      >
        <p className="mx-auto mb-8 max-w-2xl text-center text-sm leading-6 text-neutral-200 sm:text-base">
          Have a project in mind or need help with a backend challenge? Send me
          a message and let&apos;s talk.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <label className="flex flex-col gap-2 text-sm font-semibold text-neutral-100">
              Name
              <input
                className={inputClasses}
                type="text"
                name="name"
                autoComplete="name"
                placeholder="Your name"
                
              />
            </label>
            <label className="flex flex-col gap-2 text-sm font-semibold text-neutral-100">
              Email
              <input
                className={inputClasses}
                type="email"
                name="email"
                autoComplete="email"
                placeholder="youname@gmail.com"
                
              />
            </label>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <label className="flex flex-col gap-2 text-sm font-semibold text-neutral-100">
              Service / problem title
              <input
                className={inputClasses}
                type="text"
                name="title"
                placeholder="What can I help with?"
                
              />
            </label>
            <label className="flex flex-col gap-2 text-sm font-semibold text-neutral-100">
              <span>
                Mobile <span className="font-normal text-neutral-400">(optional)</span>
              </span>
              <input
                className={inputClasses}
                type="tel"
                name="mobile"
                autoComplete="tel"
                placeholder="Your phone number"
              />
            </label>
          </div>

          <label className="flex flex-col gap-2 text-sm font-semibold text-neutral-100">
            Description
            <textarea
              className={`${inputClasses} min-h-40 resize-y`}
              name="description"
              placeholder="Tell me a little about your project or problem..."
              rows="5"
              
            />
          </label>

          <div className="flex flex-col items-center gap-3 pt-1">
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-lg bg-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-950/40 transition hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-300"
            >
              Open in Gmail <FiSend aria-hidden="true" />
            </button>
            <p className="text-center text-xs leading-5 text-neutral-300">
              Gmail will open with your message addressed to{" "}
              <a
                href={`mailto:${CONTACT.email}`}
                className="text-purple-300 underline decoration-purple-700 underline-offset-2 hover:text-purple-200"
              >
                {CONTACT.email}
              </a>
              . Review it and press Send in Gmail.
            </p>
          </div>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;