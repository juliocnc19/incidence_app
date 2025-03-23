import { FontAwesome } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';

const MainLayout = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style='auto' />
      <Tabs initialRouteName='dashboard'>
        <Tabs.Screen
          name="dashboard"
          options={{
            headerShown:false,
            title: 'Incidencias',
            tabBarIcon: ({ color }) => <FontAwesome size={28} name="list" color={color} />,
          }}
        />
        <Tabs.Screen
          name="create"
          options={{
            headerShown:false,
            title: 'Nueva',
            tabBarIcon: ({ color }) => <FontAwesome size={28} name="edit" color={color} />,
          }}
        />
      </Tabs>
    </SafeAreaView>
  );
}

export default MainLayout

