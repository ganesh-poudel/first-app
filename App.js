import React, { useContext } from "react";
import { MediaContext, MediaProvider } from "./contexts/MediaContext";
import Home from "./views/Home.js";
import AppContainer from "./navigators/Navigator.js";

const App = () => {
  return (
    <MediaProvider>
      <AppContainer />
    </MediaProvider>
  );
};

export default App;

// <View style={styles.container}>
//   <Text>Open up App.js to start working on your app!</Text>
// </View>

// <View style={{marginTop: 19}}>
//   <FlatList
//     data={mediaArray}
//     renderItem={({item}) => {
//       return (
//         <TouchableOpacity>
//           <View style={styles.container}>
//             <Image
//               style={styles.image}
//               source={{uri: item.thumbnails.w160}}
//             />
//             <View style={styles.details}>
//               <Text style={styles.title}>{item.title}</Text>
//               <Text style={styles.description}>{item.description}</Text>
//             </View>
//           </View>
//         </TouchableOpacity>
//       );
//     }}
//   />
// </View>