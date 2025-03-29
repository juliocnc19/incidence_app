import { Slot } from 'expo-router';
import { QueryClientProvider} from '@tanstack/react-query';
import { queryClient } from '../utils/lib/queryClient';


const RootLayout = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Slot />
    </QueryClientProvider>
  );
}

export default RootLayout
