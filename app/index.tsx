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
          uri: 'https://media-manager.noticiasaominuto.com.br/1920/naom_63221d72978cf.jpg',
        }}
      />
      <Text style={styles.titulo}> Palmeiras home</Text>
      <Link href="/telaA">Proxima pagina do time campeão🐷👉</Link>
     
<text>Palmeiras o maior time do brasil</text>
<text>
     Mundial: 1
     <br />
     Libertadores:3
<br />
     copa do brasil: 4
<br />
     brasileirao: 11
</text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 30,
    color: "white"
  },
  titulo: {
    fontSize: 100,
    fontWeight: 'bold',
    color: 'greenyellow',
  },
logo: {
  width: 400,
  height:400,


},
text:{
fontWeight: "bold",
},

});
