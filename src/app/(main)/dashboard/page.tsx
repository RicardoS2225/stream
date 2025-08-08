import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Clapperboard, LayoutGrid } from 'lucide-react';
import Link from 'next/link';

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <h1 className="text-2xl font-bold tracking-tight font-headline">
          Bienvenido a Monitor de Prensa 360
        </h1>
        <p className="text-muted-foreground">
          Su centro de monitoreo de medios en tiempo real.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="hover:border-primary/80 hover:shadow-lg transition-all">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clapperboard className="text-primary" />
              <span>Visualización de Canales</span>
            </CardTitle>
            <CardDescription>
              Acceda a todos los canales disponibles en una sola cuadrícula.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Monitoree múltiples transmisiones simultáneamente. Use los controles de audio para enfocarse en canales específicos.
            </p>
            <Link href="/canales" className="text-primary font-semibold mt-4 inline-block">
              Ir a Todos los Canales &rarr;
            </Link>
          </CardContent>
        </Card>

        <Card className="hover:border-primary/80 hover:shadow-lg transition-all">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <LayoutGrid className="text-primary" />
              <span>Diseños Personalizados</span>
            </CardTitle>
            <CardDescription>
              Cree y guarde sus propias configuraciones de canales.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Organice los canales por tema, región o importancia y acceda a sus diseños guardados con un solo clic.
            </p>
            <Link href="/disenos" className="text-primary font-semibold mt-4 inline-block">
              Gestionar Diseños &rarr;
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
