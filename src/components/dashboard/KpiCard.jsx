function KpiCard({ title, value, color = "" }) {
    return (
        <div className="bg-white rounded-xl shadow-sm p-5">
            <p className="text-sm text-slate-500 font-semibold">
                { title }
            </p>
            <h2
                className={`text-3xl font-bold mt-2 ${color}`}
            >
                { value }
            </h2>
        </div>
    )
}

export default KpiCard