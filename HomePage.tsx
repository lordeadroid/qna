import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import Game from './Game';

const HomePage = (): React.JSX.Element => {
  const logoName: string = 'kyu-n-a';
  const [clicked, setClicked] = useState(false);

  const handleClick = (): undefined => {
    setClicked(true);
  };

  const game = (): React.JSX.Element => {
    return <Game />;
  };

  const startScreen = (): React.JSX.Element => {
    return (
      <Pressable onPress={handleClick}>
        <View type="button" value="Play" style={styles.playButton}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Start</Text>
          </View>
        </View>
      </Pressable>
    );
  };

  const homeScreen: React.JSX.Element = clicked ? game() : startScreen();

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{logoName}</Text>
      {homeScreen}
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
