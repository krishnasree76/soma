import logo from "@/assets/soma-roots-logo.png";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-5 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Soma Roots" className="h-8 w-auto opacity-60" />
          <span className="text-sm text-muted-foreground">© 2026 Soma Roots. All rights reserved.</span>
        </div>
        <p className="text-xs text-muted-foreground italic">Rooted nutrition for lasting vitality</p>
      </div>
    </footer>
  );
};

export default Footer;
