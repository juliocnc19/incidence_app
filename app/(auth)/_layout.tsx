import { Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';

const AuthLayout = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style='auto' />
      <Slot />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  }
})
export default AuthLayout
