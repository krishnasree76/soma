"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    text: "Nutritionist Geethika made me realise that dieting is not starving but enjoying balanced, tasty food. Her plan perfectly suited my corporate lifestyle and even included my South Indian cravings.",
    name: "Nagasai Nagarjuna",
  },
  {
    text: "I was overweight and later diagnosed with a disc bulge. With her guidance, I reduced weight and my pain reduced significantly. I can now carry out daily activities comfortably.",
    name: "Raj",
  },
  {
    text: "My stamina and recovery in badminton improved significantly. The plan was simple, practical, and based on home-cooked meals. I feel more agile and consistent.",
    name: "Prashant",
  },
  {
    text: "I struggled with fertility and felt overwhelmed. With simple dietary changes and balance, I conceived naturally within months. It gave me hope.",
    name: "Swecha",
  },
  {
    text: "Living in Australia, I wasn’t sure online consultation would work. But I managed diabetes, stopped medication, and lost 13kg with her practical approach.",
    name: "Devika",
  },
  {
    text: "After 15 years of PCOS struggles, my periods became regular naturally without pills. I finally feel in control of my health.",
    name: "Shravya",
  },
  {
    text: "I lost 10kg and recovered from gastric issues. Her guidance was simple, sustainable, and she was always available to help.",
    name: "Vinni Bobba",
  },
  {
    text: "During breast cancer treatment, her dietary guidance brought steady improvements. Her care and support truly stood out.",
    name: "Saraswathi",
  },
];
const Card = ({ t }: any) => (
  <div className="w-[260px] glass-card p-4 rounded-2xl shadow-lg">
    <p className="text-sm text-muted-foreground leading-relaxed">
      {t.text}
    </p>
    <p className="mt-4 font-semibold text-gradient-gold">
      — {t.name}
    </p>
  </div>
);

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-5">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-3">
            Testimonials
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold">
            Real stories. <span className="text-gradient-gold">Real results.</span>
          </h2>
        </motion.div>

        {/* Scrolling testimonials */}
       <div className="flex justify-center gap-6 mt-10 max-h-[900px] overflow-hidden">
  
  {/* Column 1 */}
  <motion.div
    animate={{ y: ["0%", "-50%"] }}
    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
    className="flex flex-col gap-6"
  >
    {[...testimonials, ...testimonials].map((t, i) => (
      <Card key={i} t={t} />
    ))}
  </motion.div>

  {/* Column 2 (reverse direction) */}
  <motion.div
    animate={{ y: ["-50%", "0%"] }}
    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
    className="hidden md:flex flex-col gap-6"
  >
    {[...testimonials, ...testimonials].map((t, i) => (
      <Card key={i} t={t} />
    ))}
  </motion.div>

  {/* Column 3 */}
  <motion.div
    animate={{ y: ["0%", "-50%"] }}
    transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
    className="hidden lg:flex flex-col gap-6"
  >
    {[...testimonials, ...testimonials].map((t, i) => (
      <Card key={i} t={t} />
    ))}
  </motion.div>

</div>
      </div>
    </section>
  );
}