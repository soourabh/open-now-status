import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, Store } from "lucide-react";

export function Header() {
  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <MapPin className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold">OpenNow</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/search" className="text-sm font-medium hover:text-primary transition-colors">
            Search
          </Link>
          <Link to="/how-it-works" className="text-sm font-medium hover:text-primary transition-colors">
            How it works
          </Link>
          <Link to="/for-owners" className="text-sm font-medium hover:text-primary transition-colors">
            For Owners
          </Link>
        </nav>
        
        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/auth">Sign in</Link>
          </Button>
          <Button size="sm" asChild>
            <Link to="/for-owners">
              <Store className="w-4 h-4 mr-2" />
              I'm a shop owner
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}