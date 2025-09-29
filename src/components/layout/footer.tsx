import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <MapPin className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold">OpenNow</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Know before you go. Real-time shop status updates.
            </p>
          </div>
          
          <div className="space-y-3">
            <h4 className="font-medium">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/search" className="text-muted-foreground hover:text-foreground">Search Shops</Link></li>
              <li><Link to="/how-it-works" className="text-muted-foreground hover:text-foreground">How it Works</Link></li>
              <li><Link to="/for-owners" className="text-muted-foreground hover:text-foreground">For Shop Owners</Link></li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <h4 className="font-medium">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/faq" className="text-muted-foreground hover:text-foreground">FAQ</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-foreground">Contact</Link></li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <h4 className="font-medium">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/privacy" className="text-muted-foreground hover:text-foreground">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-muted-foreground hover:text-foreground">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          © 2024 OpenNow. Know before you go.
        </div>
      </div>
    </footer>
  );
}