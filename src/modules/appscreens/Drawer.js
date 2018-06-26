import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class Drawer extends Component {

  toggleDrawer() {
    this.props.navigator.toggleDrawer({
			to: 'closed',
			side: 'left',
			animated: false
		});
  }

  goToMyBooks() {
    this.toggleDrawer();
    this.props.navigator.resetTo({
			screen: 'app.MyBooks'
		});
  }

  goToMessages() {
    this.toggleDrawer();
    this.props.navigator.resetTo({
			screen: 'app.Messages'
		});
  }

  goToSearch() {
    this.toggleDrawer();
    this.props.navigator.resetTo({
			screen: 'app.Search'
		});
  }

  goToSettings() {
    this.toggleDrawer();
    this.props.navigator.resetTo({
			screen: 'app.Settings'
		});
  }

  render() {
    const { container, drawerList, drawerListItem, drawerListItemText } = styles;

    return (
      <View style={container}>
        <View style={drawerList}>
          <TouchableOpacity onPress={this.goToMyBooks()}>
            <View style={drawerListItem}>
              <Text style={drawerListItemText}>My Books</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.goToMessages()}>
            <View style={drawerListItem}>
              <Text style={drawerListItemText}>Messages</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.goToSearch()}>
            <View style={drawerListItem}>
              <Text style={drawerListItemText}>Search</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.goToSettings()}>
            <View style={drawerListItem}>
              <Text style={drawerListItemText}>Settings</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
		flex: 1,
		paddingLeft: 25,
		justifyContent: 'center'
	},
	drawerList: {

	},
	drawerListIcon: {
		width: 27
	},
	drawerListItem: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 23
	},
	drawerListItemText: {
		color: 'black',
		fontWeight: 'bold',
		fontSize: 23,
		paddingLeft: 15,
		flex: 1
	},
	linearGradient: {
		// top: 0,
		// left: 0,
		// right: 0,
		// height: 248,
		// position: 'absolute'
		flex: 1
	}
};

export default Drawer;
