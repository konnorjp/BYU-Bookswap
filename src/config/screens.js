import { Navigation } from 'react-native-navigation';
import Welcome from '../modules/appscreens/Welcome';
import SignUp from '../modules/appscreens/entrance/SignUp';
import SignIn from '../modules/appscreens/entrance/SignIn';
import CreateProfile from '../modules/appscreens/entrance/CreateProfile';
import Instructions from '../modules/appscreens/entrance/Instructions';
import Home from '../modules/appscreens/Home';
import Drawer from '../modules/appscreens/Drawer';

import MyBooks from '../modules/appscreens/pages/books/MyBooks';
import AddBook from '../modules/appscreens/pages/books/AddBook';
import EditBook from '../modules/appscreens/pages/books/EditBook';
import ViewBook from '../modules/appscreens/pages/books/ViewBook';
import Messages from '../modules/appscreens/pages/messages/Messages';
import Search from '../modules/appscreens/pages/Search';
import Settings from '../modules/appscreens/pages/Settings';

export function registerScreens(store, Provider) {
  Navigation.registerComponent('app.Welcome', () => Welcome, store, Provider);
  Navigation.registerComponent('app.SignUp', () => SignUp, store, Provider);
  Navigation.registerComponent('app.SignIn', () => SignIn, store, Provider);
  Navigation.registerComponent('app.CreateProfile', () => CreateProfile, store, Provider);
  Navigation.registerComponent('app.Instructions', () => Instructions, store, Provider);

  Navigation.registerComponent('app.Home', () => Home, store, Provider);
  Navigation.registerComponent('app.Drawer', () => Drawer);
  Navigation.registerComponent('app.MyBooks', () => MyBooks, store, Provider);
  Navigation.registerComponent('app.AddBook', () => AddBook, store, Provider);
  Navigation.registerComponent('app.EditBook', () => EditBook, store, Provider);
  Navigation.registerComponent('app.ViewBook', () => ViewBook, store, Provider);

  Navigation.registerComponent('app.Messages', () => Messages, store, Provider);
  Navigation.registerComponent('app.Search', () => Search, store, Provider);
  Navigation.registerComponent('app.Settings', () => Settings, store, Provider);
}
