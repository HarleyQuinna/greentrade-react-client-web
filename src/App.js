import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
//
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';
import logo from './greentrade.png';
import user from './user.png';
//
import RewardList from './components/RewardList';
import EditReward from './components/EditReward';
import CreateReward from './components/CreateReward';
import ShowReward from './components/ShowReward';
import Home from './components/Home';
import Login from './components/Login';
import PickupsList from './components/PickupsList';
import ShowPickup from './components/ShowPickup';
//
function App() {

  return (
    <Router>
      <Navbar bg="dark" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="mr-auto">
          <Nav.Link href="/home" style={{color: 'white'}}>
            <img src={logo} style={{height: 50}}/>
          </Nav.Link>
            <Nav.Link href="/home" style={{marginTop: 15, color: 'white', fontWeight: 'bold'}}>Home</Nav.Link>

            <Nav.Link href="/rewards" style={{marginTop: 15, color: 'white', marginLeft: 10, fontWeight: 'bold'}}>Rewards Management</Nav.Link>
            <Nav.Link href="/pickups" style={{marginTop: 15, color: 'white', marginLeft: 10, fontWeight: 'bold'}}>Pickups Management</Nav.Link>
            <Nav.Link href="/login" style={{marginTop: 10, color: 'white', marginLeft: 700}}>
            <img src={user} style={{height: 35}}/>
            </Nav.Link>
            <Nav.Link href="/login" style={{marginTop: 15, color: 'white', fontWeight: 'bold'}}>Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    
      <div>
          
          <Route exact path='/' component={Home} />
          <Route render ={()=> < Home />} path="/home" />
          <Route render ={()=> < Login />} path="/login" />
          <Route render ={()=> < RewardList />} path="/rewards" />
          <Route render ={()=> < EditReward />} path="/editreward/:id" />
          <Route render ={()=> < CreateReward />} path="/createreward" />
          <Route render ={()=> < ShowReward />} path="/showreward/:id" />
          <Route render ={()=> <PickupsList />} path="/pickups" />
          <Route render ={()=> < ShowPickup />} path="/showpickup/:id" />
      </div>
      {/* {path==""?(
      <Home/>
      ): <div></div>} */}


    </Router>


  );
}

//<Route render ={()=> < App />} path="/" />
export default App;
