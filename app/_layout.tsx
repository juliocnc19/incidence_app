import { Slot } from 'expo-router';
import { QueryClientProvider} from '@tanstack/react-query';
import { queryClient } from '../utils/lib/queryClient';
import { StatusBar } from 'expo-status-bar';


const RootLayout = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <StatusBar style='auto'/>
      <Slot />
    </QueryClientProvider>
  );
}

export default RootLayout
