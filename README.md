
# ESP32_MQTT_ReactNative

<p align="center"> ESP32 MQTT e ReactNative </p>

<p align="center">
 <a href= "#sobre">Sobre</a> .
 <a href= "#tecnologias">Tecnologias</a> .
 <a href= "#execução">Execução</a> .
 <a href= "#observações">Observações</a> 
</p> 

# Sobre
<p> Visa implementar um código no ESP32, utilizando protocolo de comunicação MQTT e React Native.  </p>
<p> Na qual fará com que o LED, Pino 2 no ESP32, seja ligado/desligado ao clicar em diferentes botões criado por React Native. </p>

# Tecnologias
<p> ESP32 </p>
<p> Visual Studio code </p>

# Execução
<p>1° - Clonando o repositório, basta no VScode ou IDE de preferência, abrir a pasta "Led_ESP32" para mudar as configurações do código presente na memória do ESP, ou a pasta "react_mqtt" para abir o código em React Native, utilizado pra criar o APP.</p>


<p>2° - Em cada um dos arquivos, mude os dados do Broker, coloque os dados da rede Wifi no código do Esp32. </p>

<p>3° - Aberta a pasta de React Native, é necessário no terminal da IDE, baixar as dependencias, basta digitar: "npm install", logo em seguida </p>
<p> npm install react_native_mqtt --save </p>
<p> npm install @react-native-async-storage/async-storage </p>


<p>4° - Para mostrar opções de visualização do APP, basta no terminal digitar: "expo start"</p>

<p>5° - Opções do App criado </p>


<div align="center">
<img src="https://user-images.githubusercontent.com/90197643/175426789-80af94da-271b-49e9-9953-ae6947d8781b.JPG" width="200px" />
</div>         

<div align="center">
<img src="https://user-images.githubusercontent.com/90197643/175426936-a50d35ea-c99e-4bb9-b6f4-d25e5e650ada.JPG" width="200px" />
</div>     

<p>6° - É necessário rodar o código no ESP32, dessa forma ele também se conectará ao Broker. </p>


<p>9° - Basta clicar nos Botões, a mensagem será atualizada, correspondendo ao estado do LED. </p>



# Observações
<p> Diferente do Web Server, esse projeto, funciona independente se tiver conectado em diferentes redes, basta colocar nos respectivos códigos, os nomes e senhas da rede.</p>
