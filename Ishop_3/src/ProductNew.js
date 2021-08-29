import PropTypes from 'prop-types';
import React from 'react';
import './ProductNew.css';

class ProductNew extends React.Component{
    static propTypes = {
        cbSave: PropTypes.func,
        disableSave: PropTypes.string,
        carHash: PropTypes.object,
        cbCheckedItem: PropTypes.func,
      };
      constructor(props) {
        super(props);       
        this.state = {    
            disableSave: this.props.disableSave, 
            disableSaveClass: '_button _disactive',       
            carHash: this.props.carHash,     
            code: this.props.carHash.code,        
            brand: this.props.carHash.brand,        
            price: this.props.carHash.price,        
            url: this.props.carHash.url,        
            count: this.props.carHash.count,  
            selecteId: this.props.selecteId,  
            
        };
      }
      state = {   
  
         
      };
      check = () =>{ 
        (this.state.brand && this.state.price && this.state.url && this.state.count)
        ?
        this.setState({disableSave: null, disableSaveClass: '_button'} )
        :
        this.setState({disableSave: "disabled", disableSaveClass: '_button _disactive'} );
      }
      editBrand = (EO) =>{
        this.setState({brand: EO.target.value}, this.check);               
    }
    editPrice = (EO) =>{
        this.setState({price: EO.target.value}, this.check);               
    }
    editUrl = (EO) =>{
        this.setState({url: EO.target.value}, this.check);               
    }
    editCount = (EO) =>{
        this.setState({count: EO.target.value}, this.check);               
    }
      cancel = () =>{        
        this.setState({carHash: this.props.carHash}, this.props.cbSave(this.props.carHash));       
        
    }   
    saveCar = () =>{          
        var carNewHash = {brand: this.state.brand, code: this.props.carHash.code, price: this.state.price, url: this.state.url, count: this.state.count};
        this.setState({carHash: carNewHash}, this.props.cbSave(carNewHash));             
    }
    render(){

        return(
            <table >
                <tbody>
                <tr className='ProductNew'>
                        <td><span>Id</span></td>
                        <td><input type='text' defaultValue={this.props.carHash.code} disabled="disabled"/></td>
                        
                    </tr>
                    <tr className='ProductNew'>
                        <td><span>Brand</span></td>
                        <td><input type='text' defaultValue={this.state.brand} onChange={this.editBrand} /></td>
                        <td className="faultMessage">{(this.state.brand)?null:<span > Field can't be empty! Please, fill the field</span>}</td>
                    </tr>
                    <tr className='ProductNew'>
                        <td><span>Price</span></td>
                        <td><input type='text' defaultValue={this.state.price} onChange={this.editPrice} /></td>
                        <td className="faultMessage">{(this.state.price)?null:<span> Field can't be empty! Please, fill the field</span>}</td>
                        </tr>
                    <tr className='ProductNew'>
                        <td><span>url</span></td>
                        <td><input type='text' defaultValue={this.state.url} onChange={this.editUrl} className='_url'/></td>
                        <td className="faultMessage">{(this.state.url)?null:<span > Field can't be empty! Please, fill the field</span>}</td>
                        </tr>
                    <tr className='ProductNew'>
                        <td><span>Count</span></td>
                        <td><input  type='text' defaultValue={this.state.count} onChange={this.editCount} /></td>
                        <td className="faultMessage">{(this.state.count)?null:<span > Field can't be empty! Please, fill the field</span>}</td>
                        </tr>
                    <tr className='_buttons'>
                        <td></td>
                        <td><input type="button" value="cancel" className='_button'  onClick={this.cancel.bind(this)}/>
                        <input type="button" value="save"  className={this.state.disableSaveClass} onClick={this.saveCar.bind(this)} disabled={this.state.disableSave}/></td>

                    </tr>
                </tbody>
                
   
            </table>
        )
    }
}

export default ProductNew;