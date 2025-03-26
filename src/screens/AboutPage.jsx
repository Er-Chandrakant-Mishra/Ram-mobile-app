import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  ImageBackground,
} from 'react-native';

const AboutPage = () => {
  return (
    <ImageBackground
    //   source={require('../assets/Ram_backgroundImages.jpg')}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        {/* Logo and Title */}
        <View style={styles.logoContainer}>
          <Image
            source={require('../assets/Ram_logo.jpg')}
            style={styles.logo}
          />
          <Text style={styles.title}>About RAM Academy of Movies</Text>
        </View>

        {/* Overview Section */}
        <View style={styles.section}>
          <Text style={styles.heading}>Overview</Text>
          <Text style={styles.text}>
            RAM Academy of Movies is dedicated to nurturing the next generation
            of filmmakers, actors, and creators. With a focus on creativity,
            technical expertise, and industry connections, RAM empowers
            students to excel in the world of cinema and entertainment.
          </Text>
        </View>

        {/* Mission Section */}
        <View style={styles.section}>
          <Text style={styles.heading}>Mission</Text>
          <Text style={styles.text}>
            Our mission is to provide high-quality education and hands-on
            training in filmmaking, acting, and related disciplines. We aim to
            inspire students to reach their full potential and contribute to
            the global film industry.
          </Text>
        </View>

        {/* Vision Section */}
        <View style={styles.section}>
          <Text style={styles.heading}>Vision</Text>
          <Text style={styles.text}>
            To be a globally recognized academy that sets the standard for
            excellence in film education and fosters a community of
            trailblazers in the cinematic arts.
          </Text>
        </View>

        {/* Goals Section */}
        <View style={styles.section}>
          <Text style={styles.heading}>Goals</Text>
          <Text style={styles.text}>
            - Offer a comprehensive curriculum that combines theory and
            practice.
            {"\n"}- Provide state-of-the-art facilities and resources.
            {"\n"}- Build strong partnerships with industry leaders.
            {"\n"}- Promote innovation, creativity, and collaboration.
          </Text>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            "Lights. Camera. Action. Begin your journey with RAM Academy of
            Movies."
          </Text>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default AboutPage;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    padding: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
    marginTop: 10,
  },
  section: {
    marginBottom: 20,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007BFF',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
  },
  footer: {
    marginTop: 30,
    padding: 20,
    backgroundColor: '#007BFF',
    borderRadius: 10,
  },
  footerText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    fontStyle: 'italic',
  },
});
