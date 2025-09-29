import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StatusPill } from "@/components/ui/status-pill";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, MessageCircle, Globe, Heart, Bell, ArrowLeft } from "lucide-react";
import { seedShops, categoryLabels, categoryIcons } from "@/data/seedData";

export default function ShopDetail() {
  const { slug } = useParams<{ slug: string }>();
  const shop = seedShops.find(s => s.slug === slug);

  if (!shop) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-8 text-center">
          <h1 className="text-2xl font-bold mb-4">Shop not found</h1>
          <p className="text-muted-foreground mb-6">
            The shop you're looking for doesn't exist or has been removed.
          </p>
          <Button asChild>
            <Link to="/search">Browse all shops</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  const formatPhoneForCall = (phone: string) => phone.replace(/[^\d+]/g, '');
  const formatPhoneForWhatsApp = (phone: string) => phone.replace(/[^\d]/g, '');

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Button variant="ghost" asChild className="mb-6">
          <Link to="/search">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to search
          </Link>
        </Button>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Header */}
            <div>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold mb-2">{shop.name}</h1>
                  <Badge variant="secondary" className="mb-3">
                    {categoryIcons[shop.category]} {categoryLabels[shop.category]}
                  </Badge>
                </div>
                <Button variant="outline" size="sm">
                  <Heart className="w-4 h-4 mr-2" />
                  Save
                </Button>
              </div>

              <StatusPill
                status={shop.status}
                updatedAt={shop.status_updated_at}
                className="mb-4"
              />

              {shop.about && (
                <p className="text-muted-foreground text-lg">{shop.about}</p>
              )}
            </div>

            {/* Ping When Open (if closed) */}
            {shop.status === "CLOSED" && (
              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold mb-1">Get notified when they open</h3>
                      <p className="text-sm text-muted-foreground">
                        We'll send you a notification the moment this shop opens.
                      </p>
                    </div>
                    <Button>
                      <Bell className="w-4 h-4 mr-2" />
                      Ping me
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Contact Actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {shop.phone && (
                <Button
                  variant="outline"
                  className="h-auto p-4 flex flex-col items-center space-y-2"
                  asChild
                >
                  <a href={`tel:${formatPhoneForCall(shop.phone)}`}>
                    <Phone className="w-6 h-6" />
                    <span className="text-sm">Call</span>
                  </a>
                </Button>
              )}

              {shop.whatsapp && (
                <Button
                  variant="outline"
                  className="h-auto p-4 flex flex-col items-center space-y-2"
                  asChild
                >
                  <a 
                    href={`https://wa.me/${formatPhoneForWhatsApp(shop.whatsapp)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-6 h-6" />
                    <span className="text-sm">WhatsApp</span>
                  </a>
                </Button>
              )}

              {shop.website && (
                <Button
                  variant="outline"
                  className="h-auto p-4 flex flex-col items-center space-y-2"
                  asChild
                >
                  <a href={shop.website} target="_blank" rel="noopener noreferrer">
                    <Globe className="w-6 h-6" />
                    <span className="text-sm">Website</span>
                  </a>
                </Button>
              )}
            </div>

            {/* Hours */}
            {shop.hours && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Business Hours</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{shop.hours}</p>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Location */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  Location
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="font-medium">{shop.address_line}</p>
                  <p className="text-muted-foreground">
                    {shop.area}, {shop.city} {shop.postal_code}
                  </p>
                </div>
                
                <Button variant="outline" className="w-full">
                  <MapPin className="w-4 h-4 mr-2" />
                  View on map
                </Button>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {shop.phone && (
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-medium">{shop.phone}</p>
                  </div>
                )}
                
                {shop.whatsapp && (
                  <div>
                    <p className="text-sm text-muted-foreground">WhatsApp</p>
                    <p className="font-medium">{shop.whatsapp}</p>
                  </div>
                )}
                
                {shop.website && (
                  <div>
                    <p className="text-sm text-muted-foreground">Website</p>
                    <a 
                      href={shop.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="font-medium text-primary hover:underline break-all"
                    >
                      {shop.website}
                    </a>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Shop Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Shop Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Favorites</span>
                  <span className="font-medium">{shop.favorites_count}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Claimed</span>
                  <span className="font-medium">{shop.is_claimed ? "Yes" : "No"}</span>
                </div>
                
                {shop.verified && (
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Verified</span>
                    <span className="font-medium text-primary">✓ Verified</span>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}