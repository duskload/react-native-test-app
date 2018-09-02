import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';
import { ListItem } from 'native-base';

import AppList from './common/AppList';
import Spinner from './common/Spinner';

import { getStackOverflowTopics } from '../actions/stackoverflow';

class StackOverflow extends Component {
  componentDidMount() {
    this.props.getStackOverflowTopics();
  }

  renderListItems = () => {
    if (!this.props.data) return;
    return this.props.data.items.map(item => {
      return (
        <ListItem key={item.title}>
          <Text>{item.title}</Text>
        </ListItem>
      );
    });
  };
  render() {
    return this.props.isLoading ? <Spinner /> : <AppList>{this.renderListItems()}</AppList>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 24
  }
});

const mapStateToProps = state => {
  return {
    data: state.stackoverflow.data,
    isLoading: state.stackoverflow.isLoading,
    error: state.stackoverflow.error
  };
};

export default connect(
  mapStateToProps,
  { getStackOverflowTopics }
)(StackOverflow);
