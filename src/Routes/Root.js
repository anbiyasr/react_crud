import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Table from "../component/Table/Table";
import Create from "../component/Create/Create";
import Edit from "../component/Edit/Edit";
import Home from "../component/Home/Home";
import TabContoh from "../component/Home/TabContoh";
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
                <Route path="/TabContoh" component={TabContoh} />
                <Route path="/Create" component={Create} />
                <Route path="/Table" component={Table} />
                <Route path="/Edit" component={Edit} />
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