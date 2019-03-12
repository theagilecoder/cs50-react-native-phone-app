import React from 'react';
import { Button, Text, View } from 'react-native';

export default class ContactDetailsScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>Phone # coming soon</Text>
        <Button title="Go to random contact" onPress={this._goToRandom} />
      </View>
    )
  }

  _goToRandom = () => {
    // todo
  };
}