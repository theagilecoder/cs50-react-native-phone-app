import React from 'react';
import { Button, SectionList, StyleSheet, Text, View } from 'react-native';
import { Constants } from 'expo'

import contacts, {compareNames} from './contacts'
import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation'
import AddContactScreen from './screens/AddContactScreen';
import ContactListScreen from './screens/ContactListScreen';
import ContactDetailsScreen from "./screens/ContactDetailsScreen";
import LoginScreen from "./screens/LoginScreen";

// the main stack navigator visible after you login
const MainNavigator = createAppContainer(createStackNavigator(
  {
    AddContact: AddContactScreen,
    ContactList: ContactListScreen,
    ContactDetails: ContactDetailsScreen,
  }, 
  {
    initialRouteName: 'ContactList',
  }
));

// The outer switch navigator that will show login screen
const AppNavigator = createAppContainer(createSwitchNavigator(
  {
    Main: MainNavigator,
    Login: LoginScreen,
  }, {
    initialRouteName: 'Login',
  }
))

export default class App extends React.Component {
  state = {
    contacts: contacts,
  }

  // Adds the new contact sent by AddContactForm to this.state.contacts
  addContact = newContact => {
    this.setState(prevState => ({contacts: [...prevState.contacts, newContact]}))
  }

  render() {
    return <AppNavigator screenProps={{ contacts: this.state.contacts, addContact: this.addContact }} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
  },
});
