import { ChevronDown } from "lucide-react";

export default function ProgramasSidebar({ ejes = [] }) {
  return (
    <aside className="w-full lg:w-64 flex-shrink-0">
      {/* Filtro por modalidad */}
      <div className="relative mb-6">
        <select className="w-full bg-[#0a1a3a] text-white appearance-none py-3 px-4 rounded-md text-sm cursor-pointer outline-none focus:ring-2 focus:ring-primary">
          <option value="">Todas las modalidades</option>
          <option value="Virtual">Virtual</option>
          <option value="Presencial">Presencial</option>
          <option value="Hibrido">Híbrido</option>
        </select>
        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white">
          <ChevronDown className="w-4 h-4" />
        </div>
      </div>

      <h2 className="text-xl font-bold text-[#0a1a3a] mb-6 leading-tight">
        Lista de <br /> programas
      </h2>

      {ejes.length > 0 ? (
        <ul className="space-y-3">
          {ejes.map((eje) => (
            <li key={eje.id || eje.documentId}>
              <a
                href={`/programas?eje=${eje.slug || eje.nombre}`}
                className="text-sm text-[#0a1a3a] font-medium hover:text-primary transition-colors block py-1"
              >
                {eje.nombre}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-sm text-gray-500">Cargando ejes...</p>
      )}
    </aside>
  );
}
