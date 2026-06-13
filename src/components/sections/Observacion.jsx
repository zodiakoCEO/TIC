import { useRef } from 'react';
import useAnimeReveal from '../../hooks/useAnimeReveal';
import R1 from '../../../public/R1.jpeg';
import R2 from '../../../public/R2.jpeg';
import R3 from '../../../public/R3.jpeg';
import R4 from '../../../public/R4.jpeg';
import R5 from '../../../public/R5.jpeg';
import R6 from '../../../public/R6.jpeg';

export default function Observacion() {
  const container = useRef(null);
  useAnimeReveal(container);

  return (
    <div ref={container} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 animate-fadeIn space-y-8" data-anime>
      {/* Encabezado Principal */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <span className="p-2 bg-teal-100 rounded-lg text-purple-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
          </span>
          <span className="text-sm font-bold text-purple-700 uppercase tracking-wider">Trabajo de Campo</span>
        </div>
        <h2 className="text-3xl font-bold text-slate-900">2. Observación Activa e Instrumentos</h2>
        <p className="text-slate-600 text-lg mt-4 max-w-3xl">
          A través de caminatas territoriales sistemáticas y el diálogo activo con los habitantes, se ha construido una <strong>Bitácora de Observación</strong> para capturar las cápsulas audiovisuales, notas de campo y fotografías que sustentan el diagnóstico social de la economía popular.
        </p>
      </div>

      {/* Título de Extractos */}
      <div className="flex items-center gap-2 mt-8">
        <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
        <h3 className="text-xl font-bold text-slate-800">Extractos de la Bitácora de Campo</h3>
      </div>

      {/* Grid de Tarjetas */}
      <div className="grid gap-6 md:grid-cols-3" data-anime>
        
        {/* Tarjeta 1 */}
        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start mb-4">
              <span className="text-xs text-slate-500 font-medium">La Magnolia, Envigado</span>
              <span className="text-[10px] font-bold text-purple-700 bg-purple-50 px-2 py-1 rounded-md">REGISTRO #01</span>
            </div>
            <h4 className="font-bold text-lg mb-3">“Mascotas y economía afectiva”</h4>
            <p className="text-sm text-slate-600 leading-relaxed italic">
             En una vivienda adaptada como pequeño local funciona Ruquita Pets, una tienda de alimentos y accesorios para mascotas. La fachada conserva la estética doméstica, pero un letrero pintado y bolsas de alimento en la ventana anuncian la actividad comercial. La dueña, vecina del sector, atiende personalmente y ofrece confianza a quienes buscan productos para sus animales. Este negocio muestra cómo la economía barrial se diversifica más allá de la alimentación humana, integrando el cuidado de los animales como parte de la vida cotidiana.
            </p>
            <p className="text-sm text-slate-500 leading-relaxed mt-4">
              Nota pedagógica: La apropiación del espacio doméstico para el comercio refleja resiliencia y creatividad frente a la falta de locales formales.
            </p>
          </div>
          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
            <img src={R1} alt="R1 Mascotas y economía afectiva" className="w-full h-48 object-cover" />
          </div>
        </div>

        {/* Tarjeta 2 */}
        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start mb-4">
              <span className="text-xs text-slate-500 font-medium">La Magnolia, Envigado</span>
              <span className="text-[10px] font-bold text-purple-700 bg-purple-50 px-2 py-1 rounded-md">REGISTRO #02</span>
            </div>
            <h4 className="font-bold text-lg mb-3">"Tamales desde la ventana"</h4>
            <p className="text-sm text-slate-600 leading-relaxed italic">
              En la fachada de un edificio residencial cuelga un aviso sencillo: “Deliciosos Tamales Caseros”. No hay vitrina ni mostrador, solo la ventana y la voz de la vecina que ofrece el producto. Los tamales se preparan en la cocina de la casa y se venden directamente a transeúntes y vecinos. Este gesto cotidiano convierte la vivienda en un punto de encuentro gastronómico, donde la tradición culinaria se transforma en sustento económico.
            </p>
            <p className="text-sm text-slate-500 leading-relaxed mt-4">
              Nota pedagógica: La economía popular se sostiene en prácticas familiares que, aunque informales, generan vínculos de confianza y circulación de saberes tradicionales.
            </p>
          </div>
          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
            <img src={R2} alt="R2 Tamales desde la ventana" className="w-full h-48 object-cover" />
          </div>
        </div>

        {/* Tarjeta 3 */}
        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start mb-4">
              <span className="text-xs text-slate-500 font-medium">La Magnolia, Envigado</span>
              <span className="text-[10px] font-bold text-purple-700 bg-purple-50 px-2 py-1 rounded-md">REGISTRO #03</span>
            </div>
            <h4 className="font-bold text-lg mb-3">"Uniformes en la sala"</h4>
            <p className="text-sm text-slate-600 leading-relaxed italic">
              En la planta baja de una casa de fachada en piedra funciona Ola-g Uniformes Cheapers. El espacio doméstico se adaptó como tienda: detrás de una reja metálica cuelgan prendas blancas, listas para la venta. La familia que habita la vivienda atiende el negocio, combinando la vida cotidiana con la actividad comercial. Este ejemplo muestra cómo las casas se convierten en microempresas, integrando producción y venta en el mismo lugar.
            </p>
            <p className="text-sm text-slate-500 leading-relaxed mt-4">
              Nota pedagógica: La frontera entre hogar y comercio se difumina, revelando la capacidad de las familias para generar ingresos sin necesidad de infraestructura externa.
            </p>
          </div>
          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
            <img src={R3} alt="R3 Uniformes en la sala" className="w-full h-48 object-cover" />
          </div>
        </div>

        {/* Tarjeta 4 */}
        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start mb-4">
              <span className="text-xs text-slate-500 font-medium">La Magnolia, Envigado</span>
              <span className="text-[10px] font-bold text-purple-700 bg-purple-50 px-2 py-1 rounded-md">REGISTRO #04</span>
            </div>
            <h4 className="font-bold text-lg mb-3">"La morcilla de la esquina"</h4>
            <p className="text-sm text-slate-600 leading-relaxed italic">
              En una esquina del barrio, un letrero sencillo anuncia la venta de morcilla casera. No hay vitrina ni local formal, solo la fachada de la vivienda y el aviso con un número de contacto. El producto se prepara en la cocina familiar y se ofrece directamente a vecinos y transeúntes. Este tipo de comercio muestra cómo la tradición culinaria se convierte en sustento económico y en vínculo social, pues quienes compran lo hacen por confianza y cercanía.
            </p>
            <p className="text-sm text-slate-500 leading-relaxed mt-4">
              Nota pedagógica: La economía popular se sostiene en la transmisión de saberes gastronómicos y en la confianza barrial, más allá de la formalidad comercial.
            </p>
          </div>
          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
            <img src={R4} alt="R4 La morcilla de la esquina" className="w-full h-48 object-cover" />
          </div>
        </div>

        {/* Tarjeta 5 */}
        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start mb-4">
              <span className="text-xs text-slate-500 font-medium">La Magnolia, Envigado</span>
              <span className="text-[10px] font-bold text-purple-700 bg-purple-50 px-2 py-1 rounded-md">REGISTRO #05</span>
            </div>
            <h4 className="font-bold text-lg mb-3">"Helados caseros en la sala"</h4>
            <p className="text-sm text-slate-600 leading-relaxed italic">
              En la entrada de una vivienda se improvisó un pequeño mostrador donde una familia ofrece helados caseros. Los sabores varían según la temporada y los ingredientes disponibles, preparados en la misma cocina del hogar. Los vecinos se acercan a comprar en la tarde, convirtiendo la casa en un punto de encuentro refrescante y cotidiano. Este emprendimiento refleja cómo la creatividad culinaria se transforma en sustento económico, aprovechando la confianza barrial y el tránsito peatonal.
            </p>
            <p className="text-sm text-slate-500 leading-relaxed mt-4">
              Nota pedagógica: La economía popular se reinventa con productos sencillos y accesibles, mostrando cómo las familias adaptan sus espacios domésticos para generar ingresos y fortalecer la vida comunitaria.
            </p>
          </div>
          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
            <img src={R5} alt="R5 Helados caseros en la sala" className="w-full h-48 object-cover" />
          </div>
        </div>

        {/* Tarjeta 6 */}
        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start mb-4">
              <span className="text-xs text-slate-500 font-medium">La Magnolia, Envigado</span>
              <span className="text-[10px] font-bold text-purple-700 bg-purple-50 px-2 py-1 rounded-md">REGISTRO #06</span>
            </div>
            <h4 className="font-bold text-lg mb-3">"El taller de motos de Alex"</h4>
            <p className="text-sm text-slate-600 leading-relaxed italic">
              En la esquina de una vivienda adaptada funciona el pequeño taller de Alex, un joven del barrio que ofrece reparación de motos. El espacio es sencillo: una puerta abierta, herramientas básicas y la presencia constante de vecinos que llegan con sus motocicletas. Alex aprendió el oficio de manera empírica y lo ha convertido en sustento económico, atendiendo con cercanía y confianza a quienes lo conocen. Su taller refleja cómo los jóvenes del barrio encuentran en la economía popular una oportunidad para emprender desde sus propios saberes.
            </p>
            <p className="text-sm text-slate-500 leading-relaxed mt-4">
              Nota pedagógica: La economía barrial también se sostiene en oficios técnicos, donde la juventud aporta innovación y resiliencia, adaptando espacios domésticos para ofrecer servicios esenciales.
            </p>
          </div>
          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
            <img src={R6} alt="R6 El taller de motos de Alex" className="w-full h-48 object-cover" />
          </div>
        </div>

      </div>
    </div>
  );
}