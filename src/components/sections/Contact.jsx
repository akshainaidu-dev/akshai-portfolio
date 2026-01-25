import { useState } from "react";
import { Mail, MapPin, ArrowUpRight, CheckCircle } from "lucide-react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/maqergwp";

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
      
      <div className="absolute -right-32 top-1/3 w-[45%] h-[45%] bg-[#4f46e5]/15 blur-[160px] -z-10 rounded-full" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">

        <div className="space-y-7">
          <span className="text-[#4f46e5] font-bold uppercase tracking-widest text-[11px]">
            Contact
          </span>

          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Let’s Build Something Together
          </h2>

          <p className="text-gray-400 max-w-md leading-relaxed">
            I work with founders, teams, and partners to design and build scalable
            products. If you’re planning something serious, let’s talk.
          </p>

          <div className="pt-6 space-y-5">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#16181d] border border-white/10 flex items-center justify-center">
                <Mail className="text-[#4f46e5]" size={18} />
              </div>
              <div>
                <p className="font-semibold">akshai@tensorik.in</p>
                <p className="text-sm text-gray-400">Primary business contact</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#16181d] border border-white/10 flex items-center justify-center">
                <Mail className="text-[#4f46e5]" size={18} />
              </div>
              <div>
                <p className="font-semibold">akshaimaripi449@gmail.com</p>
                <p className="text-sm text-gray-400">Alternate contact</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#16181d] border border-white/10 flex items-center justify-center">
                <MapPin className="text-[#4f46e5]" size={18} />
              </div>
              <div>
                <p className="font-semibold">India</p>
                <p className="text-sm text-gray-400">Remote and hybrid available</p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="relative bg-gradient-to-br from-[#16181d] to-[#0a0b0d]
                     border border-white/10 rounded-3xl p-7
                     shadow-xl
                     hover:shadow-[0_0_70px_rgba(79,70,229,0.18)]
                     transition-all duration-500
                     mt-7"
        >
          {status === "success" ? (
            <div className="flex flex-col items-center justify-center text-center py-16">
              <CheckCircle className="text-[#4f46e5] mb-4" size={48} />
              <h3 className="text-xl font-bold mb-2">Message Sent</h3>
              <p className="text-gray-400">
                Thanks for reaching out. I’ll get back to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
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
              </div>

              <div>
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
              </div>

              <div>
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
              </div>

              {status === "error" && (
                <p className="text-sm text-red-400">
                  Something went wrong. Please try again.
                </p>
              )}

              <button
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
              </button>

              <p className="text-xs text-gray-500 text-center pt-2">
                I usually respond within 24 hours on business days
              </p>
            </form>
          )}
        </div>

      </div>
    </section>
  );
};

export default Contact;
