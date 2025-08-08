import { Monitor } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center gap-3 p-2 text-primary-foreground">
      <div className="bg-accent/90 text-accent-foreground p-2 rounded-lg">
        <Monitor className="h-6 w-6" />
      </div>
      <div className="flex flex-col leading-tight font-headline font-semibold text-base">
        <span>Monitor</span>
        <span className="text-sm text-primary-foreground/80">de Prensa 360</span>
      </div>
    </div>
  );
}
