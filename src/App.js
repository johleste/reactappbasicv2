import React from 'react';
import {Route} from 'react-router-dom'
import './App.css';
import Welcome from './component/WELCOME/Welcome'
import Clock from "./component/Clock/clock"
import Contact from "./component/Contact/Contact"
import Navigation from "./component/navigation/Navigation"
import notFound from "./component/notfound/Notfound"
function App() {
  return (
    <div className="App">
      <Navigation />
       
      <Route exact path="/" render={(props) =><Welcome {...props} name='John'/>}/>
      <Route path="/welcome/:name" render={(props) => <Welcome name= {props.match.params.name}/>} />
      <Route path="/Clock" component={Clock} />
      <Route path ="/Contact" component={Contact}/>
      <Route NoMatch component={notFound} />

    </div>
  );
}

export default App;
