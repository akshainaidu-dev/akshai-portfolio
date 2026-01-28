import {
  Layout,
  Server,
  Database,
  Shield,
  Workflow,
  Cpu,
  ArrowUpRight
} from "lucide-react";
import { motion } from "framer-motion";

/* ================= DATA ================= */

const services = [
  {
    icon: Layout,
    title: "Frontend Systems",
    desc: "Scalable React interfaces built for usability, performance, and long term maintainability."
  },
  {
    icon: Server,
    title: "Backend Platforms",
    desc: "Production ready Node and Express systems with secure APIs and business logic."
  },
  {
    icon: Database,
    title: "Data Architecture",
    desc: "MongoDB schema design and data models optimized for scale and performance."
  },
  {
    icon: Shield,
    title: "Authentication and Security",
    desc: "OTP login, JWT authentication, access control, and secure user management."
  },
  {
    icon: Workflow,
    title: "System Integration",
    desc: "Payments, email automation, dashboards, and third party service integration."
  },
  {
    icon: Cpu,
    title: "Platform Engineering",
    desc: "End to end system design focused on reliability, scalability, and clean architecture."
  }
];

const COMPANY_URL = "https://tensoriktechnologies.com";

/* ================= ANIMATION SYSTEM (SAME AS ABOUT) ================= */

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

const Services = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 right-0 w-[32%] h-[32%] bg-[#4f46e5]/10 blur-[120px] -z-10 rounded-full" />

      <div className="max-w-7xl mx-auto px-6">
        {/* ================= HEADER ================= */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-120px" }}
          className="max-w-3xl mb-12"
        >
          <motion.span
            variants={item}
            className="text-[#4f46e5] font-bold uppercase tracking-widest text-[11px]"
          >
            Services
          </motion.span>

          <motion.h2
            variants={item}
            className="mt-2 mb-4 text-3xl md:text-4xl font-extrabold tracking-tight"
          >
            What I Build
          </motion.h2>

          <motion.p
            variants={item}
            className="text-gray-400 text-base leading-relaxed"
          >
            Click any service to explore more on Tensorik Technologies.
          </motion.p>
        </motion.div>

        {/* ================= SERVICES GRID ================= */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-120px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.a
                key={i}
                variants={item}
                href={COMPANY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group block focus:outline-none focus:ring-2 focus:ring-[#4f46e5]/40 rounded-2xl"
              >
                <div
                  className="relative bg-[#16181d] border border-white/10 rounded-2xl p-6
                             hover:border-[#4f46e5]/40
                             hover:shadow-[0_0_36px_rgba(79,70,229,0.14)]
                             hover:-translate-y-1
                             transition-all duration-300 cursor-pointer"
                >
                  <div className="absolute inset-0 rounded-2xl bg-[#4f46e5]/5 opacity-0 
                                  group-hover:opacity-100 transition-opacity pointer-events-none" />

                  <div className="mb-5 flex items-center justify-between">
                    <div
                      className="w-11 h-11 rounded-lg bg-[#0a0b0d] border border-white/10 
                                 flex items-center justify-center
                                 group-hover:scale-110 transition-transform duration-300"
                    >
                      <Icon className="text-[#4f46e5]" size={20} />
                    </div>

                    <ArrowUpRight
                      size={16}
                      className="text-gray-500 group-hover:text-[#4f46e5] transition-colors"
                    />
                  </div>

                  <h3 className="text-lg font-bold mb-2">
                    {service.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed">
                    {service.desc}
                  </p>

                  <div
                    className="mt-4 text-xs font-semibold text-[#4f46e5] opacity-0 
                               group-hover:opacity-100 transition-opacity"
                  >
                    View on Tensorik
                  </div>
                </div>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
