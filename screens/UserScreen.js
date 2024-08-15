import { View, Text, Button, StyleSheet } from 'react-native';

//REact Navigationda yine Screen olarak belirlediğimiz sayfalar için route ve navigationa prop olarak ulaşabiliriz
function UserScreen({route, navigation}) {
 const openDraverHandlerr =()=> {
  navigation.toggleDrawer();
 }

  return (
    <View style={styles.rootContainer}>
      <Text>
        This is the <Text style={styles.highlight}>"User"</Text> screen!
      </Text>
      <Button title='Open the drawer' onPress={openDraverHandlerr}/>
    </View>
  );
}

export default UserScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  highlight: {
    fontWeight: 'bold',
    color: '#eb1064',
  },
});
