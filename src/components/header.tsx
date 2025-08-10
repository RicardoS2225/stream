// src/components/header.tsx
'use client';

import { usePathname } from 'next/navigation';
import { SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Newspaper, User, PanelLeft, Grid2X2, Grid3X3, Grid } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from './ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useGridSize } from '@/contexts/grid-size-context';

const getTitle = (pathname: string) => {
  if (pathname.startsWith('/dashboard')) return 'Dashboard';
  if (pathname.startsWith('/canales')) return 'Todos los Canales';
  if (pathname.startsWith('/disenos')) return 'Diseños Personalizados';
  if (pathname.startsWith('/alertas')) return 'Alertas y Notificaciones';
  if (pathname.startsWith('/configuracion')) return 'Configuración';
  return 'Oscar Streaming';
};

function GridControls() {
    const { gridSize, setGridSize } = useGridSize();
    
    return (
        <div className='flex items-center gap-2'>
            <Button variant={gridSize === 2 ? "secondary" : "ghost"} size="icon" onClick={() => setGridSize(2)}>
                <Grid2X2 className="h-5 w-5"/>
            </Button>
            <Button variant={gridSize === 3 ? "secondary" : "ghost"} size="icon" onClick={() => setGridSize(3)}>
                <Grid3X3 className="h-5 w-5"/>
            </Button>
            <Button variant={gridSize === 4 ? "secondary" : "ghost"} size="icon" onClick={() => setGridSize(4)}>
                <Grid className="h-5 w-5"/>
            </Button>
        </div>
    );
}


export function Header() {
  const pathname = usePathname();
  const title = getTitle(pathname);
  const showGridControls = pathname.startsWith('/canales');

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b bg-background/80 px-4 backdrop-blur-md sm:px-6 shrink-0">
      <div className="flex items-center gap-2">
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <PanelLeft />
            <span className="sr-only">Abrir menú</span>
          </Button>
        </SheetTrigger>
        <h1 className="text-xl font-semibold font-headline">{title}</h1>
      </div>

      <div className="flex items-center gap-4">
        {showGridControls && <GridControls />}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="shrink-0">
              <Newspaper className="h-5 w-5" />
              <span className="sr-only">Noticias en Vivo</span>
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Noticias en Vivo</SheetTitle>
            </SheetHeader>
            <div className="py-4 text-center text-muted-foreground">
              El feed de noticias en vivo (Twitter/X) se mostrará aquí.
            </div>
          </SheetContent>
        </Sheet>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full">
              <User className="h-5 w-5" />
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Mi Cuenta</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Perfil</DropdownMenuItem>
            <DropdownMenuItem>Facturación</DropdownMenuItem>
            <DropdownMenuItem>Ajustes</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Cerrar Sesión</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
