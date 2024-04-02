// import React from "react";
// import {View, Text} from "react-native";


// function App(){
//   return(

//     // tela toda ou fragmento dessa tela
//     <View>
//       <Text>Olá mundo!</Text>
//     </View>
//   );
// }

// // dps de criar tenho que colocar o export

// export default App; //poderia por antes da function


//usando classe
import React, {Component} from "react";
import {View, Text, Image} from "react-native"; //importando agora a imagem

class App extends Component{ //extendes = herança dos componetes, tudo que um tem passa pro outro
  render() { //renderizar = mostrar na tela, chamando a função
    let curso = "INFO";


    return(
      <View> {/* componete */}
        <Text>Olá mundo!</Text>
        <Text>Exemplo!</Text>
        <Text style = {{color: 'blue', fontSize: 30, margin: 15}}>Meu exemplo!</Text> 

        <Image source = {{uri: 'coloca a URL aqui, https'}} style = {{width: 300, height: 300}}/>
        {/* Image é obrigado a informar a largura e a altura */}
        <Text>{curso}</Text> {/*usar variável colocando entre chaves*/ }

        {/* para chamar o componente*/}
        {/* <MinhaImagem> */}
        {/* passando as prpriedades a largura e a altura */}
        <MinhaImagem largura={400} altura={400} nome="Imagem 1 "/> {/*propriedades sendo chamadas na outra classe, chamando */}
      </View>

    );

  }
}

export default App;

class MinhaImagem extends Component{
  render() {

    let img = "url da imagem "; /*colocando url na variável, para depois chaamala */
    return(
      <View>
        {/* <Image source={{uri: img}} style={{width: 300, height: 300}}/> */}

        <Image source={{uri: img}} style={{width: this.props.largura, height:this.props.altura}}/> {/*pegando as propriedades de outra classe */}

          <Text>{this.props.nome}</Text> {/*dessa propriedade vou chamar o nome */}

      </View>
    );
  }
}
