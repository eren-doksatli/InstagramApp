import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

export default function ProfileStory() {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.stories}>
      <View style={styles.story}>
        <View
          style={{
            borderColor: '#DCDCDC',
            borderWidth: 1,
            width: 60,
            height: 60,
            borderRadius: 30,
            padding: 5,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={require('../../../../assets/story.png')}
            style={styles.storyImage}
          />
        </View>
        <Text style={styles.storyLabel}>1</Text>
      </View>
      <View style={styles.story}>
        <View
          style={{
            borderColor: '#DCDCDC',
            borderWidth: 1,
            width: 60,
            height: 60,
            borderRadius: 30,
            padding: 5,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={require('../../../../assets/story1.png')}
            style={styles.storyImage}
          />
        </View>
        <Text style={styles.storyLabel}>2</Text>
      </View>
      <View style={styles.story}>
        <View
          style={{
            borderColor: '#DCDCDC',
            borderWidth: 1,
            width: 60,
            height: 60,
            borderRadius: 30,
            padding: 5,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={require('../../../../assets/story2.png')}
            style={styles.storyImage}
          />
        </View>
        <Text style={styles.storyLabel}>3</Text>
      </View>
      <View style={styles.story}>
        <View
          style={{
            borderColor: '#DCDCDC',
            borderWidth: 1,
            width: 60,
            height: 60,
            borderRadius: 30,
            padding: 5,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={require('../../../../assets/story3.png')}
            style={styles.storyImage}
          />
        </View>
        <Text style={styles.storyLabel}>4</Text>
      </View>
      <View style={styles.story}>
        <View
          style={{
            borderColor: '#DCDCDC',
            borderWidth: 1,
            width: 60,
            height: 60,
            borderRadius: 30,
            padding: 5,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity style={styles.newStoryButton}>
            <Text style={styles.plusSign}>+</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.storyLabel}>4</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  stories: {
    paddingHorizontal: 25,
  },
  story: {
    marginRight: 10,
    alignItems: 'center',
  },
  storyImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  storyLabel: {
    color: '#000000',
    marginTop: 3,
  },
  plusSign: {
    fontSize: 40,
  },
  newStoryButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
