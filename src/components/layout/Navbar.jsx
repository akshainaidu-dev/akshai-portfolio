
import { Menu, X, Download } from "lucide-react";
const navLinks = ['Home', 'About', 'Services', 'Projects', 'Contact'];

const Navbar = ({ scrolled, activeTab, scrollTo, isMenuOpen, setIsMenuOpen }) => {
  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 
      ${scrolled
        ? 'bg-[#0a0b0d]/95 backdrop-blur-md border-b border-white/10 py-4 shadow-xl'
        : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">


        <div className="hidden md:grid grid-cols-3 items-center">
          

          <div className="flex items-center">
            <button onClick={() => scrollTo('Home')}>
              <span className="text-xl font-bold tracking-tight">
               MARIPI AKSHAI NAIDU
              </span>
            </button>
          </div>

          <div className="flex items-center justify-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                className={`relative text-sm font-semibold transition-colors 
                  ${activeTab === link
                    ? 'text-[#4f46e5]'
                    : 'text-gray-300 hover:text-white'
                  }`}
              >
                {link}
                {activeTab === link && (
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 
                                   w-1.5 h-1.5 rounded-full bg-[#4f46e5]" />
                )}
              </button>
            ))}
          </div>


          <div className="flex items-center justify-end">
            <div className="relative">
              

              <div className="absolute -inset-1 rounded-xl bg-[#4f46e5]/40 blur-md opacity-70" />

              <button
                onClick={() => window.open('/AkshaiNaidu_Resume.pdf', '_blank')}
                className="relative flex items-center gap-2
                           bg-gradient-to-r from-[#4f46e5] to-[#6366f1]
                           text-white px-6 py-2.5 rounded-xl 
                           text-sm font-bold
                           hover:scale-105
                           hover:shadow-[0_0_25px_rgba(99,102,241,0.7)]
                           transition-all"
              >
                <Download size={16} />
                Resume
              </button>
            </div>
          </div>
        </div>


        <div className="md:hidden flex items-center justify-between">
          
          <button onClick={() => scrollTo('Home')}>
            <span className="text-xl font-bold tracking-tight">
             MARIPI AKSHAI NAIDU
            </span>
          </button>

          <button
            className="p-2 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
