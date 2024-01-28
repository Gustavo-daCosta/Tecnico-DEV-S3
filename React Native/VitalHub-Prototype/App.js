import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/screens/Login/Login';
import ConsultasScreen from './src/screens/Consultas/Consultas';
import ForgotPasswordScreen from './src/screens/Login/ForgotPassword';
import EmailCodeScreen from './src/screens/Login/EmailCode';
import NewPasswordScreen from './src/screens/Login/NewPassword';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name='NovaSenha'
          component={NewPasswordScreen}
        />
        <Stack.Screen
          name='Login'
          component={LoginScreen}
        />
        <Stack.Screen
          name='EsqueciASenha'
          component={ForgotPasswordScreen}
        />
        {/* <Stack.Screen
          name='CodigoEmail'
          component={EmailCodeScreen}
        /> */}
        <Stack.Screen
          name='Consultas'
          component={ConsultasScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
