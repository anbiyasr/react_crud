import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
// import Table from "../Table/Table";
// import Create from "../Create/Create";
// import Edit from "../Edit/Edit";
// import Home1 from "./Home1";
// import './App.css';
// import ReactDOM from "react-dom";
// import PropTypes from 'prop-types';
// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
// import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';

class TabContoh extends Component {

  handleCallToRouter = (value) => {
    this.props.history.push(value);
  }
  render(){


  return (
    <div>
            
            <Tabs value={this.props.history.location.pathname}>
              <Tab value={"/Create"} label="Create Data" component={Link} to="/Create" />
              <Tab value={"/Table"} label="Show Tabel" component={Link} to="/Table" />
              {/* <Tab value={"/Edit"} label="Edit Tabel" component={Link} to="/Edit" /> */}
            </Tabs>

    </div>
  );
  }
}

export default TabContoh;