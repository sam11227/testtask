import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter ,Route,Routes} from 'react-router-dom';
import Dashboard from './components/Pages/Dashboard/Dashboard';
import User from './components/Pages/Assess/user';
import Owner from './components/Pages/Notifiaction/Owner';
import Xola from './components/Pages/xola/Xola';
import Preference from './components/Pages/Preferences/Pereference';
import Taxes from './components/Pages/Taxes/Texes';
import Payments from './components/Pages/Payments/Payments';
import Hardware from './components/Pages/Hardware/Hardware';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="Dashboard" element={<Dashboard />} />
      <Route path="User" element={<User/>} />
      <Route path="Owner" element={<Owner/>} />
      <Route path="Xola" element={<Xola/>} />
      <Route path="Preference" element={<Preference/>} />
      <Route path="Taxes" element={<Taxes/>} />
      <Route path="Payments" element={<Payments/>} />
      <Route path="Hardware" element={<Hardware/>} />
    </Routes>
  </BrowserRouter>,
  </React.StrictMode>
  
);
