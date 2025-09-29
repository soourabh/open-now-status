import { Layout } from "@/components/layout/layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StatusPill } from "@/components/ui/status-pill";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface StatusChange {
  id: string;
  status: "OPEN" | "CLOSED";
  timestamp: Date;
  duration?: number; // minutes
}

export default function OwnerHistory() {
  // Mock status change history
  const statusHistory: StatusChange[] = [
    {
      id: "1",
      status: "OPEN",
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
    },
    {
      id: "2", 
      status: "CLOSED",
      timestamp: new Date(Date.now() - 12 * 60 * 60 * 1000), // 12 hours ago
      duration: 8 * 60, // 8 hours
    },
    {
      id: "3",
      status: "OPEN", 
      timestamp: new Date(Date.now() - 20 * 60 * 60 * 1000), // 20 hours ago
    },
    {
      id: "4",
      status: "CLOSED",
      timestamp: new Date(Date.now() - 32 * 60 * 60 * 1000), // 32 hours ago
      duration: 9 * 60, // 9 hours
    },
    {
      id: "5",
      status: "OPEN",
      timestamp: new Date(Date.now() - 41 * 60 * 60 * 1000), // 41 hours ago
    },
  ];

  const formatDuration = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    
    if (hours > 0 && mins > 0) {
      return `${hours}h ${mins}m`;
    } else if (hours > 0) {
      return `${hours}h`;
    } else {
      return `${mins}m`;
    }
  };

  const formatDateTime = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short', 
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
    });
  };

  const getTimeAgo = (date: Date) => {
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffHours / 24);
    
    if (diffDays > 0) {
      return `${diffDays}d ago`;
    } else if (diffHours > 0) {
      return `${diffHours}h ago`;
    } else {
      const diffMins = Math.floor(diffMs / (1000 * 60));
      return `${diffMins}m ago`;
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <Button variant="ghost" asChild className="mb-4">
              <Link to="/owner">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to dashboard
              </Link>
            </Button>
            <h1 className="text-3xl font-bold mb-2">Status History</h1>
            <p className="text-muted-foreground">Track your shop's open/closed activity over time</p>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-primary mb-1">12</div>
              <div className="text-sm text-muted-foreground">Status changes this week</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-primary mb-1">8.5h</div>
              <div className="text-sm text-muted-foreground">Average open time per day</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-primary mb-1">6</div>
              <div className="text-sm text-muted-foreground">Days active this week</div>
            </CardContent>
          </Card>
        </div>

        {/* History Timeline */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {statusHistory.map((change, index) => (
                <div key={change.id} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                  <div className="flex items-center space-x-4">
                    <StatusPill status={change.status} />
                    <div>
                      <p className="font-medium">
                        Shop {change.status.toLowerCase()}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {formatDateTime(change.timestamp)}
                      </p>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">
                      {getTimeAgo(change.timestamp)}
                    </p>
                    {change.duration && (
                      <p className="text-sm font-medium">
                        Duration: {formatDuration(change.duration)}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 text-center">
              <Button variant="outline">
                Load more history
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}