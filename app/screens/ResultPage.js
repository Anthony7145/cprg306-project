import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function ResultPage() {
  // Add your result page logic here

  // Mock survey results (replace this with your actual logic)
  const surveyResults = {
    customerService: 4.5,
    restaurantService: 4.0,
    barService: 3.8,
    roomService: 4.2,
    housekeeping: 4.3,
    overallService: 4.2,
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Survey Results</Text>

      <View style={styles.resultContainer}>
        {/* Display survey results or any other relevant content */}
        {Object.entries(surveyResults).map(([category, rating]) => (
          <View key={category} style={styles.resultItem}>
            <Text style={styles.resultText}>{category}:</Text>
            <Text style={styles.resultValue}>{rating}</Text>
          </View>
        ))}
      </View>

      <TouchableOpacity style={styles.backButton}>
        <Text style={styles.backButtonText}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  resultContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  resultItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  resultText: {
    fontSize: 18,
    marginRight: 8,
  },
  resultValue: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  backButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  backButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
