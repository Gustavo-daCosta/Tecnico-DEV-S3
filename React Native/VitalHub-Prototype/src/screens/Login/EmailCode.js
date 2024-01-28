import { View, Text, StyleSheet, Alert } from 'react-native';
import Banner from '../../components/Banner/Banner';
import Button from '../../components/Button/Button';
import CodeInput from '../../components/CodeInput/CodeInput';

const EmailCodeScreen = () => {
    return (
        <View style={styles.container}>
          <Banner title={'Verifique seu e-mail'} />
          <Text style={styles.description} >
            <Text>Digite o código de 4 dígitos enviado para </Text>
            <Text>username@email.com</Text>
          </Text>
          <CodeInput />
          <Button title={'Entrar'} />
          <Text
            style={styles.link}
            onPress={() => {Alert.alert("Código enviado", "Código enviado para o e-mail username@email.com")}}
          >Reenviar Código</Text>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: '5%',
  },
});

export default EmailCodeScreen;