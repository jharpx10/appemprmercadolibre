
import './App.css';
import ProductsCointainer from './components/ProductsContainer'
import Navbar from './components/Navbar'
import ProductDetails from './components/ProductDetails'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import React from 'react'



function App() {
  

  return (
    <div>
        
    <Router>
    <Navbar/>
     <Switch>
   
      <Route path="/products/details/:id">
      <ProductDetails/>
      </Route>
      <Route path="/">
      
      <ProductsCointainer />
      </Route>

      </Switch>
      </Router>
    </div>
  );
}

export default App;
