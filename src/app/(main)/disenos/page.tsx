import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { PlusCircle } from 'lucide-react';

export default function DisenosPage() {
  // Placeholder for saved layouts
  const savedLayouts = [
    { id: '1', name: 'Noticias La Paz', channels: 4 },
    { id: '2', name: 'Canales de Deportes', channels: 6 },
    { id: '3', name: 'Matutino', channels: 3 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-bold tracking-tight font-headline">
            Diseños Personalizados
          </h1>
          <p className="text-muted-foreground">
            Cree, edite y acceda a sus cuadrículas de canales guardadas.
          </p>
        </div>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Crear Nuevo Diseño
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {savedLayouts.map((layout) => (
          <Card key={layout.id} className="flex flex-col">
            <CardHeader>
              <CardTitle>{layout.name}</CardTitle>
              <CardDescription>{layout.channels} canales</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow flex items-end">
              <Button variant="outline" className="w-full">
                Abrir Diseño
              </Button>
            </CardContent>
          </Card>
        ))}
         <Card className="flex items-center justify-center border-dashed h-full min-h-[200px]">
            <Button variant="ghost">
                <PlusCircle className="mr-2 h-4 w-4" />
                Añadir Nuevo
            </Button>
         </Card>
      </div>
    </div>
  );
}
