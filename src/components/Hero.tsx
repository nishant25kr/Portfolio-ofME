import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import profile from "../photos/p.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden bg-[var(--bg-primary)]">
      <motion.div
        aria-hidden
        animate={{ x: [0, 18, -12, 0], y: [0, -24, 16, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-44 right-[8%] h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(223,194,149,0.2),rgba(223,194,149,0))] blur-3xl"
      />
      <motion.div
        aria-hidden
        animate={{ x: [0, -14, 10, 0], y: [0, 20, -16, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -bottom-48 left-[2%] h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(127,140,255,0.15),rgba(127,140,255,0))] blur-3xl"
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-center">

          {/* Main Typography Column */}
          <div className="lg:col-span-8 flex flex-col justify-center order-2 lg:order-1 relative z-20">
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mb-8"
            >
              <h2 className="text-[var(--text-soft)] font-medium tracking-[0.26em] uppercase text-xs md:text-sm mb-6 ml-2">
                Full Stack Developer Who Builds Things That Actually Work at Scale
              </h2>
              <h1 className="font-display text-[12vw] lg:text-[8rem] leading-[0.84] text-[var(--text-primary)] tracking-[-0.04em] mb-4">
                Nishant <br /> Kumar.
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-5 md:mt-10"
            >
              <p className="max-w-lg text-[var(--text-muted)] text-lg md:text-xl font-light leading-relaxed ml-2">
                I design and engineer end-to-end web apps—from real-time multiplayer to AI-powered platforms.<br />
                Open to full-time roles where I can ship great products with a great team.
              </p>

              <div className="flex items-center sm:ml-auto pr-4 gap-5">
                <a
                  href="#contact"
                  className="glass-card inline-flex items-center gap-3 rounded-full border border-[var(--border-soft)] px-6 py-4 text-sm font-medium tracking-widest uppercase text-[var(--text-primary)] hover:border-[var(--border-strong)] hover:-translate-y-1 transition-all duration-500"
                >
                  Open to Work — Let's Talk
                  <span aria-hidden className="text-[var(--accent)]">→</span>
                </a>

                <div className="flex space-x-4">
                  <a
                    href="https://github.com/nishant25kr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-card w-12 h-12 rounded-full border border-[var(--border-soft)] flex items-center justify-center text-[var(--text-primary)] hover:border-[var(--border-strong)] hover:-translate-y-1 transition-all duration-500"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href="https://linkedin.com/in/nishant25kr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-card w-12 h-12 rounded-full border border-[var(--border-soft)] flex items-center justify-center text-[var(--text-primary)] hover:border-[var(--border-strong)] hover:-translate-y-1 transition-all duration-500"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="mailto:nishant927472@gmail.com"
                    className="glass-card w-12 h-12 rounded-full border border-[var(--border-soft)] flex items-center justify-center text-[var(--text-primary)] hover:border-[var(--border-strong)] hover:-translate-y-1 transition-all duration-500"
                    aria-label="Email"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
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
            <div className="glass-card relative w-64 h-80 sm:w-80 sm:h-[26rem] lg:w-[26rem] lg:h-[36rem] overflow-hidden rounded-[2rem] border border-[var(--border-soft)] group p-2 shadow-[var(--shadow-lift)]">
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(9,10,16,0.88)] via-transparent to-transparent opacity-80 z-10 transition-opacity duration-700 group-hover:opacity-40" />
              <img
                src={profile}
                alt="Nishant Kumar"
                className="w-full h-full object-cover rounded-[1.5rem] filter grayscale opacity-90 transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
              />
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;