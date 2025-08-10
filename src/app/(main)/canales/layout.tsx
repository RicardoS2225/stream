// src/app/(main)/canales/layout.tsx
import { GridSizeProvider } from '@/contexts/grid-size-context';

export default function CanalesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <GridSizeProvider>{children}</GridSizeProvider>;
}
