import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Auth from '../components/auth'


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Vinh ce faci ma</Text>
      <StatusBar style="auto" />
      <Auth></Auth>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
