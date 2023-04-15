import * as React from 'react';
import { WebView } from 'react-native-webview';
import { StyleSheet,Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
      <SafeAreaView style={styles.container}>
        <WebView
            style={styles.container}
            source={{ uri: 'https://wai.chat' }}
        />
        <StatusBar style="auto" />
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.select({
      ios: 16
    })
  },
});
