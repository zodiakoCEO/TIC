import { useRef, useState } from 'react';
import useAnimeReveal from '../../hooks/useAnimeReveal';
import beatriz from '../../assets/beatriz.jpeg';
import andres from '../../assets/andres.jpeg';
// Iconos de saberes flaticons
import biometria from '../../assets/biometria.png';
import ayudar from '../../assets/ayudar.png';
import conversacion from '../../assets/conversacion.png';
import crear from '../../assets/crear.png';
const Janeth = '/Janeth.jpeg';
const alfonso = '/alfonso.jpeg';
const yurani = '/yurani.jpeg';
const alex = '/alex.jpeg';
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

// Componente de reproductor de video (soporta URLs externas y YouTube)

// Soporta URLs externas (YouTube y otros) además de archivos locales
function VideoPlayer({ src, label, footerText }) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (playing) { video.pause(); } else { video.play(); }
    setPlaying(!playing);
  };

  const handleEnded = () => setPlaying(false);

  const isExternal = typeof src === 'string' && /^https?:\/\//.test(src);
  const isYouTube = isExternal && (src.includes('youtube.com') || src.includes('youtu.be'));

  const getYouTubeEmbed = (url) => {
    try {
      const u = new URL(url);
      if (u.hostname.includes('youtu.be')) return `https://www.youtube.com/embed/${u.pathname.slice(1)}`;
      if (u.hostname.includes('youtube.com')) {
        const v = u.searchParams.get('v');
        if (v) return `https://www.youtube.com/embed/${v}`;
        // handle /embed/ style urls
        if (u.pathname.includes('/embed/')) return url;
      }
    } catch (e) {
      return url;
    }
    return url;
  };

  if (isYouTube) {
    const embed = getYouTubeEmbed(src);
    return (
      <div className="mt-6 bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 shadow-sm">
        <div className="relative bg-black aspect-video w-full">
          <iframe
            title={label || 'YouTube video'}
            src={embed}
            className="w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div className="p-4">
          <p className="text-sm font-medium text-slate-700">{label}</p>
          {footerText && <p className="text-[11px] text-slate-500 italic leading-relaxed mt-2">{footerText}</p>}
        </div>
      </div>
    );
  }

  return (
    <div className="mt-6 bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 shadow-sm">
      <div className="relative bg-black aspect-video w-full">
        <video
          ref={videoRef}
          src={src}
          onEnded={handleEnded}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          className="w-full h-full"
          controls
          preload="metadata"
          playsInline
        />
      </div>
      <div className="p-4">
        <p className="text-sm font-medium text-slate-700">{label}</p>
        {footerText && <p className="text-[11px] text-slate-500 italic leading-relaxed mt-2">{footerText}</p>}
      </div>
    </div>
  );
}

function ExpandableText({ text, className = '' }) {
  const [expanded, setExpanded] = useState(false);
  const shouldShowToggle = text.length > 140;

  return (
    <div className={className}>
      <p
        className={`text-slate-600 text-sm leading-relaxed italic ${!expanded ? 'overflow-hidden' : ''}`}
        style={!expanded ? {
          display: '-webkit-box',
          WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        } : undefined}
      >
        "{text}"
      </p>
      {shouldShowToggle && (
        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          className="mt-2 text-sm font-semibold text-purple-600 hover:text-purple-700"
        >
          {expanded ? 'Ver menos' : 'Ver más'}
        </button>
      )}
    </div>
  );
}

// Card de persona con reseña + audio
function PersonaCard({ img, nombre, edad, rol, lugar, resena, audioSrc, audioLabel, pieFoto }) {
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
      <p className="px-6 pt-4 text-[11px] text-slate-500 italic leading-relaxed">{pieFoto}</p>
      <div className="p-6 flex flex-col flex-1">
        <p className="text-xs text-slate-400 font-medium uppercase tracking-wide mb-3">{lugar}</p>
        <blockquote className="pl-4 border-l-2 border-teal-400 text-slate-600 text-sm leading-relaxed italic flex-1">
          "{resena}"
        </blockquote>
        {audioSrc && (
          <div className="mt-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-purple-600 mb-2">
              Entrevista en audio: Voces locales
            </p>
            <AudioPlayer src={audioSrc} label={audioLabel || `Voz de ${nombre}`} />
          </div>
        )}
      </div>
    </div>
  );
}

export default function Saberes() { 
  const container = useRef(null);
  useAnimeReveal(container);

  const pieFoto = 'Imágen extraida de google maps, en recorrido satelital. Año 2026';
  const pieFotoConsentimiento = 'Fotografía Propia, Tomadas en el año 2026. Previo consentimiento de la persona y permiso para su publicación';

  const categorias = [
    { title: "Comunicación", desc: "Narrativas locales y medios comunitarios.", icon: conversacion },
    { title: "Economía popular", desc: "Emprendimientos y tejido social.", icon: crear },
    { title: "Cuidado colectivo", desc: "Redes de apoyo y comunidad.", icon: ayudar },
    { title: "Saberes ancestrales", desc: "Prácticas de identidad local.", icon: biometria },
  ];

  const personas = [
    {
      img: beatriz,
      nombre: "Beatriz Arcila",
      edad: 60,
      rol: "Emprendedora",
      lugar: "La Magnolia, Envigado",
      resena: "Lo que comenzó como un hobby elaborando chocolates artesanales se convirtió en mi emprendimiento. Con el tiempo perfeccioné cada receta y hoy comparto mis productos con más personas a través de WhatsApp.",
      audioSrc: "/audios/beatriz.mp4",
      audioLabel: "Beatriz habla sobre su emprendimiento",
      pieFoto: pieFotoConsentimiento,
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
      pieFoto: pieFotoConsentimiento,
    },
  ];

  return (
    <div
      ref={container}
      className="bg-white p-8 lg:p-10 rounded-[32px] shadow-sm border border-slate-100 space-y-10"
      style={{ borderLeft: '8px solid #a855f7' }}
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
          Saberes y Tradiciones: Voces de la Comunidad
        </h3>
        <p>
          Dignificamos el conocimiento empírico de comerciantes locales, migrantes y líderes comunitarios. Creemos firmemente que la sabiduría barrial es un motor económico. El conocimiento no es solo académico; se vive en el asfalto, las recetas, los oficios
          tradicionales у la resiliencia intergeneracional.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Don Alfonso */}
          <div className="border border-slate-100 rounded-3xl p-6 shadow-sm bg-white hover:border-slate-200 transition-colors">
            <div className="aspect-square w-full rounded-2xl overflow-hidden mb-3 border border-slate-100">
              <img src={alfonso} alt="Retrato de Don Alfonso" className="w-full h-full object-cover object-center" />
            </div>
            <p className="text-[11px] text-slate-500 italic leading-relaxed mb-4">{pieFoto}</p>
            <div className="flex justify-between items-start mb-4">
              <div>
                <h4 className="font-bold text-slate-900 text-lg">Don Alfonso (71 años)</h4>
                <p className="text-xs text-slate-500 mt-1">Comerciante tradicional - La Magnolia, Medellín</p>
              </div>
              <span className="bg-purple-50 text-purple-700 text-xs font-bold px-3 py-1 rounded-full text-center leading-tight">
                Comerciante de oficio
              </span>
            </div>
            <div className="pl-4 border-l-2 border-slate-200">
              <ExpandableText text="Llevo 40 años arreglando sofás y muebles en esta esquina. No sé mucho de redes sociales, pero mis clientes de toda la vida me traen a los más jóvenes." />
            </div>
          </div>

          {/* Yurani */}
          <div className="border border-slate-100 rounded-3xl p-6 shadow-sm bg-white hover:border-slate-200 transition-colors">
            <div className="aspect-square w-full rounded-2xl overflow-hidden mb-3 border border-slate-100">
              <img src={yurani} alt="Retrato de Yurani" className="w-full h-full object-cover object-center" />
            </div>
            <p className="text-[11px] text-slate-500 italic leading-relaxed mb-4">{pieFoto}</p>
            <div className="flex justify-between items-start mb-4">
              <div>
                <h4 className="font-bold text-slate-900 text-lg">Yurani (29 años)</h4>
                <p className="text-xs text-slate-500 mt-1">Venta de repostería - La Magnolia, Envigado</p>
              </div>
              <span className="bg-purple-50 text-purple-700 text-xs font-bold px-3 py-1 rounded-full text-center leading-tight">
                Emprendedora migrante
              </span>
            </div>
            <div className="pl-4 border-l-2 border-slate-200">
              <ExpandableText text="Cuando llegué de Venezuela me daba miedo vender. Empecé acá en el barrio y hoy mis recetas y productos venezolanos se mueven no solo por WhatsApp sino que también vienen por ellos." />
            </div>
          </div>

          {/* Janeth */}
          <div className="border border-slate-100 rounded-3xl p-6 shadow-sm bg-white hover:border-slate-200 transition-colors">
            <div className="aspect-square w-full rounded-2xl overflow-hidden mb-3 border border-slate-100">
              <img src={Janeth} alt="Retrato de Janeth Grisales" className="w-full h-full object-cover object-center" />
            </div>
            <p className="text-[11px] text-slate-500 italic leading-relaxed mb-4">{pieFoto}</p>
            <div className="flex justify-between items-start mb-4">
              <div>
                <h4 className="font-bold text-slate-900 text-lg">Janeth Grisales (52 años)</h4>
                <p className="text-xs text-slate-500 mt-1">Venta de morcilla y chorizos caseros – La Magnolia, Envigado</p>
              </div>
              <span className="bg-purple-50 text-purple-700 text-xs font-bold px-3 py-1 rounded-full text-center leading-tight">
                Comerciante de tradición gastronómica
              </span>
            </div>
            <div className="pl-4 border-l-2 border-slate-200">
              <ExpandableText text="Desde hace más de veinte años preparo morcilla y chorizos en la cocina de mi casa. La receta es de mi mamá, y aquí en el barrio me conocen porque siempre vendo fresco y con confianza. Al principio todo era de voz en voz, pero ahora uso WhatsApp para recibir pedidos y hasta me pagan por transferencias electrónicas, lo que me facilita mucho. Sin embargo, me gustaría aprender más de tecnología para mostrar mis productos a más personas y mejorar mis ventas. Yo sé que mi oficio es tradicional, pero también puede crecer si aprovecho esas herramientas digitales." />
            </div>
          </div>

          {/* Alex */}
          <div className="border border-slate-100 rounded-3xl p-6 shadow-sm bg-white hover:border-slate-200 transition-colors">
            <div className="aspect-square w-full rounded-2xl overflow-hidden mb-3 border border-slate-100">
              <img src={alex} alt="Retrato de Alex" className="w-full h-full object-cover object-center" />
            </div>
            <p className="text-[11px] text-slate-500 italic leading-relaxed mb-4">{pieFoto}</p>
            <div className="flex justify-between items-start mb-4">
              <div>
                <h4 className="font-bold text-slate-900 text-lg">Alex (29 años)</h4>
                <p className="text-xs text-slate-500 mt-1">Mecánico de motos – La Magnolia, Envigado</p>
              </div>
              <span className="bg-purple-50 text-purple-700 text-xs font-bold px-3 py-1 rounded-full text-center leading-tight">
                Joven emprendedor de oficios técnicos
              </span>
            </div>
            <div className="pl-4 border-l-2 border-slate-200">
              <ExpandableText text="Siempre me gustaron las motos, y aprendí a arreglarlas viendo y practicando con amigos. Hoy tengo mi propio taller en la esquina de mi casa, sencillo pero lleno de trabajo. Los vecinos confían en mí porque saben que les respondo rápido y con precios justos. Me contacto con clientes por WhatsApp, y algunos ya me pagan por transferencia bancaria, lo que me ayuda a organizar mejor el negocio. Quiero aprender más sobre tecnología para mostrar mis servicios en redes sociales y llegar a más personas. Creo que los jóvenes del barrio podemos crecer si combinamos nuestros oficios con las herramientas digitales." />
            </div>
          </div>
        </div>
      </div>

      {/* Cards de personas con multimedia */}
      <div data-anime className="space-y-4">
        <h3 className="font-bold text-slate-900 text-lg flex items-center gap-2">
          <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14a3 3 0 003-3V5a3 3 0 00-6 0v6a3 3 0 003 3zm-5 2h10m-5 4v-2m0 0a5 5 0 01-5-5h10a5 5 0 01-5 5z" />
          </svg>
          Voces de mi gente_ Economía Local al servicio de la comunidad
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {personas.map((p, idx) => (
            <PersonaCard key={idx} {...p} pieFoto={p.pieFoto || pieFoto} />
          ))}
        </div>
      </div>

      {/* Videos - Entrevistas */}
      <div data-anime className="space-y-4 pt-8 border-t border-slate-100">
        <h3 className="font-bold text-slate-900 text-lg flex items-center gap-2">
          <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Entrevistas a comerciantes locales
        </h3>
        <div className="space-y-6">
          <VideoPlayer
            src="https://youtu.be/3VmKK3UofXg"
            label="Entrevista - Jaime"
            footerText="Entrevista realizada por el autor, en el mes junio de 2026, barrio La Magnolia, Envigado"
          />
          <VideoPlayer
            src="https://youtu.be/wLGShhVBFhE"
            label="Entrevista - Jonathan"
            footerText="Entrevista realizada por el autor, en el mes junio de 2026, barrio La Magnolia, Envigado"
          />
        </div>
      </div>
    </div>
  );
}