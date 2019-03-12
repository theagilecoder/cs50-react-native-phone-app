import React from 'react';
import { Button, Text, View } from 'react-native';

export default class ContactDetailsScreen extends React.Component {
  static navigationOptions = ({navigation}) => ({
    headerTitle: navigation.getParam('name'),
  })

  render() {
    return (
      <View>
        <Text>{this.props.navigation.getParam('phone')}</Text>
        <Button title="Go to random contact" onPress={this._goToRandom} />
      </View>
    )
  }

  _goToRandom = () => {
    // todo
  };
}