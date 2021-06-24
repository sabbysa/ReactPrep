import React, { Component } from 'react'

export default class LifeCycle extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             bool:true
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
    // componentWillUnmount(){
    //     alert("----component is removed- sorry!!!----")
    // }

    handleClick=()=>{
        this.setState({
            bool: !this.state.bool
        })
    }
    render() {
        console.log("----render-----")
        return (
            <div>
                Lifecycle of A Class Component
                <button style={{color:"red", fontSize:"large"}} onClick={this.handleClick}>Toggle Button LifeCycle</button>
            </div>
        )
    }
}


















































// import React, { Component } from 'react'

// class LifeCycle extends Component {
//     constructor(props) {
//         super(props)
    
//         this.state = {
//              bool:true
//         }
//         console.log("--Constrcutor--")
//     }
    // static getDerivedStateFromProps(prop,state){
    //     console.log("----getDerivedstfrom----")
    //     return null;
    // }
    // componentDidUpdate(prevProp, prevState, snapshot){
    //     console.log("---didupdate---")
    // }
    
    // getSnapshotBeforeUpdate(){
    //     console.log("---Snapshot---")
    //     return null
    // }
    // shouldComponentUpdate(nextProps, nextState){
    //     console.log("---Should---")
    //     return true
    // }
    // componentDidMount(){
    //     console.log("---Mounted---")
     
    // }
//     componentWillUnmount(){
//         alert("==xxx==")
//     }
//     handleClick = ()=>{
//         this.setState({
//             bool:!this.state.bool
//         })

//     }
//     render() {
//         console.log("render")
//         return (
//             <div>
//                 LifeCycle of Toggle Button Component
//                 <br/>
                
//                 <button style = {{backgroundColor : "red", fontSize: "large"}} onClick={this.handleClick}>Toggle</button>
//             </div>
//         )
//     }
// }
// export default LifeCycle