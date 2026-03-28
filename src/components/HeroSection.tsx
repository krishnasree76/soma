// import { motion } from "framer-motion";
// import { ArrowRight, Star } from "lucide-react";

// const HeroSection = () => {
//   return (
//     <section id="home" className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
//       {/* Glow orb background */}
//       <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[hsla(210,100%,68%,0.15)] to-[hsla(211,100%,54%,0.08)] blur-3xl animate-glow-pulse pointer-events-none" />

//       <div className="container mx-auto px-5 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
//         {/* Left */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="flex flex-col gap-7"
//         >
//           {/* Badge */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ delay: 0.3 }}
//             className="glass-card inline-flex items-center gap-2 rounded-full px-4 py-2 w-fit text-sm"
//           >
//             <div className="flex">
//               {[...Array(5)].map((_, i) => (
//                 <Star key={i} size={14} fill="#FF801E" stroke="#FF801E" />
//               ))}
//             </div>
//             <span className="text-foreground/70">Rated 4.9/5 by 2700+ clients</span>
//           </motion.div>

//           <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
//             Heal from the <span className="text-gradient-gold">root</span>, not the surface
//           </h1>

//           <p className="text-muted-foreground text-lg max-w-lg leading-relaxed">
//             Personalized nutrition designed to restore balance, support hormones, and help your body heal naturally.
//           </p>

//           <div className="flex flex-wrap gap-4 mt-2">
//             <a
//               href="https://wa.me/918977511813"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-flex items-center gap-2 bg-primary text-primary-foreground rounded-2xl px-7 py-3.5 font-semibold text-sm hover:scale-[1.03] transition-transform shadow-lg shadow-primary/20"
//             >
//               Book Consultation <ArrowRight size={16} />
//             </a>
//             <a
//               href="#programs"
//               className="inline-flex items-center gap-2 glass-strong rounded-2xl px-7 py-3.5 font-semibold text-sm text-foreground hover:scale-[1.03] transition-transform"
//             >
//               View Programs
//             </a>
//           </div>
//         </motion.div>

//         {/* Right — Glass orb */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 1, delay: 0.3 }}
//           className="relative flex items-center justify-center"
//         >
//           <div className="relative w-72 h-72 sm:w-96 sm:h-96 mx-auto">
//             {/* Outer glow */}
//             <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[hsla(210,100%,68%,0.2)] to-[hsla(28,30%,60%,0.15)] blur-2xl animate-glow-pulse" />
//             {/* Glass sphere */}
//             <div className="absolute inset-4 rounded-full glass-strong animate-orb-rotate" />
//             {/* Inner glow */}
//             <div className="absolute inset-12 rounded-full bg-gradient-to-tr from-[hsla(210,100%,68%,0.12)] to-[hsla(28,30%,60%,0.08)] blur-xl animate-float" />
//             {/* Center emblem */}
//             <div className="absolute inset-0 flex items-center justify-center">
//               <span className="font-heading text-3xl sm:text-4xl font-bold text-gradient-gold opacity-70">SR</span>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;
// pages/home.tsx OR wherever
import HeroSection from "@/components/ui/hero-section-9";
import { Users, Briefcase, Link as LinkIcon } from "lucide-react";

export default function Home() {
  return (
    <HeroSection
      title={
        <>
          Heal from the <span className="text-gradient-gold">root</span>
        </>
      }
      subtitle="Personalized nutrition designed to restore balance."
      actions={[
        {
          text: "Book Consultation",
          onClick: () => window.open("https://wa.me/918977511813"),
        },
        {
          text: "View Programs",
          onClick: () => document.getElementById("programs")?.scrollIntoView(),
          variant: "outline",
        },
      ]}
      stats={[
        {
          value: "4.9/5",
          label: "Client Rating",
          icon: <Users className="h-5 w-5" />,
        },
        {
          value: "2700+",
          label: "Clients",
          icon: <Briefcase className="h-5 w-5" />,
        },
        {
          value: "100%",
          label: "Natural Healing",
          icon: <LinkIcon className="h-5 w-5" />,
        },
      ]}
      images={[
        "https://images.unsplash.com/photo-1490645935967-10de6ba17061",
        "https://images.unsplash.com/photo-1624969862293-b749659ccc4e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1506126613408-eca07ce68773",
        
      ]}
    />
  );
}
