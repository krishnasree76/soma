// import { motion } from "framer-motion";
// import { ArrowRight, Check, Crown } from "lucide-react";

// const programs = [
//   {
//     title: "One-Time Consultation",
//     price: "₹1,000",
//     features: ["45–60 min session", "Detailed health assessment", "Personalized diet guidance", "Follow-up summary"],
//     highlighted: false,
//   },
//   {
//     title: "21-Day Detox",
//     price: "₹1,800",
//     features: ["Complete detox plan", "Daily meal guidance", "WhatsApp support", "Gut-healing recipes"],
//     highlighted: false,
//   },
//   {
//     title: "45-Day Program",
//     price: "₹3,100",
//     features: ["In-depth analysis", "Bi-weekly check-ins", "Customized meal plans", "Supplement guidance", "Progress tracking"],
//     highlighted: false,
//   },
//   {
//     title: "90-Day Program",
//     price: "₹4,500",
//     features: ["Comprehensive transformation", "Weekly check-ins", "Full meal & lifestyle plan", "Hormone & gut protocols", "Priority support", "Recipe book included"],
//     highlighted: true,
//   },
// ];

// const ProgramsSection = () => {
//   return (
//     <section id="programs" className="py-24 relative">
//       <div className="container mx-auto px-5">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center mb-14"
//         >
//           <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-3">Programs</p>
//           <h2 className="font-heading text-3xl sm:text-4xl font-bold">Choose your path to wellness</h2>
//         </motion.div>

//         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {programs.map((prog, i) => (
//             <motion.div
//               key={prog.title}
//               initial={{ opacity: 0, y: 25 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: i * 0.1 }}
//               className={`relative rounded-2xl p-7 flex flex-col hover:scale-[1.02] transition-transform ${
//                 prog.highlighted
//                   ? "glass-strong ring-2 ring-primary/30"
//                   : "glass-card"
//               }`}
//             >
//               {prog.highlighted && (
//                 <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 bg-primary text-primary-foreground text-xs font-semibold px-4 py-1.5 rounded-full">
//                   <Crown size={12} /> Most Recommended
//                 </div>
//               )}

//               <h3 className="font-heading text-lg font-bold mb-1 mt-2">{prog.title}</h3>
//               <p className="text-3xl font-bold text-gradient-gold mb-5">{prog.price}</p>

//               <ul className="flex flex-col gap-2.5 mb-7 flex-1">
//                 {prog.features.map((f) => (
//                   <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
//                     <Check size={15} className="text-primary mt-0.5 shrink-0" />
//                     {f}
//                   </li>
//                 ))}
//               </ul>

//               <a
//                 href="https://wa.me/918977511813"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className={`inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-transform hover:scale-[1.03] ${
//                   prog.highlighted
//                     ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
//                     : "glass-strong text-foreground"
//                 }`}
//               >
//                 Enroll Now <ArrowRight size={15} />
//               </a>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProgramsSection;
// import { motion } from "framer-motion";
// import { ArrowRight, Check, Crown } from "lucide-react";

// const programs = [
//   {
//     title: "One-Time Consultation",
//     price: "₹1,000",
//     features: [
//       "45–60 min session",
//       "Detailed health assessment",
//       "Personalized diet guidance",
//       "Follow-up summary",
//     ],
//     highlighted: false,
//   },
//   {
//     title: "21-Day Detox",
//     price: "₹1,800",
//     features: [
//       "Complete detox plan",
//       "Daily meal guidance",
//       "WhatsApp support",
//       "Gut-healing recipes",
//     ],
//     highlighted: false,
//   },
//   {
//     title: "45-Day Program",
//     price: "₹3,100",
//     features: [
//       "In-depth analysis",
//       "Bi-weekly check-ins",
//       "Customized meal plans",
//       "Supplement guidance",
//       "Progress tracking",
//     ],
//     highlighted: false,
//   },
//   {
//     title: "90-Day Program",
//     price: "₹4,500",
//     features: [
//       "Comprehensive transformation",
//       "Weekly check-ins",
//       "Full meal & lifestyle plan",
//       "Hormone & gut protocols",
//       "Priority support",
//       "Recipe book included",
//     ],
//     highlighted: true,
//   },
// ];

// const ProgramsSection = () => {
//   return (
//     <section id="programs" className="py-28 relative overflow-hidden">
//       {/* Background glow (same as hero) */}
//       <div className="absolute top-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-gradient-to-br from-[hsla(210,100%,68%,0.15)] to-[hsla(28,30%,60%,0.08)] blur-3xl animate-glow-pulse pointer-events-none" />

//       <div className="container mx-auto px-5 relative z-10">
//         {/* Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-3">
//             Programs
//           </p>
//           <h2 className="font-heading text-3xl sm:text-4xl font-bold">
//             Choose your path to{" "}
//             <span className="text-gradient-gold">wellness</span>
//           </h2>
//         </motion.div>

//         {/* Cards */}
//         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {programs.map((prog, i) => (
//             <motion.div
//               key={prog.title}
//               initial={{ opacity: 0, y: 25 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: i * 0.1 }}
//               className={`relative rounded-2xl p-7 flex flex-col transition-all duration-300 hover:scale-[1.03] ${
//                 prog.highlighted
//                   ? "glass-strong ring-2 ring-primary/40 shadow-xl shadow-primary/10"
//                   : "glass-card hover:shadow-lg"
//               }`}
//             >
//               {/* Highlight Badge */}
//               {prog.highlighted && (
//                 <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 bg-primary text-primary-foreground text-xs font-semibold px-4 py-1.5 rounded-full shadow-md">
//                   <Crown size={12} /> Most Recommended
//                 </div>
//               )}

//               {/* Title */}
//               <h3 className="font-heading text-lg font-bold mt-2 mb-1">
//                 {prog.title}
//               </h3>

//               {/* Price */}
//               <p className="text-3xl font-bold text-gradient-gold mb-6">
//                 {prog.price}
//               </p>

//               {/* Features */}
//               <ul className="flex flex-col gap-3 mb-7 flex-1">
//                 {prog.features.map((f) => (
//                   <li
//                     key={f}
//                     className="flex items-start gap-2 text-sm text-muted-foreground"
//                   >
//                     <Check
//                       size={15}
//                       className="text-primary mt-0.5 shrink-0"
//                     />
//                     {f}
//                   </li>
//                 ))}
//               </ul>

//               {/* CTA */}
//               <a
//                 href="https://wa.me/918977511813"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className={`inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all hover:scale-[1.05] ${
//                   prog.highlighted
//                     ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
//                     : "glass-strong text-foreground hover:bg-white/10"
//                 }`}
//               >
//                 Enroll Now <ArrowRight size={15} />
//               </a>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProgramsSection;
"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, Crown } from "lucide-react";

const programs = [
  {
    title: "One-Time Consultation & Diet Plan",
    price: "₹1,000",
    description:
      "A perfect starting point if you need clarity and structured direction.",
    features: [
      "45–60 minute detailed consultation",
      "Customized diet plan with flexible options",
      "General nutrition & lifestyle guidelines",
      "Clear understanding of what works for your body",
      "No follow-up support included",
    ],
    highlighted: false,
  },
  {
    title: "21-Day Detox Program",
    price: "₹1,800",
    description:
      "A gentle reset designed to support your body from within.",
    features: [
      "Structured food + liquid nourishment plan",
      "Improves digestion & reduces bloating",
      "Supports metabolic reset & reduces inflammation",
      "Enhances energy levels",
      "Ideal for heaviness, sluggishness & gut discomfort",
    ],
    highlighted: false,
  },
  {
    title: "45-Day Program",
    price: "₹3,100",
    description:
      "A structured approach to healing and sustainable habit-building.",
    features: [
      "Personalized weekly diet plans",
      "Detailed meal & lifestyle guidance",
      "Regular follow-ups & progress tracking",
      "Adjustments based on your body response",
      "Ideal for weight, PCOS, thyroid & metabolic issues",
    ],
    highlighted: false,
  },
  {
    title: "90-Day Program",
    price: "₹4,500",
    description:
      "A comprehensive long-term program focused on deep healing and transformation.",
    features: [
      "Fully personalized weekly nutrition plans",
      "Continuous support throughout the journey",
      "Regular follow-ups & accountability",
      "Root-cause focused healing approach",
      "Best for PCOS, diabetes, fertility, gut & chronic fatigue",
    ],
    highlighted: true,
  },
];

const ProgramsSection = () => {
  return (
    <section id="programs" className="py-28 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-gradient-to-br from-[hsla(210,100%,68%,0.15)] to-[hsla(28,30%,60%,0.08)] blur-3xl animate-glow-pulse pointer-events-none" />

      <div className="container mx-auto px-5 relative z-10">

        {/* CONSULTATION DETAILS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-3">
            Consultation Details
          </p>

          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-6">
            Personalized care beyond{" "}
            <span className="text-gradient-gold">quick fixes</span>
          </h2>

          <p className="text-muted-foreground leading-relaxed mb-4">
            At Soma Roots, every consultation goes beyond surface-level advice.
            Each session lasts <b>45–60 minutes</b>, allowing us to deeply
            understand your body, lifestyle, and health concerns.
          </p>

          <p className="text-muted-foreground leading-relaxed">
            We carefully review your <b>blood reports, medical history, daily routine,
            and food habits</b> to create a plan that is safe, evidence-based,
            and tailored specifically for you.
          </p>
        </motion.div>

        {/* PROGRAMS HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-3">
            Nutrition Programs
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold">
            Choose your path to{" "}
            <span className="text-gradient-gold">wellness</span>
          </h2>
        </motion.div>

        {/* CARDS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((prog, i) => (
            <motion.div
              key={prog.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`relative rounded-2xl p-7 flex flex-col transition-all duration-300 hover:scale-[1.03] ${
                prog.highlighted
                  ? "glass-strong ring-2 ring-primary/40 shadow-xl shadow-primary/10"
                  : "glass-card hover:shadow-lg"
              }`}
            >
              {/* Badge */}
              {prog.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 bg-primary text-primary-foreground text-xs font-semibold px-4 py-1.5 rounded-full shadow-md">
                  <Crown size={12} /> Most Recommended
                </div>
              )}

              {/* Title */}
              <h3 className="font-heading text-lg font-bold mt-2 mb-1">
                {prog.title}
              </h3>

              {/* Price */}
              <p className="text-3xl font-bold text-gradient-gold mb-3">
                {prog.price}
              </p>

              {/* Description */}
              <p className="text-sm text-muted-foreground mb-4">
                {prog.description}
              </p>

              {/* Features */}
              <ul className="flex flex-col gap-2 mb-6 flex-1">
                {prog.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check size={15} className="text-primary mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="https://wa.me/918977511813"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all hover:scale-[1.05] ${
                  prog.highlighted
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                    : "glass-strong text-foreground hover:bg-white/10"
                }`}
              >
                Enroll Now <ArrowRight size={15} />
              </a>
            </motion.div>
          ))}
        </div>

        {/* IMPORTANT NOTE */}
        <div className="max-w-3xl mx-auto mt-20 text-center text-sm text-muted-foreground leading-relaxed">
          <p className="mb-3 font-semibold text-foreground">
            📌 Important Note
          </p>
          <p>
            For 21-day, 45-day, and 90-day programs, consistency is essential.
            You will need to share regular updates on food intake, sleep,
            activity, and lifestyle to ensure effective progress. Missed updates
            may require repeating certain days.
          </p>
        </div>

        {/* CTA FINAL */}
        <div className="text-center mt-12">
          <a
            href="https://wa.me/918977511813"
            target="_blank"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:scale-[1.05] transition"
          >
            Book Consultation <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;