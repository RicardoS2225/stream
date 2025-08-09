import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';

export default function ConfiguracionPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight font-headline">
          Configuración
        </h1>
        <p className="text-muted-foreground">
          Personalice la apariencia y el comportamiento de la aplicación.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Preferencias de Interfaz</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between space-x-2">
            <Label htmlFor="dark-mode" className="flex flex-col space-y-1">
              <span>Modo Oscuro</span>
              <span className="font-normal leading-snug text-muted-foreground">
                Recomendado para reducir la fatiga visual.
              </span>
            </Label>
            <Switch id="dark-mode" defaultChecked={false} disabled />
          </div>
        </CardContent>
      </Card>

       <Card>
        <CardHeader>
          <CardTitle>Preferencias de Video</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
             <Label htmlFor="video-quality">Calidad de Video por Defecto</Label>
              <Select defaultValue="auto">
                <SelectTrigger id="video-quality" className="w-[280px]">
                  <SelectValue placeholder="Seleccionar calidad" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="auto">Automática (Recomendado)</SelectItem>
                  <SelectItem value="720p">Alta (720p)</SelectItem>
                  <SelectItem value="480p">Media (480p)</SelectItem>
                  <SelectItem value="360p">Baja (360p)</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-sm text-muted-foreground">
                Seleccione la calidad de video para optimizar el rendimiento.
              </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
