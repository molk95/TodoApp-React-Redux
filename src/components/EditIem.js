import React from "react";
import { Modal, Button } from "antd";
import { connect } from "react-redux";
import { editTask } from "../actions/action";

class EditItem extends React.Component {

  state = {
    confirmLoading: false,
    visible: false,
    inputText: "",
    
  };

  handleChange = e => {
    this.setState({
      inputText: e.target.value
    });
  };
  

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = () => {
    this.props.editTask({
      id: this.props.el.id, 
      task: this.state.inputText
    })
    
    this.setState({
      confirmLoading: true
    });
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false
      });
    }, 2000);
  };

  handleCancel = () => {
    this.setState({
      visible: false
    });
  };

  render() {
    return (

      <div>
        <button className="delete" onClick={this.showModal}>
          Edit
        </button>
        <Modal
          title="Edit Your Task"
          visible={this.state.visible}
          onOk={this.handleOk}
          className="task-input"
          confirmLoading={this.state.confirmLoading}
          onCancel={this.handleCancel}
        >
          <input
            name="text"
            onChange={this.handleChange}
            type="text"
            name="title"
            placeholder="New Task...."
          />
        </Modal>
      </div>
    );
  }
}



const mapDispatchToProps = dispatch => {
  return {
    editTask: payload => {
      dispatch(editTask(payload))
    }
  }
}
export default connect(null, mapDispatchToProps)(EditItem)
