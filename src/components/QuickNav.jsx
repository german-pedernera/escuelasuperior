import React from 'react';
import { BookOpen, Glasses, Tv, Target, LayoutGrid } from 'lucide-react';

export default function QuickNav({ activeSection, onSelectSection }) {
  const items = [
    { 
      id: 'planificacion', 
      label: 'Planificación didáctica', 
      icon: BookOpen,
      targetCard: 'card-planificacion'
    },
    { 
      id: 'observaciones', 
      label: 'Observación de clases', 
      icon: Glasses,
      targetCard: 'card-observacion-1'
    },
    { 
      id: 'practica', 
      label: 'Práctica de enseñanza', 
      icon: Tv,
      targetCard: 'card-presentacion'
    },
    { 
      id: 'reflexion', 
      label: 'Reflexión y mejora', 
      icon: Target,
      targetCard: 'card-reflexiones'
    }
  ];

  return (
    <div className="bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between overflow-x-auto py-3 space-x-2 md:space-x-4 no-scrollbar">
          
          {items.map((item, index) => {
            const Icon = item.icon;
            const isSelected = activeSection === item.id;

            return (
              <React.Fragment key={item.id}>
                <button
                  onClick={() => onSelectSection(item.id, item.targetCard)}
                  className={`flex-1 min-w-[200px] flex items-center justify-center space-x-2.5 py-2.5 px-3 rounded-lg text-sm font-semibold transition-all duration-200 group ${
                    isSelected 
                      ? 'bg-sky-50 text-sky-700 ring-2 ring-sky-500/30' 
                      : 'text-slate-700 hover:text-sky-600 hover:bg-slate-50 hover:shadow-xs'
                  }`}
                >
                  <Icon className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 group-hover:scale-110 ${
                    isSelected ? 'text-sky-600' : 'text-slate-600 group-hover:text-sky-600'
                  }`} />
                  <span className="truncate">{item.label}</span>
                </button>

                {index < items.length - 1 && (
                  <span className="hidden lg:block text-slate-300 font-light select-none">|</span>
                )}
              </React.Fragment>
            );
          })}

        </div>
      </div>
    </div>
  );
}

