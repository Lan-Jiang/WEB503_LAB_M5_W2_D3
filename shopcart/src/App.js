
import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navbar';
import Product from './components/products';
import data from './data';
import { useState } from 'react';

// 1.quantity add and decrease
// 2.add to cart total
// 3.create displayproduct
// 4.lightbox
class App extends Component {
  state = {
    products: [
      {
        id: 1,
        image: './products/cologne.jpg',
        desc: 'Unisex Cologne',
        value: 0
      },
      {
        id: 2,
        image: './products/iwatch.jpg',
        desc: 'Apple iWatch',
        value: 0
      },
      {
        id: 3,
        image: './products/mug.jpg',
        desc: 'Unique Mug',
        value: 0
      },
      {
        id: 4,
        image: './products/wallet.jpg',
        desc: 'Mens Wallet',
        value: 0
      },
    ]
  };

  handleQuantityChange = (quantity, id) => {
    
    let products = this.state.products
    products.filter(item => item.id === id).value = quantity
    this.setState({ products })
    console.log()

  };

  render (){
    return (
      <div>
        <NavBar sum={this.state.products.map((product) => parseInt(product.value)).reduce((acc, value) => acc + value)} />
        {this.state.products.map(prod =>
          <Product key={prod.id} id={prod.id} image={prod.image} title={prod.desc} value={prod.value} handleQuantityChange={this.handleQuantityChange}/>
          )}
      </div>
    );
  }
}

export default App;
