import React from "react";
import PropTypes from "prop-types";
import Client from "./Client";
import "./Clients.css";

class Clients extends React.PureComponent {
    static propTypes = {
        clients: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.number.isRequired,
            firstName: PropTypes.string.isRequired,
            secondeName: PropTypes.string.isRequired,
            balance: PropTypes.number.isRequired,
          })
        ),
      };

      state = {
        clients: this.props.clients,
      };
      
  render() {

      var clientsTable = this.state.clients.map((item) =>               
        <Client key={item.id}  client={item}></Client>
    );
    console.log("renderCliens");
    console.log(clientsTable);
    return (
        <div className=''>
        <span>{(this.state.disableDelete)}</span>
          <table className=''>
            <caption className=''>{this.props.shopName}</caption>
            <thead className='ClientsFrame'>
              <tr>
                  <td className='ClientsFrames' key={1}>First Name</td>
                  <td className='ClientsFrames' key={2}>Second Name</td>
                  <td className='ClientsFrames' key={3}>Balance</td>
                  <td className='ClientsFrames' key={4}>Statut</td>
                  <td className='ClientsFrames' key={5}>Edit</td>
                  <td className='ClientsFrames' key={6}>Delete</td>
              </tr>
            </thead>
            <tbody>
              {clientsTable}
            </tbody> 
          </table>
          </div>
    );
  }
}

export default Clients;