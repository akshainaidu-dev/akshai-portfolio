import { Github, Linkedin, ArrowRight } from "lucide-react";
import { MernIcons } from "../ui/MernIcons";
import profileImg from "../../assets/AkshaiNaidu.png";

const Hero = ({ scrollTo }) => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden pt-24"
    >

      <div className="absolute top-0 right-0 w-[45%] h-[45%] bg-[#4f46e5]/10 blur-[140px] -z-10 rounded-full" />
      <div className="absolute bottom-0 left-0 w-[30%] h-[30%] bg-[#4f46e5]/5 blur-[120px] -z-10 rounded-full" />

      <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center">

        <div className="space-y-6 order-2 md:order-1 text-center md:text-left">

      
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full 
                          bg-[#4f46e5]/10 border border-[#4f46e5]/20
                          text-[#4f46e5] text-xs font-bold tracking-widest uppercase">
            MERN Stack Developer
          </div>

    
         <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Building scalable <br />
            <span className="text-gray-300">digital products</span>
          </h1>

          <p className="text-gray-400 text-base md:text-lg max-w-lg leading-relaxed mx-auto md:mx-0">
            I’m <span className="text-white font-semibold">Akshai Naidu</span>. I build production-ready MERN platforms and backend systems for real-world products.
          </p>


          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 pt-3">

            <button
              onClick={() => scrollTo('Projects')}
              className="group flex items-center justify-center gap-2
                         bg-gradient-to-r from-[#4f46e5] to-[#6366f1]
                         px-7 py-3.5 rounded-xl font-bold
                         hover:shadow-[0_0_30px_rgba(99,102,241,0.6)]
                         hover:scale-[1.04]
                         transition-all"
            >
              View Projects
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>

            <div className="flex items-center justify-center md:justify-start gap-5 px-5 border-l border-white/10">
              <a
                href="https://github.com/akshainaidu-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#4f46e5] transition-colors"
              >
                <Github size={22} />
              </a>

              <a
                href="https://www.linkedin.com/in/maripi-akshai-naidu/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#4f46e5] transition-colors"
              >
                <Linkedin size={22} />
              </a>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center items-center order-1 md:order-2">
          <div className="relative w-72 h-72 md:w-96 md:h-96">

            <div className="absolute -inset-6 rounded-full bg-[#4f46e5]/10 blur-2xl" />

  
            <div className="absolute -inset-4 border-2 border-dashed 
                            border-[#4f46e5]/30 rounded-full 
                            animate-[spin_20s_linear_infinite]" />

            <div className="w-full h-full rounded-full overflow-hidden 
                            border-4 border-white/10 
                            bg-[#16181d] shadow-2xl 
                            relative z-10">
              <img
                src={profileImg}
                className="w-full h-full object-cover object-[65%_center]"
                alt="Akshai Naidu"
              />
            </div>

            <div className="absolute -top-5 -left-5 bg-[#16181d] p-3 rounded-xl 
                            border border-white/10 shadow-xl 
                            animate-bounce z-20">
              {MernIcons.MongoDB}
            </div>

            <div className="absolute top-1/2 -right-10 bg-[#16181d] p-3 rounded-xl 
                            border border-white/10 shadow-xl 
                            animate-bounce [animation-delay:0.6s] z-20">
              {MernIcons.React}
            </div>

            <div className="absolute -bottom-5 left-1/4 bg-[#16181d] p-3 rounded-xl 
                            border border-white/10 shadow-xl 
                            animate-bounce [animation-delay:1.2s] z-20">
              {MernIcons.Node}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
