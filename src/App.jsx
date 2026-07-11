import { useRef, useState, useEffect } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Chatbot from './components/Chatbot'; // <-- 1. Importación del Chatbot

// Importación de las secciones
import Inicio from './components/sections/Inicio';
import Territorio from './components/sections/Territorio';
import Observacion from './components/sections/Observacion';
import Analisis from './components/sections/Analisis';
import Propuesta from './components/sections/Propuesta';
import Saberes from './components/sections/Saberes';
import Vulnerabilidades from './components/sections/Vulnerabilidades';
import Reflexion from './components/sections/Reflexion';
import Cierre from './components/sections/Cierre';

const sections = [
  { id: 'inicio', label: 'Inicio', component: Inicio },
  { id: 'territorio', label: 'Territorio', component: Territorio },
  { id: 'observacion', label: 'Observación', component: Observacion },
  { id: 'analisis', label: 'Análisis', component: Analisis },
  { id: 'propuesta', label: 'Propuesta', component: Propuesta },
  { id: 'saberes', label: 'Saberes', component: Saberes },
  { id: 'vulnerabilidades', label: 'Vulnerabilidades', component: Vulnerabilidades },
  { id: 'reflexion', label: 'Reflexión', component: Reflexion },
  { id: 'cierre', label: 'Cierre', component: Cierre }
];

function App() {
  const [activeSection, setActiveSection] = useState('inicio');
  const sectionRefs = useRef({});

  // Scroll a la sección activa
  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = sectionRefs.current[sectionId];
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 0);
    }
  };

  // Detectar sección activa al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      for (const section of sections) {
        const element = sectionRefs.current[section.id];
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom > 150) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    // Se agregó 'relative' a las clases principales
    <div className="bg-slate-50 text-slate-800 font-sans relative">
      <Header />
      <Navigation activeTab={activeSection} setActiveTab={scrollToSection} />
      <main className="w-full">
        {sections.map((section) => {
          const SectionComponent = section.component;
          const isInicio = section.id === 'inicio';
          const sectionClassName = section.id === 'cierre'
            ? 'max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8 flex flex-col'
            : 'max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 min-h-screen flex flex-col justify-center';
          
          return (
            <section
              key={section.id}
              ref={(el) => { sectionRefs.current[section.id] = el; }}
              id={section.id}
              className={sectionClassName}
            >
              {isInicio ? (
                <SectionComponent setActiveTab={scrollToSection} />
              ) : (
                <SectionComponent />
              )}
            </section>
          );
        })}
      </main>

      {/* 2. Renderizado del Chatbot flotante al final */}
      <Chatbot />
    </div>
  );
}

export default App;