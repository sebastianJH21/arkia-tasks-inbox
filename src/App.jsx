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
  const [loading, setLoading] = useState(false);
  const [filters, setfilters] = useState([]);
  const [search, setSearch] = useState(null);
  const [filtersValue, setFiltersValue] =
    usePersistedState(
      "taskFilters",
      {},
      setLoading
    );

  const applyFilters = (tasks, filtersValue) => {
    let result = [...tasks]
    Object.entries(filtersValue).forEach(([field, value]) => {

      if (!value) return;

      if (field === "createdAt") return
        result = result.filter(task => 
        String(task[field]).toLowerCase().includes(value.toLowerCase())
      );
    });
    return result;
  }

  const applySearch = (tasks, search) => {
    if (!search) return tasks

    return tasks.filter(item => (
        Object.values(item).some(value => String(value).toLowerCase().includes(search.toLowerCase()))
    ))
  }

  const applySort = (tasks, filtersValue) => {
    if (!filtersValue.createdAt) return tasks

    if (filtersValue.createdAt === "Más reciente") {
      return tasks.sort((a, b) => (
        new Date(b.createdAt) - new Date(a.createdAt)
      ))
    }
    if (filtersValue.createdAt === "Más antiguo") {
      return tasks.sort((a, b) => (
        new Date(a.createdAt) - new Date(b.createdAt)
      ))
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
      <main className="max-w-7xl mx-auto p-6">
        <KpiSection tasks={tasks} />
        <SearchBar setSearch={setSearch} />
        <MainLayout
          tasks={visibleTasks}
          filters={filters}
          filtersValue={filtersValue}
          setFiltersValue={setFiltersValue}
          loading={loading}
        />
      </main>
    </>
  )
}

export default App
