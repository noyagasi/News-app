import React, { Component } from "react";
import { Text } from "react-native";
import axios from "axios";
import LoadingIndicator from "./LoadingIndicator";
class TopStory extends Component {
  state = { title: "" };

  componentWillMount() {
    const { storyID } = this.props;

    axios
      .get("https://hacker-news.firebaseio.com/v0/item/" + storyID + ".json")
      .then(response => this.setState({ title: response.data.title }));
  }
  render() {
    const { title } = this.state;
    return title ? <Text> {title} </Text> : <LoadingIndicator />;
  }
}

const styles = StyleSheet.create({
  headerContentStyle: {
    flexDirection: "column",
    justifyContent: "space-around"
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
});

export default TopStory;
