import React, {Component} from 'react';

import './App.css';
import EditDistance from "./edit_distance/edit_distance_form";
import NavBar from "./siteStructures/nav_bar";


class App extends Component{
  render()
  {
    return (
        <div>
        <NavBar />

        <EditDistance />

        </div>
    );
  }
}

export default App;