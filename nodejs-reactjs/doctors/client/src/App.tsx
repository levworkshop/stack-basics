import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Link, Switch, Route} from "react-router-dom";
import Home from "./home/Home";
import Appointments from "./appointments/Appointments";
import Patients from "./patients/Patients";

const App: React.FC = () => {
    return (
        <div className="App">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link to="/" className="navbar-brand">Doctors</Link>
                {/*<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"*/}
                {/*        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">*/}
                {/*    <span className="navbar-toggler-icon"></span>*/}
                {/*</button>*/}
                <div id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/appointments" className="nav-link">Appointments</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/patients" className="nav-link">Patients</Link>
                        </li>
                    </ul>
                </div>
            </nav>

            <div className="m-4">
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/appointments" component={Appointments}/>
                    <Route path="/patients" component={Patients}/>
                </Switch>
            </div>

        </div>
    );
};

export default App;
