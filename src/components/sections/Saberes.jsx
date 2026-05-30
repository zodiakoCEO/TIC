import { useRef } from 'react';
import useAnimeReveal from '../../hooks/useAnimeReveal';

export default function Saberes() {
  const container = useRef(null);
  useAnimeReveal(container);

  return (
    <div ref={container} className="bg-white p-8 rounded-2xl shadow-sm border-l-8 border-[#1d4ed8] animate-fadeIn space-y-8">
      <div data-anime>
        <h2 className="text-2xl font-bold">Saberes y Prácticas Locales</h2>
        <p className="text-slate-700 text-lg mt-4">
          Castilla y La Magnolia aportan un conjunto de saberes que conectan prácticas productivas, cuidado de la ciudad y conocimiento colectivo.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] items-start">
        <div className="space-y-6" data-anime>
          <div className="rounded-3xl bg-slate-50 p-6 border border-slate-200 shadow-sm">
            <h3 className="font-semibold text-slate-900 mb-2">Comunicación</h3>
            <p className="text-sm text-slate-600">Narrativas locales, radios comunitarias y plataformas de encuentro que visibilizan el valor del barrio.</p>
          </div>
          <div className="rounded-3xl bg-slate-50 p-6 border border-slate-200 shadow-sm">
            <h3 className="font-semibold text-slate-900 mb-2">Economía popular</h3>
            <p className="text-sm text-slate-600">Mercados y emprendimientos se transforman en tejidos sociales y fuentes de ingreso resilientes.</p>
          </div>
          <div className="rounded-3xl bg-slate-50 p-6 border border-slate-200 shadow-sm">
            <h3 className="font-semibold text-slate-900 mb-2">Cuidado colectivo</h3>
            <p className="text-sm text-slate-600">Redes de apoyo, comidas compartidas y reparación del espacio como prácticas de comunidad.</p>
          </div>
        </div>

        <div className="grid gap-4" data-anime>
          <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-glow">
            <img
              src="https://images.unsplash.com/photo-1520975698517-9fa3a1efad2e?auto=format&fit=crop&w=1200&q=80"
              alt="Grupo comunitario trabajando en un espacio compartido"
              className="h-56 w-full object-cover"
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-glow">
              <img
                src="https://images.unsplash.com/photo-1517467139955-5be4a61026d4?auto=format&fit=crop&w=800&q=80"
                alt="Mercado y productos locales"
                className="h-44 w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-glow">
              <img
                src="https://images.unsplash.com/photo-1497888329096-51c6c950d0e7?auto=format&fit=crop&w=800&q=80"
                alt="Personas conversando en un espacio urbano"
                className="h-44 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
