// Header.js

import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
const Header = ({ onProfileClick, toggleDrawer, drawerVisible }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleProfileClick = () => {
    setModalVisible(true);
    onProfileClick();
  };

const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.leftSection}>
          <Image source={require('../assets/Ram_logo.jpg')} style={styles.logoImage} />
        </View>
        <View style={styles.rightSection}>
          <Text style={styles.language}>Language: Eng</Text>
          <TouchableOpacity onPress={handleProfileClick}>
            <Icon name="person-circle-outline" size={30} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity onPress={toggleDrawer}>
            <Icon name="menu-outline" size={30} color="#000" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Drawer */}
      {drawerVisible && (
        <View style={styles.drawer}>
         <Text
         style={styles.drawerItem}
         onPress={() => navigation.navigate('CourseDetails')}
         >
        Dashboard
        </Text>
          <Text style={styles.drawerItem} onPress={() => alert('About clicked')}>
            About
          </Text>
          <Text style={styles.drawerItem} onPress={() => alert('Settings clicked')}>
            Settings
          </Text>
          <Text style={styles.drawerItem} onPress={() => alert('Feedback clicked')}>
            Feedback
          </Text>
          <TouchableOpacity onPress={toggleDrawer}>
            <Text style={styles.closeDrawer}>Close Drawer</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Modal */}
      <Modal visible={modalVisible} transparent={true} animationType="slide" onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalItem} onPress={() => alert('Sign Out clicked')}>
              Sign Out
            </Text>
            <Text style={styles.modalItem} onPress={() => alert('Change Password clicked')}>
              Change Password
            </Text>
            <Text style={styles.modalItem} onPress={() => alert('Edit Profile clicked')}>
              Edit Profile
            </Text>
            <Text style={styles.modalItem} onPress={() => alert('Mobile Verification clicked')}>
              Mobile Verification
            </Text>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text style={styles.closeButton}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 60,
    backgroundColor: '#f4f4f4',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoImage: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  language: {
    fontSize: 14,
    marginRight: 10,
  },
  drawer: {
    position: 'absolute',
    top: 60,
    left: 0,
    width: 250,
    height: '100%',
    backgroundColor: '#fff',
    borderRightWidth: 1,
    borderRightColor: '#ddd',
    padding: 10,
    zIndex: 10,
  },
  drawerItem: {
    fontSize: 18,
    marginVertical: 10,
  },
  closeDrawer: {
    marginTop: 20,
    fontSize: 16,
    color: 'blue',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  modalItem: {
    fontSize: 16,
    marginVertical: 10,
  },
  closeButton: {
    marginTop: 20,
    fontSize: 16,
    color: 'blue',
  },
});


export default Header;
