import { useRef } from 'react';
import useAnimeReveal from '../../hooks/useAnimeReveal';

export default function Bibliografia() {
  const container = useRef(null);
  useAnimeReveal(container);

  const fuentesAcademicas = [
    {
      autor: "Maestre Góngora, G. P. (2015)",
      titulo: "Revisión de literatura sobre ciudades inteligentes: una perspectiva centrada en las TIC.",
      revista: "Ingeniare, 11(19), 137–149.",
      url: "https://dialnet.unirioja.es/descarga/articulo/5662375.pdf"
    },
    {
      autor: "Caicedo Plúa, C. R., & Amaya Fernández, F. O. (2022)",
      titulo: "Revisión sistemática de la literatura sobre ciudades inteligentes y tecnologías de servicios urbanos 2012–2021.",
      revista: "Revista Científica Arbitrada Multidisciplinaria Pentaciencias, 4(3), 215–235.",
      url: "https://editorialalema.org/index.php/pentaciencias/article/view/187"
    }
  ];

  const fuentesCibergrafia = [
    {
      autor: "StreetNet International. (s.f.)",
      titulo: "Proyecto de vendedores ambulantes (Street Vendor Project).",
      plataforma: "StreetNet Organismo Internacional",
      url: "https://streetnet.org.za/es/organization/proyecto-de-vendedores-ambulantes-street-vendor-project/"
    },
    {
      autor: "World Bank. (2025)",
      titulo: "India digital financial inclusion of informal sector: Transforming lives through digital & financial empowerment [Presentación].",
      plataforma: "World Bank Documents",
      url: "https://thedocs.worldbank.org/en/doc/2f9c87c111a2c812e6949e1252f3e52f-0360012025/original/JSDF-SEWA-DFI-Presentation-010925-jp.pdf"
    }
  ];

  return (
    <div ref={container} className="bg-white p-8 lg:p-10 rounded-[32px] shadow-sm border border-slate-100 animate-fadeIn space-y-10" data-anime>
      
      {/* Encabezado Principal */}
      <div className="border-b border-slate-100 pb-6">
        <div className="flex items-center gap-3 mb-2">
          <span className="w-3 h-3 rounded-full bg-purple-600 animate-pulse"></span>
          <span className="text-xs font-bold uppercase tracking-widest text-purple-600">Sustento Teórico</span>
        </div>
        <h2 className="text-3xl font-black text-slate-900">Bibliografía y Cibergrafía</h2>
        <p className="text-slate-500 text-sm mt-1 max-w-2xl">
          Referencias indexadas, estudios globales y recursos web que fundamentan el análisis de inclusión digital y desarrollo urbano de este proyecto.
        </p>
      </div>

      {/* Sección 1: Bibliografía Académica */}
      <div className="space-y-4">
        <h3 className="text-sm font-bold tracking-wider text-slate-400 uppercase flex items-center gap-2">
          <svg className="w-4 h-4 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
          Literatura Científica Indexada
        </h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {fuentesAcademicas.map((item, index) => (
            <div key={index} className="group border border-slate-100 bg-slate-50 hover:bg-white hover:border-purple-200 hover:shadow-md transition-all duration-300 rounded-2xl p-6 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between items-start gap-2">
                  <span className="text-xs font-bold text-slate-400 bg-slate-200/60 px-2.5 py-1 rounded-md tracking-wide">APA 7</span>
                  <span className="text-xs font-medium text-purple-600 bg-purple-50 px-2.5 py-1 rounded-md">Art. Científico</span>
                </div>
                <p className="text-xs font-bold text-slate-900">{item.autor}</p>
                <p className="text-sm text-slate-700 font-medium leading-relaxed italic">"{item.titulo}"</p>
                <p className="text-xs text-slate-500 font-mono">{item.revista}</p>
              </div>
              
              <a 
                href={item.url} 
                target="_blank" 
                rel="noreferrer" 
                className="inline-flex items-center gap-2 text-xs font-bold text-purple-600 group-hover:text-purple-700 transition-colors pt-2 border-t border-slate-200/60 group-hover:border-purple-100"
              >
                Acceder a publicación original
                <svg className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Sección 2: Cibergrafía */}
      <div className="space-y-4">
        <h3 className="text-sm font-bold tracking-wider text-slate-400 uppercase flex items-center gap-2">
          <svg className="w-4 h-4 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9h18" />
          </svg>
          Repositorios y Cibergrafía Global
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {fuentesCibergrafia.map((item, index) => (
            <div key={index} className="group border border-slate-100 bg-slate-50 hover:bg-white hover:border-purple-200 hover:shadow-md transition-all duration-300 rounded-2xl p-6 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between items-start gap-2">
                  <span className="text-xs font-bold text-slate-400 bg-slate-200/60 px-2.5 py-1 rounded-md tracking-wide">Recurso Digital</span>
                  <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md">Enlace Externo</span>
                </div>
                <p className="text-xs font-bold text-slate-900">{item.autor}</p>
                <p className="text-sm text-slate-700 font-medium leading-relaxed">
                  {item.titulo}
                </p>
                <div className="flex items-center gap-1.5 text-xs text-slate-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                  <span>{item.plataforma}</span>
                </div>
              </div>
              
              <a 
                href={item.url} 
                target="_blank" 
                rel="noreferrer" 
                className="inline-flex items-center gap-2 text-xs font-bold text-purple-600 group-hover:text-purple-700 transition-colors pt-2 border-t border-slate-200/60 group-hover:border-purple-100"
              >
                Abrir portal oficial
                <svg className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}