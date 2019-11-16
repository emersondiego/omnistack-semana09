Diferençcas entre ReactJs e ReactNative

- Não utilizado pacote dom e nem as tags do html;

- Qualquer caixa, container vai ser uma VIew (div);

- Text é o texto - No Native não tem estilazação;

- Style: Css sempre por styles
Estilos mudam um pouco estilo CamelCase  ex. OlaEmerson


Estrutura de pastas:

babel.config: responsavel por converter o JS de maneira que seja entendido por outras plataformas
app.json: dados de configuração da nossa aplicação


Necessário instalar: yarn add react-navigation - biblioteca mais utilizada para navegação

E em seguida executar:

expo install react-native-gesture-handler react-native-reanimated


2 - Add axios para fazer comunicação com a api

yarn add axios 