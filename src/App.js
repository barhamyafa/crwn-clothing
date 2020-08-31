import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import {Route, Switch} from 'react-router-dom';

const HatsShop =(props)=> {
  console.log("props: ", props)
  return (<div>Hats</div>)
}
function App() {
  return (
    <div>
      <Switch>
        <Route  exact path="/" component={HomePage} />
        <Route  path="/hats" component={HatsShop} />
      </Switch>
    </div>
  );
}

export default App;
