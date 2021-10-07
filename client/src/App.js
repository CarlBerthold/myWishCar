import { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import LandingPage from './pages/LandingPage';
import Navbar from './components/Navbar';
import Signup from './pages/Signup';
import Login from './pages/Login';
import CarsList from './pages/CarsList';
import CarsDetails from './pages/CarsDetails';
import AddCar from './components/AddCar';
import Footer from './components/Footer';

function App(props) {

  const [user, setUser] = useState(props.user)

  const addUser = user => {
  setUser(user);
  }

  //console.log('App js: ', user)
  return (
    <div className="App">
        <Navbar user={user} setUser={addUser} />
          <Switch>
            <Route exact path='/addCar' user={user} component={AddCar} />  
            <Route exact path='/Cars/:id' user={user} component={CarsDetails} />
            <Route exact path="/CarsList" component={CarsList} />
            <Route exact path="/Signup" render={props => <Signup setUser={addUser} {...props} />} />
            <Route exact path="/Login" render={props => <Login setUser={addUser} {...props} /> } />
            <Route exact path="/HomePage" user={user} component={HomePage}/>
            <Route exact path="/" component={LandingPage} />
          </Switch>
        <Footer user={user} component={Footer} />
    </div>
  );
}





export default App;
