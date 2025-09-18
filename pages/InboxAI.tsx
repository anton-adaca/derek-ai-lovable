import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { 
  Mail, 
  Search, 
  Filter, 
  Send, 
  Edit3, 
  Clock,
  User,
  MessageSquare,
  CheckCircle2
} from "lucide-react";

export default function InboxAI() {
  const [selectedEmail, setSelectedEmail] = useState(1);
  const [showFilter, setShowFilter] = useState(false);
  const emails = [
    {
      id: 1,
      from: "sarah.johnson@email.com",
      subject: "First home buyer - pre-approval inquiry",
      preview: "Hi, I'm looking to get pre-approved for my first home purchase. My salary is $85k and I have $50k saved...",
      category: "inquiry",
      status: "draft_ready",
      time: "2 min ago",
      aiConfidence: 95
    },
    {
      id: 2,
      from: "mike.chen@business.com",
      subject: "Investment property loan options",
      preview: "Could you provide information about your investment property loan products? Looking at a $800k property...",
      category: "product_info", 
      status: "draft_ready",
      time: "15 min ago",
      aiConfidence: 88
    },
    {
      id: 3,
      from: "emma.davis@email.com",
      subject: "Refinancing current home loan",
      preview: "I'm interested in refinancing my current home loan. Current rate is 6.2% with $450k remaining...",
      category: "refinance",
      status: "sent",
      time: "1 hour ago",
      aiConfidence: 92
    }
  ];

  const draftResponse = {
    subject: "Re: First home buyer - pre-approval inquiry",
    content: `Dear Sarah,

Thank you for your inquiry about first home buyer pre-approval. Based on the information you've provided, I'd be happy to help you explore your options.

With your salary of $85,000 and $50,000 in savings, you're in a strong position for first home buyer benefits. Here's what we can discuss:

✓ First Home Owner Grant eligibility
✓ Stamp duty concessions available in your state  
✓ Low deposit home loan options (as low as 5% deposit)
✓ Pre-approval process and timeline

I'd recommend we schedule a 15-minute call to discuss your specific situation and goals. This will allow me to:
- Review your complete financial position
- Explain suitable loan products
- Provide you with a pre-approval estimate

Would you be available for a brief call this week? I have appointments available Tuesday and Thursday afternoons.

Best regards,
[Your Name]
[Your Brokerage]
[Contact Information]`
  };

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Inbox AI</h1>
          <p className="text-muted-foreground">AI-powered email responses ready for review</p>
        </div>
        <Button 
          variant="outline" 
          className="derek-transition"
          onClick={() => setShowFilter(!showFilter)}
        >
          <Filter className="mr-2 h-4 w-4" />
          Filter
        </Button>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Email List */}
        <div className="space-y-4">
          <div className="flex items-center space-x-4 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input 
                placeholder="Search emails..." 
                className="pl-10"
              />
            </div>
          </div>

          <Tabs defaultValue="all" className="space-y-4">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="all">All (3)</TabsTrigger>
              <TabsTrigger value="drafts">Drafts (2)</TabsTrigger>
              <TabsTrigger value="sent">Sent (1)</TabsTrigger>
              <TabsTrigger value="pending">Pending (0)</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-3">
              {emails.map((email) => (
                <Card 
                  key={email.id} 
                  className={`derek-card cursor-pointer derek-transition hover:shadow-md ${
                    email.status === 'draft_ready' ? 'ring-2 ring-primary/20' : ''
                  }`}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2 mb-1">
                          <User className="h-3 w-3 text-muted-foreground" />
                          <span className="text-sm font-medium truncate">{email.from}</span>
                          <Badge variant="outline" className="text-xs">
                            {email.category.replace('_', ' ')}
                          </Badge>
                        </div>
                        <h4 className="font-medium text-sm mb-1 truncate">{email.subject}</h4>
                        <p className="text-xs text-muted-foreground line-clamp-2">{email.preview}</p>
                      </div>
                      <div className="flex flex-col items-end space-y-2 ml-4">
                        <span className="text-xs text-muted-foreground">{email.time}</span>
                        {email.status === 'draft_ready' && (
                          <Badge className="bg-primary text-primary-foreground">
                            Draft Ready
                          </Badge>
                        )}
                        {email.status === 'sent' && (
                          <Badge variant="secondary">
                            <CheckCircle2 className="w-3 h-3 mr-1" />
                            Sent
                          </Badge>
                        )}
                      </div>
                    </div>
                    {email.status === 'draft_ready' && (
                      <div className="flex items-center justify-between mt-3 pt-3 border-t">
                        <span className="text-xs text-muted-foreground">
                          AI Confidence: {email.aiConfidence}%
                        </span>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline" className="text-xs">
                            <Edit3 className="w-3 h-3 mr-1" />
                            Edit
                          </Button>
                          <Button size="sm" className="text-xs">
                            <Send className="w-3 h-3 mr-1" />
                            Send
                          </Button>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>

        {/* Email Preview/Draft */}
        <Card className="derek-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <MessageSquare className="h-5 w-5" />
              <span>AI Generated Response</span>
              <Badge className="bg-green-100 text-green-800 text-xs">
                95% Confidence
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium text-muted-foreground">Subject</label>
              <div className="mt-1 p-2 bg-muted/20 rounded text-sm">
                {draftResponse.subject}
              </div>
            </div>
            
            <div>
              <label className="text-sm font-medium text-muted-foreground">Message</label>
              <div className="mt-1 p-4 bg-muted/20 rounded text-sm whitespace-pre-wrap">
                {draftResponse.content}
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t">
              <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                <Clock className="h-3 w-3" />
                <span>Generated 2 minutes ago</span>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline">
                  <Edit3 className="mr-2 h-4 w-4" />
                  Edit Draft
                </Button>
                <Button className="bg-primary text-primary-foreground">
                  <Send className="mr-2 h-4 w-4" />
                  Send Email
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}