import { useState, type FormEvent } from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
import Button from "../ui/Button";
import { socials } from "../../data/socials";

type FormStatus = "idle" | "pending" | "ok" | "error";

export default function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      setStatus("pending");
      const myForm = event.currentTarget;
      const formData = new FormData(myForm);
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(
          formData as unknown as Record<string, string>
        ).toString(),
      });
      if (res.status === 200) {
        setStatus("ok");
        toast.success("Email Submitted Successfully!");
        myForm.reset();
      } else {
        setStatus("error");
        toast.error(`Submission failed: ${res.status} ${res.statusText}`);
      }
    } catch (e) {
      setStatus("error");
      const errorMessage = e instanceof Error ? e.message : String(e);
      toast.error(`Submission failed: ${errorMessage}`);
    }
  };

  return (
    <section id="contact" className="py-32 bg-slate-900/50">
      <div className="max-w-4xl mx-auto px-6">
        <SectionTitle
          title="Let's Build Something Together"
          subtitle="Have a project in mind? Let's discuss how we can work together"
        />

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            variants={fadeUpVariants}
          >
            <h3 className="text-2xl font-bold text-white mb-6 text-center md:text-left">
              Get in Touch
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
              {socials.map((social) => (
                <a
                  key={social.id}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4  rounded-lg hover:bg-slate-800 transition-all duration-300 group"
                >
                  <div
                    className={`text-3xl ${social.iconClass} group-hover:scale-110 transition-transform duration-300`}
                  >
                    {social.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold group-hover:text-cyan-400 transition-colors">
                      {social.label}
                    </h4>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            variants={fadeUpVariants}
          >
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleFormSubmit}
              className="space-y-6"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p hidden>
                <label>
                  Don&apos;t fill this out: <input name="bot-field" />
                </label>
              </p>
              <div>
                <label
                  htmlFor="name"
                  className="block text-white font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-white font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-white font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full"
                disabled={status === "pending"}
              >
                {status === "pending" ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
