import { Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

const AuthLayout = () => {
  return (
    <SafeAreaView>
      <StatusBar style='auto' />
      <Slot />
    </SafeAreaView>
  );
}

export default AuthLayout
