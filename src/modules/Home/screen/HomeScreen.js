import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import * as Actions from '../actions/actionCreator';
import Permissions from 'react-native-permissions'

class HomeScreen extends Component {
  componentDidMount() {
    const { getPlaceHolderList } = this.props;
    getPlaceHolderList(true);
    Permissions.request('camera').then(response => {
      // Returns once the user has chosen to 'allow' or to 'not allow' access
      // Response is one of: 'authorized', 'denied', 'restricted', or 'undetermined'
      this.setState({ photoPermission: response })
    })
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  nav: state.nav,
});
const mapDispatchToProps = dispatch => ({
  getPlaceHolderList: tab => dispatch(Actions.getPlaceHolderList(tab)),
});
HomeScreen.propTypes = {
  getPlaceHolderList : PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
