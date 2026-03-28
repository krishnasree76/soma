// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ArrowRight, Menu, X } from "lucide-react";
// import logo from "@/assets/soma-roots-logo.png";

// const navLinks = [
//   { label: "Home", href: "#home" },
//   { label: "About", href: "#about" },
//   { label: "Programs", href: "#programs" },
//   { label: "Consultation", href: "#consultation" },
//   { label: "Contact", href: "#contact" },
// ];

// const Navbar = () => {
//   const [open, setOpen] = useState(false);

//   return (
//     <motion.nav
//       initial={{ y: -40, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.7, ease: "easeOut" }}
//       className="fixed top-5 md:top-8 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl"
//     >
//       <div className="glass rounded-2xl px-5 py-3 flex items-center justify-between">
//         <a href="#home" className="flex items-center gap-2">
//           <img src={logo} alt="Soma Roots" className="h-10 w-auto" />
//         </a>

//         {/* Desktop links */}
//         <div className="hidden md:flex items-center gap-7">
//           {navLinks.map((link) => (
//             <a
//               key={link.href}
//               href={link.href}
//               className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
//             >
//               {link.label}
//             </a>
//           ))}
//         </div>

//         <a
//           href="https://wa.me/918977511813"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="hidden md:inline-flex items-center gap-2 glass-strong rounded-xl px-5 py-2.5 text-sm font-semibold text-foreground hover:scale-[1.03] transition-transform"
//         >
//           Book Now <ArrowRight size={16} />
//         </a>

//         {/* Mobile toggle */}
//         <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-foreground">
//           {open ? <X size={22} /> : <Menu size={22} />}
//         </button>
//       </div>

//       {/* Mobile menu */}
//       <AnimatePresence>
//         {open && (
//           <motion.div
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -10 }}
//             className="glass rounded-2xl mt-2 p-5 md:hidden flex flex-col gap-4"
//           >
//             {navLinks.map((link) => (
//               <a
//                 key={link.href}
//                 href={link.href}
//                 onClick={() => setOpen(false)}
//                 className="text-sm font-medium text-foreground/80 hover:text-foreground"
//               >
//                 {link.label}
//               </a>
//             ))}
//             <a
//               href="https://wa.me/918977511813"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-flex items-center justify-center gap-2 glass-strong rounded-xl px-5 py-2.5 text-sm font-semibold"
//             >
//               Book Now <ArrowRight size={16} />
//             </a>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.nav>
//   );
// };

// export default Navbar;
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import logo from "@/assets/image.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Consultation", href: "#consultation" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Track scroll for navbar background enhancement
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) => link.href.substring(1));
      
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll navigation handler
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);

    if (element) {
      const offsetTop = element.offsetTop - 100; // Account for fixed navbar
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    } else if (targetId === "home") {
      // If no #home element exists, scroll to top
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    setOpen(false);
    setActiveSection(targetId);
  };

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="fixed top-0 left-0 w-full z-50"
      >
        <div
          className={`

            px-4 py-3 
            flex items-center justify-between
            backdrop-blur-xl border border-white/20
            transition-all duration-300
            ${scrolled 
  ? "bg-white shadow-lg shadow-black/10" 
  : "bg-white/90"
}
          `}
        >
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex items-center gap-2 group"
          >
            <motion.div
  className="rounded-xl p-2"
  animate={{
    boxShadow: [
      "0 0 0px rgba(184, 155, 122, 0.2)",
      "0 0 20px rgba(184, 155, 122, 0.5)",
      "0 0 0px rgba(184, 155, 122, 0.2)"
    ]
  }}
  transition={{
    duration: 2.5,
    repeat: Infinity,
    ease: "easeInOut"
  }}
>
  <img
    src={logo}
    alt="Soma Roots"
    className="h-10 sm:h-12"
  />
</motion.div>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`
                    relative px-4 py-2 text-sm font-medium rounded-xl
                    transition-all duration-300
                    ${isActive 
                      ? "text-gray-900" 
                      : "text-gray-500/60 hover:text-foreground"
                    }
                  `}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="activeTab"
                      className="absolute inset-0 bg-white/10 rounded-xl -z-10"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <a
  href="https://wa.me/918977511813"
  target="_blank"
  rel="noopener noreferrer"
  className="
    hidden md:inline-flex items-center gap-2 
    bg-gradient-to-r from-emerald-500 to-teal-500
    hover:from-emerald-400 hover:to-teal-400
    rounded-xl px-5 py-2.5 
    text-sm font-semibold text-white
    shadow-lg shadow-emerald-500/25
    hover:shadow-emerald-500/40
    hover:scale-[1.02] active:scale-[0.98]
    transition-all duration-300
  "
>
  Book Now 
  <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
</a>

          {/* Mobile toggle */}
          <motion.button
            onClick={() => setOpen(!open)}
            className="
              md:hidden p-2.5 rounded-xl
              bg-gray-100 hover:bg-gray-200
              text-foreground
              transition-colors duration-200
            "
            whileTap={{ scale: 0.95 }}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <AnimatePresence mode="wait">
              {open ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={22} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={22} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="
                mt-3 rounded-2xl p-2
                backdrop-blur-xl bg-white/15 
                border border-gray-200
                shadow-xl shadow-black/10
                md:hidden
              "
            >
              <div className="flex flex-col gap-1">
                {navLinks.map((link, index) => {
                  const isActive = activeSection === link.href.substring(1);
                  return (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className={`
                        px-4 py-3 rounded-xl
                        text-base font-medium
                        transition-all duration-200
                        ${isActive 
                          ? "bg-white/15 text-foreground" 
                          : "text-foreground/70 hover:bg-white/10 hover:text-foreground"
                        }
                      `}
                    >
                      {link.label}
                    </motion.a>
                  );
                })}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="mt-3 pt-3 border-t border-white/10"
              >
                <a
  href="https://wa.me/918977511813"
  target="_blank"
  rel="noopener noreferrer"
  className="
    flex items-center justify-center gap-2 
    bg-gradient-to-r from-emerald-500 to-teal-500
    rounded-xl px-5 py-3.5
    text-base font-semibold text-white
    shadow-lg shadow-emerald-500/25
    active:scale-[0.98]
    transition-all duration-200
  "
>
  Book Now <ArrowRight size={18} />
</a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Mobile menu backdrop */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
