import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Table from "../Table/Table";
import Create from "../Create/Create";
import Edit from "../Edit/Edit";
import Home from "../Home/Home";
import TabContoh from "../Home/TabContoh";
import Login from "../Login/Login";
import Register from "../Register/Register";
// import './App.css';
// import ReactDOM from "react-dom";
// import PropTypes from 'prop-types';
// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
// import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';

class Root extends Component {


  render(){


  return (
    <Router>
      <div>
        <div>
          
        </div>
        <Route
          path="/"
          render={( props ) => {
            console.log(props)
            return ( 
              <Fragment>
              <Switch>
                <Home exact path="/" component={Home} />
                {/* <Route exact path="/Home1" Component={Home1} /> */}
                <Route path="/tabContoh" component={TabContoh} />
                <Route path="/create" component={Create} />
                <Route path="/table" component={Table} />
                <Route path="/edit" component={Edit} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
              </Switch>
            </Fragment>
            )
  }}
        />
      </div>
    </Router>
  );
}
}

export default Root;