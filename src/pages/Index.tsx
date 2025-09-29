import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Layout } from "@/components/layout/layout";
import { StatusPill } from "@/components/ui/status-pill";
import { Search, MapPin, Clock, Heart, Store } from "lucide-react";
import { seedShops, categoryLabels, categoryIcons, calculateDistance, type ShopCategory } from "@/data/seedData";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [userLocation, setUserLocation] = useState<{lat: number; lng: number} | null>(null);
  const [locationPermission, setLocationPermission] = useState<"pending" | "granted" | "denied">("pending");

  // Request location on component mount
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
          setLocationPermission("granted");
        },
        () => {
          setLocationPermission("denied");
        }
      );
    } else {
      setLocationPermission("denied");
    }
  }, []);

  // Get nearby shops (within 5km)
  const nearbyShops = userLocation 
    ? seedShops
        .map(shop => ({
          ...shop,
          distance: calculateDistance(userLocation.lat, userLocation.lng, shop.lat, shop.lng)
        }))
        .filter(shop => shop.distance <= 5)
        .sort((a, b) => a.distance - b.distance)
        .slice(0, 6)
    : seedShops.slice(0, 6);

  const categories: ShopCategory[] = ["barber", "café", "pharmacy", "bakery", "tailor", "salon"];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-background to-muted/20 py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="mb-8 fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-text">
              Is it open right now?
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              See live open/closed status for nearby barbers, tailors, cafés, and more.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8 slide-up">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                type="text"
                placeholder="Search for shops near you..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-6 text-lg rounded-xl border-2 focus:border-primary"
              />
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" asChild className="btn-primary text-lg px-8 py-4">
              <Link to="/search">
                <MapPin className="w-5 h-5 mr-2" />
                Search nearby
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="text-lg px-8 py-4">
              <Link to="/for-owners">
                <Store className="w-5 h-5 mr-2" />
                I'm a shop owner
              </Link>
            </Button>
          </div>

          {/* Location Status */}
          {locationPermission === "granted" && (
            <p className="text-sm text-muted-foreground mt-4">
              📍 Showing shops near your location
            </p>
          )}
          {locationPermission === "denied" && (
            <p className="text-sm text-muted-foreground mt-4">
              Enable location access for personalized nearby results
            </p>
          )}
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Browse by category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <Link
                key={category}
                to={`/search?category=${category}`}
                className="group"
              >
                <Card className="card-soft hover:shadow-md transition-all duration-200 group-hover:scale-105">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl mb-2">{categoryIcons[category]}</div>
                    <h3 className="font-medium text-sm">{categoryLabels[category]}</h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Shops */}
      <section className="py-16 px-4 bg-muted/20">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold">
              {userLocation ? "Nearby shops" : "Featured shops"}
            </h2>
            <Button variant="outline" asChild>
              <Link to="/search">View all</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nearbyShops.map((shop) => (
              <Link key={shop.id} to={`/shop/${shop.slug}`} className="group">
                <Card className="card-soft hover:shadow-md transition-all duration-200 group-hover:scale-105">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-semibold text-lg mb-1">{shop.name}</h3>
                        <Badge variant="secondary" className="text-xs">
                          {categoryIcons[shop.category]} {categoryLabels[shop.category]}
                        </Badge>
                      </div>
                      <Button variant="ghost" size="sm" className="p-1">
                        <Heart className="w-4 h-4" />
                      </Button>
                    </div>

                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                      {shop.about}
                    </p>

                    <div className="flex items-center justify-between mb-3">
                      <StatusPill
                        status={shop.status}
                        updatedAt={shop.status_updated_at}
                      />
                      {userLocation && 'distance' in shop && (
                        <span className="text-xs text-muted-foreground">
                          {(shop as any).distance.toFixed(1)}km away
                        </span>
                      )}
                    </div>

                    <div className="flex items-center text-xs text-muted-foreground">
                      <MapPin className="w-3 h-3 mr-1" />
                      {shop.area}, {shop.city}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-3xl font-bold mb-12">How OpenNow works</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Store className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">1. Owners update status</h3>
              <p className="text-muted-foreground">
                Shop owners tap one big <strong>Open/Closed</strong> button to update their status instantly.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">2. See live status</h3>
              <p className="text-muted-foreground">
                Shoppers see real-time open/closed status with exact timestamps.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">3. Save & get notified</h3>
              <p className="text-muted-foreground">
                Save favorites or get pinged when a closed place opens.
              </p>
            </div>
          </div>
          
          <div className="mt-12">
            <Button size="lg" asChild>
              <Link to="/how-it-works">Learn more</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
