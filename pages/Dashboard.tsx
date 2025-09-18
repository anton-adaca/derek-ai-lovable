import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Clock, 
  Mail, 
  FileSearch, 
  Palette, 
  Target, 
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  AlertCircle
} from "lucide-react";

export default function Dashboard() {
  const quickActions = [
    {
      title: "Draft Email Response",
      description: "AI-powered email drafts ready in seconds",
      icon: Mail,
      action: "Start Drafting",
      href: "/inbox",
      color: "bg-primary text-primary-foreground"
    },
    {
      title: "Research Loan Policy",
      description: "Get instant answers from policy knowledge base",
      icon: FileSearch,
      action: "Search Policies",
      href: "/policy-search",
      color: "bg-secondary text-secondary-foreground"
    },
    {
      title: "Create Marketing Content",
      description: "Generate blogs, social posts, and video scripts",
      icon: Palette,
      action: "Create Content",
      href: "/marketing",
      color: "bg-accent text-accent-foreground"
    }
  ];

  const recentTasks = [
    { id: 1, task: "Drafted response to client inquiry about home loans", time: "2 min ago", status: "completed" },
    { id: 2, task: "Researched investment property lending criteria", time: "15 min ago", status: "completed" },
    { id: 3, task: "Generated social media post about first home buyer tips", time: "1 hour ago", status: "completed" },
    { id: 4, task: "Created lead magnet calculator for loan serviceability", time: "2 hours ago", status: "pending" }
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Welcome Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Welcome back to Derek.ai
          </h1>
          <p className="text-muted-foreground text-lg">
            Your AI companion is ready to automate your mortgage broker workflows
          </p>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-primary mb-1">47.5 hours</div>
          <p className="text-sm text-muted-foreground">saved this month</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-3 gap-6">
        {quickActions.map((action, index) => (
          <Card key={index} className="derek-card derek-transition hover:shadow-lg cursor-pointer group">
            <CardHeader className="pb-3">
              <div className="flex items-center space-x-3">
                <div className={`p-2 rounded-lg ${action.color}`}>
                  <action.icon className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg">{action.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">{action.description}</p>
              <Button 
                asChild
                variant="outline" 
                className="w-full group-hover:bg-primary group-hover:text-primary-foreground derek-transition"
              >
                <Link to={action.href}>
                  {action.action}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Stats Grid */}
      <div className="grid md:grid-cols-4 gap-4">
        <Card className="derek-card">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Mail className="h-5 w-5 text-primary" />
              <div>
                <div className="text-2xl font-bold">23</div>
                <p className="text-xs text-muted-foreground">Emails drafted today</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="derek-card">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <FileSearch className="h-5 w-5 text-primary" />
              <div>
                <div className="text-2xl font-bold">8</div>
                <p className="text-xs text-muted-foreground">Policy searches</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="derek-card">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Palette className="h-5 w-5 text-primary" />
              <div>
                <div className="text-2xl font-bold">5</div>
                <p className="text-xs text-muted-foreground">Content pieces</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="derek-card">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              <div>
                <div className="text-2xl font-bold">92%</div>
                <p className="text-xs text-muted-foreground">Time saved vs manual</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card className="derek-card">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Clock className="h-5 w-5" />
            <span>Recent Activity</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentTasks.map((task) => (
              <div key={task.id} className="flex items-center justify-between p-3 bg-muted/20 rounded-lg">
                <div className="flex items-center space-x-3">
                  {task.status === 'completed' ? (
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                  ) : (
                    <AlertCircle className="h-4 w-4 text-yellow-600" />
                  )}
                  <span className="text-sm">{task.task}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant={task.status === 'completed' ? 'default' : 'secondary'}>
                    {task.status}
                  </Badge>
                  <span className="text-xs text-muted-foreground">{task.time}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* CTA Section */}
      <Card className="derek-card bg-primary text-primary-foreground">
        <CardContent className="p-6 text-center">
          <h3 className="text-xl font-bold mb-2">Ready to save more time?</h3>
          <p className="mb-4 opacity-90">
            Connect your Gmail or Outlook to start automating email responses in under 10 minutes
          </p>
          <Button variant="secondary" size="lg" className="font-medium">
            Connect Email Account
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}