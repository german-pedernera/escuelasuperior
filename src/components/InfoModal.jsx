import React from 'react';
import { X, BookOpen, CheckCircle2, BookmarkCheck, Award } from 'lucide-react';

export default function InfoModal({ isOpen, onClose, type }) {
  if (!isOpen) return null;

  const content = {
    bibliografia: {
      title: "Bibliografía y Marco Teórico de Referencia",
      badge: "Fuentes Académicas",
      items: [
        {
          author: "Anijovich, Rebeca y Mora, Silvia (2010)",
          title: "Estrategias de enseñanza: otra mirada al quehacer en el aula",
          desc: "Aique Educación. Buenos Aires. Fundamentos de la planificación centrada en el estudiante y la diversidad en las aulas."
        },
        {
          author: "Litwin, Edith (2008)",
          title: "El oficio de enseñar: condiciones y contextos",
          desc: "Paidós. Buenos Aires. Reflexiones sobre la práctica docente reflexiva y la configuración didáctica."
        },
        {
          author: "McCarthy, Bernice (1987)",
          title: "The 4MAT System: Teaching to Learning Styles with Right/Left Mode Integration",
          desc: "Excel, Inc. Modelo de diseño instruccional en cuatro cuadrantes aplicado en la práctica docente."
        },
        {
          author: "Código Procesal Penal Federal (Ley 27.063 y modif.)",
          title: "Medidas de coerción y medios de prueba en el proceso penal acusatorio",
          desc: "Marco normativo legal vigente analizado en la secuencia didáctica de la cátedra."
        },
        {
          author: "Sanmartí, Neus (2007)",
          title: "10 ideas clave: Evaluar para aprender",
          desc: "Graó. Barcelona. Instrumentos de evaluación formativa y retroalimentación docente."
        }
      ]
    },
    conclusiones: {
      title: "Conclusiones y Reflexiones Finales",
      badge: "Balance Pedagógico",
      summary: "La experiencia de práctica docente en la Escuela Superior de Gendarmería Nacional permitió articular de forma vivencial los saberes teóricos de la didáctica con las exigencias operativas y formativas de las fuerzas de seguridad.",
      points: [
        "Consolidación del Modelo 4MAT como herramienta eficaz para estructurar secuencias de aprendizaje activas y significativas.",
        "Integración de casos prácticos periciales ('La firma dudosa') para fomentar el pensamiento crítico y el rigor procedimental.",
        "Uso de tecnologías interactivas (Kahoot! y material audiovisual) como facilitadores de la retroalimentación inmediata y la motivación del estudiante.",
        "Importancia de la observación sistemática entre pares para enriquecer la propia práctica y detectar oportunidades de mejora continua."
      ]
    }
  };

  const data = content[type] || content.bibliografia;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 animate-fadeIn">
      <div 
        className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-2xl overflow-hidden flex flex-col max-h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-[#0b1e36] text-white px-5 sm:px-6 py-4 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-xl bg-sky-600/30 text-sky-400">
              <BookmarkCheck className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider text-sky-300 font-bold">
                {data.badge}
              </span>
              <h3 className="text-base sm:text-lg font-bold tracking-tight">
                {data.title}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-5 sm:p-6 overflow-y-auto space-y-4">
          {type === 'bibliografia' && (
            <div className="space-y-4">
              {data.items.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-sky-300 transition-all">
                  <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
                  <p className="text-xs font-semibold text-sky-700 mt-0.5">{item.author}</p>
                  <p className="text-xs text-slate-600 mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          )}

          {type === 'conclusiones' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-sky-50 border border-sky-200 text-sky-900 text-sm leading-relaxed">
                {data.summary}
              </div>

              <div className="space-y-2.5">
                <h4 className="text-sm font-bold text-slate-900">Puntos Clave del Aprendizaje Docente:</h4>
                {data.points.map((pt, idx) => (
                  <div key={idx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold transition-colors"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}

