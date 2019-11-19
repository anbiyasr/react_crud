import React, {Component} from "react";
import Root from '../component/Routes/Root'

class Prompt extends Component{
    constructor(props){
        super(props);
        this.state = {
            kode:'',
            // count:0,
            showComponent : true
        }
    }

    // componentDidMount(){
    //     let kode = prompt('masukan password')
    //     // let count = 0
    //     console.log(`kode = ${kode}`)
    //     // console.log(`count = ${count}`)
    //     if (kode === 'admin') {
    //         this.setState({
    //             showComponent: true
    //         })
    //     } 
    //     else {
    //         this.setState({
    //             showComponent : false,
    //             // count: this.count+1
    //         })
    //     }

        
    // }



    render(){
        return (
            <div>
                <hr/>
                {
                    this.state.showComponent
                    ?
                    <Root />
                    :
                    alert('kode salah', window.location.reload(false))
                }
            </div>
        )
    }
}

export default Prompt;