// src/App.jsx (VERSI DIPERBARUI)

import CakeListPage from './pages/CakeListPage';
import Header from './components/Header'; // <-- Import baru
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header /> 
      <main>
        <CakeListPage />
      </main>
    </div>
  );
}

export default App;