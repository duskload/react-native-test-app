import React from 'react';
import { View, ActivityIndicator } from 'react-native';

export default class Spinner extends React.Component {
  static defaultProps = {
    size: 'large'
  };
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={this.props.size} />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
};
