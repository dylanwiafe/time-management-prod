import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import ActivityScreen from "./screens/ActivityScreen"
import TaskTileComplete from './components/TaskTileComplete';
import TaskTileDue from './components/TaskTileDue';

function HomeScreen(){
  return (
    <ScrollView contentContainerStyle={styles.homeContainer}>
      <TaskTileDue/>
      <TaskTileComplete/>
      <TaskTileComplete/>
      <TaskTileComplete/>
    </ScrollView>
    
  )
}

// function ActivityScreen(){
//   return (
//     <View>
//       <Text>You are viewing Activities</Text>
//     </View>
//   )
// }

const Tab = createBottomTabNavigator();

function MyTabs(){
  return (
     <Tab.Navigator>
      <Tab.Screen 
      name="Home" 
      component={HomeScreen}  
      options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => (
            <Image style={styles.dateIcon} source={require("./assets/home-icon.png")}/>
            )}}/>
      <Tab.Screen 
      name="Activity" 
      component={ActivityScreen} 
      options={{
        tabBarLabel: 'Activity',
        tabBarIcon: () => (
          <Image style={styles.dateIcon} source={require("./assets/activity-icon.png")}/>
          )}}/>
    </Tab.Navigator>
  )};

export default function App() {
return(
  <NavigationContainer>
    <MyTabs/>
  </NavigationContainer>
)
}

const styles = StyleSheet.create({
  homeContainer: {
    backgroundColor: '#5D69481A',
    flexDirection: 'column',
justifyContent: 'space-between'
},
});
