import { useRef } from 'react';
import useAnimeReveal from '../../hooks/useAnimeReveal';

export default function LasTic() {
  const container = useRef(null);
  useAnimeReveal(container);

  return (
    <div
      ref={container}
      className="bg-white p-8 lg:p-10 rounded-[32px] shadow-sm border border-slate-100 animate-fadeIn space-y-8"
      style={{ borderLeft: '8px solid #a855f7' }}
      data-anime
    >
      <div className="space-y-4" data-anime>
        <div className="inline-flex items-center gap-2 bg-purple-50 text-purple-800 px-3 py-1 rounded-full text-xs font-bold w-fit">
          <span className="w-2 h-2 rounded-full bg-purple-500"></span>
          LAS TIC
        </div>

        <h2 className="text-3xl font-black text-slate-900">Las TIC como herramientas de apropiación social</h2>
        <p className="text-slate-600 text-lg max-w-3xl leading-relaxed">
          En este apartado se presenta la relación entre las tecnologías de la información y la comunicación, los territorios y las identidades culturales del barrio La Magnolia. La intención es mostrar cómo las TIC pueden convertirse en medios para fortalecer la memoria, la participación y la economía local.
        </p>
      </div>

      <div className="rounded-[32px] overflow-hidden border border-slate-100 shadow-sm bg-white" data-anime>
        <img
          src="/TERRITORIOS,%20IDENTIDADES%20Y%20CULTURA._%20LAS%20TIC.png"
          alt="Territorios, identidades y cultura. Las TIC"
          className="w-full h-auto object-contain object-center"
        />
      </div>
    </div>
  );
}
