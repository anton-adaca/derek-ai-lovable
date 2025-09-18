import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { 
  Palette, 
  Plus, 
  FileText, 
  Video, 
  Share2, 
  Download,
  Eye,
  Edit3,
  Calendar,
  TrendingUp,
  Clock,
  Linkedin,
  Instagram
} from "lucide-react";

export default function MarketingStudio() {
  const { toast } = useToast();
  
  const handleCreateContent = () => {
    toast({
      title: "Content Creator",
      description: "Opening content creation wizard...",
    });
  };

  const handleEditContent = (id: number) => {
    toast({
      title: "Edit Content",
      description: `Opening editor for content ${id}...`,
    });
  };

  const handlePublishContent = (id: number) => {
    toast({
      title: "Content Published",
      description: "Your content has been published successfully!",
    });
  };
  const templates = [
    {
      id: 1,
      title: "First Home Buyer Guide",
      type: "blog",
      category: "Educational Content",
      description: "Comprehensive guide covering grants, deposits, and the buying process",
      status: "published",
      views: 1247,
      lastModified: "2 days ago"
    },
    {
      id: 2,
      title: "5 Refinancing Red Flags",
      type: "social",
      category: "Tips & Advice", 
      description: "Social media carousel highlighting refinancing warning signs",
      status: "draft",
      views: 0,
      lastModified: "1 hour ago"
    },
    {
      id: 3,
      title: "Construction Loan Explainer",
      type: "video",
      category: "Product Education",
      description: "60-second video script explaining construction loan basics",
      status: "scheduled", 
      views: 342,
      lastModified: "1 week ago"
    }
  ];

  const contentIdeas = [
    "Market update: Interest rate predictions for 2024",
    "Serviceability calculator comparison guide",
    "Investment property vs PPOR tax benefits",
    "First home buyer mistakes to avoid",
    "Refinancing checklist for 2024"
  ];

  const publishingStats = [
    { platform: "LinkedIn", posts: 12, engagement: "4.2%", reach: "2.1k" },
    { platform: "Instagram", posts: 8, engagement: "6.8%", reach: "1.8k" },
    { platform: "Blog", posts: 5, engagement: "12.4%", reach: "3.2k" }
  ];

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Marketing Studio</h1>
          <p className="text-muted-foreground">
            Create professional content that converts browsers into borrowers
          </p>
        </div>
        <Button 
          className="bg-primary text-primary-foreground"
          onClick={handleCreateContent}
        >
          <Plus className="mr-2 h-4 w-4" />
          Create New Content
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid md:grid-cols-4 gap-4 mb-6">
        <Card className="derek-card">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold">25</div>
                <p className="text-xs text-muted-foreground">Content pieces</p>
              </div>
              <FileText className="h-8 w-8 text-primary opacity-60" />
            </div>
          </CardContent>
        </Card>

        <Card className="derek-card">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold">7.1k</div>
                <p className="text-xs text-muted-foreground">Total reach</p>
              </div>
              <TrendingUp className="h-8 w-8 text-primary opacity-60" />
            </div>
          </CardContent>
        </Card>

        <Card className="derek-card">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold">5.8%</div>
                <p className="text-xs text-muted-foreground">Avg engagement</p>
              </div>
              <Share2 className="h-8 w-8 text-primary opacity-60" />
            </div>
          </CardContent>
        </Card>

        <Card className="derek-card">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold">18</div>
                <p className="text-xs text-muted-foreground">Leads generated</p>
              </div>
              <Calendar className="h-8 w-8 text-primary opacity-60" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Main Content Area */}
        <div className="lg:col-span-2 space-y-6">
          <Tabs defaultValue="all" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="all">All Content</TabsTrigger>
              <TabsTrigger value="blog">Blog Posts</TabsTrigger>
              <TabsTrigger value="social">Social Media</TabsTrigger>
              <TabsTrigger value="video">Video Scripts</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-4">
              {templates.map((template) => (
                <Card key={template.id} className="derek-card derek-transition hover:shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          {template.type === 'blog' && <FileText className="h-4 w-4 text-primary" />}
                          {template.type === 'social' && <Share2 className="h-4 w-4 text-primary" />}
                          {template.type === 'video' && <Video className="h-4 w-4 text-primary" />}
                          <h3 className="font-semibold">{template.title}</h3>
                          <Badge 
                            variant={
                              template.status === 'published' ? 'default' : 
                              template.status === 'scheduled' ? 'secondary' : 'outline'
                            }
                            className="text-xs"
                          >
                            {template.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{template.description}</p>
                        <p className="text-xs text-muted-foreground">{template.category}</p>
                      </div>
                      <div className="flex flex-col items-end space-y-2 ml-4">
                        <div className="flex space-x-1">
                          <Button variant="ghost" size="sm">
                            <Eye className="h-3 w-3" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Edit3 className="h-3 w-3" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Download className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Eye className="h-3 w-3 text-muted-foreground" />
                          <span className="text-muted-foreground">{template.views} views</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-3 w-3 text-muted-foreground" />
                          <span className="text-muted-foreground">Modified {template.lastModified}</span>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleEditContent(template.id)}
                        >
                          Edit
                        </Button>
                        {template.status === 'draft' && (
                          <Button 
                            size="sm"
                            onClick={() => handlePublishContent(template.id)}
                          >
                            Publish
                          </Button>
                        )}
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
          {/* Content Ideas */}
          <Card className="derek-card">
            <CardHeader>
              <CardTitle className="text-base">Content Ideas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {contentIdeas.slice(0, 4).map((idea, index) => (
                <div key={index} className="p-2 hover:bg-muted/20 rounded cursor-pointer derek-transition">
                  <p className="text-sm font-medium">{idea}</p>
                  <Button variant="ghost" size="sm" className="mt-1 h-6 text-xs">
                    <Plus className="mr-1 h-3 w-3" />
                    Create
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Publishing Performance */}
          <Card className="derek-card">
            <CardHeader>
              <CardTitle className="text-base">Publishing Performance</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {publishingStats.map((stat, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-muted/20 rounded">
                  <div className="flex items-center space-x-2">
                    {stat.platform === 'LinkedIn' && <Linkedin className="h-4 w-4 text-blue-600" />}
                    {stat.platform === 'Instagram' && <Instagram className="h-4 w-4 text-pink-600" />}
                    {stat.platform === 'Blog' && <FileText className="h-4 w-4 text-green-600" />}
                    <span className="text-sm font-medium">{stat.platform}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-muted-foreground">{stat.posts} posts</div>
                    <div className="text-xs font-medium">{stat.engagement} engagement</div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="derek-card">
            <CardHeader>
              <CardTitle className="text-base">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="outline" className="w-full justify-start">
                <FileText className="mr-2 h-4 w-4" />
                Blog Post Template
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Share2 className="mr-2 h-4 w-4" />
                Social Media Post
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Video className="mr-2 h-4 w-4" />
                Video Script
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Calendar className="mr-2 h-4 w-4" />
                Content Calendar
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}