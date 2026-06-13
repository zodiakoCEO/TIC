export default function Header() {
  return (
    <header className="bg-white border-b border-slate-200 animate-fadeIn">
      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="mt-2 text-6xl font-black text-purple-700 leading-tight">
              Red de Economía Local Inteligente
            </h1>
            <p className="mt-2 text-lg text-slate-900 max-w-4xl">
              Un recorrido por territorio, observación, análisis, propuestas y saberes de la economía popular.
            </p>
          </div>
          <div className="text-sm text-slate-500 whitespace-nowrap">
            Creado por DIANA ARTEMISA ARBELAEZ ARBELAEZ
          </div>
        </div>
      </div>
    </header>
  );
}
