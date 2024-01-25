import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={require('./src/assets/login-logo.png')}
      />

      <View style={styles.inputSection}>
        <View style={styles.inputBox}>
          <Text style={styles.label}>E-mail</Text>
          <TextInput
            style={styles.input}
            placeholder='E-mail'
            placeholderTextColor={'#f6f6f650'}
          />
        </View>
        <View style={styles.inputBox}>
          <Text style={styles.label}>Senha</Text>
          <TextInput
            style={styles.input}
            placeholder='Senha'
            placeholderTextColor={'#f6f6f650'}
          />
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>ENTRAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#151c48',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: '80%',
    height: undefined,
    aspectRatio: 1,
    resizeMode: 'contain',
    flex: 2,
  },
  inputSection: {
    flex: 3,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: '10%',
    gap: 40
  },
  inputBox: {
    // borderWidth: 2,
    width: '100%',
    // borderColor: '#f6f6f6',
    gap: 15
  },
  label: {
    color: '#f6f6f6',
    fontSize: 20,
    fontWeight: 'bold'
  },
  input: {
    backgroundColor: '#0d122d',
    color: '#f6f6f6',
    borderWidth: 1,
    height: 60,
    borderColor: 'white',
    borderRadius: 15,
    paddingLeft: 15,
    fontSize: 18,
  },
  button: {
    height: 60,
    backgroundColor: '#E14B25',
    width: '100%',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#f6f6f6'
  }
});
