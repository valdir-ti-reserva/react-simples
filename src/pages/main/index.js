import React, {Component} from 'react';
import api from '../../services/api';
import './styles.css';

export default class Main extends Component{
    
    state = {
        products: []
    }

    //Ação executada logo que o componente é exibido em tela
    componentDidMount(){
        this.loadProducts();
    }

    loadProducts = async () => {
        const response = await api.get('/products');
        console.log(response.data.docs);
        this.setState({ products: response.data.docs });
    }

    render(){
        const {products} = this.state;

        // return <h2>Total de produtos: {this.state.products.length}</h2>;
        return <div className="product-list">
            {products.map(product => (

                <article key={product._id}>
                    <strong>{product.title}</strong>
                    <p>{product.description}</p>
                    <a href="#">Acessar</a>
                </article>

                // <h2 key={product._id}>{product.title}</h2>
            ))}
        </div>
    }
}