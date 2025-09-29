import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Layout } from "@/components/layout/layout";
import { Store, Clock, Users, MapPin, TrendingUp, Check } from "lucide-react";

export default function ForOwners() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-b from-background to-muted/20 py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            For shop owners
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            No hassle. No bookings. Just visibility when it matters.
          </p>
          <p className="text-lg text-muted-foreground mb-8">
            Let customers know you're open with one simple tap. Increase foot traffic and reduce unnecessary calls.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/auth">
                <Store className="w-5 h-5 mr-2" />
                Claim your shop
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/owner">
                Create new shop
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How it works for owners */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Simple setup, instant visibility</h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Store className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">1. Create your shop profile</h3>
              <p className="text-muted-foreground">
                Add your shop details: name, address, category, contact info, and business hours.
              </p>
            </div>
            
            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">2. One tap to update status</h3>
              <p className="text-muted-foreground">
                Big, simple toggle button. Tap "Open" when you arrive, "Closed" when you leave.
              </p>
            </div>
            
            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">3. Customers find you</h3>
              <p className="text-muted-foreground">
                Appear in local searches with live status. Customers know before they go.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 bg-muted/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Why shop owners love OpenNow</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="card-soft">
              <CardContent className="p-6 text-center">
                <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Increase foot traffic</h3>
                <p className="text-muted-foreground">
                  Customers only visit when you're actually open, reducing wasted trips.
                </p>
              </CardContent>
            </Card>

            <Card className="card-soft">
              <CardContent className="p-6 text-center">
                <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Reduce phone calls</h3>
                <p className="text-muted-foreground">
                  Fewer "Are you open?" calls. Focus on serving customers instead.
                </p>
              </CardContent>
            </Card>

            <Card className="card-soft">
              <CardContent className="p-6 text-center">
                <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Local discovery</h3>
                <p className="text-muted-foreground">
                  Appear in nearby searches when customers are looking for your services.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Everything you need, nothing you don't</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">One-tap status updates</h3>
                    <p className="text-muted-foreground text-sm">Giant open/closed toggle. Simple as that.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Status history</h3>
                    <p className="text-muted-foreground text-sm">Track when you opened and closed over time.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Customer favorites</h3>
                    <p className="text-muted-foreground text-sm">See how many customers saved your shop.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Contact integration</h3>
                    <p className="text-muted-foreground text-sm">Show phone, WhatsApp, and website links.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">No subscriptions</h3>
                    <p className="text-muted-foreground text-sm">Free to use. No hidden fees or commitments.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <Card className="card-soft">
                <CardContent className="p-8">
                  <div className="text-center space-y-6">
                    <h3 className="text-xl font-semibold">Your dashboard</h3>
                    
                    <div className="space-y-4">
                      <div className="p-4 bg-muted/50 rounded-lg">
                        <h4 className="font-medium mb-2">Blade & Fade Barbershop</h4>
                        <p className="text-sm text-muted-foreground mb-4">123 Main Street, Downtown</p>
                        
                        <div className="bg-status-open text-status-open-foreground px-6 py-3 rounded-lg text-lg font-bold mb-2">
                          OPEN
                        </div>
                        <p className="text-xs text-muted-foreground">Last updated: 2 minutes ago</p>
                      </div>
                      
                      <div className="text-sm space-y-2">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Favorites:</span>
                          <span className="font-medium">24 customers</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Status changes today:</span>
                          <span className="font-medium">2</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-primary/5">
        <div className="container mx-auto text-center max-w-2xl">
          <h2 className="text-3xl font-bold mb-6">Ready to get started?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join hundreds of local shops using OpenNow to stay connected with customers.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/auth">
                <Store className="w-5 h-5 mr-2" />
                Claim your shop
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/owner">
                Create new shop
              </Link>
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground mt-6">
            Free to use • No setup fees • Cancel anytime
          </p>
        </div>
      </section>
    </Layout>
  );
}