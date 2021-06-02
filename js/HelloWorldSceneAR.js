'use strict';

import React, { Component } from 'react';
import { StyleSheet, } from 'react-native';

import {
  ViroARScene,
  ViroText,
  ViroConstants,
  ViroButton,
  ViroARSceneNavigator
} from 'react-viro';

export default class HelloWorldSceneAR extends Component {

  state = {
    text: 'Initializing AR...'
  }

  onTrackingUpdated = () => {
    this.setState({ text: "Hello World" })
  }

  render() {
    return (
      <ViroARSceneNavigator
        takeScreenShot={(data) => console.log(data)}>
        <ViroARScene
          onTrackingUpdated={this.onTrackingUpdated}>
          <ViroText
            text={this.state.text}
            position={[0, 0, -2]}
            style={StyleSheet.text}
          />
        </ViroARScene>
      </ViroARSceneNavigator>
    )
  }
}

var styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});

module.exports = HelloWorldSceneAR;
