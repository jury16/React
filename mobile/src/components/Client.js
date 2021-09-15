
import React from "react";
import PropTypes from "prop-types";
import "./Client.css";


class Client extends React.PureComponent {
    static propTypes = {
        client: PropTypes.object,
        
      };
     
    deleteclient = () =>{

    }
    changeclient = () =>{
        
    }   
  render() {
    console.log("renderClient", this.props.client.id); 
    return (
        <tr className='ClientFrame'>
            <td className='ClientFrames'>{this.props.client.firstName}</td>
            <td className='ClientFrames'>{this.props.client.secondeName}</td>
            <td className='ClientFrames'>{this.props.client.balance}</td>
            <td className='ClientFrames'>Status</td>
            <td className='ClientFrames'>
                <input type="button" value="delete"  onClick={this.deleteclient.bind(this, this.props.client.code)}/>                        
            </td>
            <td className='ClientFrames'>
            <input type="button" value="change"  onClick={this.changeclient.bind(this, this.props.client.code)}/>            
            </td>
        </tr>         

    )
  }
}

export default Client;