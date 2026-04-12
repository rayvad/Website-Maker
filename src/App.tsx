import { useState } from 'react';
import { motion } from 'motion/react';
import { Monitor, CheckCircle2, XCircle, ArrowRight, Zap, Mail, Phone, Copy, Sparkles, HeartHandshake, Target, Search, Layers } from 'lucide-react';

const StarBackground = () => {
  const [stars] = useState(() => 
    Array.from({ length: 70 }).map(() => ({
      id: Math.random(),
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 5,
      duration: Math.random() * 4 + 3,
      opacity: Math.random() * 0.6 + 0.4
    }))
  );

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute bg-white rounded-full"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
          }}
          animate={{ opacity: [0.1, star.opacity, 0.1] }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut",
            times: [0, 0.5, 1]
          }}
        />
      ))}
    </div>
  );
};

export default function App() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopy = (text: string, type: 'email' | 'phone', e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 selection:bg-indigo-500/30 overflow-x-hidden">
      <StarBackground />
      {/* Navigation */}
      <nav className="fixed top-0 w-full border-b border-zinc-800/50 bg-zinc-950/80 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <motion.div 
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-10 h-10 flex items-center justify-center group cursor-pointer">
              <div className="absolute inset-0 bg-indigo-500/20 border border-indigo-500/50 rounded-xl rotate-3 transition-transform group-hover:rotate-6" />
              <div className="absolute inset-0 bg-indigo-500 rounded-xl -rotate-3 transition-transform group-hover:-rotate-6 shadow-lg shadow-indigo-500/20 flex items-center justify-center">
                <Layers className="w-5 h-5 text-white" />
              </div>
            </div>
            <span className="font-display font-bold text-2xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-400">
              The Brand Blueprint
            </span>
          </motion.div>
          <motion.div 
            className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <a href="#services" className="hover:text-zinc-50 transition-colors">Services</a>
            <a href="#pricing" className="hover:text-zinc-50 transition-colors">Pricing</a>
            <a href="#contact" className="hover:text-zinc-50 transition-colors">Contact</a>
          </motion.div>
          <motion.a 
            href="#contact" 
            className="bg-zinc-50 text-zinc-950 px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-zinc-200 transition-colors shadow-lg shadow-white/5"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-24 px-6 relative">
        {/* Animated Background Blobs */}
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.15, 0.25, 0.15],
            rotate: [0, 90, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-indigo-500/30 rounded-full blur-[120px] -z-10 pointer-events-none" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
            rotate: [0, -90, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px] -z-10 pointer-events-none" 
        />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 text-indigo-400 text-sm font-medium mb-8 border border-indigo-500/20 shadow-sm">
              <Sparkles className="w-4 h-4" />
              Friendly, transparent pricing. 👋
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-8 leading-[1.1]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Stunning websites for a <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
              flat fee of $375.
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Other designers charge $500 to $800 and sneak in monthly fees. 
            We build you a professional website for one flat price. No monthly charges, no nothing. Just great design.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <motion.a 
              href="#contact" 
              className="w-full sm:w-auto bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 transition-colors shadow-lg shadow-indigo-500/25"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Claim Your $375 Website <ArrowRight className="w-4 h-4" />
            </motion.a>
            <motion.a 
              href="#services" 
              className="w-full sm:w-auto bg-zinc-800 hover:bg-zinc-700 text-zinc-50 px-8 py-4 rounded-full font-semibold transition-colors inline-flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Other Services
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-24 px-6 bg-zinc-900/30 border-y border-zinc-800/50 relative" id="pricing">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 flex items-center justify-center gap-3">
              The Truth About Web Design <HeartHandshake className="w-8 h-8 text-indigo-400" />
            </h2>
            <p className="text-zinc-400 text-lg">Don't get trapped in expensive contracts. We keep it friendly and fair.</p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* The Other Guys */}
            <motion.div 
              variants={fadeInUp}
              className="bg-zinc-950 border border-zinc-800 rounded-[2rem] p-8 opacity-80 hover:opacity-100 transition-opacity"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center">
                  <XCircle className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-2xl font-semibold text-zinc-300">Other Designers</h3>
              </div>
              <div className="text-4xl font-display font-bold text-zinc-500 mb-8 line-through decoration-red-500/50">
                $500 - $800+
              </div>
              <ul className="space-y-5">
                {[
                  'High upfront costs',
                  'Surprise monthly maintenance fees',
                  'Charge extra for basic changes',
                  'Complicated contracts',
                  'Hidden hosting markups'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-zinc-400">
                    <XCircle className="w-5 h-5 text-red-500/50 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Us */}
            <motion.div 
              variants={fadeInUp}
              className="bg-gradient-to-b from-indigo-500/10 to-transparent border border-indigo-500/30 rounded-[2rem] p-8 relative overflow-hidden shadow-2xl shadow-indigo-500/5"
            >
              <div className="absolute top-0 right-0 p-5">
                <span className="bg-indigo-500 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg shadow-indigo-500/20">
                  Best Value
                </span>
              </div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-indigo-400" />
                </div>
                <h3 className="text-2xl font-semibold text-white">The Brand Blueprint</h3>
              </div>
              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-6xl font-display font-bold text-white">$375</span>
                <span className="text-indigo-400 font-medium text-lg">total</span>
              </div>
              <ul className="space-y-5">
                {[
                  'One-time flat fee',
                  'Zero monthly charges',
                  'No hidden fees, no nothing',
                  'Professional, modern design',
                  'Mobile-friendly & responsive'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-zinc-200">
                    <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <motion.a 
                href="#contact" 
                className="w-full mt-10 bg-indigo-500 hover:bg-indigo-600 text-white py-4 rounded-2xl font-semibold transition-colors flex justify-center shadow-lg shadow-indigo-500/20"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Your Website
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Pivot */}
      <section className="py-24 px-6 relative" id="services">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Targeted Ad Management */}
          <motion.div 
            className="bg-zinc-900/40 border border-zinc-800 rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row items-center gap-12 shadow-lg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <div className="flex-1 space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-indigo-500/20 flex items-center justify-center">
                <Target className="w-8 h-8 text-indigo-400" />
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold">Scale with Precision Ads</h2>
              <p className="text-zinc-400 text-lg leading-relaxed">
                Take your business to the next level with our completely done-for-you ad campaigns. <strong className="text-zinc-200">I will completely do everything for you to run the ads</strong>—from strategy to execution—so you will see instant growth without lifting a finger.
              </p>
              <div className="bg-zinc-950/50 border border-zinc-800/50 rounded-xl p-4 inline-block">
                <p className="text-zinc-300 font-medium">
                  <span className="text-indigo-400 font-bold mr-2">✓</span>
                  Set a custom monthly ad budget up to $5,000
                </p>
              </div>
              <div>
                <motion.a 
                  href="#contact" 
                  className="inline-flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-4 rounded-full font-semibold transition-colors shadow-lg shadow-indigo-500/25 mt-4"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Your Campaign <ArrowRight className="w-4 h-4" />
                </motion.a>
              </div>
            </div>
            <div className="flex-1 w-full relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 blur-3xl rounded-full" />
              <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 relative shadow-2xl overflow-hidden">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 bg-indigo-500 rounded-sm animate-pulse" />
                    <div className="text-xs font-semibold text-zinc-300 uppercase tracking-wider">Active Campaign</div>
                  </div>
                  <div className="text-xs font-bold text-green-400 bg-green-400/10 px-3 py-1.5 rounded-full flex items-center gap-1 border border-green-400/20">
                    <ArrowRight className="w-3 h-3 -rotate-45" /> INSTANT GROWTH
                  </div>
                </div>
                
                <div className="space-y-5 mb-8">
                  <div className="space-y-2 w-full">
                    <div className="flex justify-between text-xs font-medium">
                      <span className="text-zinc-400">Impressions</span>
                      <span className="text-indigo-400">+12,450</span>
                    </div>
                    <div className="h-2.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: '85%' }}
                        transition={{ duration: 1.5, delay: 0.2 }}
                        className="h-full bg-indigo-500 rounded-full" 
                      />
                    </div>
                  </div>
                  <div className="space-y-2 w-full">
                    <div className="flex justify-between text-xs font-medium">
                      <span className="text-zinc-400">Conversions</span>
                      <span className="text-purple-400">+342</span>
                    </div>
                    <div className="h-2.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: '65%' }}
                        transition={{ duration: 1.5, delay: 0.4 }}
                        className="h-full bg-purple-500 rounded-full" 
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex items-end gap-3 h-32 border-b border-zinc-800/50 pb-2">
                  {[40, 60, 45, 80, 65, 95, 120].map((height, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${height}%` }}
                      transition={{ duration: 1, delay: idx * 0.1 }}
                      className="flex-1 bg-gradient-to-t from-indigo-500/20 to-indigo-500 rounded-t-md" 
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* SEO Domination */}
          <motion.div 
            className="bg-zinc-900/40 border border-zinc-800 rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row-reverse items-center gap-12 shadow-lg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <div className="flex-1 space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-cyan-500/20 flex items-center justify-center">
                <Search className="w-8 h-8 text-cyan-400" />
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold">Search Engine Optimization (SEO)</h2>
              <p className="text-zinc-400 text-lg leading-relaxed">
                Stop being invisible. <strong className="text-zinc-200">I will completely handle your SEO for you</strong>, optimizing your digital footprint so your business climbs the rankings and claims the #1 spot on the search bar.
              </p>
              <div>
                <motion.a 
                  href="#contact" 
                  className="inline-flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white px-8 py-4 rounded-full font-semibold transition-colors shadow-lg shadow-zinc-900/50 mt-4"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Boost Your Ranking <ArrowRight className="w-4 h-4" />
                </motion.a>
              </div>
            </div>
            <div className="flex-1 w-full relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-blue-500/20 blur-3xl rounded-full" />
              <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 relative shadow-2xl">
                <div className="flex items-center gap-4 mb-6 border-b border-zinc-800 pb-4">
                  <Search className="w-5 h-5 text-zinc-500" />
                  <div className="h-4 w-48 bg-zinc-800 rounded-full" />
                </div>
                <div className="space-y-6">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="space-y-3">
                      <div className="flex items-center gap-3">
                        {i === 1 ? (
                          <>
                            <span className="text-xs font-bold text-cyan-400 bg-cyan-400/10 px-2.5 py-1 rounded border border-cyan-400/20 shadow-[0_0_10px_rgba(34,211,238,0.2)]">#1</span>
                            <div className="text-sm font-bold text-cyan-300 tracking-wide">YOUR BUSINESS</div>
                            <div className="h-4 w-24 bg-cyan-500/30 rounded-full ml-2" />
                          </>
                        ) : (
                          <>
                            <span className="text-xs font-bold text-zinc-500 bg-zinc-800 px-2.5 py-1 rounded">#{i}</span>
                            <div className="h-4 w-32 bg-zinc-700 rounded-full" />
                          </>
                        )}
                      </div>
                      <div className={`h-2 w-full rounded-full ${i === 1 ? 'bg-cyan-500/20' : 'bg-zinc-800'}`} />
                      <div className={`h-2 rounded-full ${i === 1 ? 'w-5/6 bg-cyan-500/20' : 'w-2/3 bg-zinc-800'}`} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 relative overflow-hidden" id="contact">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-indigo-500/10" />
        <motion.div 
          className="max-w-4xl mx-auto text-center relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-display font-bold mb-6">
            Ready to get started?
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto">
            Stop overpaying for web design. Get a professional website for $375 flat, or elevate your brand with our affordable design services. We'd love to hear from you!
          </motion.p>
          
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8">
            <div className="flex items-stretch gap-2 w-full sm:w-auto">
              <a 
                href="mailto:rayanvadsariya15@gmail.com" 
                className="flex items-center gap-4 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-indigo-500/50 px-6 py-5 rounded-[1.5rem] transition-all group flex-grow shadow-lg"
              >
                <div className="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                  <Mail className="w-6 h-6 text-indigo-400" />
                </div>
                <div className="text-left">
                  <div className="text-sm text-zinc-400 mb-0.5">Email Us</div>
                  <div className="font-medium text-zinc-50">rayanvadsariya15@gmail.com</div>
                </div>
              </a>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => handleCopy('rayanvadsariya15@gmail.com', 'email', e)}
                className="px-5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-indigo-500/50 rounded-[1.5rem] transition-all text-zinc-400 hover:text-indigo-400 flex items-center justify-center shrink-0 shadow-lg"
                title="Copy Email"
              >
                {copiedEmail ? <CheckCircle2 className="w-5 h-5 text-green-400" /> : <Copy className="w-5 h-5" />}
              </motion.button>
            </div>
            
            <div className="flex items-stretch gap-2 w-full sm:w-auto">
              <a 
                href="tel:+12058648814" 
                className="flex items-center gap-4 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-indigo-500/50 px-6 py-5 rounded-[1.5rem] transition-all group flex-grow shadow-lg"
              >
                <div className="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                  <Phone className="w-6 h-6 text-indigo-400" />
                </div>
                <div className="text-left">
                  <div className="text-sm text-zinc-400 mb-0.5">Call or Text</div>
                  <div className="font-medium text-zinc-50">(205) 864-8814</div>
                </div>
              </a>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => handleCopy('(205) 864-8814', 'phone', e)}
                className="px-5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-indigo-500/50 rounded-[1.5rem] transition-all text-zinc-400 hover:text-indigo-400 flex items-center justify-center shrink-0 shadow-lg"
                title="Copy Phone Number"
              >
                {copiedPhone ? <CheckCircle2 className="w-5 h-5 text-green-400" /> : <Copy className="w-5 h-5" />}
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-zinc-800/50 text-center text-zinc-500 text-sm relative z-10 bg-zinc-950">
        <p>&copy; {new Date().getFullYear()} The Brand Blueprint. All rights reserved.</p>
      </footer>
    </div>
  );
}
