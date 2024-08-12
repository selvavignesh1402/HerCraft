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
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import OtpVerification from './components/OTPVerification';
import Footer2 from './components/Footer2';


function App() {
  return (
    <div className="App">
      <AuthProvider>
          <Navigator />
      </AuthProvider>
      {/* <Footer2/> */}
      {/* <ProductForm/>
      <ProductList/> */}
      {/* <OtpVerification/> */}
      
    </div>
  );
}

export default App;
