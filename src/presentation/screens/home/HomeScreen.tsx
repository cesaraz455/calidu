import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {ClassesScreen} from '../classes/ClassesScreen'
import {SubjectsScreen} from '../subjects/SubjectsScreen'
import {StatsScreen} from '../stats/StatsScreen'
import {NotificationsScreen} from '../notifications/NotificationsScreen'
import {ProfileScreen} from '../profile/ProfileScreen'
import {FontAwesomeIcon} from '../../components/icons/FontAwesomeIcon'

export const HomeScreen = () => {
  const Tab = createBottomTabNavigator()
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 70,
        },
      }}>
      <Tab.Screen
        name="Classes"
        component={ClassesScreen}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesomeIcon name="graduation-cap" color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Subjects"
        component={SubjectsScreen}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesomeIcon name="layer-group" color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Stats"
        component={StatsScreen}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesomeIcon name="chart-line" color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesomeIcon name="bell" color={color} solid />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesomeIcon name="user" color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}
