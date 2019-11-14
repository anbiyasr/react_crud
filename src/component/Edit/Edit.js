import React from 'react';
import { render } from 'react-dom';
import 'react-table/react-table.css';
import ReactTable from 'react-table';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};
let fakeData = JSON.parse(localStorage.getItem("data"));



class Edit extends React.Component {
  state = {
    columns: [
    {
        Header: 'No',
        accessor: 'id',
        show: true
    },
      {
        Header: 'Nama',
        accessor: 'nama',
        show: true,
      },
      {
        Header: 'Alamat',
        accessor: 'alamat',
        show: true
      },
      {
        Header: 'Tahun Lahir',
        accessor: 'tahunLahir',
        show: true
      },
      {
        Header: 'Tempat Lahir',
        accessor: 'tempatLahir',
        show: true
      },
      {
        Header: '',
        Cell: row => (
            <div>
                <button onClick={() => this.handleEdit(row.original)}>Edit</button>
            </div>
        )
      }
      
    ]
    // data: JSON.parse(localStorage.getItem("data"))
  }

  handleEdit = n => {
    
    console.log(fakeData)
    // window.localStorage.setItem("data", JSON.stringify(data))
  }

  toggleColumn = n => {
    const cols = this.state.columns.map((col, i) => n===i? {...col, show: !col.show}: col)
    this.setState({
      columns: cols
    })
  }
  render() {
      
    return <div>
      <ReactTable
        data={fakeData}
        minRows={0}
        columns={this.state.columns}
      />
      <div>
        <button onClick={() => this.toggleColumn(0)}>Toggle First Column</button>
        <button onClick={() => this.toggleColumn(1)}>Toggle Second Column</button>
        <button onClick={() => this.toggleColumn(2)}>Toggle Third Column</button>
      </div>
    </div>
  }
}
export default Edit;