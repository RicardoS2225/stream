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
      {/* Contenedor principal que no tiene barra lateral fija */}
      <div className="flex w-full flex-col bg-background h-screen">
        
        {/* El Sidebar aquí solo actúa como un Sheet/panel deslizable en móvil O cuando se llama con el Trigger */}
        <Sidebar>
          <SidebarHeader>
            <Logo />
          </SidebarHeader>
          <Separator />
          <SidebarContent className="p-2">
            {/* Usamos el MainNav regular para que el panel deslizable tenga la navegación completa */}
            <MainNav />
          </SidebarContent>
        </Sidebar>
        
        {/* El contenido no necesita un SidebarInset porque no hay barra lateral fija */}
        <div className="flex flex-col h-full">
          <Header />
          <main className="flex-1 overflow-y-auto p-4 sm:p-6 bg-secondary/40">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
