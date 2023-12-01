import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import Game from './Game';

const HomePage = (): React.JSX.Element => {
  const [clicked, setClicked] = useState(false);

  const handleClick = (): void => {
    setClicked(true);
  };

  const insideItem: React.JSX.Element = clicked ? (
    <React.Fragment>{<Game />}</React.Fragment>
  ) : (
    <Pressable onPress={handleClick}>
      <View
        type="button"
        value="Play"
        id="play-button"
        style={styles.playButton}
      >
        <View style={styles.button}>
          <Text style={styles.buttonText}>Start</Text>
        </View>
      </View>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Kyu-n-A</Text>
      {insideItem}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    gap: 25,
  },
  heading: {
    fontSize: 45,
    color: 'teal',
  },
  playButton: {
    height: 50,
    width: 150,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gray',
    borderRadius: 7,
  },
  buttonText: {
    color: 'white',
    fontSize: 25,
  },
  button: {
    height: 35,
  },
});

export default HomePage;
