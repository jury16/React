import PropTypes from 'prop-types';
import React from 'react';
import './Product.css';

class Product extends React.Component{
    static propTypes = {
        item: PropTypes.object,
        cbCheckedItem: PropTypes.func,
        cbDeleteItem: PropTypes.func,
        cbchangeItem: PropTypes.func,
        selecteId: PropTypes.number,
        change: PropTypes.number,
        disableDelChangeButtons: PropTypes.string,
        classButtons: PropTypes.string,
      };
      constructor(props) {
        super(props);   
    
        this.state = {            
            selecteId: this.props.selecteId,
            changeCode: 0,
            disablCheck: false, 
        };
      }
      state = {    
        
        
      };
      selectedItem = (selectedCode) => {  
            this.props.cbCheckedItem(selectedCode); 
 
    };

    deleteItem = (deletedCode) => {
        if (window.confirm('Delete Item?') ? true : false) {
            this.props.cbDeleteItem(deletedCode);
            
        }
    };

    changeItem = (code) => {
        this.setState({changeCode: code}, this.disable);  
    }
    disable = () => {

        this.props.cbchangeItem(this.state.changeCode,);
    }
    
    render(){
        var claSS = null;         
        if ((this.props.selecteId === this.props.item.code)){
            claSS = 'ProductActive';
        }  
        else{
            claSS = null;
        }
        return(
            <>
            <tr key={this.props.item.code} className={claSS} onClick={this.selectedItem.bind(this, this.props.item.code, )}>
                <td className='ProductText'>{this.props.item.brand}</td>
                <td className='ProductText _number'>{this.props.item.code}</td>
                <td className='ProductText'>
                    <img className='IshopImg' src={this.props.item.url} alt={`${this.props.item.brand}`}/>
                </td>
                <td className='ProductText _number'>{this.props.item.count}</td>
                <td className='ProductText _number'>{this.props.item.price}</td>
                <td className='ProductText'>
                    <input type="button" value="delete" className={this.props.classButtons} disabled={this.props.disableDelChangeButtons} onClick={this.deleteItem.bind(this, this.props.item.code)}/>
                    <input type="button" value="change" className={this.props.classButtons} disabled={this.props.disableDelChangeButtons} onClick={this.changeItem.bind(this, this.props.item.code)}/>                    
                </td>
                
            </tr>            
            </>
        )
    }
}

export default Product;