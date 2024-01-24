import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={[styles.card, styles.shadowProp]}>
          <View>
            <Text style={styles.heading}>Hello World!</Text>
          </View>
          <Text>Welcome to the mobile development world</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9f1e6',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },
  card: {
    backgroundColor: 'white',
    alignItem: 'center',
    borderRadius: 8,
    paddingVertical: 45,
    paddingHorizontal: 25,
    width: '100%',
    marginVertical: 10,
  },
  shadowProp: {
    elevation: 20,
    shadowColor: 'black',
  },
  heading: {
    fontSize: 32,
    fontWeight: '600',
    marginBottom: 13,
  },
});
