'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { X, Plus } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function AlertasPage() {
  const [keywords, setKeywords] = useState([
    'elecciones',
    'presidente',
    'economía',
    'nueva ley',
  ]);
  const [newKeyword, setNewKeyword] = useState('');

  const handleAddKeyword = (e: React.FormEvent) => {
    e.preventDefault();
    if (newKeyword && !keywords.includes(newKeyword.toLowerCase())) {
      setKeywords([...keywords, newKeyword.toLowerCase()]);
      setNewKeyword('');
    }
  };

  const handleRemoveKeyword = (keywordToRemove: string) => {
    setKeywords(keywords.filter((keyword) => keyword !== keywordToRemove));
  };

  return (
    <div className="space-y-6">
       <div>
        <h1 className="text-2xl font-bold tracking-tight font-headline">
          Alertas por Palabras Clave
        </h1>
        <p className="text-muted-foreground">
          Reciba notificaciones cuando se mencionen sus palabras clave.
        </p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Gestionar Palabras Clave</CardTitle>
          <CardDescription>
            Añada o elimine las palabras y frases que desea monitorear en todas las transmisiones.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleAddKeyword} className="flex gap-2 mb-4">
            <Input
              value={newKeyword}
              onChange={(e) => setNewKeyword(e.target.value)}
              placeholder="Ej: crisis hídrica"
            />
            <Button type="submit">
              <Plus className="mr-2 h-4 w-4"/>
              Añadir
            </Button>
          </form>

          <div className="flex flex-wrap gap-2">
            {keywords.length > 0 ? (
              keywords.map((keyword) => (
                <Badge key={keyword} variant="secondary" className="text-base py-1 pl-3 pr-1">
                  {keyword}
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleRemoveKeyword(keyword)}
                    className="ml-1 h-5 w-5 rounded-full"
                  >
                    <X className="h-3 w-3" />
                    <span className="sr-only">Remove {keyword}</span>
                  </Button>
                </Badge>
              ))
            ) : (
                <p className="text-sm text-muted-foreground">No hay palabras clave configuradas.</p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
