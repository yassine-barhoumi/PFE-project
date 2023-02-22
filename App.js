import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LanguageScreen from "./screens/LanguageScreen";
import SplashScreen from './screens/SplashScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Splash"
          component={SplashScreen}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen 
          name="Language"
          component={LanguageScreen}
          options={{title: 'Language choice'}}
        />
      </Stack.Navigator>
    </NavigationContainer>

  );
}


