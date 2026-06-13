import { useRef } from 'react';
import useAnimeReveal from '../../hooks/useAnimeReveal';
import Unknown from '../../../public/Unknown.jpg';
import alfonso from '../../../public/alfonso.jpeg';
import yurani from '../../../public/yurani.jpeg';

export default function Analisis() {
  const container = useRef(null);
  useAnimeReveal(container);

  return (
    <div ref={container} className="bg-white p-8 lg:p-10 rounded-[32px] shadow-sm border border-slate-100 animate-fadeIn space-y-12" data-anime>
      
      {/* =========================================
          BLOQUE 1: INTRODUCCIÓN Y BENTO GRID
          ========================================= */}
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-black text-slate-900">Análisis y Perspectiva Ciudadana</h2>
          <p className="text-slate-600 text-lg mt-2 max-w-2xl">
            ¿Cómo las TIC potencian la economía local y transforman el trabajo cotidiano en La Magnolia?
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                <h3 className="font-bold text-slate-900 mb-2">Inclusión</h3>
                <p className="text-sm text-slate-600 leading-relaxed">El acceso digital se vuelve significativo si permite participación económica, educativa y comunitaria.</p>
              </div>
              <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                <h3 className="font-bold text-slate-900 mb-2">Cohesión</h3>
                <p className="text-sm text-slate-600 leading-relaxed">Las TIC apoyan la memoria colectiva, el intercambio y la gobernanza barrial.</p>
              </div>
            </div>

            <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
              <h3 className="font-bold text-slate-900 mb-4">Indicadores de Apropiación Digital</h3>
              <div className="space-y-4">
                {[
                  { label: "Acceso a Smartphone con datos moviles", score: 82 },
                  { label: "Uso Whatsapp para ventas/pedidos", score: 46 },
                  { label: "Presencia en mapas digitales o buscadores (Google Maps, Waze)", score: 8 },
                  { label: "Uso de billeteras digitales (Nequi, Bancolombia, DaviPlata etc...) ", score: 56 }
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-slate-600 font-medium">{item.label}</span>
                      <span className="font-bold text-purple-700">{item.score}%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div className="bg-purple-600 h-2 rounded-full" style={{ width: `${item.score}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-slate-900 text-lg">Elementos clave en las TIC</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: "Inclusión y equidad", desc: "Los beneficios de la tecnología deben llegar de manera democrática, priorizando poblaciones vulnerables." },
                  { title: "Participación Ciudadana", desc: "Que las comunidades locales tengan voz activa sobre cómo y para qué se implementan las TIC." },
                  { title: "Acceso justo a recursos", desc: "Garantizar que servicios de conectividad y herramientas educativas estén disponibles para todos." },
                  { title: "Continuidad temporal", desc: "Las políticas tecnológicas deben ser sostenibles y adaptarse orgánicamente al crecimiento del territorio." }
                ].map((el, i) => (
                  <div key={i} className="p-6 bg-white border border-slate-100 rounded-3xl shadow-sm hover:border-purple-200 transition-colors">
                    <h4 className="font-bold text-sm text-slate-900 mb-2">{el.title}</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">{el.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="flex-1 rounded-3xl overflow-hidden border border-slate-100 min-h-[300px]">
              <img
                src={Unknown}
                alt="Reunión comunitaria para análisis urbano"
                className="h-full w-full object-cover object-center"
              />
            </div>
            
            <div className="bg-purple-50 p-6 rounded-3xl border border-purple-100">
              <p className="text-purple-900 text-sm italic font-medium leading-relaxed">
                "Las ciudades inteligentes requieren herramientas accesibles para la ciudadanía, no solo sensores y datos".
              </p>
            </div>
          </div>
        </div>
      </div>

      <hr className="border-slate-100" />

      {/* =========================================
          BLOQUE 3: ANÁLISIS DE LITERATURA
          ========================================= */}
      <div className="space-y-8" data-anime>
        
        <div className="flex items-start gap-4 mb-4">
          <div className="bg-purple-50 p-3 rounded-2xl text-purple-700 shrink-0">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Análisis de Literatura y Referentes</h2>
            <p className="text-slate-600 mt-1 text-sm leading-relaxed max-w-4xl">
              Fundamentación académica y revisiones críticas sobre modelos de Ciudades Inteligentes enfocados en la sostenibilidad social y el territorio.
            </p>
          </div>
        </div>
        
        {/* Análisis 1: Maestre Góngora */}
        <div className="bg-white border border-slate-200 rounded-[32px] p-8 shadow-sm">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-slate-100 pb-6 mb-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-purple-100 text-purple-700 font-bold flex items-center justify-center shrink-0 text-xl">
                1
              </div>
              <div>
                <h3 className="font-bold text-xl text-slate-900">Maestre Góngora (2015)</h3>
                <p className="text-slate-500">Revisión sistemática sobre ciudades inteligentes centradas en TIC</p>
              </div>
            </div>
            <a 
              href="https://dialnet.unirioja.es/descarga/articulo/5662375.pdf" 
              target="_blank" 
              rel="noreferrer" 
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-bold transition-all shadow-sm flex items-center gap-2 shrink-0"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              Ver Publicación Original
            </a>
          </div>

          <p className="text-slate-700 leading-relaxed mb-6">
            <strong className="text-slate-900">Aporte principal:</strong> Este trabajo muestra cómo las Tecnologías de la Información y la Comunicación (TIC) son el núcleo de las ciudades inteligentes, pero advierte críticamente que el énfasis excesivo en la infraestructura tecnológica puede invisibilizar las dimensiones sociales fundamentales.
          </p>

          <div className="bg-slate-50 rounded-2xl p-6 grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-slate-900 mb-3 text-sm tracking-widest uppercase">Claves del Enfoque:</h4>
              <ul className="list-disc pl-5 space-y-2 text-sm text-slate-600">
                <li>La ciudad inteligente no es solo conectividad, sino gestión eficiente.</li>
                <li>Se requiere un equilibrio entre innovación tecnológica y sostenibilidad social.</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-3 text-sm tracking-widest uppercase">Relación con La Magnolia:</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Nuestra propuesta de la Red de Economía Local Inteligente se alinea con esta crítica: utilizamos las TIC no como un fin corporativo, sino como una herramienta pedagógica para visibilizar el comercio de subsistencia.
              </p>
            </div>
          </div>

          <div className="border-t border-slate-100 pt-6">
            <h4 className="font-bold text-purple-800 flex items-center gap-2 mb-6 uppercase tracking-wide text-sm">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              Elementos clave de la sostenibilidad social (Maestre, 2015):
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ul className="space-y-4 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-0.5">•</span>
                  <p><strong className="text-slate-900">Inclusión y equidad:</strong> Los benefits de la tecnología deben llegar de manera democrática a todos, priorizando poblaciones vulnerables.</p>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-0.5">•</span>
                  <p><strong className="text-slate-900">Cohesión social:</strong> El tejido de la digitalización debe estrechar los lazos comunitarios y no crear abismos de desigualdad.</p>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-0.5">•</span>
                  <p><strong className="text-slate-900">Continuidad temporal:</strong> Las políticas tecnológicas deben ser sostenibles a largo plazo y adaptarse orgánicamente al crecimiento del territorio.</p>
                </li>
              </ul>
              <ul className="space-y-4 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-0.5">•</span>
                  <p><strong className="text-slate-900">Participación ciudadana:</strong> Que las comunidades locales tengan voz activa sobre cómo y para qué se implementan las TIC en su espacio habitacional.</p>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-0.5">•</span>
                  <p><strong className="text-slate-900">Acceso justo a recursos:</strong> Garantizar que servicios de conectividad y herramientas educativas estén disponibles para todos.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Análisis 2: Caicedo Plúa */}
        <div className="bg-white border border-slate-200 rounded-[32px] p-8 shadow-sm">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-slate-100 pb-6 mb-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-purple-100 text-purple-700 font-bold flex items-center justify-center shrink-0 text-xl">
                2
              </div>
              <div>
                <h3 className="font-bold text-xl text-slate-900">Caicedo Plúa & Amaya Fernández (2022)</h3>
                <p className="text-slate-500">Revisión sistemática de la literatura sobre ciudades inteligentes (2012–2021)</p>
              </div>
            </div>
            <a 
              href="https://editorialalema.org/index.php/pentaciencias/article/view/187" 
              target="_blank" 
              rel="noreferrer" 
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-bold transition-all shadow-sm flex items-center gap-2 shrink-0"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              Ver Publicación Original
            </a>
          </div>

          <p className="text-slate-700 leading-relaxed mb-8">
            <strong className="text-slate-900">Enfoque principal:</strong> El estudio analiza cómo se ha conceptualizado y aplicado el modelo de ciudades inteligentes internacionalmente. Destaca que la mayoría de experiencias priorizan la eficiencia y la infraestructura urbana descuidando la participación comunitaria activa, planteando la urgencia de construir plataformas digitales que respondan a necesidades vecinales reales.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
              <h4 className="font-bold text-slate-900 mb-4 text-sm tracking-widest uppercase">Aportes Clave:</h4>
              <ul className="space-y-4 text-sm text-slate-600">
                <li><strong className="text-slate-900">Gobernanza Inclusiva:</strong> Rompe la exclusividad de élites o alcaldías para empoderar a organizaciones comunitarias y comerciantes informales.</li>
                <li><strong className="text-slate-900">Plataformas Emergentes:</strong> Valorización de aplicaciones y mapas interactivos construidos colectivamente desde la base de los barrios.</li>
                <li><strong className="text-slate-900">Perspectiva Ciudadana:</strong> La inteligencia no es una métrica de rentabilidad; la definen las dinámicas cotidianas de sus habitantes.</li>
                <li><strong className="text-slate-900">Equidad Digital:</strong> Mitigar las desigualdades sistemáticas asegurando alfabetización y accesibilidad en el uso de herramientas.</li>
              </ul>
            </div>

            <div className="space-y-6">
              <div className="bg-purple-50/50 rounded-2xl p-6 border border-purple-100">
                <h4 className="font-bold text-purple-900 mb-3 text-sm tracking-widest uppercase">Crítica al Modelo Dominante:</h4>
                <p className="text-sm text-purple-800 leading-relaxed">
                  Muchas iniciativas de <em>smart cities</em> han sido diseñadas bajo dinámicas de marketing urbano y especulación inmobiliaria, orientadas a atraer capital extranjero antes que a resolver las necesidades y problemáticas de las poblaciones vulnerables de los barrios.
                </p>
              </div>
              <div className="bg-purple-50/50 rounded-2xl p-6 border border-purple-100">
                <h4 className="font-bold text-purple-900 mb-2 text-sm uppercase tracking-widest">Relación con nuestro proyecto:</h4>
                <p className="text-sm text-purple-800 leading-relaxed">
                  La Red de Economía Local Inteligente encarna esta crítica al involucrar a comerciantes informales y migrantes en el mapeo de sus propios negocios.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 rounded-2xl p-6 border border-purple-200 flex gap-4 items-start">
            <span className="text-2xl mt-1">📌</span>
            <p className="text-sm text-purple-900 font-medium leading-relaxed">
              <strong className="font-bold">Síntesis:</strong> Caicedo Plúa & Amaya Fernández (2022) nos recuerdan que la ciudad inteligente no es un mero producto tecnológico o de mercado, sino un proyecto social e inclusivo. La inteligencia urbana se construye desde la participación ciudadana, la equidad digital y la gobernanza inclusiva. Tu proyecto se convierte en un ejemplo aplicado de esta perspectiva, al demostrar que la verdadera "smart city" se piensa y se estructura desde abajo, con la gente y para la gente.
            </p>
          </div>
        </div>

        {/* =========================================
            BLOQUE 3.5: REFERENTES INTERNACIONALES (NUEVO)
            ========================================= */}
        <div className="bg-white border border-slate-200 rounded-[32px] p-8 shadow-sm">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-bold text-xl text-slate-900 leading-tight uppercase tracking-wide">
              Referentes Internacionales de Economías Locales <br className="hidden md:block" />Potenciadas por Herramientas TIC
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Caso 1: SEWA */}
            <div className="border border-slate-100 bg-slate-50 hover:bg-white hover:border-slate-300 transition-colors rounded-2xl p-6 flex flex-col justify-between shadow-sm">
              <div>
                <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="text-2xl">🇮🇳</span> SEWA y la digitalización (India)
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  La Asociación de Mujeres Autoempleadas (SEWA) ha implementado herramientas digitales para que trabajadoras informales (vendedoras de hortalizas, artesanas) accedan a precios de mercado en tiempo real y microcréditos, fortaleciendo la cohesión social y la sostenibilidad económica.
                </p>
              </div>
              <a 
                href="https://thedocs.worldbank.org/en/doc/2f9c87c111a2c812e6949e1252f3e52f-0360012025/original/JSDF-SEWA-DFI-Presentation-010925-jp.pdf" 
                target="_blank" 
                rel="noreferrer" 
                className="inline-flex items-center gap-2 text-sm font-bold text-purple-600 hover:text-purple-800 transition-colors bg-purple-50 px-4 py-2 rounded-xl self-start"
              >
                Visita su web
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              </a>
            </div>

            {/* Caso 2: Street Vendor Project */}
            <div className="border border-slate-100 bg-slate-50 hover:bg-white hover:border-slate-300 transition-colors rounded-2xl p-6 flex flex-col justify-between shadow-sm">
              <div>
                <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="text-2xl">🇺🇸</span> Street Vendor Project (EE.UU)
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  En ciudades como Nueva York, se han desarrollado aplicaciones y mapas interactivos para georreferenciar a los vendedores ambulantes, permitiendo que los clientes los encuentren y validando su presencia en el espacio público.
                </p>
              </div>
              <a 
                href="https://streetnet.org.za/es/organization/proyecto-de-vendedores-ambulantes-street-vendor-project/" 
                target="_blank" 
                rel="noreferrer" 
                className="inline-flex items-center gap-2 text-sm font-bold text-purple-600 hover:text-purple-800 transition-colors bg-purple-50 px-4 py-2 rounded-xl self-start"
              >
                Visita su web
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              </a>
            </div>

          </div>
        </div>

      </div>

      {/* =========================================
          BLOQUE 4: VISIÓN DE FUTURO 
          ========================================= */}
      <div className="bg-slate-900 text-white rounded-[32px] p-8 lg:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 shadow-xl mt-4" data-anime>
        <div className="max-w-3xl">
          <h2 className="text-3xl font-black mb-3">Visión de Futuro</h2>
          <p className="text-slate-400 text-lg">
            Documentar y replicar las practices que ya funcionan. Cada iniciativa local aporta a una ciudad más equitativa cuando comparte saberes.
          </p>
        </div>
        
        <div className="flex flex-row gap-8 shrink-0 border-t lg:border-t-0 lg:border-l border-slate-700 pt-6 lg:pt-0 lg:pl-8">
          <div className="flex flex-col gap-1">
            <span className="text-purple-400 text-xs font-bold tracking-widest uppercase">Estado</span>
            <span className="font-bold text-xl text-white">En Crecimiento</span>
          </div>
          <div className="w-px bg-slate-700 hidden sm:block"></div>
          <div className="flex flex-col gap-1">
            <span className="text-purple-400 text-xs font-bold tracking-widest uppercase">Objetivo</span>
            <span className="font-bold text-xl text-white">Territorial</span>
          </div>
        </div>
      </div>

    </div>
  );
}