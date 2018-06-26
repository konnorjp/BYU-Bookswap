import _ from 'lodash';
import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import { getUserChats } from '../../../../actions';
import Chat from '../../../components/Chat';

class Messages extends Component {
  componentWillMount() {
    this.props.getUserChats();

    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ chats }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(chats);
  }

  render() {
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={(chat) => <Chat chat={chat} navigator={this.props.navigator} />}
      />
    );
  }
}

const mapStateToProps = state => {
  const chats = _.map(state.ChatFirebaseReducer, (val, uid) => {
    return { ...val, uid };
  });
  return { chats };
};

export default connect(mapStateToProps, { getUserChats })(Messages);
