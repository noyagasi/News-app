import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import axios from 'axios';


class TopStory extends Component {
   state = { title: '' };
   componentWillMount () {
     axios.get('https://hacker-news.firebaseio.com/v0/item/' + this.props.storyID + '.json')
     .then(response => this.setState({title: response.data.title }));
   }
  render () {
    return (
       <Text> { this.state.title } </Text>
    );
  }
}


const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default TopStory;