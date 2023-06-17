import React from 'react';
import { Products } from '../../Products';
import  Product from '../product/product';

const Shop = () => {
  return (
    <div className='products'>
      {Products.map(product => (
        <Product key={product.id} product = {product}/>
      ))}
    </div>
  )
}

export default Shop;