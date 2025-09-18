import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { ProjectDownload } from "@/components/ProjectDownload";
import { 
  Settings as SettingsIcon, 
  User, 
  Mail, 
  Palette, 
  Upload,
  Link2,
  CreditCard,
  Shield,
  Bell,
  Check,
  AlertCircle
} from "lucide-react";

export default function Settings() {
  const { toast } = useToast();
  
  const handleSaveProfile = () => {
    toast({
      title: "Profile Updated",
      description: "Your profile information has been saved successfully.",
    });
  };

  const handleSaveBranding = () => {
    toast({
      title: "Branding Updated", 
      description: "Your brand customization has been saved.",
    });
  };

  const handleConnect = (service: string) => {
    toast({
      title: `Connecting to ${service}`,
      description: `Opening ${service} connection dialog...`,
    });
  };

  const handleDisconnect = (service: string) => {
    toast({
      title: `Disconnected from ${service}`,
      description: `${service} has been disconnected from your account.`,
    });
  };
  const integrations = [
    {
      name: "Gmail",
      description: "Connect Gmail for automated email responses",
      status: "connected",
      account: "broker@yourcompany.com",
      icon: Mail
    },
    {
      name: "Outlook", 
      description: "Microsoft Outlook integration for email automation",
      status: "available",
      account: null,
      icon: Mail
    },
    {
      name: "LinkedIn",
      description: "Publish marketing content directly to LinkedIn",
      status: "connected", 
      account: "@yourbrokerprofile",
      icon: Link2
    },
    {
      name: "Instagram",
      description: "Auto-publish social media content to Instagram",
      status: "available",
      account: null,
      icon: Link2
    }
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Settings</h1>
        <p className="text-muted-foreground">
          Manage your Derek.ai preferences, integrations, and account settings
        </p>
      </div>

      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList className="grid w-full grid-cols-7">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="branding">Branding</TabsTrigger>
          <TabsTrigger value="integrations">Integrations</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="billing">Billing</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="export">Export</TabsTrigger>
        </TabsList>

        {/* Profile Settings */}
        <TabsContent value="profile" className="space-y-6">
          <Card className="derek-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <User className="h-5 w-5" />
                <span>Profile Information</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" defaultValue="John" />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" defaultValue="Smith" />
                </div>
              </div>
              
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" defaultValue="john.smith@yourcompany.com" />
              </div>
              
              <div>
                <Label htmlFor="company">Company/Brokerage</Label>
                <Input id="company" defaultValue="Smith Mortgage Solutions" />
              </div>
              
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" defaultValue="+61 400 123 456" />
              </div>

              <Button onClick={handleSaveProfile}>Save Changes</Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Branding Settings */}
        <TabsContent value="branding" className="space-y-6">
          <Card className="derek-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Palette className="h-5 w-5" />
                <span>Brand Customization</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="companyName">Company Name</Label>
                <Input id="companyName" defaultValue="Smith Mortgage Solutions" />
              </div>
              
              <div>
                <Label htmlFor="logo">Company Logo</Label>
                <div className="flex items-center space-x-4 mt-2">
                  <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center">
                    <User className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <Button variant="outline">
                    <Upload className="mr-2 h-4 w-4" />
                    Upload Logo
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  Recommended size: 200x200px, PNG or JPG format
                </p>
              </div>

              <div>
                <Label>Brand Colors</Label>
                <div className="grid grid-cols-2 gap-4 mt-2">
                  <div>
                    <Label htmlFor="primaryColor" className="text-sm">Primary Color</Label>
                    <div className="flex items-center space-x-2 mt-1">
                      <div className="w-8 h-8 bg-primary rounded border"></div>
                      <Input id="primaryColor" defaultValue="#4A90E2" className="font-mono text-sm" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="secondaryColor" className="text-sm">Secondary Color</Label>
                    <div className="flex items-center space-x-2 mt-1">
                      <div className="w-8 h-8 bg-secondary rounded border"></div>
                      <Input id="secondaryColor" defaultValue="#0A1F44" className="font-mono text-sm" />
                    </div>
                  </div>
                </div>
              </div>

              <Button onClick={handleSaveBranding}>Save Branding</Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Integrations */}
        <TabsContent value="integrations" className="space-y-6">
          <Card className="derek-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Link2 className="h-5 w-5" />
                <span>Connected Services</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {integrations.map((integration, index) => (
                <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <integration.icon className="h-8 w-8 text-muted-foreground" />
                    <div>
                      <h4 className="font-medium">{integration.name}</h4>
                      <p className="text-sm text-muted-foreground">{integration.description}</p>
                      {integration.account && (
                        <p className="text-xs text-muted-foreground mt-1">
                          Connected: {integration.account}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {integration.status === 'connected' ? (
                      <>
                        <Badge className="bg-green-100 text-green-800">
                          <Check className="w-3 h-3 mr-1" />
                          Connected
                        </Badge>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleDisconnect(integration.name)}
                        >
                          Disconnect
                        </Button>
                      </>
                    ) : (
                      <Button 
                        size="sm"
                        onClick={() => handleConnect(integration.name)}
                      >
                        Connect
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* FAQ Upload */}
          <Card className="derek-card">
            <CardHeader>
              <CardTitle>FAQ Knowledge Base</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Upload your frequently asked questions to improve AI response accuracy
              </p>
              <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                <p className="text-sm text-muted-foreground mb-2">
                  Drag and drop your FAQ document or click to browse
                </p>
                <Button variant="outline">
                  <Upload className="mr-2 h-4 w-4" />
                  Upload FAQ Document
                </Button>
                <p className="text-xs text-muted-foreground mt-2">
                  Supports PDF, DOC, DOCX files up to 10MB
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Notifications */}
        <TabsContent value="notifications" className="space-y-6">
          <Card className="derek-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Bell className="h-5 w-5" />
                <span>Notification Preferences</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Email Notifications</h4>
                    <p className="text-sm text-muted-foreground">
                      Receive notifications when new emails are processed
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Lead Alerts</h4>
                    <p className="text-sm text-muted-foreground">
                      Get notified when new leads are captured from tools
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Content Publishing</h4>
                    <p className="text-sm text-muted-foreground">
                      Alerts when marketing content is published successfully
                    </p>
                  </div>
                  <Switch />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Weekly Reports</h4>
                    <p className="text-sm text-muted-foreground">
                      Receive weekly performance and time-saved summaries
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Billing */}
        <TabsContent value="billing" className="space-y-6">
          <Card className="derek-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <CreditCard className="h-5 w-5" />
                <span>Billing & Subscription</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium">Professional Plan</h4>
                  <Badge className="bg-primary text-primary-foreground">Current Plan</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Full access to all Derek.ai features including unlimited email processing, 
                  content generation, and lead tools.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold">$99</span>
                  <span className="text-sm text-muted-foreground">per month</span>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2">Payment Method</h4>
                <div className="flex items-center space-x-3 p-3 border border-border rounded">
                  <CreditCard className="h-4 w-4" />
                  <span className="text-sm">•••• •••• •••• 4242</span>
                  <span className="text-sm text-muted-foreground">Expires 12/25</span>
                  <Button variant="outline" size="sm" className="ml-auto">
                    Update
                  </Button>
                </div>
              </div>

              <div className="flex space-x-2">
                <Button variant="outline">Change Plan</Button>
                <Button variant="outline">View Invoices</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Security */}
        <TabsContent value="security" className="space-y-6">
          <Card className="derek-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="h-5 w-5" />
                <span>Security & Privacy</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-medium mb-2">Change Password</h4>
                <div className="space-y-3">
                  <div>
                    <Label htmlFor="currentPassword">Current Password</Label>
                    <Input id="currentPassword" type="password" />
                  </div>
                  <div>
                    <Label htmlFor="newPassword">New Password</Label>
                    <Input id="newPassword" type="password" />
                  </div>
                  <div>
                    <Label htmlFor="confirmPassword">Confirm New Password</Label>
                    <Input id="confirmPassword" type="password" />
                  </div>
                  <Button>Update Password</Button>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-4">Two-Factor Authentication</h4>
                <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                  <div>
                    <p className="font-medium">Authenticator App</p>
                    <p className="text-sm text-muted-foreground">
                      Use an authenticator app for additional security
                    </p>
                  </div>
                  <Button variant="outline">Setup</Button>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-4">Data Privacy</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Data Retention</p>
                      <p className="text-sm text-muted-foreground">
                        How long should we keep your data?
                      </p>
                    </div>
                    <select className="border border-border rounded px-3 py-2 text-sm">
                      <option>12 months</option>
                      <option>24 months</option>
                      <option>Forever</option>
                    </select>
                  </div>
                  
                  <div className="p-3 bg-red-50 border border-red-200 rounded flex items-start space-x-2">
                    <AlertCircle className="h-4 w-4 text-red-600 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-red-800">Delete Account</p>
                      <p className="text-xs text-red-600">
                        Permanently delete your account and all associated data
                      </p>
                      <Button variant="destructive" size="sm" className="mt-2">
                        Delete Account
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Export */}
        <TabsContent value="export" className="space-y-6">
          <Card className="derek-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Upload className="h-5 w-5" />
                <span>Project Export</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Download all project files as a ZIP archive for backup or local development.
              </p>
              <ProjectDownload />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}