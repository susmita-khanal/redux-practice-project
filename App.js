import React from "react"
import './App.css';
import HomeContainer from "./containers/HomeContainer"
import ItemDetails from './components/ItemDetails'
import {Route , Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
     {/* <HomeContainer/> */}
     <Switch>
       <Route exact path="/" component={HomeContainer} />
       <Route path='/item/:id' component={ItemDetails} />
     </Switch>
    </div>
  );
}

export default App;
