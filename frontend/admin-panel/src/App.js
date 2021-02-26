import logo from './assets/logo.svg';
import './styles/App.css';

import EventsTab from './components/EventsTab';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <EventsTab/>
      </header>
    </div>
  );
}

export default App;
