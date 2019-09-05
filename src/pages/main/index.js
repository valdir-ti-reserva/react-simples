import React, {Component} from 'react';
import api from '../../services/api';

export default class Main extends Component{

    //Ação executada logo que o componente é exibido em tela
    componentDidMount(){
        this.loadProducts();
    }

    loadProducts = async () => {
        const response = await api.get('/products');
        console.log(response.data.docs);
    }

    render(){
        return <h2>Teste de página Main</h2>;
    }
}