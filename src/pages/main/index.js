import React, {Component} from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

import './styles.css';

export default class Main extends Component{
    
    state = {
        products: [],
        productInfo: {},
        page: 1
    }

    //Ação executada logo que o componente é exibido em tela
    componentDidMount(){
        this.loadProducts();
    }

    loadProducts = async (page = 1) => {
        const response = await api.get(`/products?page=${page}`);
        console.log(response.data.docs);

        const {docs, ...productInfo} = response.data;

        this.setState({ products: docs, productInfo, page });
    }

    prevPage = () => {
        const {page, productInfo} = this.state;

        if(page === 1) return;

        const pageNumber = page - 1;
        this.loadProducts(pageNumber);
    }
    nextPage = () => {
        const {page, productInfo} = this.state;
        
        if(page === productInfo) return;

        const pageNumber = page + 1;
        this.loadProducts(pageNumber);
    }

    render(){
        const {products, page, productInfo} = this.state;

        // return <h2>Total de produtos: {this.state.products.length}</h2>;
        return <div className="product-list">
            {products.map(product => (

                <article key={product._id}>
                    <strong>{product.title}</strong>
                    <p>{product.description}</p>
                    <Link to={`/products/${product._id}`}>Acessar</Link>
                </article>

                // <h2 key={product._id}>{product.title}</h2>
            ))}
            <div className="actions">
                <button disabled={page === 1} onClick={this.prevPage}>Anterior</button>
                <button disabled={page === productInfo.pages} onClick={this.nextPage}>Próxima</button>
            </div>
        </div>
    }
}