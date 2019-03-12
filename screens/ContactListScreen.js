import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { Constants } from 'expo'

import SectionListContacts from '../SectionListContacts'

export default class ContactListScreen extends React.Component {
  static navigationOptions = ({navigation}) => ({
    headerTitle: 'Contacts',
    headerRight: <Button title="Add" onPress={() => {navigation.navigate('AddContact')}} />,
  })

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
        {this.state.showContacts &&
          <SectionListContacts 
            contacts={this.props.screenProps.contacts}
            onSelectContact={(contact) => {this.props.navigation.navigate('ContactDetails')}}
          />                  
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