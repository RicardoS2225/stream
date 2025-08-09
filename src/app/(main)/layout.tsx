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

export default function MainLayout({
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
            <MainNav />
          </SidebarContent>
        </Sidebar>
        <SidebarInset>
          <div className="flex flex-col h-screen">
            <Header />
            <main className="flex-1 overflow-y-auto p-4 sm:p-6 bg-secondary/40">
              {children}
            </main>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
