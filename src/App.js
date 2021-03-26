
import './App.css';
import ProductsCointainer from './components/ProductsContainer'
import ProductDetails from './components/ProductDetails'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import React from 'react'



function App() {
  

  return (
    <div>
     <h1>Chekyyyy hello world</h1>
    <Router>
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
