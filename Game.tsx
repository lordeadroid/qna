import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

interface Que {
  question: string;
  answer: string;
  options: string[];
}

const Ques = (props: { att: Que }): React.JSX.Element => {
  const [selectAns, setSelectedAns] = useState<number | null>(null);
  const [activeColor, setActiveColor] = useState<string>('grey');
  const [disabled, setDisabled] = useState<boolean>(false);

  const options: string[] = props.att.options;

  const highlight = (index: number) => {
    setSelectedAns(index);
  };

  const choices: React.JSX.Element[] = props.att.options.map(
    (option, index) => (
      <Pressable
        onPress={() => highlight(index)}
        key={index}
        disabled={disabled}
      >
        <View
          style={[
            styles.choice,
            {
              backgroundColor:
                selectAns === index ? activeColor : 'transparent',
            },
          ]}
        >
          <Text>{option}</Text>
        </View>
      </Pressable>
    )
  );

  const handleSubmit = () => {
    if (selectAns === null) {
      return;
    }

    setDisabled(true);
    if (props.att.answer === options[selectAns]) {
      setActiveColor('green');
      return;
    }

    setActiveColor('red');
  };

  return (
    <View>
      <Text style={styles.question}>{props.att.question}</Text>
      <View id="options">{choices}</View>
      <View style={styles.submitButtonContainer}>
        <Pressable onPress={handleSubmit}>
          <Text id="submit" style={styles.submitButton}>
            Submit
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const Game = (): React.JSX.Element => {
  const data: Que[] = [
    { question: 'question 1', answer: '1', options: ['1', '2', '3', '4'] },
  ];
  const questions: React.JSX.Element[] = data.map((ques, index) => (
    <Ques key={index} att={ques} />
  ));
  return <>{questions}</>;
};

const styles = StyleSheet.create({
  question: {
    fontSize: 20,
  },
  choice: {
    height: 50,
    width: 200,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    borderWidth: 1,
  },
  submitButton: {
    color: 'white',
    fontSize: 20,
    width: 80,
  },
  submitButtonContainer: {
    height: 30,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gray',
    borderRadius: 5,
  },
});

export default Game;
