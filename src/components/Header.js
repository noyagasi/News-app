import {Image, View} from 'react-native';
import React from 'react';

const Header = (props) => {
    const { viewStyle } = styles;
  
    return (
      <View style={viewStyle}>
        <Image
          style={{width: 206, height: 43}}
          source={{uri: 'https://techcrunch.com/wp-content/uploads/2013/05/hacker-news1.jpg'}}
        />
      </View>
    );
  };
  
  const styles = {
    viewStyle: {
      backgroundColor: '#FFFFCC',
      justifyContent: 'center',
      alignItems: 'center',
      height: 60,
      paddingTop: 2,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      elevation: 2,
      position: 'relative'
    }
  };
export default Header;
