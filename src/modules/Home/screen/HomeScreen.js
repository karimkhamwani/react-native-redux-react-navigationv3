import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, AsyncStorage, Switch } from 'react-native';
import { connect } from 'react-redux';
import * as Actions from '../actions/actionCreator';
import { changelocale, strings } from '../../../i18n/index';
import RNRestart from 'react-native-restart';


class HomeScreen extends Component {

  constructor(props) {
    super(props)
    this.state = {
      languageToggle: false
    }
  }
  componentDidMount() {
    const { getPlaceHolderList } = this.props;
    getPlaceHolderList(true);
  }

  onLanguageToggleChange = (value) => {
    console.log(value);
    if (value) {
      this.setState({ languageToggle: value })
      changelocale('en', false);
      AsyncStorage.setItem('language', 'en').
          then(() => {
              setTimeout(() => RNRestart.Restart(), 300)
          })
    }
    else {
      this.setState({ languageToggle: false })
      changelocale('en', false);
      AsyncStorage.setItem('language', 'en').
          then(() => {
              setTimeout(() => RNRestart.Restart(), 300)
          })
    }
  }

  render() {
    const { languageToggle } = this.state;
    return (
      <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}>
        <Text>{strings('login_text')}</Text>
        <Switch
          onValueChange={this.onLanguageToggleChange.bind(this)}
          value={languageToggle} />
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
  getPlaceHolderList: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
