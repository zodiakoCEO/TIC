import { useRef, useState } from 'react';
import useAnimeReveal from '../../hooks/useAnimeReveal';
import beatriz from '../../assets/beatriz.jpeg';
import andres from '../../assets/andres.jpeg';
// Iconos de saberes flaticons
import biometria from '../../assets/biometria.png';
import ayudar from '../../assets/ayudar.png';
import conversacion from '../../assets/conversacion.png';
import crear from '../../assets/crear.png';
import Janeth from '../../../public/Janeth.jpeg';
import alfonso from '../../../public/alfonso.jpeg';
import yurani from '../../../public/yurani.jpeg';
import alex from '../../../public/alex.jpeg';
// Componente de reproductor de audio
function AudioPlayer({ src, label }) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) { audio.pause(); } else { audio.play(); }
    setPlaying(!playing);
  };

  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    if (!audio) return;
    setCurrentTime(audio.currentTime);
    setProgress((audio.currentTime / audio.duration) * 100 || 0);
  };

  const handleLoadedMetadata = () => setDuration(audioRef.current?.duration || 0);

  const handleSeek = (e) => {
    const audio = audioRef.current;
    if (!audio) return;
    const rect = e.currentTarget.getBoundingClientRect();
    audio.currentTime = ((e.clientX - rect.left) / rect.width) * audio.duration;
  };

  const handleEnded = () => setPlaying(false);

  const fmt = (s) => `${Math.floor(s / 60)}:${Math.floor(s % 60).toString().padStart(2, '0')}`;

  return (
    <div className="mt-4 bg-slate-50 rounded-2xl p-4 border border-slate-100">
      <audio
        ref={audioRef}
        src={src}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleEnded}
      />
      <div className="flex items-center gap-3">
        <button
          onClick={togglePlay}
          className="w-10 h-10 rounded-full bg-purple-600 hover:bg-purple-700 flex items-center justify-center flex-shrink-0 transition-colors shadow-sm"
          aria-label={playing ? 'Pausar' : 'Reproducir'}
        >
          {playing ? (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
              <rect x="6" y="4" width="4" height="16" rx="1"/>
              <rect x="14" y="4" width="4" height="16" rx="1"/>
            </svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
              <polygon points="5,3 19,12 5,21"/>
            </svg>
          )}
        </button>
        <div className="flex-1 flex flex-col gap-1">
          <p className="text-xs font-medium text-slate-600 truncate">{label}</p>
          <div
            className="w-full h-2 bg-slate-200 rounded-full cursor-pointer overflow-hidden"
            onClick={handleSeek}
          >
            <div
              className="h-full bg-purple-500 rounded-full transition-all duration-100"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between text-xs text-slate-400">
            <span>{fmt(currentTime)}</span>
            <span>{duration ? fmt(duration) : '--:--'}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Card de persona con reseña + audio
function PersonaCard({ img, nombre, edad, rol, lugar, resena, audioSrc, audioLabel }) {
  return (
    <div className="bg-white rounded-[28px] overflow-hidden border border-slate-100 shadow-sm flex flex-col">
      <div className="relative h-72 overflow-hidden">
        <img src={img} alt={nombre} className="w-full h-full object-cover object-top" />
        <span className="absolute top-4 right-4 text-xs font-semibold px-3 py-1 rounded-full border backdrop-blur-sm bg-white/80 text-slate-700 border-slate-200">
          {rol}
        </span>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/30 to-transparent" />
        <div className="absolute bottom-4 left-4">
          <p className="text-white font-bold text-lg leading-tight">{nombre}</p>
          {edad && <p className="text-white/80 text-sm">{edad} años</p>}
        </div>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <p className="text-xs text-slate-400 font-medium uppercase tracking-wide mb-3">{lugar}</p>
        <blockquote className="pl-4 border-l-2 border-teal-400 text-slate-600 text-sm leading-relaxed italic flex-1">
          "{resena}"
        </blockquote>
        {audioSrc && <AudioPlayer src={audioSrc} label={audioLabel || `Voz de ${nombre}`} />}
      </div>
    </div>
  );
}

export default function Saberes() {
  const container = useRef(null);
  useAnimeReveal(container);

  const categorias = [
    { title: "Comunicación", desc: "Narrativas locales y medios comunitarios.", icon: conversacion },
    { title: "Economía popular", desc: "Emprendimientos y tejido social.", icon: crear },
    { title: "Cuidado colectivo", desc: "Redes de apoyo y comunidad.", icon: ayudar },
    { title: "Saberes ancestrales", desc: "Prácticas de identidad local.", icon: biometria },
  ];

  const personas = [
    {
      img: beatriz,
      nombre: "Beatriz",
      edad: 60,
      rol: "Emprendedora",
      lugar: "La Magnolia, Envigado",
      resena: "Lo que comenzó como un hobby elaborando chocolates artesanales se convirtió en mi emprendimiento. Con el tiempo perfeccioné cada receta y hoy comparto mis productos con más personas a través de WhatsApp.",
      audioSrc: "/audios/beatriz.mp4",
      audioLabel: "Beatriz habla sobre su emprendimiento",
    },
    {
      img: andres,
      nombre: "Andrés Jimenez",
      edad: 34,
      rol: "Músico comunitario",
      lugar: "La Magnolia, Envigado",
      resena: "La música es mi vida. Desde hace más de diez años toco saxofón en recepciones familiares, celebraciones y eventos empresariales. Gracias a Instagram y WhatsApp me contacto con clientes y comparto videos de mis presentaciones. Los pagos los recibo por plataformas bancarias, lo que me facilita organizar mi trabajo. Sin embargo, quiero aprender más sobre herramientas digitales para llegar a más personas, potenciar mis ventas y dar a conocer mi música a nuevas audiencias.",
      audioSrc: "/audios/andres.mp4",
      audioLabel: "Andrés sobre el poder de la música",
    },
  ];

  return (
    <div
      ref={container}
      className="bg-white p-8 lg:p-10 rounded-[32px] shadow-sm border border-slate-100 space-y-10"
      data-anime
    >
      {/* Encabezado */}
      <div data-anime className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
        <div>
          <span className="text-xs font-semibold text-purple-600 uppercase tracking-widest">
            VOCES DEL TERRITORIO
          </span>
          <h2 className="text-3xl font-black text-slate-900 mt-1">
            Saberes y Prácticas Locales
          </h2>
          <p className="text-slate-500 text-base mt-3 max-w-xl leading-relaxed">
            La Magnolia tejen conocimiento colectivo. A través de la voz de sus
            protagonistas, comprendemos cómo las prácticas cotidianas se convierten en
            motores de desarrollo.
          </p>
        </div>
      </div>

      {/* Categorías con iconos importados */}
      <div data-anime className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {categorias.map((item, idx) => (
          <div
            key={idx}
            className="p-5 bg-slate-50 hover:bg-purple-50 rounded-2xl border border-slate-100 hover:border-purple-100 transition-colors group"
          >
            <img
              src={item.icon}
              alt={item.title}
              className="w-10 h-10 mb-3 object-contain"
            />
            <h3 className="font-bold text-slate-900 text-sm mb-1 group-hover:text-purple-700 transition-colors">
              {item.title}
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Sección de Diálogos de las personas (Testimonios de Oficio y Migración) */}
      <div data-anime className="space-y-4 pt-4 border-t border-slate-100">
        <h3 className="font-bold text-slate-900 text-lg flex items-center gap-2">
          <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          Relatos y Saberes
        </h3>
        <p>
          Dignificamos el conocimiento empírico de comerciantes locales, migrantes y líderes comunitarios. Creemos firmemente que la sabiduría barrial es un motor económico. El conocimiento no es solo académico; se vive en el asfalto, las recetas, los oficios
          tradicionales у la resiliencia intergeneracional.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Don Alfonso */}
          <div className="border border-slate-100 rounded-3xl p-6 shadow-sm bg-white hover:border-slate-200 transition-colors">
            <div className="aspect-square w-full rounded-2xl overflow-hidden mb-5 border border-slate-100">
              <img src={alfonso} alt="Retrato de Don Alfonso" className="w-full h-full object-cover object-center" />
            </div>
            <div className="flex justify-between items-start mb-4">
              <div>
                <h4 className="font-bold text-slate-900 text-lg">Don Alfonso (71 años)</h4>
                <p className="text-xs text-slate-500 mt-1">Comerciante tradicional - La Magnolia, Medellín</p>
              </div>
              <span className="bg-purple-50 text-purple-700 text-xs font-bold px-3 py-1 rounded-full text-center leading-tight">
                Comerciante de oficio
              </span>
            </div>
            <p className="text-slate-600 text-sm italic leading-relaxed pl-4 border-l-2 border-slate-200">
              "Llevo 40 años arreglando sofás y muebles en esta esquina. No sé mucho de redes sociales, pero mis clientes de toda la vida me traen a los más jóvenes."
            </p>
          </div>

          {/* Yurani */}
          <div className="border border-slate-100 rounded-3xl p-6 shadow-sm bg-white hover:border-slate-200 transition-colors">
            <div className="aspect-square w-full rounded-2xl overflow-hidden mb-5 border border-slate-100">
              <img src={yurani} alt="Retrato de Yurani" className="w-full h-full object-cover object-center" />
            </div>
            <div className="flex justify-between items-start mb-4">
              <div>
                <h4 className="font-bold text-slate-900 text-lg">Yurani (29 años)</h4>
                <p className="text-xs text-slate-500 mt-1">Venta de repostería - La Magnolia, Envigado</p>
              </div>
              <span className="bg-purple-50 text-purple-700 text-xs font-bold px-3 py-1 rounded-full text-center leading-tight">
                Emprendedora migrante
              </span>
            </div>
            <p className="text-slate-600 text-sm italic leading-relaxed pl-4 border-l-2 border-slate-200">
              "Cuando llegué de Venezuela me daba miedo vender. Empecé acá en el barrio y hoy mis recetas y productos venezolanos se mueven no solo por WhatsApp sino que también vienen por ellos."
            </p>
          </div>

          {/* Janeth */}
          <div className="border border-slate-100 rounded-3xl p-6 shadow-sm bg-white hover:border-slate-200 transition-colors">
            <div className="aspect-square w-full rounded-2xl overflow-hidden mb-5 border border-slate-100">
              <img src={Janeth} alt="Retrato de Janeth Grisales" className="w-full h-full object-cover object-center" />
            </div>
            <div className="flex justify-between items-start mb-4">
              <div>
                <h4 className="font-bold text-slate-900 text-lg">Janeth Grisales (52 años)</h4>
                <p className="text-xs text-slate-500 mt-1">Venta de morcilla y chorizos caseros – La Magnolia, Envigado</p>
              </div>
              <span className="bg-purple-50 text-purple-700 text-xs font-bold px-3 py-1 rounded-full text-center leading-tight">
                Comerciante de tradición gastronómica
              </span>
            </div>
            <p className="text-slate-600 text-sm italic leading-relaxed pl-4 border-l-2 border-slate-200">
              "Desde hace más de veinte años preparo morcilla y chorizos en la cocina de mi casa. La receta es de mi mamá, y aquí en el barrio me conocen porque siempre vendo fresco y con confianza. Al principio todo era de voz en voz, pero ahora uso WhatsApp para recibir pedidos y hasta me pagan por transferencias electrónicas, lo que me facilita mucho. Sin embargo, me gustaría aprender más de tecnología para mostrar mis productos a más personas y mejorar mis ventas. Yo sé que mi oficio es tradicional, pero también puede crecer si aprovecho esas herramientas digitales."
            </p>
          </div>

          {/* Alex */}
          <div className="border border-slate-100 rounded-3xl p-6 shadow-sm bg-white hover:border-slate-200 transition-colors">
            <div className="aspect-square w-full rounded-2xl overflow-hidden mb-5 border border-slate-100">
              <img src={alex} alt="Retrato de Alex" className="w-full h-full object-cover object-center" />
            </div>
            <div className="flex justify-between items-start mb-4">
              <div>
                <h4 className="font-bold text-slate-900 text-lg">Alex (29 años)</h4>
                <p className="text-xs text-slate-500 mt-1">Mecánico de motos – La Magnolia, Envigado</p>
              </div>
              <span className="bg-purple-50 text-purple-700 text-xs font-bold px-3 py-1 rounded-full text-center leading-tight">
                Joven emprendedor de oficios técnicos
              </span>
            </div>
            <p className="text-slate-600 text-sm italic leading-relaxed pl-4 border-l-2 border-slate-200">
              "Siempre me gustaron las motos, y aprendí a arreglarlas viendo y practicando con amigos. Hoy tengo mi propio taller en la esquina de mi casa, sencillo pero lleno de trabajo. Los vecinos confían en mí porque saben que les respondo rápido y con precios justos. Me contacto con clientes por WhatsApp, y algunos ya me pagan por transferencia bancaria, lo que me ayuda a organizar mejor el negocio. Quiero aprender más sobre tecnología para mostrar mis servicios en redes sociales y llegar a más personas. Creo que los jóvenes del barrio podemos crecer si combinamos nuestros oficios con las herramientas digitales."
            </p>
          </div>
        </div>
      </div>

      {/* Cards de personas con multimedia */}
      <div data-anime className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {personas.map((p, idx) => (
          <PersonaCard key={idx} {...p} />
        ))}
      </div>
    </div>
  );
}