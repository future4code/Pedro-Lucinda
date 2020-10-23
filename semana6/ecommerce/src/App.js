import React from "react";
import "./styles/app.css";
import "./styles/mobile.css";
import Filter from "./components/Filter";
import Product from "./components/Product";
import NavBar from "./components/NavBar";

import removeIcon from "./imgs/removeIcon.svg";
import toy1 from "./imgs/toy1.jpg";
import toy2 from "./imgs/toy2.jpg";
import toy3 from "./imgs/toy3.jpg";
import toy4 from "./imgs/toy4.jpg";
import toy5 from "./imgs/toy5.jpg";
import toy6 from "./imgs/toy6.jpg";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      products: [
        {
          id: 1,
          name: "Space Station",
          price: 50,
          imgUrl: toy1,
        },
        {
          id: 2,
          name: "Rockets",
          price: 25,
          imgUrl: toy2,
        },
        {
          id: 3,
          name: "Spaceship",
          price: 40,
          imgUrl: toy3,
        },
        {
          id: 4,
          name: "Apollo",
          price: 150,
          imgUrl: toy4,
        },
        {
          id: 5,
          name: "Moon Base Alpha",
          price: 500,
          imgUrl: toy5,
        },
        {
          id: 6,
          name: "Space Nerf",
          price: 25,
          imgUrl: toy6,
        },
      ],
      minPrice: "",
      maxPrice: "",
      searchProduct: "",
      cart: [],
      showCart: true,
    };
  }

  onClickAddToCart = (product) => {
    const newCart = [...this.state.cart];
    const productIndexInCart = this.state.cart.findIndex(
      (item) => item.product.id === product.id
    );

    if (productIndexInCart > -1) {
      newCart[productIndexInCart].quantity += 1;
    } else {
      newCart.push({ product: product, quantity: 1, id: Date.now() });
    }

    console.log(productIndexInCart);
    this.setState({ cart: newCart });
  };

  onClickRemoveCart = (product) => {
    const newCart = [...this.state.cart];
    const productIndexToRemove = this.state.cart.findIndex(
      (item) => item.product.id === product.id
    );
    if (
      productIndexToRemove > -1 &&
      newCart[productIndexToRemove].quantity > 1
    ) {
      newCart[productIndexToRemove].quantity -= 1;
    } else {
      newCart.splice(productIndexToRemove, 1);
    }
    this.setState({ cart: newCart });
  };

  onClickShowCart = () => {
    this.setState({ showCart: !this.state.showCart });
  };

  onChangeMinPrice = (event) => {
    this.setState({ minPrice: event.target.value });
  };
  onChangeMaxPrice = (event) => {
    this.setState({ maxPrice: event.target.value });
  };
  onChangeSearchProduct = (event) => {
    this.setState({ searchProduct: event.target.value });
  };

  render() {
    const cartItens = () => {
      const cart = this.state.cart.map((item) => {
        console.log(this.state.cart);
        return (
          <div className="cartItem">
            <p>{item.quantity}X</p>
            <p>
              {item.product.name} $ {item.product.price}
            </p>
            <img
              src={removeIcon}
              onClick={() => this.onClickRemoveCart(item.product)}
              alt="Remove Icon"
            />
          </div>
        );
      });
      return cart;
    };

    const totalCart = () => {
      let totalValue = 0;
      this.state.cart.map(
        (product) => (totalValue += product.product.price * product.quantity)
      );
      return totalValue;
    };

    const renderCart = () => {
      if (!this.state.showCart) {
        return (
          <div>
            <div className="cartContainer">
              <h1>Cart</h1>
              {cartItens()}
              <h4>Total: {totalCart()} </h4>
            </div>
          </div>
        );
      } else {
        return <></>;
      }
    };

    const renderProducts = () => {
      let searchProduct = this.state.searchProduct.toLowerCase();
      return this.state.products.map((product) => {
        if (
          (this.state.minPrice <= product.price &&
            this.state.maxPrice >= product.price) ||
          searchProduct === product.name.toLowerCase()
        ) {
          return (
            <Product
              key={product.id}
              img={product.imgUrl}
              title={product.name}
              price={product.price}
              onClick={() => {
                this.onClickAddToCart(product);
              }}
            />
          );
        } else if (
          this.state.minPrice === "" &&
          this.state.maxPrice === "" &&
          searchProduct === ""
        ) {
          return (
            <Product
              key={product.id}
              img={product.imgUrl}
              title={product.name}
              price={product.price}
              onClick={() => {
                this.onClickAddToCart(product);
              }}
            />
          );
        }
      });
    };

    return (
      <div className="app">
        <NavBar onClickShowCart={this.onClickShowCart} />
        <div className="appContainer">
          <Filter
            valueMinPrice={this.state.minPrice}
            onChangeMinPrice={this.onChangeMinPrice}
            valueMaxPrice={this.state.maxPrice}
            onChangeMaxPrice={this.onChangeMaxPrice}
            valueSearchProduct={this.state.searchProduct}
            onChangeSearchProduct={this.onChangeSearchProduct}
          />
          <div className="allProductsContainer">{renderProducts()}</div>

          <div className="cartWrapper">{renderCart()}</div>
        </div>
      </div>
    );
  }
}

export default App;
