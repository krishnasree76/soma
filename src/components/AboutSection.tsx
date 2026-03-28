import { motion } from "framer-motion";
import founderImg from "@/assets/founder.png";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid lg:grid-cols-2 gap-14 items-center"
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
            {/* Floating glass card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="glass-strong rounded-2xl p-5 absolute -bottom-6 -right-2 lg:right-[-40px] max-w-[220px]"
            >
              <p className="text-sm font-semibold text-foreground">500+ clients</p>
              <p className="text-xs text-muted-foreground mt-1">helped reclaim their health naturally</p>
            </motion.div>
          </div>

          {/* Text */}
          <div className="flex flex-col gap-6">
            <p className="text-sm font-semibold tracking-widest uppercase text-primary">Meet the Founder</p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold leading-tight">
              Geethika Kantamneni
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Clinical &amp; holistic nutritionist with Masters from Sheffield Hallam University &amp; Manipal Academy of Higher Education.
            </p>
            <div className="glass-card rounded-2xl p-6 mt-2">
              <p className="text-foreground/80 leading-relaxed text-[15px]">
                "My journey began with my own struggle — PCOS, weight fluctuations, and fertility challenges. 
                Through years of research and personal healing, I discovered that true wellness comes from 
                understanding your body, not restricting it. I founded Soma Roots to help others find that 
                same path — healing through knowledge, compassion, and root-cause nutrition."
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
