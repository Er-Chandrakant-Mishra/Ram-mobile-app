import React, { useState } from 'react';
import { View, ScrollView, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from './Header';

const CourseDetails = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);

  const toggleDrawer = () => {
    setDrawerVisible(!drawerVisible);
  };

  const courseModules = [

    { title: "Story and Screenplay", status: "Right" },
    { title: "Screenwriter", status: "Expired" },
    { title: "Idea Premise and Concept", status: "Locked" },
    { title: "Logline Synopsis Outline and Treatment", status: "Locked" },
    { title: "Story", status: "Locked" },
    { title: "Story Structure", status: "Locked" },
    { title: "Plot", status: "Locked" },
    { title: "Scenes and Sequences", status: "Locked" },
    { title: "Character", status: "Locked" },
    { title: "Theme and Emotions", status: "Locked" },
    { title: "Story World", status: "Locked" },
    { title: "Conflict", status: "Locked" },
    { title: "Exposition", status: "Locked" },
    { title: "CRISIS", status: "Locked" },
    { title: "Dialogue", status: "Locked" },
    { title: "Narrative", status: "Locked" },
    // { title: "Rewriting", status: "Locked" },
    // { title: "Adaptation", status: "Locked" },
  ];

  return (
    <View style={styles.container}>
      <Header
        onProfileClick={() => console.log('Profile clicked')}
        toggleDrawer={toggleDrawer}
        drawerVisible={drawerVisible}
      />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {courseModules.map((module, index) => (
          <View key={index} style={styles.moduleRow}>
            <Text style={styles.moduleText}>{index + 1}. {module.title}</Text>
            <TouchableOpacity
              style={[
                styles.statusIndicator,
                module.status === "Expired"
                  ? styles.expired
                  : module.status === "Right"
                  ? styles.right
                  : styles.locked,
              ]}
            >
              {module.status === "Locked" && (
                <Icon name="lock" size={14} color="#ff2c2c" />
              )}
              {module.status === "Right" && (
                <Icon name="check-circle" size={14} color="#28a745" />
              )}
              {module.status === "Expired" && (
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Text style={[styles.statusText, { color: 'red' }]}>(Expired)</Text>
                  <Icon name="unlock" size={14} color="#6c757d" style={{ marginLeft: 5 }} />
                </View>
              )}
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingVertical: 50,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  moduleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  moduleText: {
    fontSize: 16,
    color: '#000',
    flex: 1,
  },
  statusIndicator: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  expired: {
    backgroundColor: '#f8d7da',
  },
  locked: {
    backgroundColor: '#e4e5e7',
    flexDirection: 'row',
    alignItems: 'center',
  },
  right: {
    backgroundColor: '#d4edda',
  },
  statusText: {
    fontSize: 12,
  },
});

export default CourseDetails;











// import React from 'react';
// import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';

// const CourseDetails = () => {
//   const courseModules = [
//     { title: "Story and Screenplay", status: "Right" },
//     { title: "Screenwriter", status: "Expired" },
//     { title: "Idea Premise and Concept", status: "Locked" },
//     { title: "Logline Synopsis Outline and Treatment", status: "Locked" },
//     { title: "Story", status: "Locked" },
//     { title: "Story Structure", status: "Locked" },
//     { title: "Plot", status: "Locked" },
//     { title: "Scenes and Sequences", status: "Locked" },
//     { title: "Character", status: "Locked" },
//     { title: "Theme and Emotions", status: "Locked" },
//     { title: "Story World", status: "Locked" },
//     { title: "Conflict", status: "Locked" },
//     { title: "Exposition", status: "Locked" },
//     { title: "CRISIS", status: "Locked" },
//     { title: "Dialogue", status: "Locked" },
//     { title: "Narrative", status: "Locked" },
//     { title: "Rewriting", status: "Locked" },
//     { title: "Adaptation", status: "Locked" },
//     // Repeat the list for demonstration
//     { title: "Rewriting", status: "Locked" },
//     { title: "Adaptation", status: "Locked" },
//     { title: "Rewriting", status: "Locked" },
//     { title: "Adaptation", status: "Locked" },
//   ];

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Course Details</Text>
//       <ScrollView 
//         style={styles.scrollView} 
//         contentContainerStyle={styles.scrollContent} 
//         showsVerticalScrollIndicator={false}
//       >
//         {courseModules.map((module, index) => (
//           <View key={index} style={styles.moduleRow}>
//             <Text style={styles.moduleText}>{index + 1}) {module.title}</Text>
//             <TouchableOpacity
//               style={[
//                 styles.statusIndicator,
//                 module.status === "Expired"
//                   ? styles.expired
//                   : module.status === "Right"
//                   ? styles.right
//                   : styles.locked,
//               ]}
//             >
//               {module.status === "Locked" && (
//                 <Icon name="lock" size={14} color="#ff2c2c" />
//               )}
//               {module.status === "Right" && (
//                 <Icon name="check-circle" size={14} color="#28a745" />
//               )}
//               {module.status === "Expired" && (
//                 <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//                   <Text style={[styles.statusText, { color: 'red' }]}>(Expired)</Text>
//                   <Icon name="unlock" size={14} color="#6c757d" style={{ marginLeft: 5 }} />
//                 </View>
//               )}
//             </TouchableOpacity>
//           </View>
//         ))}
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     padding: 16,
//   },
//   header: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 16,
//   },
//   scrollView: {
//     flex: 1,
//   },
//   scrollContent: {
//     paddingBottom: 16,
//   },
//   moduleRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingVertical: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//   },
//   moduleText: {
//     fontSize: 16,
//     flex: 1,
//     color: '#000',
//   },
//   statusIndicator: {
//     paddingHorizontal: 10,
//     paddingVertical: 5,
//     borderRadius: 4,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   expired: {
//     backgroundColor: '#f8d7da',
//   },
//   locked: {
//     backgroundColor: '#e4e5e7',
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   right: {
//     backgroundColor: '#d4edda',
//   },
//   statusText: {
//     fontSize: 12,
//   },
// });

// export default CourseDetails;

