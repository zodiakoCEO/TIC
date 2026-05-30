export default function Header() {
  return (
    <header className="bg-white border-b border-slate-200 animate-fadeIn">
      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-teal-700 font-semibold">
              Proyecto Pedagógico Hábitat-TIC
            </p>
            <h1 className="mt-2 text-3xl font-black text-slate-900">
              Micrositio de investigación y circulación territorial
            </h1>
            <p className="mt-2 text-sm text-slate-600 max-w-2xl">
              Un recorrido por territorio, observación, análisis, propuestas y saberes de la economía popular.
            </p>
          </div>
          <div className="text-sm text-slate-500">
            Creado por DIANA ARTEMISA ARBELAEZ ARBELAEZ
          </div>
        </div>
      </div>
    </header>
  );
}
