import React from 'react';
import { View, AppRegistry } from 'react-native';
import Header from './src/components/Header';
import TopStories from './src/components/TopStories';

const App = () => (
  <View>
    <Header imageURI={'https://techcrunch.com/wp-content/uploads/2013/05/hacker-news1.jpg'} />
    <TopStories/>
  </View>
);

AppRegistry.registerComponent('newsApp190727', () => App);