import PropTypes from 'prop-types';
import React from 'react';
import './Product.css';

class Product extends React.Component{
    static propTypes = {
        item: PropTypes.object,
        cbCheckedItem: PropTypes.func,
        cbDeleteItem: PropTypes.func,
        selecteId: PropTypes.number,
      };
      constructor(props) {
        super(props);   
    
        this.state = {
          // начальное значение state может быть указано здесь, оно может зависеть от props
           
        };
      }
      state = {
        // начальное значение state может быть указано здесь, оно может зависеть от this.props
        changeProduct: false,
      };
      selectedItem = (selectedCode) => {
        this.props.cbCheckedItem(selectedCode);
    };

    deleteItem = (deletedCode) => {
        if (window.confirm('Delete Item?') ? true : false) {
            this.props.cbDeleteItem(deletedCode);
        }
    };
    changeItem = (changeItemCode) => {
        this.setState(({ changeProduct: changeItemCode }));
    };
    
    render(){
        var claSS = null;
        var changeProduct = false;
        
        (this.props.selecteId === this.props.item.code) ? changeProduct = true: changeProduct = false;
        changeProduct? claSS = 'ProductActive': claSS = null;
        return(
            <>
            <tr key={this.props.item.code} className={claSS} onClick={this.selectedItem.bind(this, this.props.item.code, )}>
                <td className='ProductText'>{this.props.item.brand}</td>
                <td className='ProductText _number'>{this.props.item.code}</td>
                <td className='ProductText'>
                    <img className='IshopImg' src={this.props.item.url} alt={`${this.props.item.brand}`}/>
                </td>
                <td className='ProductText _number'>{this.props.item.count}</td>
                <td className='ProductText'>
                    <input type="button" value="delete" onClick={this.deleteItem.bind(this, this.props.item.code)}/>
                    <input type="button" value="change" onClick={this.changeItem.bind(this, this.props.item.code)}/>                    
                </td>
                
            </tr>            
            </>
        )
    }
}

export default Product;