import { FontAwesome } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { fontColors } from '../../presentation/theme/colors';
import NotificationButton from '../../presentation/components/shared/NotificationButton';
import MenuButton from '../../presentation/components/shared/MenuButton';
import { authStorage } from '../../data/storage/authStorage';
import MenuSide from '../../presentation/components/shared/MenuSide';


const MainLayout = () => {
  const {isSidebarVisible} = authStorage()
  return (
    <View style={{ flex: 1 }}>
      <StatusBar style='auto' />
      {isSidebarVisible && <MenuSide/>}
      <Tabs initialRouteName='dashboard'>
        <Tabs.Screen
          name="dashboard"
          options={{
            title: 'Incidencias',
            headerTitleStyle: {
              color: fontColors.secondary,
              fontSize: 20
            },
            headerTitleAlign: "center",
            headerRight: () => <NotificationButton />,
            headerLeft: () => <MenuButton />,
            tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
          }}
        />
        <Tabs.Screen
          name="create"
          options={{
            title: 'Nueva',
            headerTitleStyle: {
              color: fontColors.secondary,
              fontSize: 20
            },
            headerTitleAlign: "center",
            headerRight: () => <NotificationButton />,
            headerLeft: () => <MenuButton />,
            tabBarIcon: ({ color }) => <FontAwesome size={28} name="edit" color={color} />,
          }}
        />
      </Tabs>
    </View>
  );
}

export default MainLayout

