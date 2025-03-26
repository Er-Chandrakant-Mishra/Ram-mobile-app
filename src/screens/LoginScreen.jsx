// added new code .....................................
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Image,
  ImageBackground,
} from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';

const LoginScreen = ({navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [mobileNumber, setMobileNumber] = useState('');
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword , setShowPassword] = useState('');
  
  const VALID_USER_ID = '1234';
  const VALID_PASSWORD = 'password123';


  const handleForgotPassword = () => {
    setModalVisible(true);
  };

  const handleLogin = () => {
    // Static username and password validation
    if (userId === VALID_USER_ID && password === VALID_PASSWORD) {
      alert('Login Successful!',`Welcome, ${userId}!`);
      navigation.navigate('Main'); 
    } else {
      alert('Invalid User ID or Password.');
    }
  };
  const handleSend = () => {
    if (mobileNumber) {
      alert(`Reset link sent to: ${mobileNumber}`);
      setModalVisible(false);
      setMobileNumber('');
    } else {
      alert('Please enter a valid mobile number.');
    }
  };

  

  return (
    <ImageBackground
      source={require('../assets/background_Images.jpg')}
      style={styles.background}
    >
      <View style={styles.container}>
        {/* Login Form */}
        <View style={styles.loginContainer}>
          <Image
            source={require('../assets/Ram_logo.jpg')}
            style={styles.logo}
          />
          <Text style={styles.title}>RAM Academy of Movies</Text>
          <Text style={styles.title}>LOGIN</Text>
           
          <TextInput
            style={styles.input}
            placeholder="User ID"
            // secureTextEntry={!showPassword} 
            placeholderTextColor="#ccc"
            onChangeText={(text) => setUserId(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#ccc"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={(text) =>setPassword(text)}
          />

          <View style = {styles.checkboxContainer}>
            
          <TouchableOpacity
              onPress={() => setShowPassword((prev) => !prev)}
              style={styles.checkbox}
            >
                <View
                style={[
                  styles.checkboxBox,
                  showPassword && styles.checkboxBoxChecked,
                ]}
              />
                <Text style={styles.checkboxContainer}>Show Password</Text>
                </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.forgotPassword} onPress={handleForgotPassword}>
            
            <Text style={styles.forgotText}>Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
        </View>

        {/* Modal for Forgot Password */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContainer}>
              <Text style={styles.modalTitle}>Forgot Password?</Text>
              <TextInput
                style={styles.modalInput}
                placeholder="Enter Your Mobile Number"
                placeholderTextColor="#aaa"
                keyboardType="phone-pad"
                value={mobileNumber}
                onChangeText={(text) => setMobileNumber(text)}
              />
              <View style={styles.modalButtonContainer}>
                <TouchableOpacity
                  style={styles.cancelButton}
                  onPress={() => setModalVisible(false)}
                >
                  <Text style={styles.cancelButtonText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
                  <Text style={styles.sendButtonText}>Send</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </ImageBackground>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  loginContainer: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    fontSize: 16,
    color: '#000000',
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  forgotText: {
    color: '#007BFF',
    fontSize: 14,
  },
  loginButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  modalInput: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    width: '100%',
    marginBottom: 20,
    fontSize: 16,
    color: '#000',
  },
  modalButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  cancelButton: {
    flex: 1,
    backgroundColor: '#aaa',
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginRight: 10,
  },
  cancelButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  sendButton: {
    flex: 1,
    backgroundColor: '#007BFF',
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  sendButtonText: {
    color: '#fff',
    fontSize: 16,
  },

  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkboxLabel: {
    marginLeft: 8,
    fontSize: 16,
    color: '#333',
  },
  loginButton: {
    width: '100%',
    backgroundColor: '#007BFF',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
});






// added new code 08/01/2025

// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   Modal,
//   Image,
//   ImageBackground,
// } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';

// const LoginScreen = ({ navigation }) => {
//   const [modalVisible, setModalVisible] = useState(false);
//   const [mobileNumber, setMobileNumber] = useState('');
//   const [userId, setUserId] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);

//   const VALID_USER_ID = '1234';
//   const VALID_PASSWORD = 'password123';

//   const handleForgotPassword = () => {
//     setModalVisible(true);
//   };

//   const handleLogin = () => {
//     if (userId === VALID_USER_ID && password === VALID_PASSWORD) {
//       alert('Login Successful!');
//       navigation.navigate('Main');
//     } else {
//       alert('Invalid User ID or Password.');
//     }
//   };

//   const handleSend = () => {
//     if (mobileNumber) {
//       alert(`Reset link sent to: ${mobileNumber}`);
//       setModalVisible(false);
//       setMobileNumber('');
//     } else {
//       alert('Please enter a valid mobile number.');
//     }
//   };

//   return (
//     <ImageBackground
//       source={require('../assets/background_Images.jpg')}
//       style={styles.background}
//     >
//       <View style={styles.container}>
//         <View style={styles.loginContainer}>
//           <Image
//             source={require('../assets/Ram_logo.jpg')}
//             style={styles.logo}
//           />
//           <Text style={styles.title}>RAM Academy of Movies</Text>
//           <Text style={styles.title}>LOGIN</Text>

//           {/* User ID Field with Icon */}
//           <View style={styles.inputContainer}>
//             <View style={styles.iconCircle}>
//               <Icon name="person-outline" size={24} color="#fff" />
//             </View>
//             <TextInput
//               style={styles.input}
//               placeholder="User ID"
//               placeholderTextColor="#ccc"
//               onChangeText={(text) => setUserId(text)}
//             />
//           </View>

//           {/* Password Field with Icon */}
//           <View style={styles.inputContainer}>
//             <View style={styles.iconCircle}>
//               <Icon name="lock-closed-outline" size={24} color="#fff" />
//             </View>
//             <TextInput
//               style={styles.input}
//               placeholder="Password"
//               placeholderTextColor="#ccc"
//               secureTextEntry={!showPassword}
//               onChangeText={(text) => setPassword(text)}
//             />
//           </View>

//           <View style={styles.checkboxContainer}>
//             <TouchableOpacity
//               onPress={() => setShowPassword((prev) => !prev)}
//               style={styles.checkbox}
//             >
//               <Text style={styles.checkboxLabel}>Show Password</Text>
//             </TouchableOpacity>
//           </View>

//           <TouchableOpacity style={styles.forgotPassword} onPress={handleForgotPassword}>
//             <Text style={styles.forgotText}>Forgot Password?</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
//             <Text style={styles.loginButtonText}>Login</Text>
//           </TouchableOpacity>
//         </View>

//         {/* Modal for Forgot Password */}
//         <Modal
//           animationType="slide"
//           transparent={true}
//           visible={modalVisible}
//           onRequestClose={() => setModalVisible(false)}
//         >
//           <View style={styles.modalOverlay}>
//             <View style={styles.modalContainer}>
//               <Text style={styles.modalTitle}>Forgot Password?</Text>
//               <TextInput
//                 style={styles.modalInput}
//                 placeholder="Enter Your Mobile Number"
//                 placeholderTextColor="#aaa"
//                 keyboardType="phone-pad"
//                 value={mobileNumber}
//                 onChangeText={(text) => setMobileNumber(text)}
//               />
//               <View style={styles.modalButtonContainer}>
//                 <TouchableOpacity
//                   style={styles.cancelButton}
//                   onPress={() => setModalVisible(false)}
//                 >
//                   <Text style={styles.cancelButtonText}>Cancel</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
//                   <Text style={styles.sendButtonText}>Send</Text>
//                 </TouchableOpacity>
//               </View>
//             </View>
//           </View>
//         </Modal>
//       </View>
//     </ImageBackground>
//   );
// };

// export default LoginScreen;

// const styles = StyleSheet.create({
//   background: {
//     flex: 1,
//     resizeMode: 'cover',
//     justifyContent: 'center',
//   },
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingHorizontal: 20,
//   },
//   loginContainer: {
//     width: '90%',
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     padding: 20,
//     elevation: 10,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.3,
//     shadowRadius: 4,
//   },
//   logo: {
//     width: 100,
//     height: 50,
//     resizeMode: 'contain',
//     alignSelf: 'center',
//     marginBottom: 10,
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//     color: '#333',
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 15,
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 5,
//     padding: 10,
//   },
//   iconCircle: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     backgroundColor: '#007BFF',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginRight: 10,
//   },
//   input: {
//     flex: 1,
//     fontSize: 16,
//     color: '#000',
//   },
//   checkboxContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   checkboxLabel: {
//     fontSize: 16,
//     color: '#333',
//   },
//   forgotPassword: {
//     alignSelf: 'flex-end',
//     marginBottom: 20,
//   },
//   forgotText: {
//     color: '#007BFF',
//     fontSize: 14,
//   },
//   loginButton: {
//     backgroundColor: '#007BFF',
//     paddingVertical: 15,
//     borderRadius: 5,
//     alignItems: 'center',
//   },
//   loginButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   modalOverlay: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   modalContainer: {
//     width: '80%',
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     padding: 20,
//     alignItems: 'center',
//   },
//   modalTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     color: '#333',
//   },
//   modalInput: {
//     height: 50,
//     borderColor: '#ddd',
//     borderWidth: 1,
//     borderRadius: 5,
//     paddingHorizontal: 10,
//     width: '100%',
//     marginBottom: 20,
//     fontSize: 16,
//     color: '#000',
//   },
//   modalButtonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: '100%',
//   },
//   cancelButton: {
//     flex: 1,
//     backgroundColor: '#aaa',
//     paddingVertical: 12,
//     borderRadius: 5,
//     alignItems: 'center',
//     marginRight: 10,
//   },
//   cancelButtonText: {
//     color: '#fff',
//     fontSize: 16,
//   },
//   sendButton: {
//     flex: 1,
//     backgroundColor: '#007BFF',
//     paddingVertical: 12,
//     borderRadius: 5,
//     alignItems: 'center',
//   },
//   sendButtonText: {
//     color: '#fff',
//     fontSize: 16,
//   },
// });

