import { useEffect, useRef } from 'react';
// 1. Importamos la imagen de tu carpeta de assets
// Asegúrate de que la ruta sea correcta según dónde esté tu Map.jsx
import pointIcon from '../assets/point.png'; 

// Coordenadas estrictas siguiendo el dibujo de la línea negra (sin nudos)
const limitesMagnolia = [
  // 1. Borde Noroeste
  { lat: 6.1748, lng: -75.5846 },
  { lat: 6.1755, lng: -75.5838 },
  // 2. Borde Norte
  { lat: 6.1761, lng: -75.5810 },
  { lat: 6.1763, lng: -75.5796 }, 
  // 3. Borde Este
  { lat: 6.1742, lng: -75.5809 },
  { lat: 6.1725, lng: -75.5798 },
  // 4. Esquina Sureste
  { lat: 6.1712, lng: -75.5796 },
  { lat: 6.1706, lng: -75.5804 },
  // 5. Borde Sur
  { lat: 6.1694, lng: -75.5826 },
  { lat: 6.1694, lng: -75.5832 },
  // 6. Borde Oeste
  { lat: 6.1708, lng: -75.5844 },
  { lat: 6.1725, lng: -75.5852 },
  { lat: 6.1740, lng: -75.5848 } 
];

const emprendimientosIniciales = [
  { nombre: 'Obleas y solteritas caseras', lat: 6.1756916, lng: -75.5800201 },
  { nombre: 'Saxofon en vivo', lat: 6.1716832, lng: -75.5804983 }
];

export default function Map() {
  const mapContainer = useRef(null);
  const mapInstance = useRef(null);
  const draftMarkerRef = useRef(null);
  const infoWindowRef = useRef(null);

  useEffect(() => {
    const initMap = async () => {
      if (!window.google || !window.google.maps) {
        setTimeout(initMap, 100);
        return;
      }
      if (!mapContainer.current) return;

      const { Map, InfoWindow } = await window.google.maps.importLibrary("maps");
      const { AdvancedMarkerElement, PinElement } = await window.google.maps.importLibrary("marker");

      mapInstance.current = new Map(mapContainer.current, {
        center: { lat: 6.1735, lng: -75.5820 },
        zoom: 16.2,
        mapId: 'a935deae04e43324bba060a6', 
        mapTypeControl: false, 
        streetViewControl: true,
      });

      const poligonoBarrio = new window.google.maps.Polygon({
        paths: limitesMagnolia,
        strokeColor: "#ef4444", 
        strokeOpacity: 0.8,
        strokeWeight: 3,
        fillColor: "#ef4444", 
        fillOpacity: 0.1, 
      });
      poligonoBarrio.setMap(mapInstance.current);

      const agregarMarcador = (lat, lng, nombre) => {
        const etiquetaNaranja = document.createElement('div');
        // Reduje un poco el padding izquierdo (pl-1) para que el icono se vea más pegado al borde
        etiquetaNaranja.className = 'bg-[#ea580c] text-white pl-1.5 pr-3 py-1 rounded-full font-bold text-xs shadow-lg border-2 border-white flex items-center gap-1.5 hover:scale-110 transition-transform cursor-pointer';
        
        // 2. Reemplazamos el span por la etiqueta <img> usando la variable importada
        // Ajustamos con Tailwind: w-5 h-5 (tamaño) y object-contain (para que no se deforme)
        etiquetaNaranja.innerHTML = `<img src="${pointIcon}" alt="Pin" class="w-5 h-5 object-contain drop-shadow-sm" /> <span>${nombre}</span>`;

        new AdvancedMarkerElement({
          map: mapInstance.current,
          position: { lat, lng },
          title: nombre,
          content: etiquetaNaranja,
        });
      };

      emprendimientosIniciales.forEach(emp => {
        agregarMarcador(emp.lat, emp.lng, emp.nombre);
      });

      infoWindowRef.current = new InfoWindow();

      mapInstance.current.addListener("click", (evento) => {
        const latLng = evento.latLng;

        if (draftMarkerRef.current) {
          draftMarkerRef.current.map = null;
        }

        const pinBorrador = new PinElement({
          background: "#3b82f6", 
          borderColor: "#1d4ed8",
          glyphColor: "white",
        });

        draftMarkerRef.current = new AdvancedMarkerElement({
          map: mapInstance.current,
          position: latLng,
          gmpDraggable: true,
          content: pinBorrador.element,
          title: "Arrastra para ajustar la ubicación"
        });

        const formContainer = document.createElement('div');
        formContainer.className = "p-2 min-w-[220px]";
        formContainer.innerHTML = `
          <p class="text-sm font-bold text-slate-800 mb-1">Agregar Emprendimiento</p>
          <p class="text-[11px] text-slate-500 mb-3 leading-tight">Mueve el pin azul si la ubicación no es exacta.</p>
          <input type="text" id="nombre-local" placeholder="Ej: Panadería La Abuela..." class="w-full border border-slate-300 rounded px-2 py-1.5 mb-3 text-sm focus:outline-none focus:ring-1 focus:ring-teal-500" />
          <div class="flex gap-2">
            <button id="btn-guardar" class="bg-teal-600 text-white px-3 py-1.5 rounded text-xs font-bold hover:bg-teal-700 w-full transition-colors">Guardar</button>
            <button id="btn-cancelar" class="bg-slate-100 text-slate-600 px-3 py-1.5 rounded text-xs font-bold hover:bg-slate-200 w-full transition-colors">Cancelar</button>
          </div>
        `;

        const btnGuardar = formContainer.querySelector('#btn-guardar');
        const btnCancelar = formContainer.querySelector('#btn-cancelar');
        const inputNombre = formContainer.querySelector('#nombre-local');

        btnGuardar.addEventListener('click', () => {
          const nombre = inputNombre.value.trim();
          if (nombre) {
            const finalPos = draftMarkerRef.current.position;
            agregarMarcador(finalPos.lat, finalPos.lng, nombre);
            
            infoWindowRef.current.close();
            draftMarkerRef.current.map = null;
            draftMarkerRef.current = null;
          } else {
            alert("Por favor, ingresa el nombre del local.");
          }
        });

        btnCancelar.addEventListener('click', () => {
          infoWindowRef.current.close();
          draftMarkerRef.current.map = null;
          draftMarkerRef.current = null;
        });

        infoWindowRef.current.setContent(formContainer);
        infoWindowRef.current.open({
          anchor: draftMarkerRef.current,
          map: mapInstance.current,
        });

        draftMarkerRef.current.addListener('dragend', () => {
          infoWindowRef.current.open({
            anchor: draftMarkerRef.current,
            map: mapInstance.current,
          });
        });
      });
    };

    initMap();
  }, []);

  return (
    <div className="w-full min-h-[520px] rounded-[28px] overflow-hidden border border-slate-200 shadow-glow relative bg-slate-100 flex flex-col items-center justify-center">
      
      {/* 3. Etiqueta flotante superior actualizada con la misma imagen */}
      <div className="absolute top-4 z-20 bg-white/95 px-5 py-3 rounded-full shadow-lg text-sm font-semibold text-slate-800 border border-slate-100 flex items-center gap-2 pointer-events-none">
        <img src={pointIcon} alt="Icono mapa" className="w-5 h-5 object-contain" /> Toca cualquier parte para agregar un local
      </div>
      
      <div ref={mapContainer} className="w-full h-full absolute inset-0 z-10" />
    </div>
  );
}