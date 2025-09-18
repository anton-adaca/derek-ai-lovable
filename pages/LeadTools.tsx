import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { 
  Target, 
  Plus, 
  Calculator, 
  Globe, 
  Download,
  Eye,
  Edit3,
  Copy,
  Share2,
  BarChart3,
  Users,
  TrendingUp,
  ExternalLink
} from "lucide-react";

export default function LeadTools() {
  const { toast } = useToast();
  
  const handleCreateTool = () => {
    toast({
      title: "Tool Builder",
      description: "Opening tool creation wizard...",
    });
  };

  const handleEditTool = (id: number, name: string) => {
    toast({
      title: "Edit Tool",
      description: `Opening editor for ${name}...`,
    });
  };

  const handleViewTool = (url: string) => {
    window.open(`https://${url}`, '_blank');
  };

  const handleCopyTool = (url: string) => {
    navigator.clipboard.writeText(`https://${url}`);
    toast({
      title: "Link Copied",
      description: "Tool URL copied to clipboard!",
    });
  };
  const tools = [
    {
      id: 1,
      name: "Serviceability Calculator",
      type: "calculator",
      description: "Interactive calculator for loan serviceability assessment",
      leads: 47,
      conversions: 12,
      status: "active",
      lastUpdated: "3 days ago",
      url: "derek-ai.com/calc/serviceability"
    },
    {
      id: 2,
      name: "First Home Buyer Landing Page", 
      type: "landing",
      description: "Dedicated page for first home buyer information and lead capture",
      leads: 23,
      conversions: 8,
      status: "active",
      lastUpdated: "1 week ago",
      url: "derek-ai.com/first-home-buyer"
    },
    {
      id: 3,
      name: "Refinancing Savings Calculator",
      type: "calculator", 
      description: "Calculate potential savings from refinancing current home loan",
      leads: 31,
      conversions: 5,
      status: "draft",
      lastUpdated: "2 hours ago",
      url: "derek-ai.com/calc/refinancing"
    }
  ];

  const templates = [
    {
      name: "Home Loan Affordability Calculator",
      type: "calculator",
      description: "Help clients calculate how much they can borrow",
      popular: true
    },
    {
      name: "Investment Property ROI Calculator", 
      type: "calculator",
      description: "Calculate investment property returns and cash flow",
      popular: true
    },
    {
      name: "Construction Loan Landing Page",
      type: "landing",
      description: "Capture leads interested in construction financing",
      popular: false
    },
    {
      name: "Mortgage Comparison Tool",
      type: "calculator", 
      description: "Compare different loan products side by side",
      popular: true
    }
  ];

  const leadStats = [
    { metric: "Total Leads", value: "127", change: "+23%", color: "text-green-600" },
    { metric: "Conversion Rate", value: "19.7%", change: "+2.1%", color: "text-green-600" },
    { metric: "Active Tools", value: "8", change: "0%", color: "text-muted-foreground" },
    { metric: "Monthly Views", value: "2.1k", change: "+15%", color: "text-green-600" }
  ];

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Lead Tools</h1>
          <p className="text-muted-foreground">
            Create calculators and landing pages that convert visitors into qualified leads
          </p>
        </div>
        <Button 
          className="bg-primary text-primary-foreground"
          onClick={handleCreateTool}
        >
          <Plus className="mr-2 h-4 w-4" />
          Create New Tool
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid md:grid-cols-4 gap-4 mb-6">
        {leadStats.map((stat, index) => (
          <Card key={index} className="derek-card">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <p className="text-xs text-muted-foreground">{stat.metric}</p>
                </div>
                <div className={`text-xs font-medium ${stat.color}`}>
                  {stat.change}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Main Content Area */}
        <div className="lg:col-span-2 space-y-6">
          <Tabs defaultValue="all" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="all">All Tools</TabsTrigger>
              <TabsTrigger value="calculators">Calculators</TabsTrigger>
              <TabsTrigger value="landing">Landing Pages</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-4">
              {tools.map((tool) => (
                <Card key={tool.id} className="derek-card derek-transition hover:shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          {tool.type === 'calculator' && <Calculator className="h-4 w-4 text-primary" />}
                          {tool.type === 'landing' && <Globe className="h-4 w-4 text-primary" />}
                          <h3 className="font-semibold">{tool.name}</h3>
                          <Badge 
                            variant={tool.status === 'active' ? 'default' : 'outline'}
                            className="text-xs"
                          >
                            {tool.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">{tool.description}</p>
                        <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                          <Globe className="h-3 w-3" />
                          <span>{tool.url}</span>
                        </div>
                      </div>
                      <div className="flex space-x-1 ml-4">
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => handleViewTool(tool.url)}
                        >
                          <Eye className="h-3 w-3" />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => handleEditTool(tool.id, tool.name)}
                        >
                          <Edit3 className="h-3 w-3" />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => handleCopyTool(tool.url)}
                        >
                          <Copy className="h-3 w-3" />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => handleViewTool(tool.url)}
                        >
                          <ExternalLink className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-4">
                      <div className="text-center p-2 bg-muted/20 rounded">
                        <div className="text-lg font-bold text-primary">{tool.leads}</div>
                        <div className="text-xs text-muted-foreground">Total Leads</div>
                      </div>
                      <div className="text-center p-2 bg-muted/20 rounded">
                        <div className="text-lg font-bold text-green-600">{tool.conversions}</div>
                        <div className="text-xs text-muted-foreground">Conversions</div>
                      </div>
                      <div className="text-center p-2 bg-muted/20 rounded">
                        <div className="text-lg font-bold text-blue-600">
                          {((tool.conversions / tool.leads) * 100).toFixed(1)}%
                        </div>
                        <div className="text-xs text-muted-foreground">Conversion Rate</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Updated {tool.lastUpdated}</span>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <BarChart3 className="mr-1 h-3 w-3" />
                          Analytics
                        </Button>
                        <Button variant="outline" size="sm">
                          <Share2 className="mr-1 h-3 w-3" />
                          Share
                        </Button>
                        <Button 
                          size="sm"
                          onClick={() => handleEditTool(tool.id, tool.name)}
                        >
                          Edit Tool
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Tool Templates */}
          <Card className="derek-card">
            <CardHeader>
              <CardTitle className="text-base">Popular Templates</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {templates.map((template, index) => (
                <div key={index} className="p-3 hover:bg-muted/20 rounded cursor-pointer derek-transition border border-border">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      {template.type === 'calculator' && <Calculator className="h-3 w-3 text-primary" />}
                      {template.type === 'landing' && <Globe className="h-3 w-3 text-primary" />}
                      <span className="text-sm font-medium">{template.name}</span>
                    </div>
                    {template.popular && (
                      <Badge variant="secondary" className="text-xs">Popular</Badge>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground mb-2">{template.description}</p>
                  <Button variant="ghost" size="sm" className="h-6 text-xs">
                    <Plus className="mr-1 h-3 w-3" />
                    Use Template
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Recent Performance */}
          <Card className="derek-card">
            <CardHeader>
              <CardTitle className="text-base flex items-center space-x-2">
                <TrendingUp className="h-4 w-4" />
                <span>This Week's Performance</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-2 bg-green-50 rounded">
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4 text-green-600" />
                  <span className="text-sm font-medium">New Leads</span>
                </div>
                <span className="text-lg font-bold text-green-600">+18</span>
              </div>
              
              <div className="flex items-center justify-between p-2 bg-blue-50 rounded">
                <div className="flex items-center space-x-2">
                  <Target className="h-4 w-4 text-blue-600" />
                  <span className="text-sm font-medium">Conversions</span>
                </div>
                <span className="text-lg font-bold text-blue-600">+5</span>
              </div>

              <div className="flex items-center justify-between p-2 bg-purple-50 rounded">
                <div className="flex items-center space-x-2">
                  <BarChart3 className="h-4 w-4 text-purple-600" />
                  <span className="text-sm font-medium">Page Views</span>
                </div>
                <span className="text-lg font-bold text-purple-600">+341</span>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="derek-card">
            <CardHeader>
              <CardTitle className="text-base">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="outline" className="w-full justify-start">
                <Calculator className="mr-2 h-4 w-4" />
                Create Calculator
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Globe className="mr-2 h-4 w-4" />
                Build Landing Page
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <BarChart3 className="mr-2 h-4 w-4" />
                View All Analytics
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Download className="mr-2 h-4 w-4" />
                Export Lead Data
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}