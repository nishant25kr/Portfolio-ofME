import { motion } from 'framer-motion';
import { Code, Users, Clock, Briefcase } from 'lucide-react';

const features = [
  {
    icon: <Code className="w-5 h-5" />,
    title: "Complex under the hood",
    description: "I build systems that stay fast and reliable—even when the load and edge-cases show up."
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: "Real Agile, real shipping",
    description: "I work in sprints, break work into deliverables, and keep communication honest and clear."
  },
  {
    icon: <Clock className="w-5 h-5" />,
    title: "REST APIs that matter",
    description: "I’ve built production-ready Django REST APIs—built to be used, not just demonstrated."
  },
  {
    icon: <Briefcase className="w-5 h-5" />,
    title: "Polish until it feels inevitable",
    description: "I care about the last 1%—because that’s what makes a product feel trustworthy."
  }
];

const About = () => {
  return (
    <section id="about" className="py-28 md:py-32 bg-[var(--bg-elevated)] relative overflow-hidden text-[var(--text-primary)]">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">

        {/* Top Header Row */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 md:mb-24 border-b border-[var(--border-soft)] pb-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-[var(--text-soft)] font-medium tracking-[0.24em] uppercase text-xs md:text-sm mb-4">
              01 // About Me
            </h2>
            <h3 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-tighter leading-none">
              WHO<br />I AM
            </h3>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-md mt-12 md:mt-0"
          >
            <p className="text-lg md:text-xl font-light text-[var(--text-muted)] leading-relaxed">
              I’m Nishant Kumar, a final-year Computer Science student at Lovely Professional University. I build things that are complex under the hood but effortless to use.<br />
              At Dhobi G, I shipped production-ready Django REST APIs in real Agile sprints—on a laundry management platform that real users depended on.<br />
              Outside of work, I build systems that push scale and polish—because I want to understand how products last. I’m not looking for just any job.
            </p>
          </motion.div>
        </div>

        {/* Feature Grid - Asymmetrical Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24 relative">

          <div className="md:col-span-5 lg:col-span-4 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass-card aspect-[4/5] bg-gradient-to-tr from-[rgba(223,194,149,0.18)] to-transparent border border-[var(--border-soft)] rounded-3xl p-8 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-10 transition-opacity duration-700"></div>
              <h4 className="font-display text-4xl leading-tight relative z-10 mix-blend-plus-lighter">
                Complex under the<br />
                hood—effortless in<br />
                the experience.
              </h4>
            </motion.div>
          </div>

          <div className="md:col-span-7 lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-14 md:gap-y-16 mt-12 md:mt-0">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
                className="group cursor-default relative pl-6 border-l border-[var(--border-soft)] hover:border-[var(--accent)] transition-colors duration-500"
              >
                <div className="mb-6 text-[var(--text-soft)] group-hover:text-[var(--accent)] transition-colors duration-500">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-display mb-4 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-[var(--text-muted)] font-light leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;