import bgLocalIa from "../../assets/local-ia.jpeg";
import { useState } from 'react';

export default function Inicio({ setActiveTab }) {
  const [expanded, setExpanded] = useState(false);
  
  return (
    <div className="space-y-8 animate-fadeIn">
      <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden grid grid-cols-1 lg:grid-cols-2">
        
        {/* COLUMNA IZQUIERDA: Textos */}
        <div className="p-8 lg:p-12 flex flex-col justify-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-800 px-3 py-1 rounded-full text-xs font-bold w-fit">
            <span className="w-2 h-2 rounded-full bg-teal-500"></span>
            Proyecto Pedagógico Hábitat-TIC
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-black leading-tight text-slate-900">
            Redefiniendo la <span className="text-teal-600 underline decoration-teal-300">Ciudad Inteligente</span>
          </h2>
          
          <div className="text-slate-600 space-y-4 text-base leading-relaxed">
            <div className="text-base">
              {expanded ? (
                <>
                  <p>
                    Las llamadas ciudades inteligentes suelen definirse desde la infraestructura tecnológica y la conectividad global. Sin embargo, nuestra experiencia en los barrios de Castilla (Medellín) y La Magnolia (Envigado) nos invita a repensar este concepto desde abajo, desde la vida cotidiana y las prácticas comunitarias que sostienen la economía popular.
                  </p>
                  <p>
                    Este micrositio nace como parte del Proyecto Pedagógico Hábitat‑TIC, y busca mostrar cómo las Tecnologías de la Información y la Comunicación (TIC) pueden convertirse en herramientas de apropiación social del conocimiento, fortaleciendo la soberanía alimentaria y comercial de las familias. No se trata de tecnología para el consumo, sino de tecnología como puente pedagógico que une saberes locales con dinámicas urbanas contemporáneas.
                  </p>
                  <p>
                    A través de observación territorial, entrevistas, registros audiovisuales y diálogo intergeneracional, presentamos una lectura crítica de lo que significa ser una “ciudad inteligente” en contextos vulnerables. La propuesta de la Red de Economía Local Inteligente se plantea como acción solidaria: visibilizar saberes, potenciar prácticas económicas barriales y cerrar brechas digitales.
                  </p>
                  <button onClick={() => setExpanded(false)} className="mt-2 text-sm text-teal-600 font-bold underline hover:text-teal-800">Ver menos</button>
                </>
              ) : (
                <>
                  <p>
                    Las llamadas ciudades inteligentes suelen definirse desde la infraestructura tecnológica y la conectividad global. Sin embargo, nuestra experiencia en los barrios de Castilla (Medellín) y La Magnolia (Envigado) nos invita a repensar este concepto desde abajo, desde la vida cotidiana y las prácticas comunitarias que sostienen la economía popular...
                    <button onClick={() => setExpanded(true)} className="ml-2 text-sm text-teal-600 font-bold underline hover:text-teal-800">Ver más</button>
                  </p>
                </>
              )}
            </div>

            <p className="bg-slate-50 p-4 rounded-xl border-l-4 border-teal-600 text-slate-700 font-medium">
              Este espacio digital está organizado en siete secciones 
              —Territorio, Observación, Análisis, Propuesta, Saberes, Vulnerabilidades y Reflexión— que integran evidencias, voces y aprendizajes. El objetivo es resignificar la idea de ciudad inteligente, pensándola desde y para la gente, como un proyecto colectivo que combina lo tecnológico con lo comunitario.
            </p>
          </div>

          <div className="pt-4 flex gap-3">
            <button 
              onClick={() => typeof setActiveTab === 'function' && setActiveTab('territorio')} 
              className="bg-teal-700 text-white font-bold px-6 py-3 rounded-xl flex items-center gap-2 hover:bg-teal-800 transition-colors shadow-lg shadow-teal-700/30"
            >
              Comenzar Recorrido <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>

        {/* COLUMNA DERECHA: Imagen Destacada */}
        <div className="relative flex items-center justify-center p-8 min-h-[400px] lg:min-h-full overflow-hidden">
          
          {/* Imagen usando object-cover para que encaje perfecto sin deformarse */}
          <img 
            src={bgLocalIa} 
            alt="Hábitat TIC" 
            className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-1000 hover:scale-105"
          />
          
          {/* Degradado oscuro sutil para que el cuadro central y los textos destaquen */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent"></div>
          
          {/* Cuadro flotante sobre la imagen (opcional, le di un poco de estilo para que se vea más moderno) */}
          <div className="relative z-10 bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20 text-center text-white shadow-2xl max-w-xs">
          </div>
          
        </div>
      </div>
    </div>
  );
}