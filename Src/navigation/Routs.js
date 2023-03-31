import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ButtomTab from './ButtomTab';
import Login from '../screens/Before_Login/Login';
import SignUp from '../screens/Before_Login/SignUp';
import Cart from '../screens/After_Login/Cart';
import Categoires from '../screens/After_Login/Categoires';
import WishList from '../screens/After_Login/WishList';
import Profile from '../screens/After_Login/Profile';
import EditProfile from '../screens/After_Login/EditProfile';
import ChangePassword from '../screens/After_Login/ChangePassword';
import MyOrder from '../screens/After_Login/MyOrder';
import Gift from '../screens/After_Login/Gift';
import Address from '../screens/After_Login/Address';
import AddAddress from '../screens/After_Login/AddAddress';
import CardDetails from '../screens/After_Login/CardDetails';
import Practice from '../screens/After_Login/Practice';
import ProductList from '../screens/After_Login/ProductList';
import ShowAll from '../screens/After_Login/ShowAll';
const Stack = createNativeStackNavigator();

const Routs = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ButtomTab">
        <Stack.Screen
          name="ButtomTab"
          component={ButtomTab}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Cart"
          component={Cart}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Categoires"
          component={Categoires}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="WishList"
          component={WishList}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="EditProfile"
          component={EditProfile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ChangePassword"
          component={ChangePassword}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MyOrder"
          component={MyOrder}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Gift"
          component={Gift}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Address"
          component={Address}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AddAddress"
          component={AddAddress}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="CardDetails"
          component={CardDetails}
          options={{headerShown: false}}
        />
          <Stack.Screen
          name="Practice"
          component={Practice}
          options={{headerShown: false}}
        />
          <Stack.Screen
          name="ProductList"
          component={ProductList}
          options={{headerShown: false}}
        />
           <Stack.Screen
          name="ShowAll"
          component={ShowAll}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routs;
