
import { Component } from 'react';  
import "bootstrap/dist/css/bootstrap.min.css";
import Details from './pages/Details';
import Home from './pages/Home';
import Cart from './contexts/Cart';
import Buy from './pages/Buy';
import TrangChu from './pages/TrangChu';
import TopMenu from './Components/TopMenu';
import Product from'./pages/Product';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signin from './pages/Signin';
import Signup from './pages/Signup';
export  class App extends Component {
 render(){
     return(
         <Router>
            <div className="App">
                 <TopMenu/>
                 <Switch>
                        <Route path='/Product' exact="true">
                            <p className="mt-5"><Product /></p>
                        </Route>
                        <Route path='/Home' exact="true">
                              <Home />
                         </Route>
                         <Route path='/Signin' exact="true">
                                <Signin/>
                         </Route>
                         <Route path='/Signup' exact="true">
                                <Signup/>
                         </Route>
                         <Route path='/Details' exact="true">
                            <Details/>
                        </Route>
                        <Route path='/Cart' exact="true">
                            <Cart/>
                        </Route>
                        <Route path='/' exact="true">
                            <TrangChu/>
                        </Route>
                        <Route path='/Buy' exact="true">
                            <Buy/>
                        </Route>
                 </Switch>
            </div>
         </Router>
     )
 }
  
}
export default App;
