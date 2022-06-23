import React, {Component} from 'react'; // Importa o React e o React components
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'; // Importa os componentes do react native

import init from 'react_native_mqtt'; // Importa a biblioteca React Native MQTT 
import AsyncStorage from '@react-native-async-storage/async-storage'; // Importa a biblioteca do AsyncStore que e Necessaria para usar o MQTT

init({
  size: 10000,
  storageBackend: AsyncStorage,
  defaultExpires: 1000 * 3600 * 24,
  enableCache: true,
  reconnect: true,
  sync : {}
}); // Inicia um BackEnd para armazenar os dados do MQTT

var x=""; // Criar a variavel x Como uma String
var Ledoff = "OFF"; // Criar a variavel Ledoff Como uma String
var Ledon = "ON"; // Criar a variavel Ledon Como uma String
var EstadoLed = false; // Criar a variavel EstadoLed Como um Bollean

function onConnect() { // Criar a funcao que Mostrara quando a conexão e feita
  console.log("Conectado"); // Mostra no Console o texto Conectado
  client.subscribe("Nome do Tópico, mesmo do código do Esp"); // Se increve no topico
}

function onConnectionLost(responseObject) { // Criar a funcao de encontrar o Erro caso nao consiga uma conexão com o mqtt
  if (responseObject.errorCode !== 0) { // Espera uma resposta do Codigo de erro Diferente de zero
    console.log("Conexão perdida erro:"+responseObject.errorMessage); // Mostar na tela a Mensagem de erro
  }
}

 const client = new Paho.MQTT.Client('email do broker', 8080, 'ID desse app, pode ser qualquer coisa'); // Criar a constante que sera usada na conexão com o MQTT

 client.onConnectionLost = onConnectionLost; // Caso Tenha algom erro na conexão Inicia a funcao onConnectionLost
 client.connect({ onSuccess:onConnect, useSSL: false, userName: "Username broker", password:"senha do broker" }); // Inicia a conexão usando Username e o Password do MQTT

class App extends Component { // Cria o Componente App
  constructor(props) { // Começa a Construção dos props
    super(props); // Define os Props como Super
    this.state={ // Define os Estados iniciais dos Props
      data: "Ola", // Define o Props data como um String com texto Ola
      TitleText: "OFF",  // Define o Props TitleText como um String com texto OFF
      ButtonTextOn: "ON",  // Define o Props ButtonText como um String com texto ON
      ButtonTextOff: "OFF",
    }
  }
  componentDidMount() { // Cria a função que mostrara no Console a mensagem que foi enviada
    client.onMessageArrived=(message)=>this.onMessageArrived(message); // Mostra a Mensagem enviada
  }

  onMessageArrived  = (message) =>  // Criar a função que recebera as mensagens do Mqtt
  {
    let x = "\nTopic : "+message.topic+"\nMessage : "+message.payloadString; // Armazena na variavel x a String com Topic e a Mensagem recebida
    console.log(x); // Mostra a String armazenada na variavel X
    this.setState({data:x}); // Define o Props Data com a Sting Armazenada Em X
  }
  
  // Botão ON
  click  = () => // Cria a Funcao de Click no Botao
  {
    client.publish("nome do tópico que receberá essa mensagem","Led_on"); // Publica no Servidor MQTT a mensagem no Topico

    this.setState({TitleText:Ledon}) // Define o props TitleText com a String Armazenada na Variavel ledon
  }

  // Botão OFF
  click1  = () => // Cria a Funcao de Click no Botao
  {
    client.publish("nome do tópico que receberá essa mensagem","Led_off"); // Publica no Servidor MQTT a mensagem no Topico
   
    this.setState({TitleText:Ledoff}) // Define o props TitleText com a String Armazenada na Variavel ledoff
  }
  
  render() { // Rederiza as Funçoes e
    return ( // Retorna ao Usuario o App
      <View style={styles.container}> 
          <View>
            <Text style={styles.title}>LED {this.state.TitleText}</Text>
          </View>
          
          <TouchableOpacity onPress={()=>this.click()}>
            <Text style={styles.ButtonOn}>{this.state.ButtonTextOn}</Text>
          </TouchableOpacity>  
          <TouchableOpacity onPress={()=>this.click1()}>
            <Text style={styles.ButtonOff}>{this.state.ButtonTextOff}</Text>
          </TouchableOpacity>  
      </View>
    );
  }
}

export default App; // Exporta o Componente App para o Index.js

// Cria os Styles que sao Usados no App

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    backgroundColor: '#666666',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: "Trebuchet ms",
    fontSize: 20,
    fontWeight: "bold",
    color:"#FFFFFF", 
    textAlign: 'center'
  },
  ButtonOn: {
    margin: 20,
    padding:15,
    width: 80,
    fontFamily: "Trebuchet ms",
    backgroundColor: "#000dff",
    borderRadius:10, 
    color:"#FFFFFF", 
    textAlign: 'center'
  },
  ButtonOff: {
    margin: 20,
    padding:15,
    width: 80,
    fontFamily: "Trebuchet ms",
    backgroundColor: "#FF0000",
    borderRadius:10, 
    color:"#FFFFFF", 
    textAlign: 'center'
  }
});