'use client';

import { Header } from '@/components/header';
import { Logo } from '@/components/logo';
import { MainNav } from '@/components/main-nav';
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
} from '@/components/ui/sidebar';
import { Separator } from '@/components/ui/separator';

export default function CanalesLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <SidebarProvider>
      <div className="flex w-full flex-col bg-background">
        <Sidebar>
          <SidebarHeader>
            <Logo />
          </SidebarHeader>
          <Separator />
          <SidebarContent className="p-2">
            {/* Usamos el MainNav regular aqui para que el panel deslizable tenga la navegación */}
            <MainNav />
          </SidebarContent>
        </Sidebar>
        
        <div className="flex flex-col h-screen">
          <Header />
          <main className="flex-1 overflow-y-auto p-4 sm:p-6 bg-secondary/40">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
