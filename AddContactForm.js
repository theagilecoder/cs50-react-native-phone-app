import React from 'react'
import {Button, StyleSheet, TextInput, View} from 'react-native'
import {Constants} from 'expo'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    minWidth: 100,
    marginTop: 20,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 3,
  },
})

export default class AddContactForm extends React.Component {
  state = {
    name: '',
    phone: '',
    isFormValid: false,
  }

  handleNameChange = name => {
    this.setState({name})
  }

  handlePhoneChange = phone => {
    this.setState({phone})
  }

  // AddContactForm is not the right place to be adding contacts
  // So it justs passes the state to some function included in props
  //  whose function is to actually add the Contact.
  handleSubmit = () => {
    this.props.onSubmit(this.state)
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          value={this.state.name}
          onChangeText={this.handleNameChange}
          placeholder="Name"
        />
        <TextInput
          keyboardType="numeric"
          style={styles.input}
          value={this.state.phone}
          onChangeText={this.handlePhoneChange}
          placeholder="Phone"
        />
        <Button title="Submit" onPress={this.handleSubmit} />
      </View>
    )
  }
}
