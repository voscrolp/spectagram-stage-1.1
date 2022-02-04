import { StyleSheet, Text, View } from 'react-native';
import DrawerNavigator from './navigation/drawerNavigation';
import BottomTabNavigator from './navigation/tabNavigatior';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <DrawerNavigator></DrawerNavigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
