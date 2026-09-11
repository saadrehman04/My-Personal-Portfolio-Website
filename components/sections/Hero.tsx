// "use client";

// import { motion } from "framer-motion";
// import Link from "next/link";
// import { ArrowRight, ArrowUpRight, Users, Briefcase, Clock, Wrench } from "lucide-react";

// const techBadges = [
//   { label: "React", color: "#61dafb", delay: 0 },
//   { label: "Python", color: "#3776ab", delay: 0.5 },
//   { label: "LangChain", color: "#1c3c3c", delay: 1 },
//   { label: "OpenAI", color: "#10a37f", delay: 1.5 },
//   { label: "n8n", color: "#ea4b71", delay: 2 },
// ];

// const socialProof = [
//   { icon: Users, value: "150k+", label: "Community" },
//   { icon: Clock, value: "3–5 Yrs", label: "Experience" },
//   { icon: Briefcase, value: "50+", label: "Projects" },
// ];

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { staggerChildren: 0.12, delayChildren: 0.2 },
//   },
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 24 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
// };

// export function Hero() {
//   return (
//     <section className="relative min-h-screen flex flex-col items-center justify-center pt-16 overflow-hidden">
//       {/* Animated grid background */}
//       <div className="absolute inset-0 bg-grid opacity-60 dark:opacity-40" />

//       {/* Radial gradient overlay */}
//       <div className="absolute inset-0 bg-gradient-radial from-blue-500/10 via-transparent to-transparent dark:from-blue-500/5" />

//       {/* Bottom fade */}
//       <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background to-transparent" />

//       {/* Floating orbs */}
//       <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl animate-pulse-glow" />
//       <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

//       {/* Content */}
//       <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//           className="space-y-6"
//         >
//           {/* Availability badge */}
//           <motion.div variants={itemVariants} className="flex justify-center">
//             <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-sm font-medium">
//               <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
//               Available for new projects
//             </div>
//           </motion.div>

//           {/* Headline */}
//           <motion.h1
//             variants={itemVariants}
//             className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]"
//           >
//             I Build{" "}
//             <span className="gradient-text">AI Agents &</span>
//             <br />
//             <span className="gradient-text">Automations</span>
//             <br />
//             <span className="text-foreground">That Work While</span>
//             <br />
//             <span className="text-foreground">You Sleep</span>
//           </motion.h1>

//           {/* Subheadline */}
//           <motion.p
//             variants={itemVariants}
//             className="max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground leading-relaxed"
//           >
//             Helping businesses scale with intelligent automation, AI-powered systems,
//             and full-stack digital products.
//           </motion.p>

//           {/* CTAs */}
//           <motion.div
//             variants={itemVariants}
//             className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2"
//           >
//             <Link
//               href="#work"
//               className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-semibold text-base transition-all duration-200 hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5"
//             >
//               View My Work
//               <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//             </Link>
//             <a
//               href="https://calendly.com/saadrehman"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-border bg-background/50 hover:bg-muted/50 text-foreground font-semibold text-base transition-all duration-200 hover:-translate-y-0.5 backdrop-blur-sm"
//             >
//               Book a Free Call
//               <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
//             </a>
//           </motion.div>

//           {/* Social proof bar */}
//           <motion.div
//             variants={itemVariants}
//             className="flex flex-wrap items-center justify-center gap-6 pt-4"
//           >
//             {socialProof.map(({ icon: Icon, value, label }) => (
//               <div key={label} className="flex items-center gap-2 text-sm">
//                 <Icon className="w-4 h-4 text-blue-500" />
//                 <span className="font-semibold text-foreground">{value}</span>
//                 <span className="text-muted-foreground">{label}</span>
//               </div>
//             ))}
//           </motion.div>

//           {/* Floating tech badges */}
//           <motion.div
//             variants={itemVariants}
//             className="flex flex-wrap items-center justify-center gap-2 pt-6"
//           >
//             {techBadges.map((badge) => (
//               <motion.div
//                 key={badge.label}
//                 className="px-3 py-1.5 rounded-lg glass border border-white/10 dark:border-white/5 text-sm font-medium text-foreground/80 animate-float"
//                 style={{
//                   animationDelay: `${badge.delay}s`,
//                   borderLeftColor: badge.color,
//                   borderLeftWidth: "2px",
//                 }}
//                 whileHover={{ scale: 1.05, y: -2 }}
//               >
//                 {badge.label}
//               </motion.div>
//             ))}
//           </motion.div>
//         </motion.div>
//       </div>

//       {/* Scroll indicator */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1.5, duration: 1 }}
//         className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
//       >
//         <span className="text-xs text-muted-foreground font-medium tracking-widest uppercase">
//           Scroll
//         </span>
//         <motion.div
//           animate={{ y: [0, 6, 0] }}
//           transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
//           className="w-0.5 h-8 bg-gradient-to-b from-blue-500 to-transparent rounded-full"
//         />
//       </motion.div>
//     </section>
//   );
// }

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Users, Briefcase, Clock } from "lucide-react";

const techTags = ["Python", "AI/ML", "Deep Learning", "Full Stack Development", "Cloud"];

const socialProof = [
  { icon: Users, value: "150k+", label: "Community" },
  { icon: Clock, value: "3–5 Yrs", label: "Experience" },
  { icon: Briefcase, value: "50+", label: "Projects" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-[#060d1f]">
      {/* Dark navy gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#060d1f] via-[#0a1628] to-[#0d1f3c]" />

      {/* Blue radial glow on right */}
      <div
        className="absolute right-0 top-0 bottom-0 w-2/3 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 80% 50%, rgba(37,99,235,0.25) 0%, rgba(37,99,235,0.05) 50%, transparent 75%)",
        }}
      />

      {/* Circuit grid overlay */}
      <div className="absolute inset-0 bg-grid opacity-20" />

      {/* Animated orbs */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse-glow" />
      <div
        className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-blue-400/10 rounded-full blur-2xl animate-pulse-glow"
        style={{ animationDelay: "1s" }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[calc(100vh-4rem)]">

          {/* LEFT: Text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col justify-center py-16 lg:py-0"
          >
            {/* Eyebrow */}
            <motion.div variants={itemVariants} className="flex items-center gap-2 mb-6">
              <span className="text-blue-400 font-mono text-sm font-medium">&lt;/&gt;</span>
              <span className="text-slate-300 text-sm font-medium tracking-wide">
                AI Engineer &amp; Web Developer
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-display text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-6xl font-bold leading-[1.1] tracking-tight mb-5"
            >
              <span className="text-white">Building </span>
              <span className="text-blue-400">AI-Powered</span>
              <span className="text-white"> Solutions</span>
              <br />
              <span className="text-white">&amp; Scalable </span>
              <span className="text-blue-400">Web Experiences</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="text-slate-400 text-lg leading-relaxed mb-8 max-w-lg"
            >
              Turning Ideas into Intelligent, Scalable &amp; Impactful Products
            </motion.p>

            {/* Tech tags */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-2 mb-10">
              {techTags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-lg border border-slate-600/60 bg-slate-800/40 text-slate-300 text-sm font-medium backdrop-blur-sm hover:border-blue-500/50 hover:text-blue-300 transition-all duration-200"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://calendly.com/saadrehman"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-base transition-all duration-200 hover:shadow-2xl hover:shadow-blue-500/40 hover:-translate-y-0.5"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Let&apos;s Build Something Great
              </a>

              <a
                href="#work"
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border border-slate-600 bg-slate-800/40 hover:bg-slate-700/60 text-slate-300 hover:text-white font-semibold text-base transition-all duration-200 backdrop-blur-sm"
              >
                View My Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            {/* Social proof */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-6 mt-10 pt-8 border-t border-slate-700/50"
            >
              {socialProof.map(({ icon: Icon, value, label }) => (
                <div key={label} className="flex items-center gap-2">
                  <Icon className="w-4 h-4 text-blue-400" />
                  <span className="font-bold text-white text-sm">{value}</span>
                  <span className="text-slate-400 text-sm">{label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT: Photo */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:flex items-end justify-center"
            style={{ minHeight: "580px" }}
          >
            {/* Soft glow behind photo */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-72 h-72 bg-blue-500/20 rounded-full blur-3xl" />
            </div>

            {/*
              YOUR PHOTO GOES HERE
              ─────────────────────────────────────────────────────────────────
              1. Save your photo to: public/images/saad-hero.png
              2. For best results (like the reference image), remove the
                 background at https://remove.bg — then save as PNG.
              3. The image will be bottom-aligned and fill the right column.
              ─────────────────────────────────────────────────────────────────
            */}
            <div className="relative w-full max-w-[480px] h-[520px] -mt-10 ml-auto">
              <Image
                src="/images/saad-hero.png"
                alt="Saad Rehman — AI Engineer & Web Developer"
                fill
                className="object-contain object-bottom drop-shadow-2xl relative -top-10 translate-x-4"
                priority
                sizes="580px"
              />
            </div>

            {/* Floating stat — top left */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute top-20 left-0 px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700/60 backdrop-blur-sm shadow-xl"
            >
              <div className="text-xs text-slate-400 mb-0.5">Projects Delivered</div>
              <div className="font-display font-bold text-white text-xl">50+</div>
            </motion.div>

            {/* Floating stat — bottom left */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="absolute bottom-28 -left-4 px-4 py-3 rounded-xl bg-blue-600/20 border border-blue-500/30 backdrop-blur-sm shadow-xl"
            >
              <div className="text-xs text-blue-300 mb-0.5">Community</div>
              <div className="font-display font-bold text-white text-xl">150k+</div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}