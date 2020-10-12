import React, {useEffect} from 'react';
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
import { auth, firestore } from './Firebase/Firebase';
import { connect } from "react-redux";
import { setCurrentUser , removeCurrentUser } from "./Redux/user/UserAction";


function App(props) {
  useEffect( () => {
    auth.onAuthStateChanged ( async (user) => {
  if(user) {
      var { uid} = user;
     
      if(uid) {
        var userSnap = await  firestore.collection("users").doc(uid).get();
        if(userSnap.exists) {
          var userData = userSnap.data();
          var userObj = {
            fullName: userData.fullName,
            uid,
            email : userData.email
          }
//          console.log(userObj)
          props.setCurrentUser(userObj)
    
        } ;
      }
          }
    else {
      props.removeCurrentUser();
    }
    
  } )}, []);
  return (
   
  <div className="app-container"> 
    <div>
      <Navbar/>
    </div>
      <div>
      <Switch>
       
       <Route path="/" exact  component={Home} />
       <Route path="/Auth" component={Auth} />
       <Route path="/Shop" exact component={Shop} />
       <Route path="/Shop/Category/:categoryName" exact component={Category} />
       <Route path="/Shop/Category/:categoryName/product/:productId" component={Product} />
       <Route path="/checkout" component={Checkout}/>
       <Route path="/profile" component={Profile}/>
    
    </Switch>
      </div>
  </div>
  );
}

var actions = {
  setCurrentUser , 
  removeCurrentUser
}

export default connect (null , actions) (App);
