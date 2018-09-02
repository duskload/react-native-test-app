import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { StyleSheet, FlatList, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { ListItem } from 'react-native-elements';

import { AppList, Spinner, Button, Icon } from './common';

import { getStackOverflowTopics } from '../actions/stackoverflow';

class StackOverflow extends Component {
  componentDidMount() {
    this.props.getStackOverflowTopics();
  }

  handleRefresh = () => this.props.getStackOverflowTopics();

  renderListItem = ({ item }) => {
    return <ListItem key={item.title} title={item.title} hideChevron />;
  };

  renderFlatList = () => {
    return (
      <AppList>
        <FlatList
          data={this.props.data}
          renderItem={this.renderListItem}
          keyExtractor={item => item.title}
        />
      </AppList>
    );
  };
  render() {
    if (this.props.error) {
      return (
        <View style={styles.errorView}>
          <Text style={styles.errorText}>{this.props.error}</Text>
          <Button style={styles.refreshButton} onPress={this.handleRefresh}>
            <Icon name="refresh" size={20} color="#000" />{' '}
          </Button>
        </View>
      );
    }
    return this.props.isLoading ? <Spinner style={{ flex: 1 }} /> : this.renderFlatList();
  }
}

StackOverflow.propTypes = {
  data: PropTypes.array,
  isLoading: PropTypes.bool,
  error: PropTypes.string,
  getStackOverflowTopics: PropTypes.func
};

const styles = StyleSheet.create({
  errorView: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  errorText: {
    color: 'red',
    fontSize: 16,
    textAlign: 'center'
  },
  refreshButton: {
    marginTop: 20,
    borderColor: '#000',
    borderWidth: 1
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
