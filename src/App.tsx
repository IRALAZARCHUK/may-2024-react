
import React from 'react';
import Products from './components/Products/Products';

interface Product {
  id: number;
  title: string;
  price: number;
  brand: string;
  description: string;
  thumbnail: string;
  rating: number;
  stock: number;
  tags: string[];
  sku: string;
  weight: number;
}

interface AppState {
  products: Product[];
}

class App extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      products: [],
    };
  }


  async componentDidMount() {
    try {
      const response = await fetch('https://dummyjson.com/products');
      const data = await response.json();
      this.setState({ products: data.products });
    } catch (error) {
      console.error('Error:', error);
    }
  }

  render() {
    return (
        <div>
          <h1>Список продуктів</h1>
          <Products products={this.state.products} />
        </div>
    );
  }
}

export default App;
