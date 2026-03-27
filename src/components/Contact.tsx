import { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const yText = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const yForm = useTransform(scrollYProgress, [0, 1], [150, -150]);

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitSuccess(false), 5000);
      }, 1500);
    }
  };

  return (
    <section ref={sectionRef} id="contact" className="py-28 md:py-32 bg-[var(--bg-primary)] text-[var(--text-primary)] min-h-screen flex items-center relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-[var(--accent)] rounded-full blur-[150px] opacity-[0.045] pointer-events-none mix-blend-screen" />

      <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Typography Column */}
          <motion.div 
            style={{ y: yText }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-[var(--text-soft)] font-medium tracking-[0.24em] uppercase text-xs md:text-sm mb-6">
              06 // Connect
            </h2>
            <h3 className="font-display text-6xl md:text-7xl lg:text-[7rem] tracking-tighter leading-none mb-10">
              LET'S <br /> BUILD<br />SOMETHING GREAT<br />TOGETHER
            </h3>
            
            <p className="text-[var(--text-muted)] text-lg md:text-xl font-light leading-relaxed max-w-md mb-16">
              I'm actively looking for full-time roles in full stack or backend development.<br />
              If you're hiring someone who writes clean code, thinks about systems, and shows up ready to contribute — let's talk.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              <a
                href="mailto:nishant927472@gmail.com?subject=Resume%20request&body=Hi%20Nishant%2C%20could%20you%20share%20your%20resume%20please%3F"
                className="glass-card inline-flex items-center justify-center rounded-full border border-[var(--border-soft)] px-6 py-4 text-xs uppercase tracking-[0.22em] text-[var(--text-primary)] hover:border-[var(--border-strong)] transition-all duration-500"
              >
                Download My Resume
              </a>

              <a
                href="https://linkedin.com/in/nishant25kr"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card inline-flex items-center justify-center rounded-full border border-[var(--border-soft)] px-6 py-4 text-xs uppercase tracking-[0.22em] text-[var(--text-primary)] hover:border-[var(--border-strong)] transition-all duration-500"
              >
                Connect on LinkedIn
              </a>

              <a
                href="https://github.com/nishant25kr"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card inline-flex items-center justify-center rounded-full border border-[var(--border-soft)] px-6 py-4 text-xs uppercase tracking-[0.22em] text-[var(--text-primary)] hover:border-[var(--border-strong)] transition-all duration-500"
              >
                View GitHub
              </a>
            </div>

            <div className="space-y-8">
              <a href="mailto:nishant927472@gmail.com" className="group block max-w-max">
                <span className="text-[var(--text-soft)] text-xs uppercase tracking-widest block mb-2">Email</span>
                <span className="text-2xl md:text-3xl font-display group-hover:text-[var(--accent)] transition-colors duration-500 block relative overflow-hidden">
                  nishant927472@gmail.com
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[var(--accent)] -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                </span>
              </a>
              <a href="tel:+916204881440" className="group block max-w-max">
                <span className="text-[var(--text-soft)] text-xs uppercase tracking-widest block mb-2">Phone</span>
                <span className="text-2xl md:text-3xl font-display group-hover:text-[var(--accent)] transition-colors duration-500 block relative overflow-hidden">
                  +91 62048 81440
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[var(--accent)] -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                </span>
              </a>
            </div>
          </motion.div>

          {/* Form Column */}
          <motion.div 
            style={{ y: yForm }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-center"
          >
            {submitSuccess ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="glass-card border border-[var(--border-soft)] p-12 rounded-[2rem] text-center"
              >
                <div className="mb-6 inline-flex p-4 rounded-full bg-[rgba(247,243,238,0.08)] text-[var(--text-primary)]">
                  <CheckCircle className="w-12 h-12" />
                </div>
                <h3 className="text-3xl font-display mb-4">Got it — I’ll reply soon</h3>
                <p className="text-[var(--text-muted)] font-light mb-8">
                  Thanks for the note. Expect a clear, human response with next steps.
                </p>
                <button
                  onClick={() => setSubmitSuccess(false)}
                  className="px-8 py-4 border border-[var(--border-soft)] rounded-full hover:border-[var(--border-strong)] hover:text-[var(--accent)] transition-colors duration-500 tracking-widest text-xs uppercase"
                >
                  Send another note
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-card space-y-10 p-8 md:p-12 rounded-[2rem] border border-[var(--border-soft)]">
                <div className="relative group">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-[var(--border-soft)] pb-4 pt-6 text-[var(--text-primary)] text-xl font-light focus:outline-none focus:border-[var(--border-strong)] transition-colors peer placeholder-transparent"
                    placeholder="Your name"
                  />
                  <label htmlFor="name" className="absolute left-0 top-6 text-[var(--text-soft)] text-xl font-light transition-all duration-300 peer-focus:-top-2 peer-focus:text-xs peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-[var(--text-muted)] peer-valid:-top-2 peer-valid:text-xs peer-valid:uppercase peer-valid:tracking-widest peer-valid:text-[var(--text-muted)]">
                    Your name
                  </label>
                </div>
                
                <div className="relative group">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-[var(--border-soft)] pb-4 pt-6 text-[var(--text-primary)] text-xl font-light focus:outline-none focus:border-[var(--border-strong)] transition-colors peer placeholder-transparent"
                    placeholder="you@company.com"
                  />
                  <label htmlFor="email" className="absolute left-0 top-6 text-[var(--text-soft)] text-xl font-light transition-all duration-300 peer-focus:-top-2 peer-focus:text-xs peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-[var(--text-muted)] peer-valid:-top-2 peer-valid:text-xs peer-valid:uppercase peer-valid:tracking-widest peer-valid:text-[var(--text-muted)]">
                    Your email
                  </label>
                </div>
                
                <div className="relative group">
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-[var(--border-soft)] pb-4 pt-6 text-[var(--text-primary)] text-xl font-light focus:outline-none focus:border-[var(--border-strong)] transition-colors peer placeholder-transparent resize-none"
                    placeholder="A couple lines about the project..."
                  />
                  <label htmlFor="message" className="absolute left-0 top-6 text-[var(--text-soft)] text-xl font-light transition-all duration-300 peer-focus:-top-2 peer-focus:text-xs peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-[var(--text-muted)] peer-valid:-top-2 peer-valid:text-xs peer-valid:uppercase peer-valid:tracking-widest peer-valid:text-[var(--text-muted)]">
                    Your message
                  </label>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full group flex items-center justify-center gap-3 px-8 py-5 bg-[var(--text-primary)] text-[#111318] rounded-full font-medium tracking-widest uppercase text-sm hover:bg-white transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed scale-95' : 'hover:scale-[1.02]'
                  }`}
                >
                  {isSubmitting ? 'Sending...' : 'Send this message'}
                  {!isSubmitting && <Send className="w-4 h-4 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1 group-hover:-translate-y-1" />}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;