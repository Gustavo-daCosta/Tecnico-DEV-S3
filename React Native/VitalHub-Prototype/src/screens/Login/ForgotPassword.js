import { View, Text, StyleSheet } from 'react-native';
import Banner from '../../components/Banner/Banner';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

const ForgotPasswordScreen = () => {
    return (
        <View style={styles.container}>
          <Banner title={"Recuperar senha"} />
          <View style={styles.mainContent}>
            <Text style={styles.description}>
              Digite o seu e-mail cadastrado que enviaremos um link para recuperação de senha
            </Text>
            <Input placeholder='Usuário ou E-mail' />
            <Button title={"Continuar"} />
          </View>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: '5%'
  },
  flex: {
    width: '100%',
    alignItems: 'center'
  },
  mainContent: {
    flex: 5,
    width: '100%',
    gap: 35,
  },
  description: {
    textAlign: 'center',
    fontSize: 18,
    lineHeight: 24
  },
});

export default ForgotPasswordScreen;