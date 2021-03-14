import './styles/App.css';

//import EventsTab from './components/EventsTab';
//import EventCategoriesTab from './components/EventCategoriesTab';
import SideMenu from './components/SideMenu';
import Dashboard from './components/Dashboard';
import { useState } from 'react';

function App() {

  const [dashboardState, setDashboardState ] = useState("home");

  function goToSection(sectionName) {
    setDashboardState(sectionName);
  }

  return (
    <div className="App">
      <header>
      </header>
      <div className="App-header">
        <SideMenu goToSection={goToSection} />
        <Dashboard section={dashboardState} />
      </div>
    </div>
  );
}

export default App;
