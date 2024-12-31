import { Outlet } from 'react-router-dom';
import SearchPage from './pages/search.jsx';
import ResultsTable from './pages/results.jsx';

function App() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default App;
