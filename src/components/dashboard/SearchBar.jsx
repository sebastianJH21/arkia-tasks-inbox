function SearchBar({ setSearch }) {
    return (
        <section className="mb-6">

            <input
                type="text"
                placeholder="Buscar tarea..."
                className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3"
                onChange={(e) => setSearch(e.target.value)}
            />

        </section>
    )
}

export default SearchBar