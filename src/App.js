

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button, ScrollView} from 'react-native';
import YTSearch from 'youtube-api-search';
// import Video from 'react-native-video';
import Video from './components/video'

export default class App extends Component{

  state={
    key: `AIzaSyC1ORL6Y3zxvLLev6QHUqP8eF1hFbYo1WI`,
    videos: [],
    text: '',
  }

  onPressLearnMore = () => {
    const {
      text, 
      key,
    } = this.state

      YTSearch({key: key, term: text}, data => {
        console.log('_______________', data);
        
          this.setState({
            videos: [...data],
          })
       });
 
  }


  renderVideoList= (videos)=>{
    return(
 
        <ScrollView style={styles.listOfVideos}>
          {videos.map((value,index)=>{
            return(
              <Video
                video={value}
                key={index}
              />
            )
          })}
      </ScrollView>
       
       )
  }

  render() {
    const {
      videos,
    } = this.state

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.welcome}>Welcome to React Native!</Text>
          <Text style={styles.instructions}>Test applications by youtube api search</Text>
        </View>
        <View style={styles.main}>
          <View style={styles.textInputWrapper}>    
            <TextInput
              style={{height: 40, borderColor: 'gray', borderWidth: 1, width: '80%', paddingLeft: 5,}}
              onChangeText={(text) => {
                        this.setState({
                          text,
                        })
              }}
              value={this.state.text}
             />
             <Button
                style={styles.searchButton}
                onPress={this.onPressLearnMore}
                title="Search"
                accessibilityLabel="Search"
                color="#d52027" 
              /> 
          </View>
          <View style={styles.contentWrapper}>
              <Text style={styles.emptySearchText}>
                Search result
              </Text>
                {videos.length > 0 && (
                  this.renderVideoList(videos)
                )}
              
           </View>     
          </View>
       
        </View>
    );
  }
}

// backgroundColor: '#cecece',
{/* <View style={styles.contentWrapper}>
<Text style={styles.emptySearchText}>
  Search result
</Text>
</View> */}
const styles = StyleSheet.create({
  listOfVideos: {
    height: '100%',
    width: '100%',
    overflow: 'scroll',
    flexDirection: 'column',
    borderWidth: 1,
    backgroundColor: '#C0C0C0',   
  },
  emptySearchText: {
    minHeight: 40,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 24,
    marginTop: 5,
   
  },
  contentWrapper: {
    width: '100%',
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  textInputWrapper:{
    width: '95%',
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: 1,
    flexDirection: 'row',

  },
  searchButton: {
     height: 40,
     width: '20%', 
     backgroundColor: '#d52027',   
     color: "#ffffff", 
  },
  header: {
    height: '15%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  main:{
    width: '100%',
    height: '85%',
    flexDirection: 'column',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
