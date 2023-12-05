import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const SurveyForm = () => {
  const [customerServiceRating, setCustomerServiceRating] = useState('');

  const submitSurvey = () => {
    console.log('Survey submitted:', {
      customerServiceRating,
    });
  };

  const startSurvey = () => {
    // Your logic for starting the survey
    console.log('Start Survey clicked!');
  };

  return (
    <View style={styles.surveyContainer}>
      <Text style={styles.surveyQuestion}>How would you rate our customer service?</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter rating"
        keyboardType="numeric"
        value={customerServiceRating}
        onChangeText={(text) => setCustomerServiceRating(text)}
      />
      <TouchableOpacity style={styles.submitButton} onPress={submitSurvey}>
        <Text style={styles.submitButtonText}>Submit Survey</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.startButton} onPress={startSurvey}>
        <Text style={styles.startButtonText}>Start Survey</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  surveyContainer: {
    marginTop: 20,
  },
  surveyQuestion: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
  },
  submitButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  startButton: {
    backgroundColor: '#3498db',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  startButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SurveyForm;
