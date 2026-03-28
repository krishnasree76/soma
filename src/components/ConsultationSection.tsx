// import { motion } from "framer-motion";
// import { FileText, Activity, Clock, ShieldCheck } from "lucide-react";

// const includes = [
//   { icon: Clock, label: "45–60 min in-depth session" },
//   { icon: FileText, label: "Blood report analysis" },
//   { icon: Activity, label: "Lifestyle & medical history review" },
//   { icon: ShieldCheck, label: "Personalized safe nutrition plan" },
// ];

// const ConsultationSection = () => {
//   return (
//     <section id="consultation" className="py-24 relative">
//       <div className="container mx-auto px-5">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="glass-card rounded-3xl p-8 sm:p-12 lg:p-16 max-w-4xl mx-auto text-center"
//         >
//           <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-3">Consultation</p>
//           <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">What to expect</h2>
//           <p className="text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
//             Every consultation is a deep dive into your health — we leave no stone unturned to build a plan that truly works for you.
//           </p>

//           <div className="grid sm:grid-cols-2 gap-6">
//             {includes.map((item, i) => (
//               <motion.div
//                 key={item.label}
//                 initial={{ opacity: 0, y: 15 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: i * 0.1 }}
//                 className="glass rounded-2xl p-6 flex items-start gap-4 text-left"
//               >
//                 <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
//                   <item.icon size={20} className="text-primary" />
//                 </div>
//                 <p className="text-sm font-medium text-foreground/80">{item.label}</p>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default ConsultationSection;
import { motion } from "framer-motion";
import { FileText, Activity, Clock, ShieldCheck, Sparkles } from "lucide-react";

const includes = [
  { icon: Clock, label: "45–60 min deep-dive session" },
  { icon: FileText, label: "Detailed blood report decoding" },
  { icon: Activity, label: "Lifestyle & medical history insights" },
  { icon: ShieldCheck, label: "Tailored nutrition & safety blueprint" },
];

const ConsultationSection = () => {
  return (
    <section id="consultation" className="relative py-28 overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent rounded-full blur-3xl" />
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-6 relative"
      >
        <div className="glass-card rounded-3xl p-10 sm:p-14 max-w-4xl mx-auto text-center relative overflow-hidden shadow-xl">
          {/* Floating icon */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="absolute -top-6 right-6 text-primary"
          >
            <Sparkles size={24} />
          </motion.div>

          <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-3">
            Transformation Starts Here
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-5 bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
            What to Expect from Your Consultation
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-12 leading-relaxed">
            We’ll explore your health story in depth — understanding your biology, habits, and goals
            to design a plan that’s safe, smart, and built uniquely for you.
          </p>

          <div className="grid sm:grid-cols-2 gap-8">
            {includes.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5, ease: "easeOut" }}
                className="glass hover:shadow-lg hover:-translate-y-1 transition-all duration-300 rounded-2xl p-6 flex items-start gap-4 text-left"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon size={22} className="text-primary" />
                </div>
                <p className="text-base font-medium text-foreground/90">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ConsultationSection;

