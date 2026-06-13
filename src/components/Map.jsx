import { useEffect, useRef } from 'react'; 

// Coordenadas estrictas siguiendo el dibujo de la línea negra (sin nudos)
const limitesMagnolia = [
  // 1. Borde Noroeste
  { lat: 6.1748, lng: -75.5846 },
  { lat: 6.1755, lng: -75.5838 },
  // 2. Borde Norte
  { lat: 6.1761, lng: -75.5810 },
  { lat: 6.1763, lng: -75.5796 }, 
  // 3. Borde Este
  { lat: 6.1742, lng: -75.58009 },
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
  // Zona noreste
  { nombre: 'Obleas y solteritas caseras', lat: 6.1753916, lng: -75.5800201, whatsapp: '+57 3012848076' },
  // Zona sureste
  { nombre: 'Saxofon en vivo', lat: 6.1716832, lng: -75.5804983, whatsapp: '+57 3002757137' },
  // Zona central/oeste
  { nombre: 'Peluqueria Gladys Ramirez', lat: 6.1740356, lng: -75.5825058, whatsapp: '+57 320 345 6789' },
  // Zona suroeste
  { nombre: 'Helados y cremas caseras', lat: 6.1732, lng: -75.5841, whatsapp: '+57 3195563036' },
  // Zona noroeste
  { nombre: 'Mueblería y Talabarteria de Don Jairo', lat: 6.1758675, lng: -75.5814222, whatsapp: '+57 301 567 8901' },
  // Zona norte
  { nombre: 'Confecciones de uniformes y chaquetas ', lat: 6.1754130, lng: -75.5835125, whatsapp: '+57 3103743949' },
  // Zona este
  { nombre: 'Tamales Caseritos', lat: 6.1709816, lng: -75.5837886, whatsapp: '+57 3217552436' },
  // Zona este (repetido para mostrar cómo se ven dos emprendimientos cercanos)
  { nombre: 'Morcilla y Chorizos Caseros', lat: 6.1712828, lng: -75.5833832, whatsapp: '+57 3145551057' },
  // Puedes agregar más emprendimientos aquí siguiendo el mismo formato
  { nombre: 'Peluqueria y comida para perros y gatos- Rocío Fuentes', lat: 6.1717622, lng: -75.5836016, whatsapp: '+57 6043866195' },
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
        strokeColor: "#a855f7", 
        strokeOpacity: 0.8,
        strokeWeight: 3,
        fillColor: "#a855f7", 
        fillOpacity: 0.1, 
      });
      poligonoBarrio.setMap(mapInstance.current);

      const modalContainer = document.createElement('div');
      modalContainer.className = 'fixed inset-0 z-[9999] hidden flex items-center justify-center bg-slate-950/40 p-4';
      modalContainer.innerHTML = `
        <div class="max-w-sm w-full bg-white rounded-[24px] shadow-2xl overflow-hidden border border-slate-200">
          <div class="flex items-center justify-between gap-3 p-5 border-b border-slate-200">
            <div>
              <p class="text-xs font-semibold uppercase tracking-[0.2em] text-purple-700">Emprendimiento</p>
              <h3 id="contact-name" class="text-xl font-black text-slate-900 mt-2 leading-tight"></h3>
            </div>
            <button id="contact-close" class="text-slate-500 hover:text-slate-900 text-2xl leading-none">&times;</button>
          </div>
          <div class="px-5 py-6 space-y-4">
            <div class="rounded-2xl bg-slate-50 p-4">
              <p class="text-[11px] text-slate-500 uppercase tracking-[0.18em] mb-2">WhatsApp</p>
              <p id="contact-whatsapp" class="text-sm font-semibold text-slate-900"></p>
            </div>
            <p class="text-sm text-slate-600 leading-relaxed">Usa este número para hablar directamente con el emprendimiento.</p>
          </div>
          <div class="px-5 pb-5">
            <button id="contact-close-bottom" class="w-full rounded-2xl bg-purple-600 text-white py-3 text-sm font-semibold hover:bg-purple-700 transition">Cerrar</button>
          </div>
        </div>
      `;
      document.body.appendChild(modalContainer);

      const modalName = modalContainer.querySelector('#contact-name');
      const modalWhatsapp = modalContainer.querySelector('#contact-whatsapp');
      const contactClose = modalContainer.querySelector('#contact-close');
      const contactCloseBottom = modalContainer.querySelector('#contact-close-bottom');

      const openContactModal = (nombre, whatsapp) => {
        modalName.textContent = nombre;
        modalWhatsapp.textContent = whatsapp || 'No disponible';
        modalContainer.classList.remove('hidden');
      };

      const closeContactModal = () => {
        modalContainer.classList.add('hidden');
      };

      contactClose.addEventListener('click', closeContactModal);
      contactCloseBottom.addEventListener('click', closeContactModal);

      const agregarMarcador = (lat, lng, nombre, whatsapp) => {
        const etiquetaNaranja = document.createElement('div');
        etiquetaNaranja.className = 'bg-purple-600 text-white pl-1.5 pr-3 py-1 rounded-full font-bold text-xs shadow-lg border-2 border-white flex items-center gap-1.5 hover:scale-110 transition-transform cursor-pointer';
        etiquetaNaranja.innerHTML = `<img src="/pin-history.svg" alt="Pin" class="w-5 h-5 object-contain drop-shadow-sm" /> <span>${nombre}</span>`;

        const marcador = new AdvancedMarkerElement({
          map: mapInstance.current,
          position: { lat, lng },
          title: nombre,
          content: etiquetaNaranja,
        });

        marcador.addListener('click', () => {
          openContactModal(nombre, whatsapp);
        });
      };

      emprendimientosIniciales.forEach(emp => {
        agregarMarcador(emp.lat, emp.lng, emp.nombre, emp.whatsapp);
      });

      infoWindowRef.current = new InfoWindow();

      mapInstance.current.addListener("click", (evento) => {
        const latLng = evento.latLng;

        if (draftMarkerRef.current) {
          draftMarkerRef.current.map = null;
        }

        const pinBorrador = new PinElement({
          background: "#a855f7", 
          borderColor: "#7c3aed",
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
          <input type="text" id="nombre-local" placeholder="Ej: Panadería La Abuela..." class="w-full border border-slate-300 rounded px-2 py-1.5 mb-3 text-sm focus:outline-none focus:ring-1 focus:ring-purple-500" />
          <div class="flex gap-2">
            <button id="btn-guardar" class="bg-purple-600 text-white px-3 py-1.5 rounded text-xs font-bold hover:bg-purple-700 w-full transition-colors">Guardar</button>
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
        <img src="/pin-history.svg" alt="Icono mapa" className="w-5 h-5 object-contain" /> Toca cualquier parte para agregar un local
      </div>
      
      <div ref={mapContainer} className="w-full h-full absolute inset-0 z-10" />
    </div>
  );
}