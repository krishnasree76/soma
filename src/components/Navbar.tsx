import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import logo from "@/assets/soma-roots-logo.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Consultation", href: "#consultation" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="fixed top-5 md:top-8 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl"
    >
      <div className="glass rounded-2xl px-5 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <img src={logo} alt="Soma Roots" className="h-10 w-auto" />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="https://wa.me/918977511813"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 glass-strong rounded-xl px-5 py-2.5 text-sm font-semibold text-foreground hover:scale-[1.03] transition-transform"
        >
          Book Now <ArrowRight size={16} />
        </a>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-foreground">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="glass rounded-2xl mt-2 p-5 md:hidden flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-foreground/80 hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/918977511813"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 glass-strong rounded-xl px-5 py-2.5 text-sm font-semibold"
            >
              Book Now <ArrowRight size={16} />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
