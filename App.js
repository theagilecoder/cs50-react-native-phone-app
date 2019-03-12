import React from 'react';
import { Button, SectionList, StyleSheet, Text, View } from 'react-native';
import { Constants } from 'expo'

import contacts, {compareNames} from './contacts'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import AddContactScreen from './screens/AddContactScreen';
import ContactListScreen from './screens/ContactListScreen';

const AppNavigator = createAppContainer(createStackNavigator(
  {
    AddContact: AddContactScreen,
    ContactList: ContactListScreen,
  }, 
  {
    initialRouteName: 'ContactList',
  }
));

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
