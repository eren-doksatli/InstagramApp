import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

export default function ProfileBio() {
  return (
    <View style={styles.bio}>
      <Text style={styles.name}>Eren Doksatlı</Text>
      <Text style={styles.description}>
        "True power lies not in controling others, but in mastering oneself."
      </Text>
      <Text style={styles.link}>Link goes here</Text>
      <TouchableOpacity activeOpacity={0.7} style={styles.editProfileButton}>
        <Text style={styles.editProfileText}>Edit Profile</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  bio: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  name: {
    fontWeight: '700',
    color: '#000000',
  },
  description: {
    marginVertical: 5,
    color: '#000000',
    fontSize: 13,
  },
  link: {
    fontWeight: '400',
    color: '#004C8B',
  },
  editProfileButton: {
    borderColor: '#CBCBCB',
    borderWidth: 1,
    marginVertical: 10,
    alignItems: 'center',
    paddingVertical: 5,
    borderRadius: 5,
  },
  editProfileText: {
    fontWeight: '700',
    color: '#000000',
  },
});
