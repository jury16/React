import PropTypes from 'prop-types';
import React from 'react';
import Product from './Product';
import ProductNew from './ProductNew';
import ProductChange from './ProductChange';
import ProductCard from './ProductCard';
import './Ishop.css';


class Ishop extends React.Component{
  static propTypes = {
    cars: PropTypes.array,
    shopName: PropTypes.string.isRequired,
  };
  static defaultProps = {
    shopName: "Shop name not found",
    cars: [{ code: 0, brand: 'not found', price: 'not found', url: 'not found', count: 'not found' }]
  };
  constructor(props) {
    super(props);   

    this.state = {
       aRR: this.props.cars.slice(),
       selecteId: 0,       
       deleteCard: false,
       carChange: {},
       change: 0,    
       disableNewProduct: false,
       disableDelChangeButtons: null,
       productChanged: false,
       idToAdd: Object.keys(this.props.cars).length,
       productChanged: false,
    };
  }
  state = {
    
  };
  //!!!!!!!!!!!!!!!!!!!!!
  //!!!!!!!!!!!!!!
//permission click to another item
  checkedItem = (selectedCode) => {
    if(!this.state.disableNewProduct && !this.state.productChanged){
      selectedCode
      ?
      this.setState({ selecteId: selectedCode })
      :    
      this.setState({ aRR: this.props.cars.slice()});
    }
    
    
  };
  
  deleteItem = (deletedCode) => {    
    this.setState(({deleteCard: true, aRR: this.state.aRR.filter(item => item.code !== deletedCode) }));
  };

  productChangedState = (status) => {
    console.log(status);
    this.setState(({ productChanged: status, change: this.state.selecteId}), this.changeItem);
   }
 changeItem = (code) =>{
   if (isNaN(code)){
     code = this.state.change;
   }
    var disableDel;
    if(code && this.state.productChanged){
      disableDel = "disabled";
      this.setState(({ change: code, disableNewProduct: false, disableDelChangeButtons: disableDel}), this.carToChange(code));
    }
    else if(!this.state.productChanged){
      disableDel = null;
      this.setState(({ change: code, disableNewProduct: false, disableDelChangeButtons: null}), this.carToChange(code));
    }
      
 }
 carToChange = (code) =>{   
  var item = this.state.aRR.find(item => item.code === code);
  this.setState({carChange: item,});  
 }
 carToSave = (car) =>{
   if(car.brand == null){
    this.setState({productChanged: false}, this.save);
   }
   else if (Object.keys(this.state.aRR).length >= car.code){
      var caR = this.state.aRR.map((item => item.code === car.code? car: item));
      this.setState({aRR: caR, disableDelChangeButtons: null, productChanged: false}, this.save);
     
   }
  else if(Object.keys(this.state.aRR).length < car.code){
    this.state.aRR.push(car);
    this.setState({disableDelChangeButtons: null, productChanged: false}, this.save);  
  } 
 }
 save = () =>{  
  this.setState({disableNewProduct: false,} , this.changeItem(0));
 }

 addNewProduct = () => {  
  this.setState(({ disableNewProduct: true, selecteId: 0, idToAdd: (this.state.idToAdd + 1), disableDelChangeButtons: "disabled"}), this.createNewProduct);

 }



  render() {   
     
    var listCars = this.state.aRR.map((item) =>
    <Product 
    item={item} key={item.code} selecteId={this.state.selecteId} cbCheckedItem={this.checkedItem} cbDeleteItem={this.deleteItem} cbchangeItem={this.changeItem} change={this.state.change} 
        disableDelChangeButtons={this.state.disableDelChangeButtons} productChanged={this.state.productChanged}
    >
    </Product>
    );      
    return (     
      <div className='IshopWrapper'>
      <span>{(this.state.disableDelete)}</span>
        <table className='IshopFrame'>
          <caption className='IshopName'>{this.props.shopName}</caption>
          <thead className='IshopTableHead'>
            <tr>
                <td className='IshopTableHead' key={1}>brand</td>
                <td className='IshopTableHead' key={2}>code</td>
                <td className='IshopTableHead' key={3}>picture</td>
                <td className='IshopTableHead' key={4}>quantity</td>
                <td className='IshopTableHead' key={5}>price</td>
                <td className='IshopTableHead' key={6}>controls</td>
            </tr>
          </thead>
          <tbody>
            {listCars}
          </tbody> 
        </table>
        <div>
          {
            (!this.state.disableNewProduct)
                ?
                <input type="button" value="new product" className='_button' disabled={this.state.disableDelChangeButtons} onClick={this.addNewProduct.bind(this)}/>     
                :       
                <ProductNew disableSave={"disabled" } carHash={{brand: null, code: this.state.idToAdd, price: null, url: null, count: null}} cbSave={this.carToSave} cbCheckedItem={this.checkedItem} selecteId={this.state.selecteId}/>
          }
        </div>
        <div>
        {((this.state.change && this.state.change===this.state.selecteId) || this.state.productChanged)?
              <ProductChange cdchange={this.state.change} car={this.state.carChange} cbCheckedItem={this.checkedItem} cbSave={this.carToSave} disableDelChangeButtons={this.state.disableDelChangeButtons} change={this.state.change} 
                productChanged={this.state.productChanged} cbproductChangedState={this.productChangedState}/>
              :
              (this.state.selecteId || this.state.deleteCard)
                ?                  
                  <ProductCard selecteId={this.state.selecteId} carS={this.state.aRR}/>
                :
                null              
        }
        </div>       
        
      </div>
    );
   
  };
}

export default Ishop;
