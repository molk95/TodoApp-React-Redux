import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteTask, completeTask} from "../actions/action";
import EditItem from "./EditIem";

class list extends Component {
  state = {
    id: Math.random()
  };

  render() {
    return (
      <div>
        <div className="tasks-done">
          <h2>Let's get some work done!</h2>
          <div>
            <ul className="task">
              {this.props.List.map((el, i) => (
                <li key={i} className="tasks">
                  <button
                    className="delete "
                    onClick={e => {
                      e.preventDefault();
                      this.props.deleteTask(i);
                    }}
                  >
                    Delete
                  </button>

                  <EditItem
                    el={el}
                  />

                  <button
                    className="complete"
                    onClick={() => this.props.completeTask(i)}
                  >
                    {!el.isComplete ? "Complete" : "Undo"}
                  </button>
                  <span
                    style={{
                      color: el.isComplete ? "#A9A9A9" : "gray",
                      textDecoration: el.isComplete ? "line-through" : "none"
                    }}
                  >
                    {el.tasks}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  List: state
});

const mapDispatchToProps = dispatch => {
  return {
    deleteTask: payload => {
      dispatch(deleteTask(payload));
    },
    completeTask: index => {
      dispatch(completeTask(index));
    },
    
  };
};

const ListContainer = connect(mapStateToProps, mapDispatchToProps)(list);
export default ListContainer;

