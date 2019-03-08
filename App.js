import React from 'react';
import { Button, SectionList, StyleSheet, Text, View } from 'react-native';
import {Constants} from 'expo'

import contacts, {compareNames} from './contacts'
import Row from './Row'
import ContactsList from './ContactsList'
import AddContactForm from './AddContactForm'

export default class App extends React.Component {
  state = {
    showContacts: false,
    showForm: false,
    contacts: contacts,
  }

  // Adds the new contact sent by AddContactForm to this.state.contacts
  addContact = newContact => {
    this.setState(prevState => ({showForm: false, contacts: [...prevState.contacts, newContact]}))
  }

  toggleContacts = () => {
    this.setState(prevState => ({showContacts: !prevState.showContacts}))
  }

  // This will toggle Add Contact form
  toggleForm = () => {
    this.setState(prevState => ({showForm: !prevState.showForm}))
  }
  
  sort = () => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts].sort(compareNames),
    }))
  }

  render() {

    if(this.state.showForm) return <AddContactForm onSubmit={this.addContact}/>

    return (
      <View style={styles.container}>
        <Button title="Toggle Contacts" onPress={this.toggleContacts}/>
        <Button title="Add Contact" onPress={this.toggleForm}/>
        {this.state.showContacts &&
          <ContactsList contacts={this.state.contacts} />                  
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
  },
});
