import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Search, 
  Send, 
  Bot, 
  User, 
  BookOpen, 
  Settings,
  Mic,
  Volume2
} from "lucide-react";
import { useState } from "react";

export default function PolicySearch() {
  const [message, setMessage] = useState("");
  const [loanDetails, setLoanDetails] = useState({
    income: "",
    deposit: "",
    loanAmount: "",
    loanType: ""
  });

  const conversation = [
    {
      id: 1,
      type: "user",
      message: "What's the maximum LVR for investment properties?",
      timestamp: "2:15 PM",
      loanContext: {
        income: "$120,000",
        deposit: "$100,000", 
        loanAmount: "$600,000",
        loanType: "Investment Property"
      }
    },
    {
      id: 2,
      type: "bot", 
      message: "Based on your loan details, here's what I found:\n\nFor investment properties with your profile:\n• Maximum LVR is 90% with LMI\n• With a $600k loan and $100k deposit, you're at 83% LVR\n• This is well within acceptable limits for most lenders\n• ANZ, Westpac, and CBA all support this scenario",
      timestamp: "2:15 PM",
      confidence: 95,
      sources: ["Westpac Lending Policy", "ANZ Investment Guidelines"]
    },
    {
      id: 3,
      type: "user", 
      message: "What about serviceability requirements?",
      timestamp: "2:17 PM"
    },
    {
      id: 4,
      type: "bot",
      message: "For your $120,000 household income and investment property:\n\n• Serviceability ratio should be below 30% of gross income\n• With $600k loan at 7% = ~$4,200/month repayments\n• That's 42% of your gross income ($10k/month)\n• You may need to consider a smaller loan amount or increase deposit\n• Alternative: Interest-only period could reduce to ~$3,500/month (35%)",
      timestamp: "2:17 PM", 
      confidence: 88,
      sources: ["APRA Serviceability Guidelines", "CBA Credit Policy"]
    }
  ];

  const incomeRanges = [
    "Under $50,000",
    "$50,000 - $75,000", 
    "$75,000 - $100,000",
    "$100,000 - $150,000",
    "$150,000 - $200,000",
    "$200,000+"
  ];

  const depositRanges = [
    "Under $50,000",
    "$50,000 - $100,000",
    "$100,000 - $200,000", 
    "$200,000 - $500,000",
    "$500,000+"
  ];

  const loanAmountRanges = [
    "Under $300,000",
    "$300,000 - $500,000",
    "$500,000 - $750,000",
    "$750,000 - $1,000,000", 
    "$1,000,000+"
  ];

  const loanTypes = [
    "First Home Buyer",
    "Owner Occupier",
    "Investment Property", 
    "Refinancing",
    "Construction Loan",
    "Commercial Loan"
  ];

  const handleSendMessage = () => {
    if (message.trim()) {
      // Handle sending message logic here
      setMessage("");
    }
  };

  return (
    <div className="p-6 h-full flex flex-col">
      <div className="max-w-6xl mx-auto w-full flex-1 flex flex-col">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-foreground mb-2">Policy Research Assistant</h1>
          <p className="text-muted-foreground">
            Ask me anything about loan policies, LVR limits, and lending criteria
          </p>
        </div>

        {/* Conversational Search Bar */}
        <Card className="derek-card mb-6">
          <CardContent className="p-6">
            <div className="flex space-x-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input 
                  placeholder="Ask me about loan policies, LVR limits, serviceability calculations..." 
                  className="pl-12 text-base h-12"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                />
              </div>
              <Button 
                size="lg" 
                className="px-8"
                onClick={handleSendMessage}
                disabled={!message.trim()}
              >
                <Send className="mr-2 h-4 w-4" />
                Ask Derek
              </Button>
            </div>
            
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="text-sm text-muted-foreground">Popular questions:</span>
              {[
                "What's the maximum LVR for investment properties?",
                "How do I calculate serviceability?", 
                "What are first home buyer benefits?",
                "Show me refinancing options"
              ].map((question, index) => (
                <Button 
                  key={index} 
                  variant="outline" 
                  size="sm" 
                  className="text-xs derek-transition hover:bg-primary hover:text-primary-foreground"
                  onClick={() => setMessage(question)}
                >
                  {question}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Loan Context Form */}
        <Card className="derek-card mb-6">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-base">
              <Settings className="h-4 w-4" />
              <span>Loan Context</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-4">
              <div>
                <label className="text-sm font-medium text-muted-foreground mb-2 block">
                  Household Income
                </label>
                <Select value={loanDetails.income} onValueChange={(value) => 
                  setLoanDetails(prev => ({...prev, income: value}))
                }>
                  <SelectTrigger>
                    <SelectValue placeholder="Select income range" />
                  </SelectTrigger>
                  <SelectContent>
                    {incomeRanges.map((range) => (
                      <SelectItem key={range} value={range}>{range}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium text-muted-foreground mb-2 block">
                  Available Deposit
                </label>
                <Select value={loanDetails.deposit} onValueChange={(value) => 
                  setLoanDetails(prev => ({...prev, deposit: value}))
                }>
                  <SelectTrigger>
                    <SelectValue placeholder="Select deposit amount" />
                  </SelectTrigger>
                  <SelectContent>
                    {depositRanges.map((range) => (
                      <SelectItem key={range} value={range}>{range}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium text-muted-foreground mb-2 block">
                  Loan Amount
                </label>
                <Select value={loanDetails.loanAmount} onValueChange={(value) => 
                  setLoanDetails(prev => ({...prev, loanAmount: value}))
                }>
                  <SelectTrigger>
                    <SelectValue placeholder="Select loan amount" />
                  </SelectTrigger>
                  <SelectContent>
                    {loanAmountRanges.map((range) => (
                      <SelectItem key={range} value={range}>{range}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium text-muted-foreground mb-2 block">
                  Loan Type
                </label>
                <Select value={loanDetails.loanType} onValueChange={(value) => 
                  setLoanDetails(prev => ({...prev, loanType: value}))
                }>
                  <SelectTrigger>
                    <SelectValue placeholder="Select loan type" />
                  </SelectTrigger>
                  <SelectContent>
                    {loanTypes.map((type) => (
                      <SelectItem key={type} value={type}>{type}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex-1 flex flex-col">
          {/* Conversation Area */}
          <Card className="derek-card flex-1 mb-4">
            <CardContent className="p-6 h-full flex flex-col">
              <div className="flex-1 overflow-y-auto space-y-4 mb-4">
                {conversation.map((msg) => (
                  <div 
                    key={msg.id} 
                    className={`flex items-start space-x-3 ${
                      msg.type === 'user' ? 'justify-end' : ''
                    }`}
                  >
                    {msg.type === 'bot' && (
                      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                        <Bot className="w-4 h-4 text-primary-foreground" />
                      </div>
                    )}
                    
                    <div className={`max-w-2xl ${
                      msg.type === 'user' ? 'order-2' : ''
                    }`}>
                      <div className={`p-3 rounded-lg ${
                        msg.type === 'user' 
                          ? 'bg-primary text-primary-foreground' 
                          : 'bg-muted'
                      }`}>
                        <p className="text-sm whitespace-pre-wrap">{msg.message}</p>
                        
                        {msg.type === 'user' && msg.loanContext && (
                          <div className="mt-2 pt-2 border-t border-primary-foreground/20">
                            <p className="text-xs opacity-75">
                              Context: {msg.loanContext.loanType} • {msg.loanContext.income} income • {msg.loanContext.deposit} deposit
                            </p>
                          </div>
                        )}
                      </div>
                      
                      <div className="flex items-center justify-between mt-2 text-xs text-muted-foreground">
                        <span>{msg.timestamp}</span>
                        {msg.confidence && (
                          <div className="flex items-center space-x-2">
                            <Badge variant="secondary" className="text-xs">
                              {msg.confidence}% confidence
                            </Badge>
                            {msg.sources && (
                              <span className="text-xs">
                                Sources: {msg.sources.join(", ")}
                              </span>
                            )}
                          </div>
                        )}
                      </div>
                    </div>

                    {msg.type === 'user' && (
                      <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 order-1">
                        <User className="w-4 h-4 text-secondary-foreground" />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Message Input */}
              <div className="border-t pt-4">
                <div className="flex space-x-2">
                  <div className="flex-1 relative">
                    <Input
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Ask about loan policies, serviceability, LVR limits..."
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      className="pr-20"
                    />
                    <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex space-x-1">
                      <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                        <Mic className="h-3 w-3" />
                      </Button>
                      <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                        <Volume2 className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                  <Button 
                    onClick={handleSendMessage}
                    disabled={!message.trim()}
                    size="sm"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
                
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="text-xs text-muted-foreground">Quick questions:</span>
                  {[
                    "What's the maximum LVR I can get?",
                    "Calculate my serviceability",
                    "First home buyer benefits",
                    "Refinancing options"
                  ].map((question, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      className="text-xs h-6"
                      onClick={() => setMessage(question)}
                    >
                      {question}
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}