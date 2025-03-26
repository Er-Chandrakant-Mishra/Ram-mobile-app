// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   Modal,
//   Image,
//   StyleSheet,
//   TouchableOpacity,
//   SafeAreaView,
//   ScrollView,
//   Dimensions
// } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
// import { useNavigation } from '@react-navigation/native';

// const { width } = Dimensions.get('window');

// const Header = ({ onProfileClick, onToggleDrawer }) => (
//   <View style={styles.header}>
//     <Image source={require('../assets/Ram_logo.jpg')} style={styles.logoImage} />
//     <View style={styles.rightSection}>
//       <Text style={styles.language}>Language: Eng</Text>
//       <TouchableOpacity onPress={onProfileClick}>
//         <Icon name="person-circle-outline" size={30} color="#000" />
//       </TouchableOpacity>
//       <TouchableOpacity onPress={onToggleDrawer}>
//         <Icon name="menu-outline" size={30} color="#000" />
//       </TouchableOpacity>
//     </View>
//   </View>
// );

// const Drawer = ({ visible, onClose }) => (
//   visible && (
//     <View style={styles.drawer}>
//       {['Dashboard', 'About', 'Settings', 'Feedback'].map((item, index) => (
//         <Text key={index} style={styles.drawerItem}>{item}</Text>
//       ))}
//       <TouchableOpacity onPress={onClose}>
//         <Text style={styles.closeDrawer}>Close Drawer</Text>
//       </TouchableOpacity>
//     </View>
//   )
// );

// const ProfileModal = ({ visible, onClose }) => (
//   <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
//     <View style={styles.modalContainer}>
//       <View style={styles.modalContent}>
//         {['Sign Out', 'Change Password', 'Edit Profile', 'Mobile Verification'].map((item, index) => (
//           <Text key={index} style={styles.modalItem}>{item}</Text>
//         ))}
//         <TouchableOpacity onPress={onClose}>
//           <Text style={styles.closeButton}>Close</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   </Modal>
// );

// const Table = () => (
//   <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//     <View style={styles.tableContainer}>
//       <View style={[styles.tableRow, styles.tableHeader]}>
//         {['S.No', 'Chapter', 'Title', 'Action', 'Status', 'Mail', 'PDF Validity'].map((header, index) => (
//           <Text key={index} style={[styles.cell, styles.headerText]}>{header}</Text>
//         ))}
//       </View>
//       {[1, 2, 3].map((item, index) => (
//         <View key={index} style={styles.tableRow}>
//           <Text style={styles.cell}>{index + 1}</Text>
//           <Text style={styles.cell}>Story and Screenplay</Text>
//           <Text style={styles.cell}>Chapter {index + 1}</Text>
//           <TouchableOpacity style={styles.actionButton}>
//             <Text style={styles.actionButtonText}>Read</Text>
//           </TouchableOpacity>
//           <Text style={styles.cell}>Reading Completed</Text>
//           <Text style={styles.cell}>Send Mail For Exam Credentials</Text>
//           <Text style={styles.cell}>25-Nov-2024</Text>
//         </View>
//       ))}
//       <View style={styles.expirySection}>
//         <Text style={styles.expiryText}>Exam validity expires on 2024-11-25</Text>
//       </View>
//     </View>
//   </ScrollView>
// );

// const MainScreen = () => {
//   const [modalVisible, setModalVisible] = useState(false);
//   const [drawerVisible, setDrawerVisible] = useState(false);

//   return (
//     <SafeAreaView style={styles.container}>
//       <Header 
//         onProfileClick={() => setModalVisible(true)}
//         onToggleDrawer={() => setDrawerVisible(!drawerVisible)}
//       />
//       <Drawer visible={drawerVisible} onClose={() => setDrawerVisible(false)} />
//       <ProfileModal visible={modalVisible} onClose={() => setModalVisible(false)} />
//       <ScrollView style={styles.body}>
//         <Text style={styles.title}>Documents</Text>
//         <Table />
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// export default MainScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   header: {
//     height: 60,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     paddingHorizontal: 10,
//     backgroundColor: '#f4f4f4',
//     borderBottomWidth: 1,
//     borderBottomColor: '#ddd',
//   },
//   logoImage: {
//     width: 50,
//     height: 50,
//     resizeMode: 'contain',
//   },
//   rightSection: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   language: {
//     fontSize: 14,
//     marginRight: 10,
//   },
//   drawer: {
//     position: 'absolute',
//     top: 60,
//     left: 0,
//     width: 250,
//     height: '100%',
//     backgroundColor: '#fff',
//     borderRightWidth: 1,
//     padding: 10,
//     zIndex: 10,
//   },
//   drawerItem: {
//     fontSize: 18,
//     marginVertical: 10,
//   },
//   closeDrawer: {
//     marginTop: 20,
//     fontSize: 16,
//     color: 'blue',
//   },
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   modalContent: {
//     width: '80%',
//     backgroundColor: '#fff',
//     padding: 20,
//     borderRadius: 10,
//   },
//   modalItem: {
//     fontSize: 16,
//     marginVertical: 10,
//   },
//   closeButton: {
//     marginTop: 20,
//     fontSize: 16,
//     color: 'blue',
//   },
//   body: {
//     flex: 1,
//     padding: 10,
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   tableContainer: {
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 5,
//   },
//   tableRow: {
//     flexDirection: 'row',
//     borderBottomWidth: 1,
//     borderBottomColor: '#ddd',
//   },
//   cell: {
//     flex: 1,
//     padding: 10,
//     textAlign: 'center',
//   },
//   headerText: {
//     fontWeight: 'bold',
//     backgroundColor: '#000',
//     color: '#fff',
//   },
//   expirySection: {
//     padding: 10,
//     backgroundColor: '#FFE0E0',
//   },
//   expiryText: {
//     color: '#FF0000',
//     textAlign: 'center',
//   },
// });





import React, { useState } from 'react';
import {
  View,
  Text,
  Modal,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const MainScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const navigation = useNavigation();

  const handleProfileClick = () => {
    setModalVisible(true);
  };

  const toggleDrawer = () => {
    setDrawerVisible(!drawerVisible);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.leftSection}>   
          <Image 
            source={require('../assets/Ram_logo.jpg')} 
            style={styles.logoImage} 
          />
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
          <Text style={styles.drawerItem}  onPress={() => navigation.navigate('courseDetails')}>
            Dashboard
          </Text>
          <Text style={styles.drawerItem} onPress={() => navigation.navigate('about')}>
            About
          </Text>
          <Text style={styles.drawerItem} onPress={() => alert('Settings clicked')}>
            Settings
          </Text>
          <Text style={styles.drawerItem} onPress={() => navigation.navigate('feedback')}>
            Feedback
          </Text>
          <TouchableOpacity onPress={toggleDrawer}>
            <Text style={styles.closeDrawer}>Close Drawer</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Modal */}
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
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


      {/* Main Content */}
      <ScrollView style={styles.body}>
        <Text style={styles.title}>Documents</Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={true}>
          <View style={styles.tableContainer}>
            {/* Table Header */}
            <View style={[styles.tableRow, styles.tableHeader]}>
              <Text style={[styles.cell, styles.headerText]}>S.No</Text>
              <Text style={[styles.cell, styles.headerText]}>Chapter</Text>
              <Text style={[styles.cell, styles.headerText]}>Title</Text>
              <Text style={[styles.cell, styles.headerText]}>Action</Text>
              <Text style={[styles.cell, styles.headerText]}>Status</Text>
              <Text style={[styles.cell, styles.headerText]}>Mail</Text>
              <Text style={[styles.cell, styles.headerText]}>PDF Validity</Text>
            </View>

            {/* Table Rows */}
            {[1, 2, 3].map((item, index) => (
              <View key={index} style={styles.tableRow}>
                <Text style={styles.cell}>{index + 1}</Text>
                <Text style={styles.cell}>Story and Screenplay</Text>
                <Text style={styles.cell}>Chapter {index + 1}</Text>
                <TouchableOpacity style={styles.actionButton}>
                  <Text style={styles.actionButtonText}>Read</Text>
                </TouchableOpacity>
                <Text style={styles.cell}>Reading Completed</Text>
                <Text style={styles.cell}>Send Mail For Exam Credentials</Text>
                <Text style={styles.cell}>25-Nov-2024</Text>
              </View>
            ))}

            {/* Expiry Section */}
            <View style={styles.expirySection}>
              <Text style={styles.expiryText}>Exam validity expires on 2024-11-25</Text>
            </View>
          </View>
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 60,
    backgroundColor: '#f4f4f4',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoImage: {
    width: 50,
    height: 50,
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
  body: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  tableContainer: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    overflow: 'hidden',
  },
  tableHeader: {
    backgroundColor: '#000',
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  cell: {
    flex: 1,
    padding: 10,
    textAlign: 'center',
  },
  headerText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  actionButton: {
    backgroundColor: '#007BFF',
    padding: 5,
    borderRadius: 5,
  },
  actionButtonText: {
    color: '#fff',
    textAlign: 'center',
  },
  expirySection: {
    padding: 10,
    backgroundColor: '#FFE0E0',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 60,
    backgroundColor: '#f4f4f4',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoImage: {
    width: 50,
    height: 100,
    resizeMode: 'contain',
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  language: {
    fontSize: 14,
    marginRight: 80,
  },
  body: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff',
    backgroundColor: '#4169E1',
    padding: 10,
  },
  table: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  tableHeader: {
    backgroundColor: '#000',
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  cell: {
    flex: 1,
    padding: 10,
    textAlign: 'center',
  },
  headerText: {
    color: '#fff',
    fontWeight: 'bold',
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
  expiryText: {
    color: '#FF0000',
    textAlign: 'center',
  },
});












































