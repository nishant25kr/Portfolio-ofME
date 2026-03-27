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
    <section id="certifications" className="py-32 bg-[#131312] text-[#F4F0EA]">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-24 flex flex-col md:flex-row justify-between items-end border-b border-[#F4F0EA]/10 pb-8"
        >
          <div>
            <h2 className="text-[#F4F0EA]/50 font-medium tracking-[0.2em] uppercase text-sm mb-4">
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
              className="group border-b border-[#F4F0EA]/10 last:border-0 py-10 flex flex-col md:flex-row md:items-center justify-between hover:bg-[#F4F0EA]/5 transition-colors px-4 -mx-4 rounded-xl relative overflow-hidden"
            >
              <div className="flex-1 z-10">
                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 mb-2">
                  <span className="text-[#F4F0EA]/40 font-mono text-sm tracking-widest">
                    0{index + 1}
                  </span>
                  <h4 className="font-display text-2xl md:text-4xl text-[#F4F0EA] group-hover:text-[#E5D3B3] transition-colors">
                    {certification.title}
                  </h4>
                </div>
              </div>
              <div className="mt-4 md:mt-0 flex items-center gap-8 md:gap-16 z-10">
                <div className="text-[#F4F0EA]/60 font-light text-lg">
                  {certification.issuer}
                </div>
                <div className="text-[#F4F0EA]/40 font-mono text-sm tracking-widest">
                  {certification.date}
                </div>
                <div className="hidden md:flex w-12 h-12 rounded-full border border-[#F4F0EA]/20 items-center justify-center group-hover:bg-[#F4F0EA] group-hover:text-[#0E0E0C] transition-all duration-300">
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>

              {/* Hover effect background */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#F4F0EA]/5 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] z-0"></div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;