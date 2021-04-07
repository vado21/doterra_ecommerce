import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import Dashboard from './admin/Dashboard'
import ProductsList from './admin/ProductsList'
import EventsList from './admin/EventsList'
import Product from './admin/Product'
import ProductAdditionForm from './admin/ProductAdditionForm'
import { BrowserRouter as Router, Route, Redirect, Link, Switch } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";



function Error(){
  return (
    <div>
      <h1>Error, no se ha encontrado la página que buscas</h1>
      <h2>Ir a la página de <Link to='/'>Inicio</Link></h2>
    </div>
  )
}

function App() {
  const { getIdTokenClaims, isAuthenticated } = useAuth0();

  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Redirect to='/productos' />
        </Route>

        <Route exact path='/productos'>
          <Dashboard main={<ProductsList />} />
        </Route>

        <Route exact path="/productos/agregar">
          <Dashboard main={<ProductAdditionForm />} />
        </Route>

        <Route path="/productos/:productId">
          <Dashboard main={<Product/>} />
        </Route>

        <Route exact path='/eventos'>
          <Dashboard main={<EventsList />}/>
        </Route>

      
      </Switch>
    </Router>
    
  );
}

export default App;
