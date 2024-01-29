
import { SafeAreaView, StatusBar } from 'react-native';
import Person from './src/components/Person/Person';
import { useFonts, CuteFont_400Regular } from '@expo-google-fonts/cute-font';

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    CuteFont_400Regular,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <SafeAreaView>
      <Person name={'Carlos'} age={37}/>
      <Person name={'Eduardo'} age={38}/>
      <Person name={'Juscelino'} age={25}/>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
