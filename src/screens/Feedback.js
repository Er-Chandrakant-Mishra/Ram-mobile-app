import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import Header from './Header';

const Feedback = () => {
  const [userName, setUserName] = useState('');
  const [feedbackText, setFeedbackText] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!userName.trim() || !feedbackText.trim()) {
      Alert.alert('Error', 'Please enter your name and feedback before submitting.');
      return;
    }
    // Simulate submitting feedback (could be an API call here)
    setSubmitted(true);
    Alert.alert('Thank you!', `Thank you ${userName}! Your feedback has been submitted.`);
    setUserName('');
    setFeedbackText('');
  };

  return (
    <View style={styles.container}>
        <Header/>
      <Text style={styles.title}>We value your feedback!</Text>
      <Text style={styles.subtitle}>
        Let us know your name, thoughts, suggestions, or any issues you faced.
      </Text>
      <TextInput
        style={styles.textInput}
        value={userName}
        onChangeText={setUserName}
        placeholder="Enter your name"
        placeholderTextColor="#aaa"
      />
      <TextInput
        style={[styles.textInput, { height: 100 }]}
        value={feedbackText}
        onChangeText={setFeedbackText}
        placeholder="Write your feedback here..."
        placeholderTextColor="#aaa"
        multiline={true}
      />
      <TouchableOpacity
        style={[
          styles.button,
          userName.trim() && feedbackText.trim() ? styles.buttonActive : styles.buttonDisabled,
        ]}
        onPress={handleSubmit}
        disabled={!userName.trim() || !feedbackText.trim()}
      >
        <Text style={styles.buttonText}>Submit Feedback</Text>
      </TouchableOpacity>
      {submitted && (
        <Text style={styles.thankYouText}>
          Thank you {userName}! Your feedback means a lot to us.
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
    textAlign: 'center',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    color: '#333',
    marginBottom: 20,
  },
  button: {
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonActive: {
    backgroundColor: '#28a745',
  },
  buttonDisabled: {
    backgroundColor: '#ccc',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  thankYouText: {
    marginTop: 20,
    fontSize: 16,
    color: '#28a745',
    textAlign: 'center',
  },
});

export default Feedback;




