// import { useState } from 'react'
import './App.css'
import Header from './components/layout/Header';
import KpiSection from './components/dashboard/KpiSection';
import SearchBar from './components/dashboard/SearchBar';
import MainLayout from './components/layout/MainLayout';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto p-6">
        <KpiSection />
        <SearchBar />
        <MainLayout />
      </main>
    </>
  )
}

export default App
