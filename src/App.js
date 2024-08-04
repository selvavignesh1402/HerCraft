import './App.css';
import Home from './components/Home';
import Navigator from './Router/Navigator';
import { AuthProvider } from './components/AuthContext';
import Google from './components/Google';
import Profile from './components/Profile';

import OrdersGrid from './components/OrdersGrid';


function App() {
  return (
    <div className="App">
      <AuthProvider>
          <Navigator />
      </AuthProvider>
      {/* <OrdersGrid/> */}
      
    </div>
  );
}

export default App;
