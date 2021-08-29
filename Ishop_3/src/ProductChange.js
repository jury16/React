import PropTypes from 'prop-types';
import React from 'react';
import './ProductChange.css';

class ProductChange extends React.Component{
    static propTypes = {
        cdchange: PropTypes.number,
        cbCheckedItem: PropTypes.func,
        cbproductChangedState: PropTypes.func,
        cbSave: PropTypes.func,
        car: PropTypes.object,
        disableDeleteButton: PropTypes.string,
        change: PropTypes.number,
        productChanged:  PropTypes.bool,
      };

      constructor(props) {
        super(props);       
        this.state = {    
            changedCar: this.props.car,    
            brand: this.props.car.brand,
            price: this.props.car.price,
            url: this.props.car.url,
            count: this.props.car.count,
            disableDelete: this.props.disableDeleteButton, 
            productChanged: this.props.productChanged,
            disableSaveClass: '_button',     
            
        };
      }
      
      state = {      
        disableSave: null,  
        hash: {},
      };
      check = () =>{
        if ((this.state.brand === this.props.car.brand && this.state.price === this.props.car.price && this.state.url === this.props.car.url && this.state.count ===  this.props.car.count)){
            
            this.setState({productChanged: false,}, this.checked )
        }
        else{
            
            this.setState({productChanged: true,}, this.checked)
        }
        
      }

      checked = () =>{
        this.props.cbproductChangedState(this.state.productChanged);
        if ((this.state.brand && this.state.price && this.state.url && this.state.count)){
            
            this.setState({disableSave: null, disableSaveClass: '_button'} )
        }
        else{
            this.setState({disableSave: "disabled", disableSaveClass: '_button _disactive'} );
        }
        
      }
    editText = (EO) =>{
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
      cancelEdit = () =>{
        this.props.cbCheckedItem(0);
        var carHash = {brand: this.props.car.brand, code: this.props.car.code, price: this.props.car.price, url:this.props.car.url, count: this.props.car.count};
        this.props.cbSave(carHash);
      }
      cancel = () =>{        
        this.setState({car: this.props.car, disableDelete: null,}, this.cancelEdit);
        
    }   

    save = () =>{            
        var carHash = {brand: this.state.brand, code: this.props.car.code, price: this.state.price, url: this.state.url, count: this.state.count};
        this.props.cbSave(carHash);
        
        
    }
    render(){

        return(
            <table >
                <tbody>
                    <tr className='ProductChange'>
                        <td><label>Brand</label></td>
                        <td><input type='text' value={this.state.brand} onChange={this.editText} /></td>
                        <td className="faultMessage">{(this.state.brand)?null:<span > Field can't be empty! Please, fill the field</span>}</td>
                    </tr>
                    <tr className='ProductChange'>
                        <td><label>Price</label></td>
                        <td><input type='text' value={this.state.price} onChange={this.editPrice} /></td>
                        <td className="faultMessage">{(this.state.price)?null:<span> Field can't be empty! Please, fill the field</span>}</td>
                        </tr>
                    <tr className='ProductChange'>
                        <td><label>url</label></td>
                        <td><input type='text' value={this.state.url} onChange={this.editUrl} className='_url'/></td>
                        <td className="faultMessage">{(this.state.url)?null:<span > Field can't be empty! Please, fill the field</span>}</td>
                        </tr>
                    <tr className='ProductChange'>
                        <td><label>Count</label></td>
                        <td><input  type='text' value={this.state.count} onChange={this.editCount} /></td>
                        <td className="faultMessage">{(this.state.count)?null:<span > Field can't be empty! Please, fill the field</span>}</td>
                        </tr>
                    <tr className='_buttons'>
                        <td></td>
                        <td><input type="button" value="cancel" className='_button' onClick={this.cancel.bind(this)}/>
                        <input type="button" value="save" className={this.state.disableSaveClass}  onClick={this.save.bind(this)} disabled={this.state.disableSave}/></td>

                    </tr>
                </tbody>
                
   
            </table>
        )
    }
}

export default ProductChange;