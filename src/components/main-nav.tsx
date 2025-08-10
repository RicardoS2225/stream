'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Clapperboard,
  LayoutGrid,
  Bell,
  Settings,
  ChevronDown,
} from 'lucide-react';
import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from '@/components/ui/sidebar';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { cn } from '@/lib/utils';

const menuItems = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  // 'canales' no es un item, es un grupo
  { href: '/disenos', label: 'Diseños Personalizados', icon: LayoutGrid },
  { href: '/alertas', label: 'Alertas', icon: Bell },
  { href: '/configuracion', label: 'Configuración', icon: Settings },
];

export function MainNav() {
  const pathname = usePathname();
  const isCanalesPath = pathname.startsWith('/canales');

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <Link href="/dashboard">
          <SidebarMenuButton
            isActive={pathname.startsWith('/dashboard')}
            className="w-full"
            tooltip="Dashboard"
          >
            <LayoutDashboard
              className={cn(
                'h-5 w-5',
                pathname.startsWith('/dashboard')
                  ? 'text-accent-foreground'
                  : 'text-sidebar-foreground/70'
              )}
            />
            <span>Dashboard</span>
          </SidebarMenuButton>
        </Link>
      </SidebarMenuItem>

      <SidebarMenuItem>
        <Collapsible defaultOpen={isCanalesPath}>
          <CollapsibleTrigger asChild>
            <SidebarMenuButton
              isActive={isCanalesPath}
              className="w-full justify-between"
              tooltip="Canales"
            >
              <div className="flex items-center gap-3">
                <Clapperboard
                  className={cn(
                    'h-5 w-5',
                    isCanalesPath
                      ? 'text-accent-foreground'
                      : 'text-sidebar-foreground/70'
                  )}
                />
                <span>Canales</span>
              </div>
              <ChevronDown className="h-4 w-4 shrink-0 text-sidebar-foreground/70 transition-transform duration-200 group-data-[state=open]:rotate-180" />
            </SidebarMenuButton>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <SidebarMenuSub>
              <SidebarMenuSubItem>
                <SidebarMenuSubButton asChild isActive={pathname === '/canales'}>
                  <Link href="/canales">
                    <span>Todos los canales</span>
                  </Link>
                </SidebarMenuSubButton>
              </SidebarMenuSubItem>
            </SidebarMenuSub>
          </CollapsibleContent>
        </Collapsible>
      </SidebarMenuItem>

      <SidebarMenuItem>
        <Link href="/disenos">
          <SidebarMenuButton
            isActive={pathname.startsWith('/disenos')}
            className="w-full"
            tooltip="Diseños Personalizados"
          >
            <LayoutGrid
              className={cn(
                'h-5 w-5',
                pathname.startsWith('/disenos')
                  ? 'text-accent-foreground'
                  : 'text-sidebar-foreground/70'
              )}
            />
            <span>Diseños Personalizados</span>
          </SidebarMenuButton>
        </Link>
      </SidebarMenuItem>

      <SidebarMenuItem>
        <Link href="/alertas">
          <SidebarMenuButton
            isActive={pathname.startsWith('/alertas')}
            className="w-full"
            tooltip="Alertas"
          >
            <Bell
              className={cn(
                'h-5 w-5',
                pathname.startsWith('/alertas')
                  ? 'text-accent-foreground'
                  : 'text-sidebar-foreground/70'
              )}
            />
            <span>Alertas</span>
          </SidebarMenuButton>
        </Link>
      </SidebarMenuItem>

      <SidebarMenuItem>
        <Link href="/configuracion">
          <SidebarMenuButton
            isActive={pathname.startsWith('/configuracion')}
            className="w-full"
            tooltip="Configuración"
          >
            <Settings
              className={cn(
                'h-5 w-5',
                pathname.startsWith('/configuracion')
                  ? 'text-accent-foreground'
                  : 'text-sidebar-foreground/70'
              )}
            />
            <span>Configuración</span>
          </SidebarMenuButton>
        </Link>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
