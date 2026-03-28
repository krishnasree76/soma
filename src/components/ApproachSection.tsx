import { motion } from "framer-motion";
import { Search, Heart, Leaf, Utensils, User } from "lucide-react";

const approaches = [
  { icon: Search, title: "Root Cause Focus", desc: "We identify and address the underlying cause — not just mask symptoms." },
  { icon: Heart, title: "Hormonal Balance", desc: "Restore hormonal harmony through targeted, evidence-based nutrition." },
  { icon: Leaf, title: "Gut Health", desc: "A healthy gut is the foundation. We prioritize microbiome restoration." },
  { icon: Utensils, title: "Sustainable Nutrition", desc: "No crash diets — real, sustainable food plans that fit your lifestyle." },
  { icon: User, title: "Personalized Plans", desc: "Every body is unique. Your plan is designed specifically for you." },
];

const ApproachSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-3">Our Approach</p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold">How we help you heal</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {approaches.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-2xl p-7 hover:scale-[1.02] transition-transform"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <item.icon size={22} className="text-primary" />
              </div>
              <h3 className="font-heading text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
