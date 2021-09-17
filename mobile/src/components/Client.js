import React from "react";
import PropTypes from "prop-types";
import "./Client.css";
import { clickEvent } from "./events";
import ChangeClient from "./ChangeClient";


//console.log('from CLIENT')
class Client extends React.PureComponent {
    static propTypes = {
        client: PropTypes.object,       
      };
      state = {
        edit: this.props.edit,
      }; 
    delete = () =>{
      clickEvent.emit("delete", this.props.client.id);
      
    }
    change = () =>{
      this.setState({edit: true,});
    }  
    componentDidMount = () => {
      clickEvent.addListener("save", this.save);
    };
  
    componentWillUnmount = () => {
      clickEvent.removeListener("save", this.save);
    }; 
    save = () => {
      this.setState({edit: false,});
    };
  render() {
    console.log("renderClient id: ", this.props.client.id); 
    //console.log("this.state.edit: ", this.state.edit); 
    let viewClient;
      if (this.state.edit) {
        viewClient = <ChangeClient client={this.props.client} />;
      } 
      else {
        viewClient = (
          <tr className=''>
              <td className='ClientFrames'>{this.props.client.firstName}</td>
              <td className='ClientFrames'>{this.props.client.secondeName}</td>
              <td className='ClientFrames'>{this.props.client.balance}</td>
              <td className={this.props.client.balance > 0? "ClientFrames _active": "ClientFrames _blocked"}>
                {this.props.client.balance > 0 ? "active" : "blocked"}
              </td>
              <td className=''>
                  <input type="button" value="delete" className='_button' onClick={this.delete}/>                        
              </td>
              <td className=''>
              <input type="button" value="change"  className='_button' onClick={this.change}/>            
              </td>
          </tr>   
        )
      }      
      return viewClient;
    
  }
}

export default Client;