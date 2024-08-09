import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Navigator from './Router/Navigator';
import { AuthProvider } from './components/AuthContext';
import Google from './components/Google';
import Profile from './components/Profile';
import Carousel from './components/Carousel';
import OrdersGrid from './components/OrdersGrid';
import OTPVerification from './components/OTPVerification';
import Dashboard from './components/Dashboard';


function App() {
  return (
    <div className="App">
      <AuthProvider>
          <Navigator />
      </AuthProvider>
      {/* <Dashboard/> */}
      
    </div>
  );
}

export default App;
