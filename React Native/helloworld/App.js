import { StyleSheet, Text, TextInput, View, Image, Button, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={require('./src/assets/VitalHub_Logo.png')}
      />

      <View>
        <Text style={[styles.heading]}>Entrar ou criar conta</Text>
      </View>
      <Text>Welcome to the mobile development world</Text>

      <TextInput
        style={styles.input}
        defaultValue='Exemplo de input'
      />
      <TouchableOpacity style={styles.button}>
        <Text>Botão</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    gap: 10,
  },
  heading: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 13,
  },
  input: {
    width: '90%',
    height: 40,
    borderWidth: 1,
    paddingHorizontal: 10,
  },
  button: {
    width: '90%',
    backgroundColor: 'lightblue',
    alignItems: 'center'
  }
});
