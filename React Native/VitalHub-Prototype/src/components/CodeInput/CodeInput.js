// import { useState, useRef } from 'react';
// import { SafeAreaView, Text, View, TextInput, Pressable, StyleSheet } from 'react-native';

// const CodeInput = () => {
//   const [code, setCode] = useState('');

//   const codeDigitsArray = new Array(4).fill(0);
//   const toDigitInput = (value, idx) => {
//     const emptyInputChar = ' ';
//     const digit = code[idx] || emptyInputChar;

//     return (
//       <View key={idx} style={styles.inputContainer}>
//         <Text style={styles.inputText}>{digit}</Text>
//       </View>
//     );
//   }

//   const ref = useRef<TextInput>(null);
//   const handleOnPress = () => ref?.current?.focus();

//   return (
//     <SafeAreaView style={styles.container}>
//       <Pressable
//         style={styles.inputsContainer}
//         onPress={handleOnPress}
//       >
//         {codeDigitsArray.map(toDigitInput)}
//       </Pressable>
//       <TextInput
//         value={code}
//         onChangeText={setCode}
//         keyboardType='number-pad'
//         returnKeyType='done'
//         textContentType='oneTimeCode'
//         maxLength={4}
//         style={styles.hiddenCodeInput}
//       />
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   hiddenCodeInput: {
//     position: 'absolute',
//     height: 0,
//     width: 0,
//     opacity: 0,
//   },
//   inputsContainer: {
//     width: '60%',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   inputContainer: {
//     borderColor: '#77CACF',
//     borderWidth: 2,
//     borderRadius: 4,
//     padding: 12,
//   },
//   inputText: {
//     fontSize: 24,
//   }
// });
// // 34898F
// export default CodeInput;

import React, {useState, useRef} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
} from 'react-native';

const CODE_LENGTH = 4;

const CodeInput = () => {
  const [code, setCode] = useState('');
  const [containerIsFocused, setContainerIsFocused] = useState(false);

  const codeDigitsArray = new Array(CODE_LENGTH);

  const ref = useRef<TextInput>(null);

  const handleOnPress = () => {
    setContainerIsFocused(true);
    ref?.current?.focus();
  };

  const handleOnBlur = () => {
    setContainerIsFocused(false);
  };

  const toDigitInput = (_value, idx) => {
    const emptyInputChar = ' ';
    const digit = code[idx] || emptyInputChar;

    const isCurrentDigit = idx === code.length;
    const isLastDigit = idx === CODE_LENGTH - 1;
    const isCodeFull = code.length === CODE_LENGTH;

    const isFocused = isCurrentDigit || (isLastDigit && isCodeFull);

    const containerStyle =
      containerIsFocused && isFocused
        ? {...style.inputContainer, ...style.inputContainerFocused}
        : style.inputContainer;

    return (
      <View key={idx} style={containerStyle}>
        <Text style={style.inputText}>{digit}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={style.container}>
      <Pressable style={style.inputsContainer} onPress={handleOnPress}>
        {codeDigitsArray.map(toDigitInput)}
      </Pressable>
      <TextInput
        ref={ref.current}
        value={code}
        onChangeText={setCode}
        onSubmitEditing={handleOnBlur}
        keyboardType="number-pad"
        returnKeyType="done"
        textContentType="oneTimeCode"
        maxLength={CODE_LENGTH}
        style={style.hiddenCodeInput}
      />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputsContainer: {
    width: '60%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputContainer: {
    borderColor: '#cccccc',
    borderWidth: 2,
    borderRadius: 4,
    padding: 12,
  },
  inputContainerFocused: {
    borderColor: '#0f5181',
  },
  inputText: {
    fontSize: 24,
    fontFamily: 'Menlo-Regular',
  },
  hiddenCodeInput: {
    position: 'absolute',
    height: 0,
    width: 0,
    opacity: 0,
  },
});

export default CodeInput;
