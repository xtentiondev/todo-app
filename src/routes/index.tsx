import React from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { startCase } from 'lodash';

import Icon, { IconProps } from '~/components/Icon';
import EmptyScreen from '~/routes/EmptyScreen';
import ToDoScreen from '~/routes/ToDoScreen';
import { COLORS } from '~/constants';

export const Tab = createBottomTabNavigator();

const Routes = ({ initialRoute = 'to-do' }) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: COLORS.PRIMARY,
        tabBarInactiveTintColor: COLORS.GRAY2,
        headerShown: false,
        tabBarIcon: ({ color }) => {
          let iconName: IconProps['name'];
          switch (route.name) {
            case 'my-day':
              iconName = 'menu-my-day-outline';
              break;
            case 'calendar':
              iconName = 'menu-calendar-outline';
              break;
            case 'lists':
              iconName = 'menu-lists-outline';
              break;
            case 'to-do':
            default:
              iconName = 'menu-tasks-filled';
              break;
          }
          return <Icon name={iconName} color={color} />;
        },
        tabBarLabel: ({ color }) => {
          return <Text style={{ color, fontSize: 12 }}>{startCase(route.name)}</Text>;
        },
        tabBarStyle: {
          height: 85,
          paddingTop: 10
        }
      })}
      initialRouteName={initialRoute}
    >
      <Tab.Screen name='my-day' component={EmptyScreen} />
      <Tab.Screen name='calendar' component={EmptyScreen} />
      <Tab.Screen name='to-do' component={ToDoScreen} />
      <Tab.Screen name='lists' component={EmptyScreen} />
    </Tab.Navigator>
  );
};

export default Routes;
