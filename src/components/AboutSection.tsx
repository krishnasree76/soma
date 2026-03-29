// import { motion } from "framer-motion";
// import founderImg from "@/assets/founder.png";

// const AboutSection = () => {
//   return (
//     <section id="about" className="py-24 relative">
//       <div className="container mx-auto px-5">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="grid lg:grid-cols-2 gap-14 items-center"
//         >
//           {/* Image */}
//           <div className="relative">
//             <div className="glass-card rounded-3xl p-3 max-w-md mx-auto lg:mx-0">
//               <img
//                 src={founderImg}
//                 alt="Geethika Kantamneni – Clinical & Holistic Nutritionist"
//                 className="rounded-2xl w-full object-cover aspect-[3/4]"
//               />
//             </div>
//             {/* Floating glass card */}
//             <motion.div
//               initial={{ opacity: 0, x: 20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.4 }}
//               className="glass-strong rounded-2xl p-5 absolute -bottom-6 -right-2 lg:right-[-40px] max-w-[220px]"
//             >
//               <p className="text-sm font-semibold text-foreground">500+ clients</p>
//               <p className="text-xs text-muted-foreground mt-1">helped reclaim their health naturally</p>
//             </motion.div>
//           </div>

//           {/* Text */}
//           <div className="flex flex-col gap-6">
//             <p className="text-sm font-semibold tracking-widest uppercase text-primary">Meet the Founder</p>
//             <h2 className="font-heading text-3xl sm:text-4xl font-bold leading-tight">
//               Geethika Kantamneni
//             </h2>
//             <p className="text-lg text-muted-foreground leading-relaxed">
//               Clinical &amp; holistic nutritionist with Masters from Sheffield Hallam University &amp; Manipal Academy of Higher Education.
//             </p>
//             <div className="glass-card rounded-2xl p-6 mt-2">
//               <p className="text-foreground/80 leading-relaxed text-[15px]">
//                 "My journey began with my own struggle — PCOS, weight fluctuations, and fertility challenges. 
//                 Through years of research and personal healing, I discovered that true wellness comes from 
//                 understanding your body, not restricting it. I founded Soma Roots to help others find that 
//                 same path — healing through knowledge, compassion, and root-cause nutrition."
//               </p>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default AboutSection;
"use client";

import { motion } from "framer-motion";
import founderImg from "@/assets/founder.png";
import approachImg from "@/assets/approach.png";
const AboutSection = () => {
  return (
    <section id="about" className="py-28 relative overflow-hidden">
      <div className="container mx-auto px-5">

        {/* TOP HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-3">
            About
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold">
            Soma Roots
          </h2>
        </motion.div>

        {/* ABOUT SOMA ROOTS */}
        <div className="max-w-4xl mx-auto text-muted-foreground leading-relaxed space-y-5 mb-20 text-center">
          <p>
            At Soma Roots, we believe that true healing doesn’t begin with restriction — it begins with understanding.
          </p>
          <p>
            In a world full of quick fixes and surface-level solutions, Soma Roots was created as a space to slow down, listen deeply, and address the body at its core. Because your body is not working against you — it is communicating with you.
          </p>
          <p>
            Rooted in the philosophy of holistic nourishment and clinical precision, Soma Roots blends science with intuition, modern nutrition with traditional wisdom, and structure with sustainability.
          </p>
          <p>
            This is not just about food. This is about restoring balance, rebuilding trust with your body, and creating a way of living that feels aligned, not forced.
          </p>
        </div>

        {/* FOUNDER SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="grid lg:grid-cols-2 gap-14 items-center mb-20"
        >
          {/* Image */}
          <div className="relative">
            <div className="glass-card rounded-3xl p-3 max-w-md mx-auto lg:mx-0">
              <img
                src={founderImg}
                alt="Geethika Kantamneni – Clinical & Holistic Nutritionist"
                className="rounded-2xl w-full object-cover aspect-[3/4]"
              />
            </div>

            {/* Floating stat */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="glass-strong rounded-2xl p-5 absolute -bottom-6 -right-2 lg:right-[-40px] max-w-[220px]"
            >
              <p className="text-sm font-semibold text-foreground">500+ clients</p>
              <p className="text-xs text-muted-foreground mt-1">
                helped reclaim their health naturally
              </p>
            </motion.div>
          </div>

          {/* Text */}
          <div className="flex flex-col gap-6">
            <p className="text-sm font-semibold tracking-widest uppercase text-primary">
              🤍 My Story
            </p>

            <h2 className="font-heading text-3xl sm:text-4xl font-bold">
              Hi, I’m Geethika Kantamneni — the heart behind Soma Roots.
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              I’m a clinical and holistic nutritionist with a Master’s in Food Science & Applied Nutrition from Sheffield Hallam University, UK, and another Master’s in Dietetics & Applied Nutrition from Manipal.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              But beyond my degrees, my journey into nutrition is deeply personal.
            </p>

            <div className="glass-card rounded-2xl p-6">
              <p className="text-foreground/80 leading-relaxed text-[15px] space-y-3">
                There was a time when I struggled with PCOS, weight fluctuations, and fertility challenges. I understand what it feels like to feel disconnected from your own body - to try everything, yet feel like nothing is truly working.
                <br /><br />
                That phase of my life wasn’t just difficult, it was transformative.
                <br /><br />
                It taught me that healing is not about extremes. It’s not about punishing your body into change. It’s about understanding its language, respecting its pace, and nourishing it in the way it truly needs.
                <br /><br />
                Soma Roots was born from this very realization - A space where no one has to feel lost, unheard, or overwhelmed in their health journey.
              </p>
            </div>
          </div>
        </motion.div>

        {/* APPROACH */}
        <div className="max-w-6xl mx-auto mb-20 grid lg:grid-cols-2 gap-12 items-center">

  {/* LEFT SIDE (your existing content) */}
  <div>
    <h3 className="text-center lg:text-left font-heading text-2xl font-bold mb-6">
      🌿 My Approach
    </h3>

    <div className="text-muted-foreground space-y-4 leading-relaxed text-center lg:text-left">
      <p>
        My approach is a blend of clinical expertise and compassionate care.
      </p>
      <p>
        I don’t believe in one-size-fits-all diets or unrealistic routines.
      </p>
      <p>Instead, I focus on:</p>
    </div>

    <ul className="mt-6 space-y-3 text-muted-foreground">
      <li>• Understanding your body’s root cause</li>
      <li>• Supporting hormones, gut health, and metabolism</li>
      <li>• Creating personalized, sustainable nutrition plans</li>
      <li>• Helping you build a healthy relationship with food</li>
    </ul>

    <p className="mt-6 text-muted-foreground">
      Every plan is thoughtfully designed to fit into your lifestyle - not disrupt it.Because healing should feel grounded, gentle, and lasting.
    </p>
  </div>

  {/* RIGHT SIDE IMAGE */}
  <div className="flex justify-center lg:justify-end">
    <div className="glass-card rounded-3xl p-3 max-w-sm w-full">
      <img
  src={approachImg}
  alt="Nutrition approach"
  className="rounded-2xl w-full object-cover"
/>
    </div>
  </div>
</div>

        {/* EXPECTATIONS */}
        <div className="max-w-4xl mx-auto mb-20 text-center">
          <h3 className="font-heading text-2xl font-bold mb-6">
            ✨ What You Can Expect
          </h3>

          <ul className="space-y-3 text-muted-foreground">
            <li>• A safe, non-judgmental space</li>
            <li>• Deep, personalized understanding of your health</li>
            <li>• Practical guidance that fits your real life</li>
            <li>• Support that goes beyond just a diet plan</li>
          </ul>

          <p className="mt-6 text-muted-foreground">
            This is a journey we take together - step by step, at your pace.
          </p>
        </div>

        {/* FINAL NOTE */}
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="font-heading text-2xl font-bold mb-6">
            🌸 A Note From Me To You
          </h3>

          <div className="glass-card rounded-2xl p-6 text-muted-foreground leading-relaxed">
            <p>
              If you’ve been feeling stuck, exhausted, or disconnected from your body - I want you to know that you’re not alone.
              <br /><br />
              Your body is not a problem to fix. It is a story to understand.
              <br /><br />
              And sometimes, all it needs is the right support to come back into balance.
              <br /><br />
              I’m here to guide you through that - gently, honestly, and wholeheartedly.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
