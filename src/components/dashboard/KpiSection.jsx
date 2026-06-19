import KpiCard from "./KpiCard";
function KpiSection() {
    return (
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <KpiCard title={"Total Tareas"} value={120}/>
            <KpiCard title={"Pendientes"} value={35} color={"text-red-500" } />
            <KpiCard title={"En progreso"} value={50} color={"text-amber-500" } />
            <KpiCard title={"Completadas"} value={35} color={"text-green-500" } />
        </section>
    )
}

export default KpiSection;