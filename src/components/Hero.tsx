import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import profile from "../photos/p.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden bg-[#0E0E0C]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10 w-full">
        {/* Asymmetrical Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-center">

          {/* Main Typography Column */}
          <div className="lg:col-span-8 flex flex-col justify-center order-2 lg:order-1 relative z-20">
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mb-8"
            >
              <h2 className="text-[#F4F0EA]/50 font-medium tracking-[0.2em] uppercase text-sm md:text-base mb-6 ml-2">
                Creative Developer & Engineer
              </h2>
              <h1 className="font-display text-[12vw] lg:text-[8rem] leading-[0.85] text-[#F4F0EA] tracking-tighter mix-blend-difference mb-4">
                Nishant <br /> Kumar.
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-4 md:mt-10"
            >
              <p className="max-w-md text-[#F4F0EA]/70 text-lg md:text-xl font-light leading-relaxed ml-2">
                Crafting scalable web solutions and intelligent systems. I turn bold ideas into immersive digital experiences.
              </p>

              <div className="flex space-x-4 sm:ml-auto pr-4">
                <a
                  href="https://github.com/nishant25kr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-[#F4F0EA]/20 flex items-center justify-center text-[#F4F0EA] hover:bg-[#F4F0EA] hover:text-[#0E0E0C] transition-all duration-300 transform hover:scale-110"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/nishant25kr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-[#F4F0EA]/20 flex items-center justify-center text-[#F4F0EA] hover:bg-[#F4F0EA] hover:text-[#0E0E0C] transition-all duration-300 transform hover:scale-110"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:nishant927472@gmail.com"
                  className="w-12 h-12 rounded-full border border-[#F4F0EA]/20 flex items-center justify-center text-[#F4F0EA] hover:bg-[#F4F0EA] hover:text-[#0E0E0C] transition-all duration-300 transform hover:scale-110"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Cinematic Image Column */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 flex justify-center lg:justify-end order-1 lg:order-2 w-full"
          >
            <div className="relative w-64 h-80 sm:w-80 sm:h-[26rem] lg:w-[26rem] lg:h-[36rem] overflow-hidden rounded-[2rem] border border-[#F4F0EA]/10 group">
              {/* Subtle overlay gradient to blend image with background */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0C] via-transparent to-transparent opacity-80 z-10 transition-opacity duration-700 group-hover:opacity-40"></div>
              <img
                src={profile}
                alt="Nishant Kumar"
                className="w-full h-full object-cover filter grayscale opacity-90 transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
              />
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;