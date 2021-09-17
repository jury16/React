import React from 'react';
import PropTypes from 'prop-types';
import Client from './Client';
import './Clients.css';
import { clickEvent } from "./events";

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
        clickActive: false,
        clickBlocked: false,
        edit: false,
        counID: this.props.clients.length,
      };
      checkAll = () => {
          if (this.state.clickActive || this.state.clickBlocked ){
            this.setState({clickActive: false, clickBlocked: false, edit: false,});
          }
         
          //console.log('checked ALL')
      };
      checkActive = () => {
        if (!this.state.clickActive) {
            this.setState({clickActive: true, clickBlocked: false, edit: false,});
        }
        //console.log('checked Active')
      };
      checkBlocked = () => {
        if (!this.state.clickBlocked) {
          this.setState({clickActive: false, clickBlocked: true, edit: false,});
          //console.log('checked Blocked')
        }
      };
      addClient = () =>{
        this.setState({ counID: this.state.counID + 1,});
        let newClient = {id: this.state.counID, firstName: null, secondeName: null, balance: null,};
          let newClients = [...this.state.clients, newClient];
          this.setState({ clients: newClients, edit: true});  
      }
      save = (id, firstName, secondeName, balance) => {
        let newClients = [...this.state.clients];
        newClients.forEach((client, index) => {
          if (client.id === id) {
            let newClient = { ...client };
            newClient.firstName = firstName;
            newClient.secondeName = secondeName;
            newClient.balance = Number(balance);
            newClients[index] = newClient;
          }
        });
        this.setState({clients: newClients,});
      };
      delete = (id) => {
        let newClients = this.state.clients.filter((e) => e.id !== id);
        this.setState({clients: newClients, edit: false,});
      };
      componentDidMount = () => {
        clickEvent.addListener("delete", this.delete);
        clickEvent.addListener("save", this.save);
      };
    
      componentWillUnmount = () => {
        clickEvent.removeListener("delete", this.delete);
        clickEvent.removeListener("save", this.save);
      };
  render() {
    console.log('renderCliens');    
    let newClients = [];
    let clientsTable = [];
    if (this.state.clickActive) {        
      newClients = this.state.clients.filter((client) => client.balance >= 0);
      //console.log(newClients);      
    } 
    else if (this.state.clickBlocked) {        
      newClients = this.state.clients.filter((client) => client.balance < 0);
      //console.log(newClients);
    } 
    else {        
        newClients = this.state.clients;      
    }  
    clientsTable = newClients.map((client) => (
        <Client key={client.id} client={client} edit={this.state.edit} />
        ));
    return (
        <div className=''>
            <input type='button' value='All' className="button" onClick={this.checkAll} />
        <input type='button' value='Actives' className="button"onClick={this.checkActive}/>
        <input type='button' value='Blocked' className="button" onClick={this.checkBlocked}/>
          <table className=''>            
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
          <hr />
            <input type='button' value='Add Client'  className="button" onClick={this.addClient}/>
          </div>
    );
  }
}

export default Clients;