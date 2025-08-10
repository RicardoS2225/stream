'use client';
import { Header } from '@/components/header';
import { Logo } from '@/components/logo';
import { MainNav } from '@/components/main-nav';
import {
  SidebarProvider,
  Sheet,
  SheetContent,
  SheetHeader,
} from '@/components/ui/sidebar';
import { Separator } from '@/components/ui/separator';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <SidebarProvider>
      <Sheet>
        <SheetContent side="left" className="w-[280px] p-0">
          <SheetHeader className="p-2">
            <Logo />
          </SheetHeader>
          <Separator />
          <div className="p-2">
            <MainNav />
          </div>
        </SheetContent>
        <div className="flex w-full flex-col bg-background h-screen">
          <div className="flex flex-col h-full">
            <Header />
            <main className="flex-1 overflow-y-auto p-4 sm:p-6 bg-secondary/40">
              {children}
            </main>
          </div>
        </div>
      </Sheet>
    </SidebarProvider>
  );
}
