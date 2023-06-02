import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image} from 'react-native';
import { Link } from "expo-router";
import { color } from 'react-native-reanimated';

export default function App() {
  return (
    <View style={styles.container}>
           <Image
        style={styles.logo}
        source={{
          uri: 'https://cdn.espn.com.br/image/wide/622_67de72fa-3c80-3844-ba5c-24460e933bf7.jpg',
        }}
      />
      <Text style={styles.titulo}> Historia do clube</Text>
      <Link href="/telaB">Clique aqui e se cadstre agora!</Link>
     
<text>Palmeiras o maior time do brasil</text>
<text>
Fundado por imigrantes italianos, seu primeiro nome foi Società Sportiva Palestra Italia. <br />
Em 1942, quando estava estabelecida como uma força do futebol paulista, <br /> a equipe foi obrigada a trocar de nome, 
passando <br />  a se chamar Sociedade Esportiva Palmeiras em decorrência da Segunda Guerra Mundial.
</text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#58a756',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 30,
    color: "white"
  },
  titulo: {
    fontSize: 100,
    fontWeight: 'bold',
    color: 'white',
  },
logo: {
  width: 400,
  height:400,


},
text:{
fontWeight: "bold",
},

});
