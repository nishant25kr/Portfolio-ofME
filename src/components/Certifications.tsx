import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const certifications = [
  {
    id: 1,
    title: 'Data Structures & Algorithms',
    issuer: 'Cipher School',
    date: 'July 2023',
    credentialUrl: 'https://cipherschools.com/certificate/data-structures-algorithms',
  },
  {
    id: 2,
    title: 'Cloud Computing',
    issuer: 'NPTEL',
    date: 'May 2023',
    credentialUrl: 'https://nptel.ac.in/certificate/cloud-computing',
  },
  {
    id: 3,
    title: 'Design and Analysis of Algorithm',
    issuer: 'Coursera',
    date: 'January 2023',
    credentialUrl: 'https://coursera.org/certificate/design-analysis-algorithm',
  },
  {
    id: 4,
    title: 'Generative AI for Everyone',
    issuer: 'Coursera',
    date: 'December 2022',
    credentialUrl: 'https://coursera.org/certificate/generative-ai-everyone',
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-28 md:py-32 bg-[var(--bg-elevated)] text-[var(--text-primary)]">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20 md:mb-24 flex flex-col md:flex-row justify-between items-end border-b border-[var(--border-soft)] pb-8"
        >
          <div>
            <h2 className="text-[var(--text-soft)] font-medium tracking-[0.24em] uppercase text-xs md:text-sm mb-4">
              05 // Accolades
            </h2>
            <h3 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-tighter leading-none">
              CERTIFIED
            </h3>
          </div>
        </motion.div>
        
        <div className="flex flex-col">
          {certifications.map((certification, index) => (
            <motion.a 
              href={certification.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              key={certification.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group border-b border-[var(--border-soft)] last:border-0 py-10 flex flex-col md:flex-row md:items-center justify-between hover:bg-[rgba(247,243,238,0.05)] transition-colors px-4 -mx-4 rounded-xl relative overflow-hidden"
            >
              <div className="flex-1 z-10">
                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 mb-2">
                  <span className="text-[var(--text-soft)] font-mono text-sm tracking-widest">
                    0{index + 1}
                  </span>
                  <h4 className="font-display text-2xl md:text-4xl text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                    {certification.title}
                  </h4>
                </div>
              </div>
              <div className="mt-4 md:mt-0 flex items-center gap-8 md:gap-16 z-10">
                <div className="text-[var(--text-muted)] font-light text-lg">
                  {certification.issuer}
                </div>
                <div className="text-[var(--text-soft)] font-mono text-sm tracking-widest">
                  {certification.date}
                </div>
                <div className="glass-card hidden md:flex w-12 h-12 rounded-full border border-[var(--border-soft)] items-center justify-center group-hover:text-[var(--accent)] transition-all duration-500">
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>

              {/* Hover effect background */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(247,243,238,0.08)] to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] z-0" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;