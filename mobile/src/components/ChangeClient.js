import React from "react";
import { clickEvent } from "./events";

class ChangeClient extends React.PureComponent {
  newFirstName = null;
  newSecondName = null;
  newBalance = null;
  newTextBalance = null;

  setFirstName = (ref) => {
    //console.log(ref)
    this.newFirstName = ref;
  };

  setSecondName = (ref) => {
    this.newSecondName = ref;
  };

  setBalance = (ref) => {
    this.newBalance = ref;
  };

  setTextBalance = (ref) => {
    this.newTextBalance = ref;
  };

  delete = () => {
    clickEvent.emit("delete", this.props.client.id);
  };

  save = () => {
    
    clickEvent.emit("save", this.props.client.id, this.newFirstName.value, this.newSecondName.value, this.newTextBalance.value);
  };

  render() {
    return (
      <tr>
        <td>
          <input type="text" defaultValue={this.props.client.firstName} className="" ref={this.setFirstName}/>
        </td>
        <td>
          <input type="text" defaultValue={this.props.client.secondeName} className="" ref={this.setSecondName}/>
        </td>
        <td>
          <input type="text" defaultValue={this.props.client.balance} className="" ref={this.setTextBalance}/>
        </td>
        <td
          className={ this.props.client.balance > 0? "ClientFrames _active": "ClientFrames _blocked"}>
          {this.props.client.balance > 0 ? "active" : "blocked"}
        </td>
        <td>
          <input type="button" value="Save" onClick={this.save}/>
        </td>
        <td>
          <input type="button" value="Delete" onClick={this.delete}/>
        </td>
      </tr>
    );
  }
}

export default ChangeClient;