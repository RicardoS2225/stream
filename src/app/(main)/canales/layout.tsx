'use client';

import { Header } from '@/components/header';
import { Logo } from '@/components/logo';
import { MainNav } from '@/components/main-nav';
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarInset,
} from '@/components/ui/sidebar';
import { Separator } from '@/components/ui/separator';
import { usePathname } from 'next/navigation';

export default function CanalesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isCanalesPage = pathname === '/canales';

  return (
    <SidebarProvider>
      <div className="flex w-full flex-col bg-background">
        {/* Render Sidebar only for mobile, or when not on the /canales page */}
        <div className={isCanalesPage ? 'md:hidden' : ''}>
           <Sidebar>
            <SidebarHeader>
              <Logo />
            </SidebarHeader>
            <Separator />
            <SidebarContent className="p-2">
              <MainNav />
            </SidebarContent>
          </Sidebar>
        </div>

        {/* The SidebarInset will adjust its margin based on the sidebar's presence */}
        <div className={`flex flex-col h-screen ${isCanalesPage ? 'md:ml-0' : 'md:ml-[var(--sidebar-width-icon)]'}`}>
          <Header />
          <main className="flex-1 overflow-y-auto p-4 sm:p-6 bg-secondary/40">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
