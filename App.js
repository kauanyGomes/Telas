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


import React, {Component} from "react";
import {View, Text, Image} from "react-native";


class App extends Component{
  render() {

let curso = "INFO";


return(
  <View>
    <Text>Olá mundo!</Text>
    <Text>Exemplo!</Text>
    <Text style = {{color: 'blue', fontSize: 30, margin: 15}}>Meu exemplo!</Text>


    <Image source = {{uri: 'coloca a URL aqui'}} style = {{width: 300, height: 300}}/>
      {/* Image é obrigado a informar a largura e a altura */}
    <Text>{curso}</Text>

    {/* para chamar o componente*/}
    {/*  */}
  </View>
)

  }
}

