const tabs = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'territorio', label: 'Territorio' },
  { id: 'observacion', label: 'Observación' },
  { id: 'analisis', label: 'Análisis' },
  { id: 'propuesta', label: 'Propuesta' },
  { id: 'saberes', label: 'Saberes' },
  { id: 'vulnerabilidades', label: 'Vulnerabilidades' },
  { id: 'reflexion', label: 'Reflexión' },
  { id: 'cierre', label: 'Cierre' }
];

export default function Navigation({ activeTab, setActiveTab }) {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm animate-fadeIn">
      <div className="max-w-7xl mx-auto px-4 py-3 sm:px-6 lg:px-8">
        <ul className="flex flex-wrap items-center gap-2 text-sm overflow-x-auto">
          {tabs.map((tab) => (
            <li key={tab.id}>
              <button
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`rounded-full px-4 py-2 font-medium transition-colors whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-teal-700 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
                aria-current={activeTab === tab.id ? 'page' : undefined}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
