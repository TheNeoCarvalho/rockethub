import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { WebView } from 'react-native-webview';

export default function Repository({ navigation }) {
  const repository = navigation.getParam('user');

  return <WebView source={{ uri: repository.html_url }} style={{ flex: 1 }} />;
}

Repository.navigationOptions = ({ navigation }) => ({
  title: navigation.getParam('user').full_name,
});
