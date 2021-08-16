import PropTypes from 'prop-types';
import React from 'react';
import './ProductCard.css';

class ProductCard extends React.Component{
    static propTypes = {
        selecteId: PropTypes.number,
        aRR: PropTypes.array,
        productCard: PropTypes.object,
        change: PropTypes.number,

      };
      constructor(props) {
        super(props);       
        this.state = {          
           arrCars: this.props.aRR,
           productBrand: this.props.productCard,
           
          
        };        
      }
      state = {
        branD : this.props.productCard.brand,
      }
      avaliableChange = () => {
          this.setState()
      }
      validBrand = (EO) =>{
             }
      validID = (EO) =>{
             }
      validUrl = (EO) =>{
             }
      validQuantity = (EO) =>{
             }
      validPrice = (EO) =>{
             }
             
      
    render(){
        
        console.log(this.props.productCard.brand);
        var displayButton = false;
        
        if (this.props.change === this.props.selecteId){
            displayButton = '_displayButtonOn';
           
        } 
        else{
           
            displayButton = '_displayButtonOff';
        }
        
        return (    
                                
                <tbody className=''> 
                    <tr className=''>
                        <td><span className=''>Brand:</span></td>
                        <td><input className='ProductCardText _input' type="text" id="Brand"  defaultValue={this.props.productCard.brand} onChange={this.validBrand}></input></td>
                    </tr>
                    
                    <tr>
                    <td><span className=''>Id:  </span></td>
                    <td><input className='ProductCardText _input' type="text" id="Id"  value={this.props.productCard.code} onChange={this.validID}></input></td>
                    </tr> 
                    <tr>
                    <td><span className=''>URL:</span> </td>
                    <td><input className='ProductCardText _input' type="text" id="URL"  value= {this.props.productCard.url} onChange={this.validUrl}></input></td>
                    </tr>    
    
                    <tr>
                    <td><span className=''>Quantity: </span></td>
                    <td><input className='ProductCardText _input' type="text" id="Quantity"  value={this.props.productCard.count} onChange={this.validQuantity}></input></td>

                    </tr>    
                    <tr>
                    <td><span className=''>Price: </span></td>
                    <td><input className='ProductCardText _input' type="text" id="Price"  value={this.props.productCard.price} onChange={this.validPrice}></input></td>
                    </tr>       
                    <tr className={displayButton}>
                        <td><input className='ProductCardText _inputButton ' type="button" value="save" /> 
                        <input className='ProductCardText _inputButton' type="button" value="cancel" /> </td>
                    </tr>     
               </tbody>

        )
    };
        

}

export default ProductCard;