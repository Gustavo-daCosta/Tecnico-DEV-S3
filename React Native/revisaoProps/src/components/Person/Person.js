import { View, Text, StyleSheet } from "react-native";

const Person = ({ name, age }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nome: {name}</Text>
      <Text style={styles.title}>Idade: {age}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#c1c1c1',
    padding: 10,
    margin: 10,
    borderRadius: 15,
  },
  title: {
    fontFamily: 'CuteFont_400Regular',
    fontSize: 24,
  }
});

export default Person;