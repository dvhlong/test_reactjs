//import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import ListProductComponents from './components/ListProductComponents';
import HeaderComponents from './components/HeaderComponents';
import FooterComponents from './components/FooterComponents';
import AddProductComponents from './components/AddProductComponents';
import LoginComponents from './components/LoginComponents';
import UpdateProductComponents from './components/UpdateProductComponents';
import RegisterComponents from './components/RegisterComponents';
//import SearchComponents from './components/SearchComponents';
function App() {
  return (
    <Router>
      <div className="App">
            <Switch>
            <Route path="/" exact component={LoginComponents}></Route>
            <Route path="/register" component={RegisterComponents}></Route>
                  <div>
                  <HeaderComponents/>
                  <Switch>
                    <Route path={'/products/:key'} component={ListProductComponents}></Route>
                    <Route path={'/products/'} component={ListProductComponents}></Route>
                    <Route path={'/addProduct'} component={AddProductComponents}></Route>
                    <Route path={'/updateProduct/:id'} component={UpdateProductComponents}></Route>
                  </Switch>
                  </div>
            </Switch>
        <FooterComponents />
      </div>
    </Router>
  );
}

export default App;
