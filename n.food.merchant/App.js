import React, { Component } from 'react';
import {
  Dimensions,
  AsyncStorage,
  StatusBar,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-view';
import RegisterRoot from "./src/screen/RootNavigation/RegisterRoot";
import MainRoot from "./src/screen/RootNavigation/MainRoot";
import { HeaderStyle } from "./src/component/styles/HeaderStyle";
import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import rootSaga from "./src/saga/rootSaga";
import rootReducer from "./src/reducer/rootReducer";

const Tab = createStackNavigator();

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga)

class App extends Component {
  state = {
    isLogin: false,
    token: null,
  }

  componentDidMount() {
    AsyncStorage.getItem("TOKEN_AUTH").then(asyncStorageRes => {
      if (asyncStorageRes != null) {
        this.setState({ isLogin: true, token: asyncStorageRes })
      }
    });
  }

  render() {
    const devideWindow = Dimensions.get('window');
    return (
      <SafeAreaProvider style={{ height: devideWindow.height }}>
        <StatusBar backgroundColor='whitesmoke' barStyle="dark-content" />
        <Provider store={store}>
          <NavigationContainer>
            <Tab.Navigator initialRouteName={this.state.isLogin ? "MainRoot" : "RegisterRoot"}>
              <Tab.Screen
                name="MainRoot"
                component={MainRoot}
                options={{
                  headerShown: false,
                  headerStyle: HeaderStyle.headerStyle,
                  headerTitleStyle: HeaderStyle.headerTitleStyle,
                }} />

              <Tab.Screen
                name="RegisterRoot"
                component={RegisterRoot}
                options={{
                  headerShown: false,
                  headerStyle: HeaderStyle.headerStyle,
                  headerTitleStyle: HeaderStyle.headerTitleStyle,
                }} />
            </Tab.Navigator>
          </NavigationContainer>
        </Provider>
      </SafeAreaProvider>
    )
  }
}


export default App;
