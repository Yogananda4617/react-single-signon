import {BrowserRouter as Router, Route, Redirect,  } from "react-router-dom";
import './App.css';
import Login from "./loginRegister/login";
import Register from "./loginRegister/register";
import Merchant from "./components/merchant";
import Customer from "./components/customer";
import Home from "./components/home";

function App() {
  return (
    <div className="App">
      <Router>
      <Route path="/home" ><Home exact /> </Route>
			<Route exact path="/register"><Register/></Route> 
			<Route exact path="/login"> <Login /> </Route> 
      <Route exact path="/merchant"><Merchant/></Route>
      <Route exact path="/customer"><Customer/></Route>
			<Route path="/" > <Redirect to="/login" /> </Route>
      </Router>
    </div>
  );
}

export default App;
