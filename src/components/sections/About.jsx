import { Crown, Layers, Cpu, Users, Target } from "lucide-react";
import { motion } from "framer-motion";

/* ================= ANIMATION SYSTEM ================= */

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

const About = () => {
  return (
    <section
      id="about"
      className="py-24 bg-[#0e1014] relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute -top-32 right-0 w-[55%] h-[55%] bg-[#4f46e5]/12 blur-[150px] -z-10 rounded-full" />
      <div className="absolute bottom-0 left-0 w-[35%] h-[35%] bg-[#4f46e5]/8 blur-[110px] -z-10 rounded-full" />

      <div className="max-w-7xl mx-auto px-6">

        {/* ================= FOUNDER BLOCK ================= */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-120px" }}
          className="mb-14"
        >
          <motion.div
            variants={item}
            className="relative bg-gradient-to-r from-[#16181d] to-[#0a0b0d] 
                       border border-white/10 rounded-2xl 
                       p-6 md:p-8 shadow-lg
                       hover:shadow-[0_0_50px_rgba(79,70,229,0.12)]
                       transition-all duration-500"
          >
            <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-[#4f46e5] mb-2">
              <Crown size={13} />
              Founder and Builder
            </span>

            <h2 className="text-2xl md:text-3xl font-extrabold leading-tight mb-3">
              I build products that scale
            </h2>

            <p className="text-gray-300 text-sm md:text-base max-w-2xl leading-relaxed">
              I am Akshai Naidu, founder of Tensorik Technologies Pvt. Ltd. I focus on
              building SaaS and EdTech platforms that turn practical knowledge into
              real products used by students and teams.
            </p>
          </motion.div>
        </motion.div>

        {/* ================= MAIN GRID ================= */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-120px" }}
          className="grid md:grid-cols-2 gap-12 items-start"
        >
          {/* LEFT COLUMN */}
          <div className="space-y-6">
            {[
              {
                title: "Engineering and Product",
                text: "Alongside my B.Tech in Computer Science Engineering, I design and build production systems including authentication, payments, dashboards, and platform features."
              },
              {
                title: "Built for Growth",
                text: "I focus on clean architecture, performance, and systems that can grow with users, teams, and business goals."
              },
              {
                title: "Leadership and Execution",
                text: "Through Tensorik, I work with interns, educators, and partners to ship real products and improve delivery quality."
              }
            ].map((block, i) => (
              <motion.div
                key={i}
                variants={item}
                className="group transition-all duration-300 hover:-translate-y-0.5"
              >
                <h3 className="text-xl font-bold mb-2 group-hover:text-[#4f46e5] transition-colors">
                  {block.title}
                </h3>
                <p className="text-gray-300 leading-relaxed text-base">
                  {block.text}
                </p>
              </motion.div>
            ))}
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-8">
            {/* METRICS */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "2+", label: "Years of Building" },
                { value: "15+", label: "Projects and Systems" }
              ].map((m, i) => (
                <motion.div
                  key={i}
                  variants={item}
                  className="bg-[#16181d] border border-white/10 rounded-xl p-6
                             hover:border-[#4f46e5]/40
                             hover:shadow-[0_0_40px_rgba(79,70,229,0.14)]
                             hover:-translate-y-0.5
                             transition-all duration-300"
                >
                  <p className="text-4xl font-extrabold text-[#4f46e5]">
                    {m.value}
                  </p>
                  <p className="text-[11px] uppercase tracking-widest text-gray-500 mt-1">
                    {m.label}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* VISION */}
            <motion.div
              variants={item}
              className="relative bg-gradient-to-br from-[#16181d] to-[#0a0b0d] 
                         border border-white/10 rounded-2xl p-6 shadow-lg
                         hover:shadow-[0_0_60px_rgba(79,70,229,0.18)]
                         transition-all duration-500"
            >
              <Target className="text-[#4f46e5] mb-4" size={20} />
              <h4 className="text-lg font-bold mb-2">
                Long Term Vision
              </h4>
              <p className="text-gray-300 leading-relaxed text-sm">
                I am building a platform ecosystem where knowledge, creators, and
                technology come together to support learning, sharing, and digital
                product growth under Tensorik.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* ================= BOTTOM FEATURES ================= */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-120px" }}
          className="mt-16 grid md:grid-cols-3 gap-6"
        >
          {[
            {
              icon: <Layers className="text-[#4f46e5]" size={20} />,
              title: "Product Architecture",
              desc: "Designing systems that scale across users, teams, and features."
            },
            {
              icon: <Cpu className="text-[#4f46e5]" size={20} />,
              title: "Production Engineering",
              desc: "Building secure and maintainable frontend and backend systems."
            },
            {
              icon: <Users className="text-[#4f46e5]" size={20} />,
              title: "Team Leadership",
              desc: "Leading teams to ship features and improve delivery standards."
            }
          ].map((f, i) => (
            <motion.div
              key={i}
              variants={item}
              className="bg-[#16181d] border border-white/10 rounded-xl p-6
                         hover:border-[#4f46e5]/40
                         hover:shadow-[0_0_40px_rgba(79,70,229,0.14)]
                         hover:-translate-y-0.5
                         transition-all duration-300"
            >
              <div className="mb-3">{f.icon}</div>
              <h4 className="text-base font-bold mb-1">
                {f.title}
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
