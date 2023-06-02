import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,Button,Alert,SafeAreaView,TextInput,number,} from 'react-native';
import { Link } from "expo-router";
import { color } from 'react-native-reanimated';

export default function App() {
  return (
    <View style={styles.container}>
           <Image
        style={styles.logo}
        source={{
          uri: 'https://yt3.googleusercontent.com/ytc/AGIKgqMmVxcqQLGMu5FffByAyQVSw-UKR5D6FRiqXZHhlw=s900-c-k-c0x00ffffff-no-rj',
        }}
      />
      <Text style={styles.titulo}>Cadatre aqui!</Text>
      <Link href="/">Voltar a home </Link>
      return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
       
      />
      <TextInput
        style={styles.input}
        
        value={number}
        placeholder="Nome"
        keyboardType="numeric"
      />
      <br />
       <TextInput
        style={styles.input}
        
        value={number}
        placeholder="Email"
        keyboardType="numeric"
      /> <br />
       <TextInput
        style={styles.input}
        
        value={number}
        placeholder="Nascimento"
        keyboardType="numeric"
      /> <br />
       <TextInput
        style={styles.input}
        
        value={number}
        placeholder="Cpf"
        keyboardType="numeric"
      />
    </SafeAreaView>
  );

      <Button
        title="Salvar"
        disabled
        onPress={() => Alert.alert('Cannot press this one')}
      />
      <br />
      <Button
        title="Voltar"
        disabled
        onPress={() => Alert.alert('Cannot press this one')}
      />
     
<text>

</text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
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
input:{
fontWeight: "bold",
},

});

