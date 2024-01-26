
import { SafeAreaView, StatusBar } from 'react-native';
import Person from './src/components/Person/Person';

export default function App() {
  return (
    <SafeAreaView>
      <Person name={'Carlos'} age={37}/>
      <Person name={'Eduardo'} age={38}/>
      <Person name={'Juscelino'} age={25}/>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
