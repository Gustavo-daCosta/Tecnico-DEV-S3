import { StyleSheet, Text, View } from 'react-native';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import Banner from '../../components/Banner/Banner';
import { Link } from '@react-navigation/native';

const LoginScreen = ( { navigation } ) => {
  return (
    <View style={styles.container}>
      <Banner title={"Entrar ou criar conta"} />
      <View style={[styles.inputSection, styles.flex]}>
        <Input placeholder='Usuário ou E-mail' />
        <Input placeholder='Senha' />
        <Link
          style={styles.forgotPassword}
          to={{ screen: 'EsqueciASenha' }}
        >Esqueceu sua senha?</Link>
      </View>
      <View style={[styles.submitSection, styles.flex]}>
        <Button
          title={"Entrar"}
          onPress={() =>
            navigation.navigate('Consultas')
          }
        />
        <Button
          title={"Entrar com o Google"}
          iconSource={require('../../assets/icons/google-icon.png')}
          reversed={true}
          onPress={() =>
            navigation.navigate('Consultas')
          }
        />
        <Text>
          <Text style={styles.textSignUp}>Não tem conta? </Text>
          <Link
            style={styles.link}
            to={{ screen: 'Cadastro' }}
          >Crie uma conta agora!</Link>
        </Text>
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
    paddingHorizontal: '5%',
  },
  flex: {
    width: '100%',
    alignItems: 'center'
  },
  inputSection: {
    flex: 2,
    justifyContent: 'space-between',
  },
  forgotPassword: {
    textDecorationLine: 'underline',
    fontSize: 16,
    color: '#8C8A97',
    alignSelf: 'flex-start',
  },
  submitSection: {
    flex: 3,
    marginTop: 35,
    gap: 20,
  },
  textSignUp: {
    color: '#4E4B59',
    fontWeight: '500',
    fontSize: 16,
  },
  link: { 
    color: '#4D659D',
    textDecorationLine: 'underline',
    fontWeight: '500',
    fontSize: 16,
  }
});

export default LoginScreen;