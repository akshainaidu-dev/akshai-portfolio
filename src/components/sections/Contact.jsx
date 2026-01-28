import { useState } from "react";
import { Mail, MapPin, ArrowUpRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/maqergwp";

/* ================= ANIMATION SYSTEM (SAME AS OTHER SECTIONS) ================= */

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.15
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 45 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut"
    }
  }
};

/* ================= COMPONENT ================= */

const Contact = () => {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const form = e.target;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json"
        }
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#0e1014] relative overflow-hidden">
      {/* Glow */}
      <div className="absolute -right-32 top-1/3 w-[45%] h-[45%] bg-[#4f46e5]/15 blur-[160px] -z-10 rounded-full" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">

        {/* ================= LEFT CONTENT ================= */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-120px" }}
          className="space-y-7"
        >
          <motion.span
            variants={item}
            className="text-[#4f46e5] font-bold uppercase tracking-widest text-[11px]"
          >
            Contact
          </motion.span>

          <motion.h2
            variants={item}
            className="text-3xl md:text-4xl font-extrabold tracking-tight"
          >
            Let’s Build Something Together
          </motion.h2>

          <motion.p
            variants={item}
            className="text-gray-400 max-w-md leading-relaxed"
          >
            I work with founders, teams, and partners to design and build scalable
            products. If you’re planning something serious, let’s talk.
          </motion.p>

          <motion.div variants={container} className="pt-6 space-y-5">
            {/* EMAIL 1 */}
            <motion.div variants={item} className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#16181d] border border-white/10 flex items-center justify-center">
                <Mail className="text-[#4f46e5]" size={18} />
              </div>
              <div>
                <p className="font-semibold">akshai@tensorik.in</p>
                <p className="text-sm text-gray-400">Primary business contact</p>
              </div>
            </motion.div>

            {/* EMAIL 2 */}
            <motion.div variants={item} className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#16181d] border border-white/10 flex items-center justify-center">
                <Mail className="text-[#4f46e5]" size={18} />
              </div>
              <div>
                <p className="font-semibold">akshaimaripi449@gmail.com</p>
                <p className="text-sm text-gray-400">Alternate contact</p>
              </div>
            </motion.div>

            {/* LOCATION */}
            <motion.div variants={item} className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#16181d] border border-white/10 flex items-center justify-center">
                <MapPin className="text-[#4f46e5]" size={18} />
              </div>
              <div>
                <p className="font-semibold">India</p>
                <p className="text-sm text-gray-400">Remote and hybrid available</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* ================= FORM CARD ================= */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-120px" }}
          className="relative bg-gradient-to-br from-[#16181d] to-[#0a0b0d]
                     border border-white/10 rounded-3xl p-7
                     shadow-xl
                     hover:shadow-[0_0_70px_rgba(79,70,229,0.18)]
                     transition-all duration-500
                     mt-7"
        >
          {status === "success" ? (
            <motion.div
              variants={item}
              className="flex flex-col items-center justify-center text-center py-16"
            >
              <CheckCircle className="text-[#4f46e5] mb-4" size={48} />
              <h3 className="text-xl font-bold mb-2">Message Sent</h3>
              <p className="text-gray-400">
                Thanks for reaching out. I’ll get back to you shortly.
              </p>
            </motion.div>
          ) : (
            <motion.form
              variants={container}
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <motion.div variants={item}>
                <label className="block text-xs font-semibold text-gray-400 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your full name"
                  className="w-full bg-[#0a0b0d] border border-white/10 p-3 rounded-lg 
                             focus:border-[#4f46e5] outline-none transition-colors"
                />
              </motion.div>

              <motion.div variants={item}>
                <label className="block text-xs font-semibold text-gray-400 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Your email address"
                  className="w-full bg-[#0a0b0d] border border-white/10 p-3 rounded-lg 
                             focus:border-[#4f46e5] outline-none transition-colors"
                />
              </motion.div>

              <motion.div variants={item}>
                <label className="block text-xs font-semibold text-gray-400 mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="4"
                  required
                  placeholder="Tell me about your project or goals"
                  className="w-full bg-[#0a0b0d] border border-white/10 p-3 rounded-lg 
                             focus:border-[#4f46e5] outline-none transition-colors resize-none"
                />
              </motion.div>

              {status === "error" && (
                <motion.p
                  variants={item}
                  className="text-sm text-red-400"
                >
                  Something went wrong. Please try again.
                </motion.p>
              )}

              <motion.button
                variants={item}
                type="submit"
                disabled={status === "loading"}
                className="w-full mt-2 flex items-center justify-center gap-2
                           bg-[#4f46e5] py-3 rounded-xl font-bold 
                           hover:bg-[#4338ca]
                           hover:shadow-[0_0_28px_rgba(79,70,229,0.4)]
                           transition-all disabled:opacity-60"
              >
                {status === "loading" ? "Sending..." : "Send Message"}
                <ArrowUpRight size={16} />
              </motion.button>

              <motion.p
                variants={item}
                className="text-xs text-gray-500 text-center pt-2"
              >
                I usually respond within 24 hours on business days
              </motion.p>
            </motion.form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
