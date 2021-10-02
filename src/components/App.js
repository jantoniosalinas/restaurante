import React from 'react';

import { BrowserRouter as Router,
         Route,
         Switch
       } from 'react-router-dom';

import '../../node_modules/bulma/css/bulma.css';
import '../styles.css';
import styled from 'styled-components'

import Navbar from './Navbar';
import Carousel from './Carousel';
import Reservation from './Reservation';
import Menu from './Menu';
import Us from './Us';
import Footer from './Footer';

const App = () => {
    return (
        <main>
            <Router>
                <Navbar />
                <Carousel />
                <Switch>
                    <Route path="/Reservation">
                        <Divider /> 
                        <Reservation />
                    </Route>
                    <Route path="/Menu">
                        <Divider /> 
                        <Menu />
                    </Route>
                    <Route path="/Us">
                        <Divider /> 
                        <Us />
                    </Route>
                </Switch>
                <Footer />
            </Router>
        </main> 
    );
}

const Divider = styled.div`
      margin: 40px 0px;
`; 

export default App;
