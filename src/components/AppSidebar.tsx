import { 
  LayoutDashboard, 
  Mail, 
  Search, 
  Palette, 
  Target, 
  Settings 
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import derekLogo from "@/assets/derek-logo.png";

const navigation = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
  { title: "Inbox AI", url: "/inbox", icon: Mail },
  { title: "Policy Search", url: "/policy-search", icon: Search },
  { title: "Marketing Studio", url: "/marketing", icon: Palette },
  { title: "Lead Tools", url: "/lead-tools", icon: Target },
  { title: "Settings", url: "/settings", icon: Settings },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const isCollapsed = state === "collapsed";

  const isActive = (path: string) => currentPath === path;
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive ? "bg-sidebar-accent text-sidebar-accent-foreground" : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground";

  return (
    <Sidebar
      collapsible="icon"
    >
      <SidebarContent className="bg-sidebar border-sidebar-border">
        {/* Derek.ai Logo */}
        <div className="p-4 border-b border-sidebar-border">
          <div className="flex items-center space-x-2">
            <img 
              src={derekLogo} 
              alt="Derek.ai" 
              className="w-8 h-8"
            />
            {!isCollapsed && (
              <span className="text-lg font-bold text-sidebar-foreground">
                Derek.ai
              </span>
            )}
          </div>
        </div>

        <SidebarGroup className="flex-1">
          <SidebarGroupLabel className="text-sidebar-foreground/60 text-xs uppercase tracking-wider px-4 py-2">
            Main Menu
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigation.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="derek-transition">
                    <NavLink 
                      to={item.url} 
                      end={item.url === "/"} 
                      className={getNavCls}
                    >
                      <item.icon className="h-4 w-4" />
                      {!isCollapsed && <span className="ml-2">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Footer */}
        {!isCollapsed && (
          <div className="p-4 border-t border-sidebar-border">
            <p className="text-xs text-sidebar-foreground/60">
              © 2024 Derek.ai
            </p>
          </div>
        )}
      </SidebarContent>
    </Sidebar>
  );
}
