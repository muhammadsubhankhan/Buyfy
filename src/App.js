import React from 'react';
import './App.css';
import { Switch , Route } from "react-router-dom";
import Auth from './Pages/Auth/Auth';
import Category from './Pages/Category/Category';
import Home from './Pages/Home/Home';
import Shop from './Pages/Shop/Shop';
import Product from './Pages/Product/Product';
import Checkout from './Pages/Checkout/Checkout';
import Profile from './Pages/Profile/Profile';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
   
  <div>
    
      <Switch>
        <div className="app-container">
      
      <div className="navbar-view"> 
      <Navbar/>
      </div>
     
     
      <div className="app-view">
      <Route path="/" exact  component={Home} />
      <Route path="/Auth" component={Auth} />
      <Route path="/Shop" exact component={Shop} />
      <Route path="/Shop/Category/:categoryName" exact component={Category} />
      <Route path="/Shop/Category/:categoryName/product/:productId" component={Product} />
      <Route path="/checkout" component={Checkout}/>
      <Route path="/profile" component={Profile}/>
      </div>
      </div>
   </Switch>
  </div>
  );
}

export default App;
