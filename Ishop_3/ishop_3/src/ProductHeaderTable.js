import React from 'react';

class ProductHeaderTable extends React.Component{
    render(){
            return (
                <>
                    <td className='IshopTableHead' key={1}>brand</td>
                    <td className='IshopTableHead' key={2}>code</td>
                    <td className='IshopTableHead' key={3}>picture</td>
                    <td className='IshopTableHead' key={4}>quantity</td>
                    <td className='IshopTableHead' key={5}>controls</td>
                </>
                
            )

    }
 
};


export default ProductHeaderTable;