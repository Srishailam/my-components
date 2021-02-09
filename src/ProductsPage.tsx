import React, { Component } from 'react'
import { Link, RouteComponentProps } from 'react-router-dom';
import { IProduct, products } from './ProductsData';

interface IState {
  products: IProduct[];
  search: string;
}
export default class ProductsPage extends Component<RouteComponentProps, IState> {
  constructor(props: RouteComponentProps){
    super(props);
    this.state = {
      products: [],
      search: ''
    };
  }
  componentDidMount(){
    console.log('in did mount');
    this.setState({
      products
    })
  }
  static getDerivedStateFromProps(props: RouteComponentProps, state:IState){
    console.log('in  getDerivedStateFromProps');
    const searchParams = new URLSearchParams(props.location.search);
    console.log(props);
    const search = searchParams.get('search') || '';
    return {
      products: state.products,
      search
    }
  }

  render() {
    return (
      <div className="ProductsPage">
        <div className="page-container">
          <p>Welcome to React shop where you can get all your tools for ReactJS</p>
        </div>
        <ul className="product-list">
          {
            this.state.products.map( product => {
              if ( !this.state.search || (this.state.search && product.name.toLocaleLowerCase().indexOf( this.state.search.toLocaleLowerCase() ) > -1 ) ) {
                return (
                  <li key={product.id} className="product-list-item">
                    <Link to={`/products/${product.id}`}>{product.name}</Link>
                  </li>  
                )  
              } else {
                return null;
              }
            })
          }
        </ul>
      </div>
    )
  }
}
