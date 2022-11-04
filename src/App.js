
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Admin/Dashboard';
import Beverage from './components/Beverage/Beverage';
import Dairy from './components/Dairy/Dairy';
import Govment from './components/Govment/Govment';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Orders from './components/Orders/Orders';
import Payment from './components/Payment/Payment';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Shipment from './components/Shipment/Shipment';
import Shop from './components/Shop/Shop';
import SignUp from './components/SignUp/SignUp';
import Meat from './components/Vegetables/Meat/Meat';
import Vegetables from './components/Vegetables/Vegetables';

function App() {
  return (
    <div className='app'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/vegetables' element={<Vegetables></Vegetables>}></Route>
        <Route path='/dairy' element={<Dairy></Dairy>}></Route>
        <Route path='/beverage' element={<Beverage></Beverage>}></Route>
        <Route path='/meat' element={<Meat></Meat>}></Route>
        <Route path='/shop' element={<Shop></Shop>}></Route>
        <Route path='/orders' element={   <RequireAuth>
            <Orders></Orders>
          </RequireAuth>}></Route>

        <Route path="/shipment" element={
          <RequireAuth>
            <Shipment></Shipment>
          </RequireAuth>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/dashboard' element={
          <RequireAuth>
        <Dashboard></Dashboard>
        </RequireAuth>
        }></Route>
         <Route path='/govtRoute' element={
          <RequireAuth>
        <Govment></Govment>
        </RequireAuth>
        }></Route>
         <Route path='/payment' element={
          <RequireAuth>
        <Payment></Payment>
        </RequireAuth>
        }></Route>
      </Routes>
    </div>
  );
}

export default App;
