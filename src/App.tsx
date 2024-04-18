import { MantineProvider } from '@mantine/core';
import './App.css';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div className="App">
      <MantineProvider>
      <Dashboard/>
      </MantineProvider>
    </div>
  );
}

export default App;
