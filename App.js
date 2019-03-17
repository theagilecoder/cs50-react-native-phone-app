import React from 'react';
import { View } from 'react-native';
import { createSwitchNavigator, createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation'
import {Provider} from 'react-redux'
import store from './redux/store'

import Ionicons from "react-native-vector-icons/Ionicons";
import AddContactScreen from './screens/AddContactScreen';
import SettingsScreen from "./screens/SettingsScreen"
import ContactListScreen from './screens/ContactListScreen';
import ContactDetailsScreen from "./screens/ContactDetailsScreen";
import LoginScreen from "./screens/LoginScreen";
import {fetchUsers} from './api'
import contacts from './contacts'

// the main stack navigator having Contact List and Add Contact
const MainStack = createAppContainer(createStackNavigator(
  {
    AddContact: AddContactScreen,
    ContactList: ContactListScreen,
    ContactDetails: ContactDetailsScreen,
  }, 
  {
    initialRouteName: 'ContactList',
    navigationOptions: { 
      headerTintColor: '#a41034', 
    },
  }
));

MainStack.navigationOptions = {
  tabBarIcon: ({ focused, tintColor }) => (
    <Ionicons
      name={`ios-contacts${focused ? "" : ""}`}
      size={25}
      color={tintColor}
    />
  )
};

// The middle tab nav that houses the stack navigator
const MainTabs = createAppContainer(createBottomTabNavigator({
  Contacts: MainStack,
  Settings: SettingsScreen,
}, {
  tabBarOptions:{
    activeTintColor: '#a41034',
  },
}))

// The outer switch navigator that will show login screen
const AppNavigator = createAppContainer(createSwitchNavigator(
  {
    Main: MainTabs,
    Login: LoginScreen,
  }
))

export default class App extends React.Component {
  state = {
    contacts,
  }

  /*
  // call api
  componentDidMount() {
    fetchUsers()
      .then(results => this.setState({contacts: results}))
  }
  */

  // Adds the new contact sent by AddContactForm to this.state.contacts
  addContact = newContact => {
    this.setState(prevState => ({contacts: [...prevState.contacts, newContact]}))
  }

  render() {
    return (
      <Provider store={store}>
        <MainTabs />
      </Provider>
    )
  }
}
