import { Text } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createDrawerNavigator} from '@react-navigation/drawer'
import UserScreen from './screens/UserScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import {Ionicons} from '@expo/vector-icons'

const Drawer = createDrawerNavigator();

export default function App() {
  return(

    //  <Text>Todoo..</Text>
    <NavigationContainer>
    <Drawer.Navigator initialRouteName='Welcome' screenOptions={{
      headerStyle: {backgroundColor: '#3c0a6b'},
      headerTintColor: 'white',
      drawerActiveBackgroundColor: '#7e84f7',
      drawerActiveTintColor: 'white',
     drawerStyle: {backgroundColor: '#ccc'}
    }}>
      <Drawer.Screen name='Welcome' component={WelcomeScreen} options={{
        drawerLabel: 'Welcome Screen',
        drawerIcon: ({color, size})=>(<Ionicons name='home' color={color} size={size}/> )
       
      }}/>
      <Drawer.Screen name='User' component={UserScreen} options={{
        //Parametrelerin aynısını verdiğimizde lçüyü otomatik olarak ayarlar
        drawerIcon: ({color, size})=> <Ionicons name='person' color={color} size={size}/>  
      }}/>
    </Drawer.Navigator>

  </NavigationContainer>
) 
}

