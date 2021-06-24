// import React, { Component } from 'react'

// class Count extends Component {
//     constructor(props) {
//         super(props)
    
//         this.state = {
//              count:0
//         }
//     }

//     handleClick=()=>{
//         this.setState({
//             count: this.state.count+1
//         })
//     }
    
//     render() {
//         return (
//             <div>
//                 <h1>Count:{this.state.count}</h1>
//                 <button onClick ={this.handleClick.bind(this)}> Click</button>
//             </div>
//         )
//     }
// }
// export default Count

// @@@@@@ *****Count with lifecycle

import React, { Component } from 'react'

class Count extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
        console.log("---construcutor-----")
    }
    static getDerivedStateFromProps (prop,state){
        console.log("-state & Props----")
        return  null;
    }
    componentDidMount(){
        console.log("----mounted-----")
    }
    componentDidUpdate(){
        console.log("----update happened ----")
    }
    getSnapshotBeforeUpdate(){
        console.log("---Snapshot----")
        return  null;
    }
    shouldComponentUpdate(nextProps, nextState){
        console.log("----Should update?----")
        return true;
    }
    

    handleClick=()=>{
        this.setState({
            count: this.state.count+1
        })
    }
    
    render() {
        console.log("----render-----")
        return (
            <div>
                <h1>Count:{this.state.count}</h1>
                <button onClick ={this.handleClick.bind(this)}> Click</button>
            </div>
        )
    }
}
export default Count


















