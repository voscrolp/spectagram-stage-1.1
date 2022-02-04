import * as React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feed from "../screens/feed";
import CreatePost from '../screens/createPost';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();


    const BottomTabNavigator = () =>{
        return (
            <Tab.Navigator
              labeled = {false}
              screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color }) => {
                  let iconName;
                  if (route.name === 'Feed') {
                    iconName = focused
                      ? 'book'
                      : 'book-outline';
                  } else if (route.name === 'CreatePost') {
                    iconName = focused 
                      ? 'create' 
                      : 'create-outline';
                  }
                  return <Ionicons name={iconName} size={30} color={color} />;
                },
              })}
                activeColor = {'#ee8249'}
                inactiveColor = {'gray'}
            >
              <Tab.Screen name="Feed" component={Feed} />
              <Tab.Screen name="CreatePost" component={CreatePost} />
            </Tab.Navigator>
        );
    }
        
export default BottomTabNavigator;
