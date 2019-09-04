# Curso de React

### O que é React?

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



# Iniciando um projeto

1. npm -v
2. node -v
3. npm install -g create-react-app
4. create-react-app react-simples