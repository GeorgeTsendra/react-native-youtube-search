

import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, Button, Linking} from 'react-native';
var Browser = require('react-native-browser');

export default class Video extends Component{


  render() {
    const {
      video,
    } = this.props

    return (
      <View 
        style={styles.itemContainer}
        >
        <Image
            style={styles.imageStyle}
            source={{uri: video.snippet.thumbnails.medium.url}}
        />
        <Text style={styles.title}>
            
            {video.snippet.title}
        </Text>
        <Text  style={styles.description}>
             {video.snippet.description}
        </Text>
        <Button
            color="#d52027" 
            style={styles.button}
             title="Watch in YouTube"
             onPress={()=>{
                Linking.openURL(`https://www.youtube.com/embed/${video.id.videoId}`)
                 
             }}
        />
            
      </View>
    );
  }
}
// Browser.open(`https://www.youtube.com/embed/${video.id.videoId}`)
const styles = StyleSheet.create({
    itemContainer: {
        width: '95%',
        minHeight: 40,
        marginRight: 'auto',
        marginLeft: 'auto',
        marginBottom: 15,
        backgroundColor: '#ffffff',   
    },
    imageStyle: {
        alignSelf: 'stretch',
        height: 100,
        width: '100%',
        marginBottom: 10,
    },
    title: {
        paddingLeft: 5,
        paddingRight: 5,
        color: '#000000',
        fontSize: 21,
        marginBottom: 5,
    },
    description:{
        paddingLeft: 5,
        paddingRight: 5,
    },
    button:{
      
    }
});


