import { useState } from 'react';
import { motion } from 'motion/react';
import { Monitor, CheckCircle2, XCircle, ArrowRight, Zap, Mail, Phone, Copy, Sparkles, HeartHandshake, Target, Search, Layers, Share2, Star, Crown, Rocket, TrendingUp, Bot, Clock, PhoneMissed, PhoneCall, Mic } from 'lucide-react';

const ModernBackground = () => (
  <div className="fixed inset-0 z-0 pointer-events-none">
    {/* Grid pattern */}
    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
  </div>
);

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
    <div className="min-h-screen bg-zinc-950 text-zinc-50 selection:bg-indigo-500/30 overflow-x-hidden pt-10">
      <ModernBackground />
      {/* Top Contact Banner */}
      <div className="fixed top-0 w-full bg-gradient-to-r from-indigo-600 via-purple-500 to-indigo-600 text-white z-[60] text-sm font-medium border-b border-indigo-400/30">
        <div className="max-w-7xl mx-auto px-6 h-10 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="hidden sm:flex items-center gap-2">
              <Mail className="w-4 h-4 text-indigo-100" />
              rayanvadsariya15@gmail.com
            </span>
            <span className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-indigo-100" />
              (205) 864-8814
            </span>
          </div>
          <span className="font-semibold text-amber-200 flex items-center gap-1">
            <Sparkles className="w-4 h-4" /> Open for new clients
          </span>
        </div>
      </div>
      
      {/* Navigation */}
      <nav className="fixed top-10 w-full border-b border-zinc-800/50 bg-zinc-950/80 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <motion.div 
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-10 h-10 flex items-center justify-center group cursor-pointer">
              <div className="absolute inset-0 bg-indigo-500/20 border border-indigo-500/50 rounded-xl rotate-3 transition-transform group-hover:rotate-6" />
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600 to-cyan-500 rounded-xl -rotate-3 transition-transform group-hover:-rotate-6 shadow-lg shadow-indigo-500/20 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
            </div>
            <span className="font-display font-bold text-2xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-400">
              The Brand Bluprint
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
      <section className="pt-32 pb-24 px-6 relative">
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
              Your partner in digital growth. 👋
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-8 leading-[1.1]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Dominate your market with <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
              expert digital growth.
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            From managing your social media presence to building stunning websites, running precision ads, and dominating SEO, we provide a complete suite of done-for-you services to scale your business.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <motion.a 
              href="#social-media" 
              className="w-full sm:w-auto bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 transition-colors shadow-lg shadow-indigo-500/25"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Social Media Packages <ArrowRight className="w-4 h-4" />
            </motion.a>
            <motion.a 
              href="#services" 
              className="w-full sm:w-auto bg-zinc-800 hover:bg-zinc-700 text-zinc-50 px-8 py-4 rounded-full font-semibold transition-colors inline-flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore All Services
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
              Stunning Websites. One Flat Fee. <HeartHandshake className="w-8 h-8 text-indigo-400" />
            </h2>
            <p className="text-zinc-400 text-lg">Don't get trapped in expensive retainers to get a website. We keep it friendly and fair.</p>
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
                <h3 className="text-2xl font-semibold text-zinc-300">Other Agencies</h3>
              </div>
              <div className="text-4xl font-display font-bold text-zinc-500 mb-8 line-through decoration-red-500/50">
                $2,000 - $3,000+
              </div>
              <ul className="space-y-5">
                {[
                  'Exorbitant monthly retainers',
                  'Takes weeks or months to build',
                  'Charge thousands for basic websites',
                  'Complicated long-term contracts',
                  'Zero actual growth guarantee'
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
                <span className="bg-indigo-500 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg shadow-indigo-500/20 flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> BEST VALUE
                </span>
              </div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-indigo-400" />
                </div>
                <h3 className="text-2xl font-semibold text-white">The Brand Bluprint</h3>
              </div>
              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-5xl md:text-6xl font-display font-bold text-white">$599</span>
                <span className="text-indigo-400 font-medium text-lg">flat fee</span>
              </div>
              <ul className="space-y-5">
                <li className="flex items-start gap-3 text-zinc-200">
                  <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                  <span className="font-bold text-amber-300 flex items-center flex-wrap gap-1 leading-relaxed text-lg">
                    <Crown className="w-5 h-5 text-amber-400 fill-amber-400/20 shrink-0" />
                    Includes 1 FREE Custom Logo
                  </span>
                </li>
                <li className="flex items-start gap-3 text-zinc-200">
                  <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                  <span>Delivered rapidly in <strong>24 hours</strong> once started</span>
                </li>
                <li className="flex items-start gap-3 text-zinc-200">
                  <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                  <span>Modern, brand-new, and better than competitors</span>
                </li>
                <li className="flex items-start gap-3 text-zinc-200">
                  <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                  <span><strong>Zero monthly fees</strong>, just a one-time flat fee</span>
                </li>
                <li className="flex items-start gap-3 text-zinc-200">
                  <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                  <span>Completely custom tailored to your business info</span>
                </li>
              </ul>
              <motion.a 
                href="#contact" 
                className="w-full mt-10 bg-indigo-500 hover:bg-indigo-600 text-white py-4 rounded-2xl font-semibold transition-colors flex justify-center shadow-lg shadow-indigo-500/20"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Start Growing Today
              </motion.a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-16 flex flex-col items-center justify-center p-6 border border-zinc-800/60 bg-zinc-900/30 rounded-2xl border-dashed max-w-xl mx-auto"
          >
            <p className="text-zinc-400 mb-4 text-center">Have <strong className="text-zinc-200">ANY</strong> questions about our websites or how the process works?</p>
            <a href="#contact" className="group flex items-center justify-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white px-5 py-2.5 rounded-full transition-all text-sm font-semibold shadow-lg">
              Hit me up <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* AI Receptionist */}
      <section className="py-24 px-6 relative" id="ai-receptionist">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-cyan-500/20 mb-6 border border-cyan-500/30">
              <Bot className="w-8 h-8 text-cyan-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 flex items-center justify-center gap-3">
              24/7 AI Receptionist
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto text-lg mb-8">
              Never miss a lead again. When you miss a call, our AI receptionist picks up instead of voicemail with a perfectly natural human-like conversation.
            </p>
          </motion.div>

          <motion.div 
            className="bg-zinc-900/40 border border-zinc-800 rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row items-center gap-12 shadow-lg relative overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-blue-500/10 blur-3xl rounded-full" />
            <div className="flex-1 space-y-6 relative z-10">
              <h3 className="text-3xl font-display font-bold text-white">Stop losing thousands to missed calls.</h3>
              
              <div className="space-y-4">
                <p className="text-zinc-400 text-lg leading-relaxed">
                  A missed call could cost you <strong className="text-zinc-200">thousands of dollars</strong>. By the time you call them back, they’ve already booked with a competitor.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-zinc-950/50 border border-zinc-800/80 p-4 rounded-xl">
                    <div className="text-cyan-400 font-bold mb-1 flex items-center gap-2">
                      <Clock className="w-4 h-4" /> 24/7 Flow
                    </div>
                    <p className="text-sm text-zinc-400">Captures leads around the clock instantly.</p>
                  </div>
                  <div className="bg-zinc-950/50 border border-zinc-800/80 p-4 rounded-xl">
                    <div className="text-cyan-400 font-bold mb-1 flex items-center gap-2">
                      <Zap className="w-4 h-4" /> Zero Effort
                    </div>
                    <p className="text-sm text-zinc-400">Answers FAQs & books meetings directly.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-[1.5rem] p-6 relative shadow-lg mt-6">
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-5xl font-display font-bold text-white">$600</span>
                  <span className="text-cyan-400 font-medium text-lg">/mo</span>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <span className="text-zinc-300">Talks naturally and exactly like a human</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <span className="text-zinc-300">Asks specific qualification questions you choose</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <span className="text-zinc-300">Seamless calendar booking automation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <span className="text-zinc-300"><strong>24/7 active coverage</strong> around the clock</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex-1 w-full relative z-10">
              <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 relative shadow-2xl overflow-hidden flex flex-col gap-6">
                <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center relative">
                      <div className="absolute inset-0 border border-cyan-400 rounded-full animate-ping opacity-20" />
                      <PhoneCall className="w-5 h-5 text-cyan-400 relative z-10" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-zinc-200">Call Transferred to AI</div>
                      <div className="text-xs text-zinc-500 font-mono mt-0.5">00:45</div>
                    </div>
                  </div>
                  <div className="text-xs font-bold text-cyan-400 bg-cyan-400/10 px-3 py-1.5 rounded-full flex items-center gap-2 border border-cyan-400/20">
                    <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" /> 24/7 ACTIVE
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center py-4">
                   <div className="relative flex items-center justify-center w-24 h-24 mb-6">
                     <div className="absolute inset-0 bg-cyan-500/10 rounded-full animate-[ping_2s_ease-in-out_infinite]" />
                     <div className="absolute inset-2 bg-cyan-500/20 rounded-full animate-[ping_2.5s_ease-in-out_infinite]" />
                     <div className="relative w-16 h-16 bg-cyan-500/30 border-2 border-cyan-500/50 rounded-full flex items-center justify-center z-10 shadow-[0_0_15px_rgba(6,182,212,0.5)]">
                        <Bot className="w-8 h-8 text-cyan-300" />
                     </div>
                   </div>
                   
                   <div className="flex gap-1.5 items-end h-8">
                     {[...Array(6)].map((_, i) => (
                       <motion.div 
                         key={i}
                         className="w-1.5 bg-cyan-500/80 rounded-full"
                         animate={{ height: ["20%", "80%", "30%", "100%", "40%"] }}
                         transition={{
                           duration: 1.2,
                           repeat: Infinity,
                           repeatType: "mirror",
                           delay: i * 0.15,
                         }}
                       />
                     ))}
                   </div>
                </div>

                <div className="bg-zinc-900 rounded-xl p-4 border border-zinc-800 space-y-3 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-50" />
                  <div className="text-xs text-zinc-500 uppercase font-semibold tracking-wider mb-2 flex items-center gap-2">
                    <Mic className="w-3 h-3" /> Live Transcript
                  </div>
                  
                  <div className="space-y-4 text-sm font-medium">
                    <div>
                      <span className="text-indigo-400">Caller:</span> <span className="text-zinc-300">I'd like to get a quote for your services. Are you guys available next week?</span>
                    </div>
                    <div>
                      <span className="text-cyan-400 font-bold flex items-center gap-1.5 mb-1"><Bot className="w-3 h-3"/> AI Receptionist:</span>
                      <span className="text-white block pl-4 border-l-2 border-cyan-500/30">Absolutely! We have availability next Tuesday or Thursday. What kind of project are you looking to get a quote for? I can book an appointment on your calendar right now.</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex justify-between items-center">
                  <div className="text-xs text-zinc-500 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" /> AI is speaking...
                  </div>
                  <div className="text-xs text-green-400 font-medium bg-green-400/10 px-2 py-1 rounded border border-green-400/20">
                    Lead Saved & Booked
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-16 flex flex-col items-center justify-center p-6 border border-cyan-900/30 bg-cyan-950/10 rounded-2xl border-dashed max-w-xl mx-auto"
          >
            <p className="text-zinc-400 mb-4 text-center">Have <strong className="text-cyan-400">ANY</strong> questions about the AI Receptionist or how it integrates?</p>
            <a href="#contact" className="group flex items-center justify-center gap-2 bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/40 text-cyan-50 px-5 py-2.5 rounded-full transition-all text-sm font-semibold shadow-lg">
              Let's chat about it <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Social Media Packages */}
      <section className="py-24 px-6 relative" id="social-media">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-indigo-500/20 mb-6">
              <Share2 className="w-8 h-8 text-indigo-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Complete Social Media Management</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
              We take full control of your social channels. Engaging content, consistent posting, and strategic community management to turn followers into loyal customers.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {/* Growth */}
            <motion.div 
              variants={fadeInUp}
              className="bg-zinc-900/40 border border-zinc-800 rounded-[2rem] p-8 flex flex-col hover:border-indigo-500/50 transition-colors"
            >
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-2">
                  <Star className="w-5 h-5 text-indigo-400" /> Growth
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-display font-bold text-white">$500</span>
                  <span className="text-zinc-400">/mo</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                  <span className="text-zinc-300"><strong className="text-white">15 posts</strong> per month</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                  <span className="text-zinc-300">Content creation & copy</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                  <span className="text-zinc-300">Basic community management</span>
                </li>
              </ul>
              <a href="#contact" className="w-full block text-center bg-zinc-800 hover:bg-zinc-700 text-white py-3 rounded-xl font-semibold transition-colors">
                Select Growth
              </a>
            </motion.div>

            {/* Scale */}
            <motion.div 
              variants={fadeInUp}
              className="bg-gradient-to-b from-indigo-500/10 to-transparent border border-indigo-500/50 rounded-[2rem] p-8 flex flex-col relative shadow-xl shadow-indigo-500/10"
            >
              <div className="absolute top-0 right-8 -translate-y-1/2">
                <span className="bg-indigo-500 text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full shadow-lg">
                  Most Popular
                </span>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-2">
                  <Rocket className="w-5 h-5 text-indigo-400" /> Domination
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-display font-bold text-white">$1000</span>
                  <span className="text-zinc-400">/mo</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                  <span className="text-zinc-300"><strong className="text-white">30 posts</strong> per month</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                  <span className="text-zinc-300">Premium visual design & copy</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                  <span className="text-zinc-300">Proactive community engagement</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                  <span className="text-zinc-300">Monthly performance report</span>
                </li>
              </ul>
              <a href="#contact" className="w-full block text-center bg-indigo-500 hover:bg-indigo-600 text-white py-3 rounded-xl font-semibold transition-colors shadow-lg shadow-indigo-500/25">
                Select Domination
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-16 flex flex-col items-center justify-center p-6 border border-indigo-900/30 bg-indigo-950/10 rounded-2xl border-dashed max-w-xl mx-auto"
          >
            <p className="text-zinc-400 mb-4 text-center">Have <strong className="text-indigo-400">ANY</strong> questions about social media growth or what's included?</p>
            <a href="#contact" className="group flex items-center justify-center gap-2 bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-500/30 text-indigo-100 px-5 py-2.5 rounded-full transition-all text-sm font-semibold shadow-lg">
              Ask me anything <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Services Pivot */}
      <section className="py-24 px-6 relative" id="services">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Website Bundle Notice */}
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Complete Digital Domination</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto text-lg mb-8">
              In addition to social media, we offer the essential tools required to convert traffic and capture leads. Oh, and about that <strong className="text-white">$599 flat-fee website</strong>? It’s still here.
            </p>
          </motion.div>

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
                Take your business to the next level with our completely done-for-you ad campaigns on a custom monthly budget. <strong className="text-zinc-200">I will completely do everything for you to run the ads</strong>—from strategy to execution—so you will see instant growth without lifting a finger.
              </p>
              <div className="bg-gradient-to-b from-indigo-500/10 to-transparent border border-indigo-500/30 rounded-[1.5rem] p-6 relative overflow-hidden shadow-lg mt-2">
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-5xl font-display font-bold text-white">$500</span>
                  <span className="text-indigo-400 font-medium text-lg">/mo management</span>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-zinc-300 text-sm md:text-base">
                    <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                    <span>Management fee scales depending on your desired monthly ad spend</span>
                  </li>
                </ul>
              </div>
              <div className="mt-4 bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-5 shadow-lg shadow-cyan-500/10 ring-1 ring-cyan-500/20">
                <p className="text-cyan-300 font-bold text-lg leading-snug flex items-start gap-3">
                  <Search className="w-7 h-7 shrink-0 text-cyan-400 mt-0.5" />
                  <span>
                    <span className="block text-xl text-cyan-200 mb-1">Includes Complete SEO & Keyword Management</span>
                    We handle all the highly targeted keywords to reach your exact audience.
                  </span>
                </p>
              </div>
              <div className="mt-4 inline-flex items-center gap-2 text-amber-300 font-bold text-base md:text-lg bg-amber-500/10 border border-amber-500/30 px-5 py-3 rounded-xl shadow-lg shadow-amber-500/10 ring-1 ring-amber-500/20">
                <Crown className="w-6 h-6 text-amber-400 fill-amber-400/20 shrink-0" />
                Guaranteed growth in the first week of the ads being live
              </div>
              <div className="pt-2">
                <motion.a 
                  href="#contact" 
                  className="inline-flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-4 rounded-full font-semibold transition-colors shadow-lg shadow-indigo-500/25"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Your Campaign <ArrowRight className="w-4 h-4" />
                </motion.a>
              </div>
            </div>
            <div className="flex-1 w-full relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 blur-3xl rounded-full" />
              <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 relative shadow-2xl overflow-hidden flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-4 bg-indigo-500 rounded-sm animate-pulse" />
                      <div className="text-xs font-semibold text-zinc-300 uppercase tracking-wider">Active Campaign</div>
                    </div>
                    <div className="text-xs font-bold text-green-400 bg-green-400/10 px-3 py-1.5 rounded-full flex items-center gap-1 border border-green-400/20">
                      <ArrowRight className="w-3 h-3 -rotate-45" /> INSTANT GROWTH
                    </div>
                  </div>
                  
                  {/* Results Replica */}
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mb-8"
                  >
                    <div className="flex rounded-lg overflow-hidden shadow-xl shadow-black/50 border border-zinc-800/50">
                      <div className="flex-1 bg-[#1a73e8] p-5">
                        <div className="text-white/90 text-xs font-medium mb-1 flex items-center gap-1">
                          Clicks <svg width="10" height="10" viewBox="0 0 24 24" fill="white"><path d="M7 10l5 5 5-5z"/></svg>
                        </div>
                        <div className="text-white text-4xl font-display tracking-tight">1.28K</div>
                      </div>
                      <div className="flex-1 bg-[#d93025] p-5">
                        <div className="text-white/90 text-xs font-medium mb-1 flex items-center gap-1">
                          Impressions <svg width="10" height="10" viewBox="0 0 24 24" fill="white"><path d="M7 10l5 5 5-5z"/></svg>
                        </div>
                        <div className="text-white text-4xl font-display tracking-tight">86.8K</div>
                      </div>
                    </div>
                    <p className="text-xs text-center text-zinc-400 mt-4 italic">
                      Results from these exact metrics achieved within <strong className="text-zinc-200">one week</strong>.
                    </p>
                  </motion.div>

                  <div className="space-y-5 mb-8">
                    <div className="space-y-2 w-full">
                      <div className="flex justify-between text-xs font-medium">
                        <span className="text-zinc-400">Activity Level</span>
                        <span className="text-indigo-400">Peak Performance</span>
                      </div>
                      <div className="h-2.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: '85%' }}
                          transition={{ duration: 1.5, delay: 0.4 }}
                          className="h-full bg-indigo-500 rounded-full" 
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex items-end gap-3 h-24 border-b border-zinc-800/50 pb-2">
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

          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-8 flex flex-col items-center justify-center p-6 border border-zinc-800/60 bg-zinc-900/30 rounded-2xl border-dashed max-w-xl mx-auto"
          >
            <p className="text-zinc-400 mb-4 text-center">Have <strong className="text-zinc-200">ANY</strong> questions about how we run and scale precision ad campaigns?</p>
            <a href="#contact" className="group flex items-center justify-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white px-5 py-2.5 rounded-full transition-all text-sm font-semibold shadow-lg">
              Get in touch <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 relative overflow-hidden" id="contact">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-zinc-950 to-zinc-950 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-[120px] pointer-events-none border border-white" />
        
        <motion.div 
          className="max-w-4xl mx-auto text-center relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center justify-center space-x-2 bg-indigo-500/20 border border-indigo-500/50 rounded-full px-6 py-2 mb-8 shadow-[0_0_30px_rgba(99,102,241,0.4)]">
             <span className="relative flex h-3 w-3 mr-2">
               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
               <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-500"></span>
             </span>
             <span className="font-bold text-indigo-300 uppercase tracking-widest text-sm">Available For Contact NOW</span>
          </motion.div>

          <motion.h2 variants={fadeInUp} className="text-5xl md:text-7xl font-display font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-100 to-indigo-400">
            Ready to completely scale?
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto">
            Stop guessing what works. Whether you need expert social media management, a $599 flat-rate website, or precision ads, we've got you covered.
          </motion.p>
          
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8 relative">
            <div className="absolute inset-0 bg-indigo-500/5 rounded-[3rem] blur-xl -z-10 animate-pulse border border-indigo-500/50"></div>
            <div className="flex items-stretch gap-2 w-full sm:w-auto z-10">
              <a 
                href="mailto:rayanvadsariya15@gmail.com" 
                className="flex items-center gap-4 bg-zinc-900/80 hover:bg-indigo-900/40 border-2 border-indigo-500/30 hover:border-indigo-400 px-8 py-6 rounded-[2rem] transition-all group flex-grow shadow-[0_0_30px_rgba(99,102,241,0.15)] ring-1 ring-indigo-500/20"
              >
                <div className="w-16 h-16 rounded-full bg-indigo-500/30 flex items-center justify-center group-hover:scale-110 transition-transform shrink-0 border border-indigo-400/50">
                  <Mail className="w-8 h-8 text-indigo-300" />
                </div>
                <div className="text-left">
                  <div className="text-sm font-bold text-indigo-400 mb-1 uppercase tracking-wider">Email Us Directly</div>
                  <div className="text-lg font-bold text-white">rayanvadsariya15@gmail.com</div>
                </div>
              </a>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => handleCopy('rayanvadsariya15@gmail.com', 'email', e)}
                className="px-6 bg-zinc-900/80 hover:bg-indigo-900/40 border-2 border-indigo-500/30 hover:border-indigo-400 rounded-[2rem] transition-all text-zinc-400 hover:text-indigo-300 flex items-center justify-center shrink-0 shadow-[0_0_30px_rgba(99,102,241,0.15)]"
                title="Copy Email"
              >
                {copiedEmail ? <CheckCircle2 className="w-6 h-6 text-green-400" /> : <Copy className="w-6 h-6" />}
              </motion.button>
            </div>
            
            <div className="flex items-stretch gap-2 w-full sm:w-auto z-10">
              <a 
                href="tel:+12058648814" 
                className="flex items-center gap-4 bg-zinc-900/80 hover:bg-indigo-900/40 border-2 border-indigo-500/30 hover:border-indigo-400 px-8 py-6 rounded-[2rem] transition-all group flex-grow shadow-[0_0_30px_rgba(99,102,241,0.15)] ring-1 ring-indigo-500/20"
              >
                <div className="w-16 h-16 rounded-full bg-indigo-500/30 flex items-center justify-center group-hover:scale-110 transition-transform shrink-0 border border-indigo-400/50">
                  <Phone className="w-8 h-8 text-indigo-300" />
                </div>
                <div className="text-left">
                  <div className="text-sm font-bold text-indigo-400 mb-1 uppercase tracking-wider">Call or Text Us</div>
                  <div className="text-lg font-bold text-white">(205) 864-8814</div>
                </div>
              </a>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => handleCopy('(205) 864-8814', 'phone', e)}
                className="px-6 bg-zinc-900/80 hover:bg-indigo-900/40 border-2 border-indigo-500/30 hover:border-indigo-400 rounded-[2rem] transition-all text-zinc-400 hover:text-indigo-300 flex items-center justify-center shrink-0 shadow-[0_0_30px_rgba(99,102,241,0.15)]"
                title="Copy Phone Number"
              >
                {copiedPhone ? <CheckCircle2 className="w-6 h-6 text-green-400" /> : <Copy className="w-6 h-6" />}
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-zinc-800/50 text-center text-zinc-500 text-sm relative z-10 bg-zinc-950">
        <p>&copy; {new Date().getFullYear()} The Brand Bluprint. All rights reserved.</p>
      </footer>
    </div>
  );
}
