import './index.css';
import Sidebar from './components/Sidebar';
import DashboardMainContent from './components/DashboardMainContent';

function App() {
  return (
    <div style={{ width: "100vw", display: 'flex' }}>
      <Sidebar />
      <DashboardMainContent />
    </div>
  );
}

export default App;