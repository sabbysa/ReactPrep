import React, { Component } from "react";

class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
      name: "",
    };
    this.text = "";
    this.inputRef=React.createRef();
  }

  handleChange = (e) => {
    this.text = e.target.value;
  };

  handleClick = () => {
    this.setState({
      list: [...this.state.list, this.text],
    });
  };

handleDelete=(index)=>{

  const newList = this.state.list.filter((val,ind)=>ind!==index);
  console.log(newList)
  this.setState({
    list:newList
  })


}

//life cycle method 
componentDidMount(){
   this.inputRef.current.focus();

}


//parent component and child component (count)  <h2> {count}>/h2>


  render() {
    console.log(this.state.list);
    return (
      <>
        <input type="text" ref={this.inputRef} onChange={this.handleChange}></input>
        <button onClick={this.handleClick}>Submit</button>
        {this.state.list.map((value, ind) => (
          <h2 key={ind}>  
            {value}{" "}<button onClick={()=>this.handleDelete(ind)}>delete</button>
            {" "}
            <button onClick={this.handleUpdate}>Update</button>
          </h2>
        ))}
      </>
    );
  }
}

export default Todo;