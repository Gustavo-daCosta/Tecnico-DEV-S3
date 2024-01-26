import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import AppLoading from 'expo-app-loading';

import {
  useFonts,
  MontserratAlternates_100Thin,
  MontserratAlternates_200ExtraLight,
  MontserratAlternates_300Light,
  MontserratAlternates_400Regular,
  MontserratAlternates_500Medium,
  MontserratAlternates_600SemiBold,
  MontserratAlternates_700Bold,
  MontserratAlternates_800ExtraBold,
  MontserratAlternates_900Black,
} from '@expo-google-fonts/montserrat-alternates';

export default function App() {
  let [fontsLoaded] = useFonts({
    MontserratAlternates_100Thin,
    MontserratAlternates_200ExtraLight,
    MontserratAlternates_300Light,
    MontserratAlternates_400Regular,
    MontserratAlternates_500Medium,
    MontserratAlternates_600SemiBold,
    MontserratAlternates_700Bold,
    MontserratAlternates_800ExtraBold,
    MontserratAlternates_900Black,
  });

  if (!fontsLoaded) {
    return <AppLoading/>
  } else {
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
    width: '100%',
    gap: 15
  },
  label: {
    color: '#f6f6f6',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'MontserratAlternates_500Medium',
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
    fontFamily: 'MontserratAlternates_500Medium',
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
    color: '#f6f6f6',
    fontFamily: 'MontserratAlternates_700Bold'
  }
});
