import { Component } from 'react';
import { Provider } from 'react-redux';
import { Navigation } from 'react-native-navigation';
import firebase from 'firebase';
import { registerScreens } from './config/screens';
import configureStore from './store';

const store = configureStore();

registerScreens(store, Provider);

const navigationStyle = {
  navBarhidden: true,
  statusBarColor: 'black',
	statusBarTextColorScheme: 'light',
	navigationBarColor: 'black',
	navBarBackgroundColor: '#0a0a0a',
	navBarTextColor: 'white',
	navBarButtonColor: 'white',
	tabBarButtonColor: 'red',
	tabBarSelectedButtonColor: 'red',
	tabBarBackgroundColor: 'white',
	topBarElevationShadowEnabled: false,
	navBarHideOnScroll: true,
  navBarHidden: true,
	tabBarHidden: true,
	drawUnderTabBar: true
};

class App extends Component {
  constructor(props) {
    super(props);
    this.componentWillMount();
    this.startApp();
  }

  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyD6Mc7TidIYtbakidQJFImFbhRWOB48Zqc',
      authDomain: 'byu-bookswap.firebaseapp.com',
      databaseURL: 'https://byu-bookswap.firebaseio.com',
      projectId: 'byu-bookswap',
      storageBucket: 'byu-bookswap.appspot.com',
      messagingSenderId: '605146451476'
    };

    firebase.initializeApp(config);
  }

  startApp() {
    Navigation.startSingleScreenApp({
      screen: {
        screen: 'app.Welcome',
        navigationStyle,
        leftButtons: [
          {
            id: 'sideMenu'
          }
        ]
      }
    });
  }

}

export default App;
