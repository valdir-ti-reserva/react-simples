import React, {Component} from 'react';
import api from '../../services/api';

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
        // return <h2>Total de produtos: {this.state.products.length}</h2>;
        return <div className="product-list">
            {this.state.products.map(product => (
                <h2 key={product._id}>{product.title}</h2>
            ))}
        </div>
    }
}