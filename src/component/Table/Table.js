import React from 'react';
import MaterialTable from 'material-table';
import TableRowColumn from 'material-ui/Table'
import Edit from '../Edit/Edit';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
// import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

export default function Table() {
  let history = useHistory();

  const handleClick = () => {
      // alert('tombol di klik')
      history.push("/Edit");
  }
  const classes = useStyles();
  
  const [state, setState] = React.useState({
    columns: [
      { title: 'Name', field: 'nama' },
      { title: 'Alamat', field: 'alamat' },
      { title: 'Tahun Lahir', field: 'tahunLahir', type: 'numeric' },
      { title: 'Tempat Lahir', field: 'tempatLahir'}
    ],
    data: 
    // localStorage.getItem("data") 
    // ? 
    JSON.parse(localStorage.getItem("data"))
    // : []
  });
  console.log(state)
  
  return (
    <div>
    {/* <Button variant="contained" className={classes.button} onClick={handleClick}>
        Edit
    </Button> */}
    <MaterialTable
      title="DATA DIRI"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: (newData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data]
              data.push(newData)
              // window.localStorage.setItem("data",(state.columns[data]))
              // console.log(`${data}`)
              // let newData = localStorage.setItem('data', JSON.stringify(this.state.data))
              setState({ ...state, data })
              window.localStorage.setItem("data", JSON.stringify(data))
              //   ))
                
            },
             600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data.splice(data.indexOf(oldData), 1);
              setState({ ...state, data });
              window.localStorage.setItem("data", JSON.stringify(data))
            }, 600);
          }),
          onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              handleClick();
              {/* const data = [...state.data];
              data[data.indexOf(oldData)] = newData;
              setState({ ...state, data });
              window.localStorage.setItem("data", JSON.stringify(data)) */}
            }, 100);
          }),
      }}
    />
    <Button variant="contained" className={classes.button} onClick={handleClick}>
        Edit
    </Button>
    <p>
    <Link to='/'>Home</Link>
    </p>
    </div>
  );
}
