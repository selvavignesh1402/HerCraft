import './App.css';
import Home from './components/Home';
import Navigator from './Router/Navigator';
import { AuthProvider } from './components/AuthContext';

function App() {
  return (
    <div className="App">
      <AuthProvider>
          <Navigator />
      </AuthProvider>
    </div>
  );
}

export default App;
