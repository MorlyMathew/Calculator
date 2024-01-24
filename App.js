import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet,Alert } from 'react-native';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonPress = (value) => {
    if (value === '=') {
      try {
        setResult(eval(input).toString());
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else if (value === '+/-') {
      setInput((prevInput) => (parseFloat(prevInput) * -1).toString());
    } else {
      var check = input+value
            if(check == '1+3+9'){
              Alert.alert(
              'Hello World'
            );
            }
      setInput((prevInput) => prevInput + value);
    }
  };

  const renderButton = (value, style = {}) => (
    <TouchableOpacity
      style={[styles.button, style]}
      onPress={() => handleButtonPress(value)}
    >
      <Text style={styles.buttonText}>{value}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.display}>
        <Text style={styles.input}>{input}</Text>
        <Text style={styles.result}>{result}</Text>
      </View>
      <View style={styles.buttons}>

      <View style={styles.column}>
          {renderButton('C')}
          {renderButton('7')}
          {renderButton('4')}
          {renderButton('1')}
          {renderButton('.')}
        </View>
        <View style={styles.column}>
          {renderButton('+/-')}
          {renderButton('8')}
          {renderButton('5')}
          {renderButton('2')}
          {renderButton('0')}
        </View>
        <View style={styles.column}>
          {renderButton('%')}
          {renderButton('9')}
          {renderButton('6')}
          {renderButton('3')}
          {renderButton('00')}
        </View>
        <View style={styles.lastcolumn}>
          {renderButton('/',styles.lastcolumnbtn)}
          {renderButton('*',styles.lastcolumnbtn)}
          {renderButton('-',styles.lastcolumnbtn)}
          {renderButton('+',styles.lastcolumnbtn)}
          {renderButton('=',styles.equalButton)}
        </View>
   
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor:'#343434'
  },
  display: {
    padding: 35,
    backgroundColor: '#343434',
    alignItems: 'flex-end',
    color: '#777',
  },
  input: {
    fontSize: 24,
    color: '#777',
  },
  result: {
    fontSize: 18,
    color: '#777',
    
  },
  // buttons: {
  //   flexDirection: 'column',
  // },
  buttons: {
    flexDirection: 'row',
    justifyContent:'center'
  },
  row: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
    
    
  },
  lastcolumn: {
    flexDirection: 'column',
    backgroundColor: 'black',
    borderRadius:55
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#343434',
    padding: 8,
    height:60,
    width:65,
    marginLeft: 10,
    marginRight: 10,
    color: '#777',
    
  },
  buttonText: {
    fontSize: 24,
    color: '#777',
  },

  equalButton: {
    backgroundColor: '#EFD593',
    borderRadius:40, // Green color for equal button
  },

  lastcolumnbtn:{
    backgroundColor: 'black',
    borderRadius:40
  }
});

export default Calculator;
