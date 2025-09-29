import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Layout } from "@/components/layout/layout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { StatusPill } from "@/components/ui/status-pill";
import { Switch } from "@/components/ui/switch";
import { Search as SearchIcon, MapPin, Heart, Filter } from "lucide-react";
import { seedShops, categoryLabels, categoryIcons, calculateDistance, type ShopCategory, type Shop } from "@/data/seedData";

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "");
  const [selectedCategory, setSelectedCategory] = useState<ShopCategory | "">((searchParams.get("category") as ShopCategory) || "");
  const [openOnly, setOpenOnly] = useState(false);
  const [userLocation, setUserLocation] = useState<{lat: number; lng: number} | null>(null);
  const [locationPermission, setLocationPermission] = useState<"pending" | "granted" | "denied">("pending");

  const categories: ShopCategory[] = ["barber", "café", "pharmacy", "bakery", "tailor", "salon", "grocery"];

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

  // Filter shops based on search criteria
  const filteredShops = seedShops
    .filter(shop => {
      // Text search
      if (searchQuery && !shop.name.toLowerCase().includes(searchQuery.toLowerCase()) && 
          !shop.area.toLowerCase().includes(searchQuery.toLowerCase()) &&
          !categoryLabels[shop.category].toLowerCase().includes(searchQuery.toLowerCase())) {
        return false;
      }
      
      // Category filter
      if (selectedCategory && shop.category !== selectedCategory) {
        return false;
      }
      
      // Open only filter
      if (openOnly && shop.status !== "OPEN") {
        return false;
      }
      
      return true;
    })
    .map(shop => {
      if (userLocation) {
        return {
          ...shop,
          distance: calculateDistance(userLocation.lat, userLocation.lng, shop.lat, shop.lng)
        };
      }
      return shop;
    })
    .sort((a, b) => {
      if ('distance' in a && 'distance' in b) {
        return a.distance - b.distance;
      }
      return 0;
    });

  const handleCategoryClick = (category: ShopCategory | "") => {
    setSelectedCategory(category);
    const params = new URLSearchParams(searchParams);
    if (category) {
      params.set("category", category);
    } else {
      params.delete("category");
    }
    setSearchParams(params);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Search Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-6">Find shops near you</h1>
          
          {/* Search Bar */}
          <div className="relative mb-6">
            <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input
              type="text"
              placeholder="Search shops, areas, or categories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 py-3 text-lg"
            />
          </div>

          {/* Filters */}
          <div className="space-y-4">
            {/* Open Only Toggle */}
            <div className="flex items-center space-x-3">
              <Switch
                id="open-only"
                checked={openOnly}
                onCheckedChange={setOpenOnly}
              />
              <label htmlFor="open-only" className="text-sm font-medium">
                Open now only
              </label>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedCategory === "" ? "default" : "outline"}
                size="sm"
                onClick={() => handleCategoryClick("")}
              >
                All categories
              </Button>
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => handleCategoryClick(category)}
                >
                  {categoryIcons[category]} {categoryLabels[category]}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Location Status */}
        {locationPermission === "granted" && (
          <div className="mb-6 p-3 bg-primary/5 rounded-lg border">
            <p className="text-sm text-primary">
              📍 Showing results near your location
            </p>
          </div>
        )}
        
        {locationPermission === "denied" && (
          <div className="mb-6 p-3 bg-muted/50 rounded-lg border">
            <p className="text-sm text-muted-foreground">
              Enable location access for distance-based results
            </p>
          </div>
        )}

        {/* Results */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            {filteredShops.length} shop{filteredShops.length !== 1 ? 's' : ''} found
          </p>
        </div>

        {/* Shop Grid */}
        {filteredShops.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredShops.map((shop) => (
              <Card key={shop.id} className="card-soft hover:shadow-md transition-all duration-200 hover:scale-105">
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

                  <div className="flex items-center text-xs text-muted-foreground mb-3">
                    <MapPin className="w-3 h-3 mr-1" />
                    {shop.area}, {shop.city}
                  </div>

                  <Button className="w-full" size="sm">
                    View details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-muted/50 rounded-full flex items-center justify-center mx-auto mb-4">
              <SearchIcon className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold mb-2">No shops found</h3>
            <p className="text-muted-foreground mb-4">
              Try adjusting your filters or search in a different area.
            </p>
            <Button variant="outline" onClick={() => {
              setSearchQuery("");
              setSelectedCategory("");
              setOpenOnly(false);
            }}>
              Clear filters
            </Button>
          </div>
        )}
      </div>
    </Layout>
  );
}