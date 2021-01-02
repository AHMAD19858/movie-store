import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { BookDetail } from "./screens/";
import Login from "./screens/Login";
import Signup from "./screens/signup";
import onboarding from "./screens/onboarding";
import comment from "./screens/comment";
import WatchList from "./screens/watchList";
import Tabs from "./navigation/tabs";

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        border: "transparent"
    }
}

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer theme={theme}>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName={'onboarding'}
            >
                {/* Tabs */}
                <Stack.Screen name="Home" component={Tabs} />

                {/* Screens */}
                <Stack.Screen name="BookDetail" component={BookDetail} options={{ headerShown: false }} />
                <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="onboarding" component={onboarding} options={{ headerShown: false }} />
                <Stack.Screen name="comment" component={comment} options={{ headerShown: false }} />
                <Stack.Screen name="Search" component={Tabs} options={{ headerShown: false }} />
                <Stack.Screen name="WatchList" component={WatchList} options={{
          headerShown: true, headerStyle: {
            backgroundColor: '#22273B'
          }, headerTitleStyle: { color: 'white' }, title: 'Watch List',
          headerTintColor: 'white'
        }}  />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;