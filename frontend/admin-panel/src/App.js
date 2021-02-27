import logo from './assets/logo.svg';
import './styles/App.css';

import EventsTab from './components/EventsTab';
import EventCategoriesTab from './components/EventCategoriesTab';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <EventsTab/>
        <EventCategoriesTab/>
      </header>
    </div>
  );
}

export default App;
