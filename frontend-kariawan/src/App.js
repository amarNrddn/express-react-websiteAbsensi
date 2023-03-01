import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/loginpage/login/Login'
import Register from './components/loginpage/register/Register'
import Navbar from './components/dashboard/Navbar';
import Home from './components/dashboard/Home';
import Profile from './components/dashboard/Profile';
import Absensi from './components/dashboard/Absensi';
import EditPrfile from './components/dashboard/EditProfile'
import DataKariawan from './components/dashboard/DataKariawan';
import AdminActive from './components/dashboard/AdminActive';
import DataJabatan from './components/dashboard/DataJabatan';
import DataAbsensi from './components/dashboard/DataAbsensi';

const App = () => {
  return (
    <Router>
      <div className="">
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/navbar' element={<Navbar />} />
          <Route path='/home' element={<Home />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/absensi' element={<Absensi />} />
          <Route path='/edit' element={<EditPrfile />} />
          <Route path='/datakariawan' element={<DataKariawan/>} />
          <Route path='/adminactive' element={<AdminActive/>} />
          <Route path='/datajabatan' element={<DataJabatan/>} />
          <Route path='/dataabsensi' element={<DataAbsensi/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
