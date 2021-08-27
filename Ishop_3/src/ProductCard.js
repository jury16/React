import PropTypes from 'prop-types';
import React from 'react';
import './ProductCard.css';

class ProductCard extends React.Component{
    static propTypes = {
        carS: PropTypes.array,
        selecteId: PropTypes.number,
      };
      constructor(props) {
        super(props);   
    
        this.state = {
        };
      }
      state = {        
      };
    
    render(){
       
        var car= this.props.carS.filter(item => item.code === this.props.selecteId);
        car = car[0];
        
        return(  
            <>      
            {
                car
                ?
                <table className='ProductCard'>
                <tbody>
                <tr>
                    <td>ID:</td>   
                    <td>{car.code} </td>                        
                </tr>
                <tr>
                    <td>brand:</td>
                    <td>{car.brand}</td>                        
                </tr>
                <tr>
                    <td>price:</td>
                    <td>{car.price}</td>
                </tr>
                <tr>
                    
                    <td colSpan="2"><img className=' _img' src={car.url} alt={`${car.brand}`}/></td>
                </tr>
                <tr>
                    <td>count:</td>
                    <td>{car.count} </td>                        
                </tr>

                </tbody>
            </table>    
            :
            null            
            }       
            </>      
      
        )
    }
}

export default ProductCard;