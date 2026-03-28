// // import { motion } from "framer-motion";

// // const TrustSection = () => {
// //   const placeholders = ["HealthLine", "WellnessDaily", "NutriLife", "HealNow", "VitalCore"];

// //   return (
// //     <section className="py-20 relative">
// //       <div className="container mx-auto px-5 text-center">
// //         <motion.p
// //           initial={{ opacity: 0 }}
// //           whileInView={{ opacity: 1 }}
// //           viewport={{ once: true }}
// //           className="text-sm text-muted-foreground mb-8 tracking-wide"
// //         >
// //           Trusted by clients across India
// //         </motion.p>
// //         <motion.div
// //           initial={{ opacity: 0, y: 10 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true }}
// //           className="flex flex-wrap items-center justify-center gap-8 sm:gap-14"
// //         >
// //           {placeholders.map((name) => (
// //             <span
// //               key={name}
// //               className="text-xl font-heading font-bold text-foreground/15 select-none"
// //             >
// //               {name}
// //             </span>
// //           ))}
// //         </motion.div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default TrustSection;
// import { motion } from "framer-motion";

// const TrustSection = () => {
//   const placeholders = [
//     "HealthLine",
//     "WellnessDaily",
//     "NutriLife",
//     "HealNow",
//     "VitalCore",
//   ];

//   return (
//     <section className="py-20 relative overflow-hidden">
//       {/* subtle glow (theme consistency) */}
//       <div className="absolute bottom-[-20%] right-[-10%] w-[300px] h-[300px] rounded-full bg-gradient-to-br from-[hsla(210,100%,68%,0.12)] to-[hsla(28,30%,60%,0.08)] blur-3xl pointer-events-none" />

//       <div className="container mx-auto px-5 text-center relative z-10">
//         <motion.p
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           className="text-sm text-muted-foreground mb-10 tracking-wide"
//         >
//           Trusted by clients across India
//         </motion.p>

//         <motion.div
//           initial={{ opacity: 0, y: 10 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="flex flex-wrap items-center justify-center gap-10 sm:gap-16"
//         >
//           {placeholders.map((name) => (
//             <span
//               key={name}
//               className="
//                 text-xl sm:text-2xl font-heading font-bold
//                 text-foreground/40
//                 hover:text-foreground/70
//                 transition-colors duration-300
//                 select-none
//               "
//             >
//               {name}
//             </span>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default TrustSection;
"use client";

import { motion } from "framer-motion";
import { Marquee } from "@/components/ui/marquee.tsx";

const TrustSection = () => {
  const placeholders = [
    "HealthLine",
    "WellnessDaily",
    "NutriLife",
    "HealNow",
    "VitalCore",
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-5 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm text-muted-foreground mb-8 tracking-wide"
        >
          Trusted by clients across India
        </motion.p>

        {/* Moving strip */}
        <Marquee pauseOnHover className="py-2">
          {placeholders.map((name) => (
            <span
  key={name}
  className="
    mx-8 text-xl sm:text-2xl 
    font-heading font-bold 
    text-gradient-gold opacity-70
    select-none
  "
>
  {name}
</span>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default TrustSection;