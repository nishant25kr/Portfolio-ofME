import { motion } from 'framer-motion';

const powers = [
  {
    title: 'Builds real systems',
    description:
      'Not just tutorials. Every project solves a real problem with production-level thinking.'
  },
  {
    title: 'Full stack + system design',
    description:
      'Comfortable across the entire stack—UI, database, and distributed services.'
  },
  {
    title: 'Real internship experience',
    description:
      'I know what Agile, deadlines, and team collaboration feel like in a real company.'
  },
  {
    title: 'Fast, independent learning',
    description:
      'I picked up Django, Redis, WebSockets, and Gemini API across different projects—without waiting to be told.'
  }
] as const;

const WhyHireNishant = () => {
  return (
    <section id="why-hire" className="py-28 md:py-32 bg-[var(--bg-elevated)] text-[var(--text-primary)]">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="mb-24 flex flex-col md:flex-row justify-between items-end border-b border-[var(--border-soft)] pb-8"
        >
          <div>
            <h2 className="text-[var(--text-soft)] font-medium tracking-[0.24em] uppercase text-xs md:text-sm mb-4">
              Why hire Nishant
            </h2>
            <h3 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-tighter leading-none">
              PRODUCTS<br />THAT FEEL<br />SOLID
            </h3>
          </div>
          <p className="mt-8 md:mt-0 text-[var(--text-soft)] max-w-sm uppercase tracking-widest text-[10px] md:text-xs">
            What you get when the code meets expectations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {powers.map((p, idx) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card border border-[var(--border-soft)] rounded-[2rem] p-8 md:p-10 relative overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(223,194,149,0.22),rgba(223,194,149,0))] blur-2xl" />
              <div className="relative z-10">
                <p className="text-[var(--text-soft)] font-mono text-sm uppercase tracking-[0.22em] mb-4">
                  0{idx + 1}
                </p>
                <h4 className="font-display text-3xl md:text-4xl tracking-tight mb-3">
                  {p.title}
                </h4>
                <p className="text-[var(--text-muted)] font-light leading-relaxed text-lg">
                  {p.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyHireNishant;

