import { Component } from 'react';
import { Navigation } from 'react-native-navigation';

class Home extends Component {
  constructor(props) {
    super(props);
    this.startApp();
  }

  startApp() {
    Navigation.startTabBasedApp({
      tabs: [
        {
          label: 'Books',
          screen: 'app.MyBooks',
          title: 'My Books',
          navigatorButtons: {
            rightButtons: [
              {
                title: 'Add',
                id: 'addABook',
                buttonFontSize: 14,
                buttonFontWeight: '600',
              }
            ]
          }
        }
      ]
    });
  }

  tabstabs = [
    {
      label: 'Messages',
      screen: 'app.Messages',
      title: 'Messages',
    },
    {
      label: 'Search',
      screen: 'app.Search',
      title: 'Search'
    },
    {
      label: 'Settings',
      screen: 'app.Settings',
      title: 'Settings'
    }
  ];

  render() {
    return null;
  }
}


export default Home;
