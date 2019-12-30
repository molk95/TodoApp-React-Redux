import React, { Component } from "react";
import { connect } from "react-redux";
import { addTask } from "../actions/action";


class addItem extends Component {
  state = {
    text: "",
   
  };

  changeText = event => {
    this.setState({
      text: event.target.value
    });
  };

  add = (e) => {
    e.preventDefault()
   this.state.text !== "" && this.props.addTask({id: Date.now(),task:this.state.text,  isComplete: false}
     )
     this.setState({
      text: ""
     })
      
    };
  

  render() {
    return (
      <div>
        <header>
          <div className="nav-bar">
            <div className="nav">
              <h1>To-DO App!</h1>
              <label className="sub-title" for="sub-title">
                Add New To-Do
              </label>
              <input
                name="text"
                value={this.state.text}
                onChange={this.changeText}
                className="place-holder"
                type="text"
                placeholder="Enter New Task"
              />
            </div>
            <div className="add-section">
              <button onClick={this.add} className="btn-add">
                Add
              </button>
            </div>
          </div>
        </header>
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => {
  return {
    addTask: payload => {
      dispatch(addTask(payload));
    }
  };
};

const AddItemsContainer = connect(null, mapDispatchToProps)(addItem)

export default AddItemsContainer;
































// import React, { Component } from "react";
// import { connect } from "react-redux";
// import { addList } from "./actions/actions";
// class Add extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       newToDo: "",
//     };
//   }

//   handleChange = e => {
//     this.setState({
//       newToDo: e.target.value,
//     });
//   };
//   handleClick = () => {
//     this.state.newToDo !== "" && this.props.addList(this.state.newToDo);
//     this.setState({
//       newToDo: "",
//     });
//   };

//   render() {
//     return (
//       <header>
//         <button className="btn btn-success" onClick={this.handleClick}>
//           +
//         </button>
//         <input
//           type="text"
//           value={this.state.newToDo}
//           onChange={this.handleChange}
//           placeholder="what you're gonna do?"
//         />
//       </header>
//     );
//   }
// }
// const mapDispatchToProps = dispatch => {
//   return {
//     addList: payload => {
//       dispatch(addList(payload));
//     },
//   };
// };

// export default connect(
//   null,
//   mapDispatchToProps
// )(Add);
