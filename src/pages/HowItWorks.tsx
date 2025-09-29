import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Layout } from "@/components/layout/layout";
import { Store, Clock, Heart, MapPin, Bell, Shield } from "lucide-react";

export default function HowItWorks() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-b from-background to-muted/20 py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            How OpenNow works
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Simple, real-time shop status updates. No bookings, no payments, just visibility when it matters.
          </p>
        </div>
      </section>

      {/* Main Steps */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Store className="w-10 h-10 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">1. Owners tap to update</h2>
              <p className="text-muted-foreground text-lg">
                Shop owners sign up and get access to <strong>one big toggle button</strong>. 
                Tap to switch between "Open" and "Closed" instantly.
              </p>
              <Card className="card-soft">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="text-center">
                      <h3 className="font-semibold mb-2">Blade & Fade Barbershop</h3>
                      <div className="bg-status-open text-status-open-foreground px-8 py-4 rounded-xl text-lg font-bold">
                        OPEN
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">
                        Last updated: Just now
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Clock className="w-10 h-10 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">2. Shoppers see live status</h2>
              <p className="text-muted-foreground text-lg">
                Real-time updates with <strong>exact timestamps</strong>. 
                If status is older than 2 hours, we show a gentle warning.
              </p>
              <Card className="card-soft">
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <h3 className="font-semibold">Bean & Bun Café</h3>
                    <div className="flex items-center justify-center gap-2">
                      <span className="status-pill status-open">OPEN</span>
                      <span className="text-xs text-muted-foreground">
                        Updated 5m ago
                      </span>
                    </div>
                    <div className="flex items-center justify-center text-sm text-muted-foreground">
                      <MapPin className="w-3 h-3 mr-1" />
                      Castro, San Francisco
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Heart className="w-10 h-10 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">3. Save & get pinged</h2>
              <p className="text-muted-foreground text-lg">
                Save favorites and enable <strong>"Ping me when open"</strong> for closed shops. 
                Get notified the moment they flip to open.
              </p>
              <Card className="card-soft">
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold">StitchRight Tailors</h3>
                      <Heart className="w-5 h-5 text-primary fill-current" />
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <span className="status-pill status-closed">CLOSED</span>
                      <span className="text-xs text-muted-foreground">
                        Updated 2h ago
                      </span>
                    </div>
                    <Button size="sm" className="w-full">
                      <Bell className="w-4 h-4 mr-2" />
                      Ping me when open
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-muted/20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Why choose OpenNow?</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Clock className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold">Real-time updates</h3>
              </div>
              <p className="text-muted-foreground">
                No more guessing or calling ahead. See live status updates with exact timestamps.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Shield className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold">Simple & trustworthy</h3>
              </div>
              <p className="text-muted-foreground">
                No bookings, no payments, no reviews. Just honest open/closed status from shop owners.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold">Location-aware</h3>
              </div>
              <p className="text-muted-foreground">
                Find shops near you with distance calculations and map integration.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Bell className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold">Smart notifications</h3>
              </div>
              <p className="text-muted-foreground">
                Get notified when your favorite closed shops open up. Never miss an opportunity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center max-w-2xl">
          <h2 className="text-3xl font-bold mb-6">Ready to know before you go?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Start finding open shops near you or claim your business today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/search">
                <MapPin className="w-5 h-5 mr-2" />
                Find shops near me
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/for-owners">
                <Store className="w-5 h-5 mr-2" />
                I own a shop
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}