import { useRef } from 'react';
import useAnimeReveal from '../../hooks/useAnimeReveal';

export default function Reflexion() {
  const container = useRef(null);
  useAnimeReveal(container);

  return (
    <div ref={container} className="bg-white p-8 rounded-2xl shadow-sm border-l-8 border-[#d97706] animate-fadeIn space-y-8">
      <div data-anime>
        <h2 className="text-2xl font-bold">Reflexión Final</h2>
        <p className="text-slate-700 text-lg mt-4">
          Esta sección invita a pensar cómo una ciudad inteligente se transforma cuando la vida local se pone en el centro, y cómo las TIC acompañan las decisiones comunitarias.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2" data-anime>
        <div className="rounded-3xl bg-slate-50 p-6 border border-slate-200 shadow-sm">
          <h3 className="font-semibold text-slate-900 mb-2">Relación técnica-social</h3>
          <p className="text-slate-600 text-sm">Las plataformas digitales deben ser herramientas que escuchen y respondan al contexto social, no soluciones impuestas desde fuera.</p>
        </div>
        <div className="rounded-3xl bg-slate-50 p-6 border border-slate-200 shadow-sm">
          <h3 className="font-semibold text-slate-900 mb-2">Cuidado del territorio</h3>
          <p className="text-slate-600 text-sm">Los procesos urbanos se enriquecen cuando el conocimiento local se comparte en espacios digitales seguros y abiertos.</p>
        </div>
      </div>

      <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-glow" data-anime>
        <img
          src=""
          alt="Manos unidas en colaboración comunitaria"
          className="h-72 w-full object-cover"
        />
      </div>

      <blockquote className="border-l-4 border-[#f59e0b] pl-4 text-slate-600 italic" data-anime>
        "La tecnología es valiosa cuando facilita los vínculos comunitarios y fortalece los saberes cotidianos de los barrios populares."
      </blockquote>
    </div>
  );
}
