import { useState } from "react";
import { Layout } from "@/components/layout/layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StatusPill } from "@/components/ui/status-pill";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Store, Heart, History, MapPin, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import { seedShops, categoryLabels, categoryIcons } from "@/data/seedData";

export default function OwnerDashboard() {
  // Mock: get first shop as owned shop for demo
  const [ownedShop] = useState(seedShops[0]);
  const [currentStatus, setCurrentStatus] = useState(ownedShop.status);
  const isLoggedIn = false; // Mock auth state

  const handleStatusToggle = (newStatus: "OPEN" | "CLOSED") => {
    setCurrentStatus(newStatus);
    // In real app, this would update the backend
  };

  if (!isLoggedIn) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center max-w-2xl">
          <div className="w-16 h-16 bg-muted/50 rounded-full flex items-center justify-center mx-auto mb-6">
            <Store className="w-8 h-8 text-muted-foreground" />
          </div>
          <h1 className="text-3xl font-bold mb-4">Owner Dashboard</h1>
          <p className="text-muted-foreground mb-8">
            Sign in to manage your shop's open/closed status and view customer engagement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/auth">Sign in</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/for-owners">Learn more</Link>
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Shop Dashboard</h1>
            <p className="text-muted-foreground">Manage your shop's status and view insights</p>
          </div>
          
          <div className="flex gap-3">
            <Button variant="outline" asChild>
              <Link to="/owner/history">
                <History className="w-4 h-4 mr-2" />
                View history
              </Link>
            </Button>
            <Button variant="outline">
              <Plus className="w-4 h-4 mr-2" />
              Add shop
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Status Control */}
          <div className="lg:col-span-2">
            <Card className="card-soft">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl">{ownedShop.name}</CardTitle>
                    <Badge variant="secondary" className="mt-2">
                      {categoryIcons[ownedShop.category]} {categoryLabels[ownedShop.category]}
                    </Badge>
                  </div>
                  <Button variant="outline" size="sm">
                    Edit details
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Current Status */}
                <div className="text-center space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Current status</p>
                    <StatusPill
                      status={currentStatus}
                      updatedAt={new Date()}
                      className="justify-center"
                    />
                  </div>

                  {/* BIG STATUS TOGGLE */}
                  <div className="space-y-4">
                    <p className="text-lg font-medium">Update your status</p>
                    <div className="grid grid-cols-2 gap-4">
                      <Button
                        size="lg"
                        className={`h-20 text-xl font-bold ${
                          currentStatus === "OPEN" 
                            ? "bg-status-open text-status-open-foreground hover:bg-status-open/90" 
                            : "bg-muted text-muted-foreground hover:bg-muted/80"
                        }`}
                        onClick={() => handleStatusToggle("OPEN")}
                      >
                        OPEN
                      </Button>
                      <Button
                        size="lg"
                        variant={currentStatus === "CLOSED" ? "destructive" : "outline"}
                        className={`h-20 text-xl font-bold ${
                          currentStatus === "CLOSED" 
                            ? "bg-status-closed text-status-closed-foreground hover:bg-status-closed/90"
                            : ""
                        }`}
                        onClick={() => handleStatusToggle("CLOSED")}
                      >
                        CLOSED
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Changes are visible to customers instantly
                    </p>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="border-t pt-6">
                  <h3 className="font-semibold mb-3">Quick actions</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <Button variant="outline" size="sm" asChild>
                      <Link to={`/shop/${ownedShop.slug}`}>
                        View public page
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm">
                      Edit shop details
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar Stats */}
          <div className="space-y-6">
            {/* Shop Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Shop Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground flex items-center">
                    <Heart className="w-4 h-4 mr-2" />
                    Favorites
                  </span>
                  <span className="font-bold text-xl">{ownedShop.favorites_count}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Status changes today</span>
                  <span className="font-bold text-xl">3</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Ping subscriptions</span>
                  <span className="font-bold text-xl">7</span>
                </div>
              </CardContent>
            </Card>

            {/* Shop Details */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Shop Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="text-sm text-muted-foreground">Address</p>
                  <p className="text-sm">
                    {ownedShop.address_line}<br />
                    {ownedShop.area}, {ownedShop.city}
                  </p>
                </div>
                
                {ownedShop.phone && (
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="text-sm">{ownedShop.phone}</p>
                  </div>
                )}
                
                {ownedShop.hours && (
                  <div>
                    <p className="text-sm text-muted-foreground">Hours</p>
                    <p className="text-sm">{ownedShop.hours}</p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Recent Activity</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-sm space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Opened</span>
                    <span>9:02 AM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Closed</span>
                    <span>Yesterday 6:45 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Opened</span>
                    <span>Yesterday 9:15 AM</span>
                  </div>
                </div>
                
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link to="/owner/history">
                    <History className="w-4 h-4 mr-2" />
                    View full history
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}