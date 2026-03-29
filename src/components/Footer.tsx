import logo from "@/assets/image.png";
import { Heart } from "lucide-react";
const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-5 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Soma Roots" className="h-9 sm:h-10 w-auto opacity-60" />
          <span className="text-sm text-muted-foreground">© 2026 Soma Roots. All rights reserved.</span>
        </div>
        <p className="text-xs text-muted-foreground italic">Rooted nutrition for lasting vitality</p>
        <div className="flex justify-center items-center gap-1">
            Made with <Heart className="inline h-4 w-4 text-red-500 mx-1" /> by
            <a
              href="https://staffarc.in"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-orange-600 hover:underline"
            >
              <img
                src="https://www.staffarc.in/images/Staffarc-logo.png"
                alt="StaffArc logo"
                className="h-5 w-5 object-contain"
              />
              StaffArc
            </a>
          </div>
      </div>
    </footer>
  );
};

export default Footer;
