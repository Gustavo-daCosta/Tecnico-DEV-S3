import { StyleSheet, Text, TextInput, View, Image, Button, TouchableOpacity } from 'react-native';

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
import AppLoading from 'expo-app-loading';

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
    <AppLoading />
  } else {
    return (
      <View style={styles.container}>
        <Image
          source={require('./src/assets/VitalHub_Logo.png')}
        />
  
        <View>
          <Text style={[styles.heading]}>Hello World</Text>
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
    fontFamily: 'MontserratAlternates_500Medium'
  },
  input: {
    width: '90%',
    height: 40,
    borderWidth: 1,
    paddingHorizontal: 10,
  },
  button: {
    width: '90%',
    height: 30,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  }
});
