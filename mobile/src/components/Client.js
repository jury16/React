import React from "react";
import PropTypes from "prop-types";
import "./Client.css";

console.log('from CLIENT')
class Client extends React.PureComponent {
    static propTypes = {
        client: PropTypes.object,       
      };
      state = {
        edit: this.props.edit,
      }; 
    deleteclient = () =>{
      
    }
    changeclient = () =>{
      this.setState({edit: true,});
    }   
  render() {
    console.log("renderClient id: ", this.props.client.id); 
    console.log("this.state.edit: ", this.state.edit); 
    return (
        <tr className='ClientFrame'>
            <td className='ClientFrames'>{this.props.client.firstName}</td>
            <td className='ClientFrames'>{this.props.client.secondeName}</td>
            <td className='ClientFrames'>{this.props.client.balance}</td>
            <td className={this.props.client.balance > 0? "ClientFrames _active": "ClientFrames _blocked"}>
              {this.props.client.balance > 0 ? "active" : "blocked"}
            </td>
            <td className='ClientFrames'>
                <input type="button" value="delete"  onClick={this.deleteclient}/>                        
            </td>
            <td className='ClientFrames'>
            <input type="button" value="change"  onClick={this.changeclient}/>            
            </td>
        </tr>         

    )
  }
}

export default Client;