
import Header from './components/Header';
import Main from './components/Main';
import Basket from './components/ฺBasket';
import data from './data';
import React,{ useState } from 'react';

function App() {
  const { products } = data ;
  const [cartItems,setCartItem] = useState([]);
  const onAdd = (product) =>{
    const exist = cartItems.find(x => x.id === product.id);
    if (exist) {
      setCartItem(
        cartItems.map((x) =>
          x.id === product.id ? {...exist, qty: exist.qty+1 } : x
        )
      );
    } else {
      setCartItem([...cartItems, {...product, qty:1}]);
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if(exist.qty === 1){
      setCartItem(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItem(
        cartItems.map((x) => 
          x.id === product.id ? {...exist, qty: exist.qty - 1} : x
        )
      );
    }
  }

  return (
    <div className="App">
      <Header countCartItems={cartItems.length}> </Header>
      <div className="row">
        <Main onAdd={onAdd} products={products }></Main>
        <Basket 
          onAdd={onAdd} 
          onRemove={onRemove} 
          cartItems={cartItems }>
        </Basket>
      </div>
    </div>
  );
}

export default App;
