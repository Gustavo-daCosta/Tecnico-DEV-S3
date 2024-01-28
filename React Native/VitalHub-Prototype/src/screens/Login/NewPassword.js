import { View, Text, StyleSheet } from 'react-native';
import Banner from '../../components/Banner/Banner';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

const NewPasswordScreen = () => {
  return (
    <View style={styles.container}>
      <Banner title={'Redefinir senha'} />
      <Text style={styles.description}>Insira e confirme a sua nova senha</Text>
      <View style={styles.inputArea}>
        <Input placeholder='Nova Senha' />
        <Input placeholder='Confirmar nova Senha' />
      </View>
      <Button title={'Confirmar nova Senha'} />
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
  description: {
    fontSize: 18,
  },
  inputArea: {
    width: '100%'
  }
});

export default NewPasswordScreen;