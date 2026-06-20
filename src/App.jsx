// import { useState } from 'react'
import './App.css'
import { useEffect, useState, useMemo } from 'react';
import Header from './components/layout/Header';
import KpiSection from './components/dashboard/KpiSection';
import SearchBar from './components/dashboard/SearchBar';
import MainLayout from './components/layout/MainLayout';
import { fetchTasks } from "./hooks/useTasks";
import { fetchFilters } from "./hooks/useFilters";
import { usePersistedState } from "./hooks/usePersistedState";


function App() {
  const [tasks, setTasks] = useState([]);
  const [filters, setfilters] = useState([]);
  const [filtersValue, setFiltersValue] =
    usePersistedState(
      "taskFilters",
      {}
    );

  const visibleTasks = useMemo(() => {

    let result = [...tasks];

    Object.entries(filtersValue)
      .forEach(([field, value]) => {

        if (!value) return;

        result = result.filter(task =>
          task[field] === value
        );

      });

    return result;

  }, [tasks, filtersValue]);

  const [search, setSearch] = useState('')

  useEffect(() => {
    const loadTasks = async () => {
      const data = await fetchTasks();
      setTasks(data);
    };
    const loadFilters = async () => {
      const data = await fetchFilters();
      setfilters(data);
    };

    loadTasks();
    loadFilters();
  }, []);


  // useEffect(() => {
  //   const initialFitlersvalue = (filters) => {
  //     return filters.reduce((object, filter) => {
  //       object[filter.field] = filter.type === "checkbox" ? false : '';
  //       return object;
  //     }, {})
  //   }
  //   setFiltersValue(initialFitlersvalue(filters))
  // }, [filters])

  // useEffect(() => {

  //   localStorage.setItem(
  //       'taskFilters',
  //       JSON.stringify(filtersValue)
  //   );

  // }, [filtersValue]);

  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto p-6">
        <KpiSection />
        <SearchBar setTasks={setTasks} />
        <MainLayout
          tasks={visibleTasks}
          filters={filters}
          filtersValue={filtersValue}
          setFiltersValue={setFiltersValue}
        />
      </main>
    </>
  )
}

export default App
