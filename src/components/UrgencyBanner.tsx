import React from 'react';
import { Clock, AlertCircle } from 'lucide-react';

export function UrgencyBanner() {
  return (
    <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-8">
      <div className="flex items-center gap-3">
        <AlertCircle className="w-5 h-5 text-red-500" />
        <div>
          <p className="text-sm font-medium text-red-800">
            Oferta por tempo limitado!
          </p>
          <div className="flex items-center gap-2 mt-1">
            <Clock className="w-4 h-4 text-red-500" />
            <p className="text-xs text-red-700">
              Preços válidos apenas hoje ou enquanto durarem os estoques
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}