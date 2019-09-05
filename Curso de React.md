# Curso de React

https://skylab.rocketseat.com.br/node/curso-react-js

## O que é React?

1. Biblioteca para trabalhar com o front-end da aplicação
2. Organização dos diretórios
3. Manipulação do DOM
4. Indicado para SPA
5. Flexibilidade da aplicação
6. Componentização

### Componente Simples

```react
class HelloMessage extends React.Component{
    render(){
        return{
          <div>
                Hello {this.props.name}
          </div>  
        };
    }
}

ReactDOM.render(
	<HelloMessage name="Valdir"/>
    document.getElementById('hello-example')
);
```

### Iniciando um projeto

1. npm -v
2. node -v
3. npm install -g create-react-app
4. create-react-app react-simples
5. cd react-simples
6. npm start

## O que são Componentes?

1. src/index.js é o arquivo principal da aplicação
2. Componentes são pedaços isolados de lógica, estrutura e organização

## Componente Header

1. src/componentes/Header/index.js

2. src/componentes/Header/styles.css

3. Criando o Componente Header na devida pasta dos componentes

   ```react
   import React from 'react';
   import './styles.css';
   
   const Header = () => <header id='main-header'>Header React</header>
   
   export default Header;
   ```

   4. Css do Header

```css
#main-header{
    height: 60px;
    width: 100%;
    background-color: #da552f;
    font-size: 18px;
    font-weight: bold;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
}
```

5. Importando o Header no arquivo principal

```react
import React from 'react';

import Header from './componentes/Header/index';

const App = () => (
  <div className="App">
    <Header/>
    <h3>Texto no Body</h3>
  </div>
)

export default App;
```

6. CSS do arquivo principal

```css
*{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
}

body{
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    background: #e0e0e0;
    color: #333;    
}
```

## Buscando produtos da API

1. npm install axios

2. src/services/api.js

   ```react
   import axios from 'axios';
   const api = axios.create({baseURL: 'https://rocketseat-node.herokuapp.com/api'});
   export default api;
   ```

   

## Armazenando no estado



## Listando os produtos



## Paginação



## Configurando a navegação



## Navegando para o detalhe