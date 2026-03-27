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
    <section ref={sectionRef} id="contact" className="py-32 bg-[#0E0E0C] text-[#F4F0EA] min-h-screen flex items-center relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-[#E5D3B3] rounded-full blur-[150px] opacity-[0.03] pointer-events-none mix-blend-screen" />

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
            <h2 className="text-[#F4F0EA]/50 font-medium tracking-[0.2em] uppercase text-xs md:text-sm mb-6">
              06 // Connect
            </h2>
            <h3 className="font-display text-6xl md:text-7xl lg:text-[7rem] tracking-tighter leading-none mb-10">
              LET'S <br /> COLLAB<span className="text-[#F4F0EA]/30">-</span><br />ORATE
            </h3>
            
            <p className="text-[#F4F0EA]/60 text-lg md:text-xl font-light leading-relaxed max-w-md mb-16">
              Have a project in mind, an opportunity, or just want to say hello? I'm currently open to new roles and exciting projects.
            </p>

            <div className="space-y-8">
              <a href="mailto:nishant927472@gmail.com" className="group block max-w-max">
                <span className="text-[#F4F0EA]/40 text-xs uppercase tracking-widest block mb-2">Email</span>
                <span className="text-2xl md:text-3xl font-display group-hover:text-[#E5D3B3] transition-colors duration-500 block relative overflow-hidden">
                  nishant927472@gmail.com
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#E5D3B3] -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                </span>
              </a>
              <a href="tel:+916204881440" className="group block max-w-max">
                <span className="text-[#F4F0EA]/40 text-xs uppercase tracking-widest block mb-2">Phone</span>
                <span className="text-2xl md:text-3xl font-display group-hover:text-[#E5D3B3] transition-colors duration-500 block relative overflow-hidden">
                  +91 62048 81440
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#E5D3B3] -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" />
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
                className="bg-white/[0.02] backdrop-blur-xl border border-[#F4F0EA]/10 p-12 rounded-[2rem] text-center shadow-[0_8px_32px_0_rgba(0,0,0,0.36)]"
              >
                <div className="mb-6 inline-flex p-4 rounded-full bg-[#F4F0EA]/5 text-[#F4F0EA]">
                  <CheckCircle className="w-12 h-12" />
                </div>
                <h3 className="text-3xl font-display mb-4">Message Sent</h3>
                <p className="text-[#F4F0EA]/60 font-light mb-8">
                  Thank you for reaching out. I'll get back to you as soon as possible.
                </p>
                <button
                  onClick={() => setSubmitSuccess(false)}
                  className="px-8 py-4 border border-[#F4F0EA]/20 rounded-full hover:bg-[#F4F0EA] hover:text-[#0E0E0C] transition-colors duration-500 tracking-widest text-xs uppercase"
                >
                  Send another
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-10 bg-white/[0.02] backdrop-blur-xl p-8 md:p-12 rounded-[2rem] border border-[#F4F0EA]/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)]">
                <div className="relative group">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-[#F4F0EA]/20 pb-4 pt-6 text-[#F4F0EA] text-xl font-light focus:outline-none focus:border-[#F4F0EA] transition-colors peer placeholder-transparent"
                    placeholder="John Doe"
                  />
                  <label htmlFor="name" className="absolute left-0 top-6 text-[#F4F0EA]/40 text-xl font-light transition-all duration-300 peer-focus:-top-2 peer-focus:text-xs peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-[#F4F0EA]/70 peer-valid:-top-2 peer-valid:text-xs peer-valid:uppercase peer-valid:tracking-widest peer-valid:text-[#F4F0EA]/70">
                    What's your name?
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
                    className="w-full bg-transparent border-b border-[#F4F0EA]/20 pb-4 pt-6 text-[#F4F0EA] text-xl font-light focus:outline-none focus:border-[#F4F0EA] transition-colors peer placeholder-transparent"
                    placeholder="john@example.com"
                  />
                  <label htmlFor="email" className="absolute left-0 top-6 text-[#F4F0EA]/40 text-xl font-light transition-all duration-300 peer-focus:-top-2 peer-focus:text-xs peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-[#F4F0EA]/70 peer-valid:-top-2 peer-valid:text-xs peer-valid:uppercase peer-valid:tracking-widest peer-valid:text-[#F4F0EA]/70">
                    What's your email?
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
                    className="w-full bg-transparent border-b border-[#F4F0EA]/20 pb-4 pt-6 text-[#F4F0EA] text-xl font-light focus:outline-none focus:border-[#F4F0EA] transition-colors peer placeholder-transparent resize-none"
                    placeholder="Hello Nishant, I'd like to talk about..."
                  />
                  <label htmlFor="message" className="absolute left-0 top-6 text-[#F4F0EA]/40 text-xl font-light transition-all duration-300 peer-focus:-top-2 peer-focus:text-xs peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-[#F4F0EA]/70 peer-valid:-top-2 peer-valid:text-xs peer-valid:uppercase peer-valid:tracking-widest peer-valid:text-[#F4F0EA]/70">
                    Your message
                  </label>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full group flex items-center justify-center gap-3 px-8 py-5 bg-[#F4F0EA] text-[#0E0E0C] rounded-full font-medium tracking-widest uppercase text-sm hover:bg-white transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed scale-95' : 'hover:scale-[1.02]'
                  }`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
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