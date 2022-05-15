
import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navbar';
import Product from './components/products';
import data from './data';
import { useState } from 'react';


// 1.quantity add and decrease
// 2.add to cart total
// 3.create displayproduct page
// 4.lightbox
class App extends Component {
  state = {
    products: [
      {
        id: 1,
        image: './products/cologne.jpg',
        desc: 'Unisex Cologne',
        value: 0,
        rating: 4
      },
      {
        id: 2,
        image: './products/iwatch.jpg',
        desc: 'Apple iWatch',
        value: 0,
        rating: 4.5
      },
      {
        id: 3,
        image: './products/mug.jpg',
        desc: 'Unique Mug',
        value: 0,
        rating: 3
      },
      {
        id: 4,
        image: './products/wallet.jpg',
        desc: 'Mens Wallet',
        value: 0,
        rating: 2.5
      },
    ]
  };

  handleQuantityChange = (quantity, id, operator = 0) => {
    
    let products = this.state.products
    products.filter(item => item.id === id)[0].value = parseInt(quantity) + parseInt(operator)
    this.setState({ products })
    console.log()

  };


  // handelAdd = (product) => {
  //   let products = this.state.products
  //   const [cartItems, setCartItems] = useState([]);
  //   const exist = cartItems.find((x) => x.id === product.id);
  //   if (exist) {
  //     setCartItems(
  //       cartItems.map((x) =>
  //         x.id === product.id ? { ...exist, value: exist.qty + 1 } : x
  //       )
  //     );
  //   } else {
  //     setCartItems([...cartItems, { ...product, value: 1 }]);
  //   }
  // };

  // handelRemove = (product) => {
  //   let products = this.state.products
  //   const [cartItems, setCartItems] = useState([]);
  //   const exist = cartItems.find((x) => x.id === product.id);
  //   if (exist) {
  //     setCartItems(
  //       cartItems.map((x) =>
  //         x.id === product.id ? { ...exist, value: exist.qty - 1 } : x
  //       )
  //     );
  //   } else {
  //     setCartItems([...cartItems, { ...product, value: 1 }]);
  //   }
  // };

  render (){
    return (
      <div className='App container'>
        <NavBar sum={this.state.products.map((product) => parseInt(product.value)).reduce((acc, value) => acc + value)} />
        {this.state.products.map(prod =>
          <Product key={prod.id} id={prod.id} image={prod.image} title={prod.desc} desc={prod.desc} rating={prod.rating} value={prod.value} 
            handleQuantityChange={this.handleQuantityChange} />
            // handelAdd={this.handelAdd}
            // handelRemove={this.handelRemove}/>
          )}
      </div>
    );
  }
}

export default App;
