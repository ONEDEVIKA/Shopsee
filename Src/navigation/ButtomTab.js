import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';
import {IconPath} from '../Assets';
import Colors from '../constents/Colors';
import Dashboard from '../screens/After_Login/Dashboard';
import Cart from '../screens/After_Login/Cart';
import Categoires from '../screens/After_Login/Categoires';
import WishList from '../screens/After_Login/WishList';
import Profile from '../screens/After_Login/Profile';
const Tab = createBottomTabNavigator();

const ButtomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        tabBarHideOnKeyboard: true,
        tabBarstyle: {
          backgroundColor: '#1a3c43',
        },
      }}>
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarLabel: 'Home',
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Image
              source={IconPath.home}
              style={{
                width: 20,
                height: 20,
                tintColor: focused ? Colors.purple : Colors.black,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarLabel: 'Cart',
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Image
              source={IconPath.cart}
              style={{
                width: 20,
                height: 20,
                tintColor: focused ? Colors.purple : Colors.black,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Categoires"
        component={Categoires}
        options={{
          tabBarLabel: 'Categoires',
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Image
              source={IconPath.categories}
              style={{
                width: 20,
                height: 20,
                tintColor: focused ? Colors.purple : Colors.black,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="WishList"
        component={WishList}
        options={{
          tabBarLabel: 'WishList',
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Image
              source={IconPath.wishlist}
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? Colors.purple : Colors.black,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Image
              source={IconPath.user}
              style={{
                width: 20,
                height: 20,
                tintColor: focused ? Colors.purple : Colors.black,
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default ButtomTab;
