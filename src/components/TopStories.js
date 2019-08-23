import React, { Component } from 'react';
import { ScrollView, View, Text, FlatList } from 'react-native';
import axios from 'axios';
import TopStory from './TopStory';

class TopStories extends Component {
  state = { stories: [] };
  componentWillMount () {
    axios.get('https://hacker-news.firebaseio.com/v0/topstories.json')
    .then(response => this.setState({stories: response.data }));
  }
  render () {
    if (this.state.stories === undefined || this.state.stories.length < 10) {
      return (
        <View>
          <Text>loading...</Text>
        </View>
      );
    }
    else {
      return (
        <ScrollView>
          <FlatList data={this.state.stories} renderItem={({item: t}) => (
            <TopStory storyID={t}/>
          )} />
        </ScrollView>
      );
    }
  }
}
export default TopStories;
