import PropTypes from 'prop-types';
import React from 'react';
import './ProductCard.css';

class ProductCard extends React.Component{
    static propTypes = {
        selecteId: PropTypes.number,
        aRR: PropTypes.array,
        productCard: PropTypes.object,

      };
      constructor(props) {
        super(props);       
        this.state = {          
           //item: this.props.productCard,
        };
      }
      validatingName = (name) =>{

      }
      //this.setState({item: this.props.productCard})
    render(){
        //console.log(this.props.productCard.code );
        
        return (    
                                
                <tbody className=''> 
                    <tr className=''>
                        <td><label className=''>Brand:</label></td>
                        <td><input className='ProductCardText _input' type="text" id="Brand" value={this.props.productCard.brand} onChange={this.validatingName}></input></td>
                    </tr>
                    
                    <tr>
                    <td><label className=''>Id:  </label></td>
                    <td><input className='ProductCardText _input' type="text" id="Id" value={this.props.productCard.code} onChange={this.validatingName}></input></td>
                    </tr> 
                    <tr>
                    <td><label className=''>URL:</label> </td>
                    <td><input className='ProductCardText _input' type="text" id="URL" value= {this.props.productCard.url} onChange={this.validatingName}></input></td>
                    </tr>    
    
                    <tr>
                    <td><label className=''>Quantity: </label></td>
                    <td><input className='ProductCardText _input' type="text" id="Quantity" value={this.props.productCard.count} onChange={this.validatingName}></input></td>

                    </tr>    
                    <tr>
                    <td><label className=''>Price: </label></td>
                    <td><input className='ProductCardText _input' type="text" id="Price" value={this.props.productCard.price} onChange={this.validatingName}></input></td>
                    </tr>       
                    <tr>
                        <td><input className='ProductCardText _inputButton ' type="button" value="save" /> </td>
                        <td><input className='ProductCardText _inputButton ProductCardButtonChange' type="button" value="cancel" /> </td>
                    </tr>     
               </tbody>

        )
    };
        

}

export default ProductCard;