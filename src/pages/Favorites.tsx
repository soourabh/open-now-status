import { Layout } from "@/components/layout/layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { StatusPill } from "@/components/ui/status-pill";
import { Badge } from "@/components/ui/badge";
import { Heart, MapPin, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { seedShops, categoryLabels, categoryIcons } from "@/data/seedData";

export default function Favorites() {
  // Mock: show first 3 shops as favorites for demo
  const favoriteShops = seedShops.slice(0, 3);
  const isLoggedIn = false; // Mock auth state

  if (!isLoggedIn) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center max-w-2xl">
          <div className="w-16 h-16 bg-muted/50 rounded-full flex items-center justify-center mx-auto mb-6">
            <Heart className="w-8 h-8 text-muted-foreground" />
          </div>
          <h1 className="text-3xl font-bold mb-4">Sign in to see favorites</h1>
          <p className="text-muted-foreground mb-8">
            Save your favorite shops and get notified when they open.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/auth">Sign in</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/search">
                <Search className="w-4 h-4 mr-2" />
                Browse shops
              </Link>
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Your favorites</h1>
          <Button variant="outline" asChild>
            <Link to="/search">
              <Search className="w-4 h-4 mr-2" />
              Find more shops
            </Link>
          </Button>
        </div>

        {favoriteShops.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {favoriteShops.map((shop) => (
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
                        <Heart className="w-4 h-4 text-primary fill-current" />
                      </Button>
                    </div>

                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                      {shop.about}
                    </p>

                    <StatusPill
                      status={shop.status}
                      updatedAt={shop.status_updated_at}
                      className="mb-3"
                    />

                    <div className="flex items-center text-xs text-muted-foreground">
                      <MapPin className="w-3 h-3 mr-1" />
                      {shop.area}, {shop.city}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-16 h-16 bg-muted/50 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-muted-foreground" />
            </div>
            <h2 className="text-2xl font-bold mb-4">No favorites yet</h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Start saving shops you love to see them here. Tap the heart icon on any shop to add it to your favorites.
            </p>
            <Button asChild>
              <Link to="/search">
                <Search className="w-4 h-4 mr-2" />
                Find shops to save
              </Link>
            </Button>
          </div>
        )}
      </div>
    </Layout>
  );
}