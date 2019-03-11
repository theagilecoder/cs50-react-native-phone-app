import React from 'react';
import { Button, SectionList, StyleSheet, Text, View } from 'react-native';
import { Constants } from 'expo'

import ContactsList from '../ContactsList'

export default class ContactListScreen extends React.Component {
  state = {
    showContacts: true,  
  }

  showForm = () => {
    this.props.navigation.navigate('AddContact');
  }

  toggleContacts = () => {
    this.setState(prevState => ({showContacts: !prevState.showContacts}))
  }

  render() {
    return (
      <View style={styles.container}>
        <Button title="Toggle Contacts" onPress={this.toggleContacts}/>
        <Button title="Add Contact" onPress={this.showForm}/>
        {this.state.showContacts &&
          <ContactsList contacts={this.props.screenProps.contacts} />                  
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
  },
});