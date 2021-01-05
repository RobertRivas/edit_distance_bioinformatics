import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import {WebDevelopment} from "./pages/WebDevelopment";
import SoftwareDevelopment from "./pages/SoftwareDevelopment";
import {MusicProduction} from "./pages/MusicProduction";
import {MixingAndMastering} from "./pages/MixingAndMastering";
import {DigitalMarketing} from "./pages/DigitalMarketing";
import {About} from "./pages/About"
import {Contact} from "./pages/Contact"
import {Home} from "./pages/home"


class App extends Component{
  render()
  {
    return (
        <div style={{backgroundColor: 'black'}}>
            <Router>


                                    <Switch>
                                        <Route exact path="/" component={Home} />
                                        <Route path="/web-dev" component={WebDevelopment} />
                                        <Route path="/soft-dev" component={SoftwareDevelopment} />
                                        <Route path="/music-production" component={MusicProduction} />
                                        <Route path="/mixing-mastering" component={MixingAndMastering} />
                                        <Route path="/digital-marketing" component={DigitalMarketing} />
                                        <Route path="/about" component={About} />
                                        <Route path="/contact" component={Contact} />
                                    </Switch>



                            </Router>

        </div>
    );
  }
}

export default App;