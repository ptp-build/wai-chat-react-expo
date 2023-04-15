import * as React from 'react';
import { WebView } from 'react-native-webview';
import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <>
    <StatusBar style="light" />
    <WebView
      style={styles.container}
      source={{ uri: 'https://wai.chat' }}
    />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
