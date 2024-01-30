import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity } from 'react-native';
import { Container } from './src/components/Container/Container';

export default function App() {
  // Hook de state
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.warn(`Contador Atualizado : ${count}`);
  },[count]);

  // Função para incremento
  const incremento = () => {
    setCount(count + 1);
  }

  // Função para decremento
  const decremento = () => {
    setCount(count - 1);
  }

  return (
    <Container style={styles.flex}>
      <Text style={styles.textCount}>Contador:</Text>
      <Text style={styles.count}>{count}</Text>
      <View style={styles.buttonFlex}>
        <TouchableOpacity onPress={decremento} style={styles.buttonDecrement}>
          <Text style={styles.text}>Decrementar -</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={incremento} style={styles.buttonIncrement}>
          <Text style={styles.text}>Incrementar +</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </Container>
  );
}

const styles = StyleSheet.create({
  flex: {
    flexDirection: 'column',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    gap: 25,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color: 'white',
    fontSize: 18,
  },
  buttonIncrement: {
    backgroundColor: '#DC143C',
    padding: 8,
    borderRadius: 10,
  },
  buttonDecrement: {
    backgroundColor: '#7B68EE',
    padding: 8,
    borderRadius: 10,
  },
  textCount: {
    fontSize: 18,
    fontStyle: 'bold',
    fontSize: 32,
  },
  count: {
    fontSize: 64,
    borderWidth: 2,
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  buttonFlex: {
    flexDirection: 'row',
    gap: 10
  }
});
