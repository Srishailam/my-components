import React, { Component } from 'react'
import { Prompt, RouteComponentProps } from 'react-router-dom'
import Product from './Product';
import { getProduct, IProduct, products } from './ProductsData';


type Props = RouteComponentProps<{ id: string }>;

interface IState {
  product?: IProduct;
  added: boolean;
  loading: boolean;
}

export default class ProductPage extends Component<Props, IState> {
  constructor(props: Props) {
    super(props);
    this.state = {
      added: false,
      loading: true
    }
  }
  async componentDidMount() {
    if (this.props.match.params.id) {
      const id: number = parseInt(this.props.match.params.id, 10);
      const product = await getProduct(id);
      if (product !== null) {
        this.setState({ product, loading: false });
      }
    }
  }
  handleAddClick = () => {
    this.setState({
      added: true
    })
  }
  navAwayMessage = () => "Are you sure you leave without buying this product?";
  render() {
    const { product } = this.state;
    return (
      <div className="ProductPage page-container">
        <Prompt when={!this.state.added} message={this.navAwayMessage} />
        {
          product || this.state.loading ? ( <>
            <Product
              loading={this.state.loading}
              product={product}
              inBasket={this.state.added}
              onAddToBasket={this.handleAddClick}
            />
          </>) : <p>Product not found!</p>
        }
      </div>
    )
  }
}
