import PropTypes from 'prop-types';
import React from 'react';
import './ProductInfo.css';
import ProductCard from './ProductCard';

class ProductInfo extends React.Component{
    static propTypes = {
        selecteId: PropTypes.number,
        aRR: PropTypes.array,

      };
      constructor(props) {
        super(props);       
        this.state = {          
           //itemInfo: this.props.cars.slice(),
        };
      }
     
    render(){
        var itemCard = this.props.aRR.filter(item => item.code === this.props.selecteId);
        var productCard = itemCard[0];
        
        //console.log(productCard);
        
        if (itemCard[0]){
            return(
                <table className='ProductInfoWrapper'>
                    <ProductCard productCard={productCard}/>
                </table>
            )
        }
        else{
            return null;
        }
    };

}

export default ProductInfo;