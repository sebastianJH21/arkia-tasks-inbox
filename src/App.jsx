import { useEffect, useState, useMemo } from 'react';
import Header from './components/layout/Header';
import KpiSection from './components/dashboard/KpiSection';
import SearchBar from './components/dashboard/SearchBar';
import MainLayout from './components/layout/MainLayout';
import { fetchTasks } from "./services/taskService";
import { fetchFilters } from "./services/filtersService";
import { usePersistedState } from "./hooks/usePersistedState";


function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filters, setfilters] = useState([]);
  const [search, setSearch] = useState('');
  const [filtersValue, setFiltersValue, resetFilters] =
    usePersistedState(
      "taskFilters",
      {}
    );

  const applyFilters = (tasks, filtersValue) => {
    let result = [...tasks]

    if (!filtersValue.status) {
      result = result.filter(task => task.status !== "Completada");
    }

    Object.entries(filtersValue).forEach(([field, value]) => {

      if (!value) return;

      if (field === "createdAt") return;

      result = result.filter(task => 
        String(task[field]).toLowerCase().includes(value.toLowerCase())
      );
    });
    return result;
  }

  const applySearch = (tasks, search) => {
    if (!search) return tasks;

    let result = [...tasks]
    result = result.filter(item => (
        Object.values(item).some(value => String(value).toLowerCase().includes(search.toLowerCase()))
    ))
    return result;
  }

  const applySort = (tasks, filtersValue) => {
    let result = [...tasks]

    if (filtersValue.createdAt === "Más reciente" || !filtersValue.createdAt) {
      result = result.sort((a, b) => (
        new Date(b.createdAt) - new Date(a.createdAt)
      ))
      return result;
    }
    if (filtersValue.createdAt === "Más antiguo") {
      result = result.sort((a, b) => (
        new Date(a.createdAt) - new Date(b.createdAt)
      ))
      return result;
    }
  }
  
  const visibleTasks = useMemo(() => {

    let result = [...tasks];

    result = applyFilters(result, filtersValue)
    result = applySearch(result, search)
    result = applySort(result, filtersValue)

    return result;

  }, [tasks, filtersValue, search]);

  useEffect(() => {
    const loadTasks = async () => {
      setLoading(true)
      const data = await fetchTasks();
      setTasks(data);
      setLoading(false)
    };
    const loadFilters = async () => {
      const data = await fetchFilters();
      setfilters(data);
    };

    loadTasks();
    loadFilters();
  }, []);

  return (
    <>
      <Header />
      <main
        className={`
          max-w-7xl
          mx-auto
          p-6
          ${ loading
            ? ' w-full h-screen flex justify-center items-center'
            : ''
          }
        `}
      >
        { loading ? (
          <div
            class="
              w-10
              h-10
              inline-block
              box-border
              animate-spin
              rounded-[50%]
              border-white
              border-b-[#1475fc]
              border-[5px]
              border-solid
            "
          >
          </div>
        ):(
          <>
            <KpiSection tasks={tasks} />
            <SearchBar setSearch={setSearch} />
            <MainLayout
              tasks={tasks}
              visibleTasks={visibleTasks}
              filters={filters}
              filtersValue={filtersValue}
              setFiltersValue={setFiltersValue}
              resetFilters={resetFilters}
              loading={loading}
            />
          </>
        )}
      </main>
    </>
  )
}

export default App
