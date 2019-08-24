import React, { Component } from "react";
import { ScrollView, sFlatList } from "react-native";
import axios from "axios";
import TopStory from "./TopStory";
import { LoadingIndicator } from "./LoadingIndicator";
class TopStories extends Component {
  state = { stories: [] };

  componentWillMount() {
    axios
      .get("https://hacker-news.firebaseio.com/v0/topstories.json")
      .then(response => this.setState({ stories: response.data }));
  }
  render() {
    const { stories } = this.state;
    const isStoriesVaildResult = isStoriesVaild(stories);

    if (isStoriesVaildResult) {
      return <LoadingIndicator />;
    }

    return (
      <ScrollView>
        <FlatList
          data={this.state.stories}
          renderItem={({ item: t }) => <TopStory storyID={t} />}
        />
      </ScrollView>
    );
  }
}

function isStoriesVaild(stories) {
  return !(stories === undefined || stories.length < 10);
}
export default TopStories;
