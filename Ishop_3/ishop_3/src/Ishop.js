import PropTypes from 'prop-types';
import React from 'react';
import Product from './Product';
import ProductInfo from './ProductInfo';
import ProductHeaderTable from './ProductHeaderTable';
import './Ishop.css';


class Ishop extends React.Component{
  static propTypes = {
    cars: PropTypes.array,
    shopName: PropTypes.string.isRequired,
  };
  static defaultProps = {
    // начальное значение props
    shopName: "Shop name not found",
    cars: [{ code: 0, brand: 'not found', price: 'not found', url: 'not found', count: 'not found' }]
  };
  constructor(props) {
    super(props);   

    this.state = {
      // начальное значение state может быть указано здесь, оно может зависеть от props
       aRR: this.props.cars.slice(),
    };
  }
  state = {
    // начальное значение state может быть указано здесь, оно может зависеть от this.props
    selecteId: 0,
    change: 0,

  };

  checkedItem = (selectedCode) => {
    this.setState(({ selecteId: selectedCode }));
    
  };
  
  deleteItem = (deletedCode) => {    
    this.setState(({ aRR: this.state.aRR.filter(element => element.code !== deletedCode) }));
  };
 changeItem = (code) =>{
  this.setState(({ change: code}));
 }


  render() {
    //console.log(this.state.change);
    var listCars = this.state.aRR.map((item) =>
    <Product 
    item={item} key={item.code} selecteId={this.state.selecteId} cbCheckedItem={this.checkedItem} cbDeleteItem={this.deleteItem} cbchangeItem={this.changeItem} change={this.state.change}
    >
    </Product>
    );  
      
    return (
      <div className='IshopWrapper'>
      
        <table className='IshopFrame'>
          <caption className='IshopName'>{this.props.shopName}</caption>
          <thead className='IshopTableHead'>
            <tr>
              <ProductHeaderTable/>
            </tr>
          </thead>
          <tbody>
            {listCars}
          </tbody> 
        </table>
        <div>
          <ProductInfo selecteId={this.state.selecteId} aRR={this.state.aRR} change={this.state.change}/>
        </div>
      </div>
    );
   
  };
}

export default Ishop;
