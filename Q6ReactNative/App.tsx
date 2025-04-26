/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  useWindowDimensions,
  View,
} from 'react-native';
import { SceneMap, TabView } from 'react-native-tab-view';
import EntryScene from './Q1';
import SumDigit from './Q2';
import MinimumOfThree from './Q3';
import Hailstone from './Q4';

const routes = [{
  key: 'q1',
  title: 'Q1',
}, {
  key: 'q2',
  title: 'Q2',
},{
  key: 'q3',
  title: 'Q3',
},{
  key: 'q4',
  title: 'Q4',
}
];
const renderScene = SceneMap({
  q1: EntryScene,
  q2: SumDigit,
  q3: MinimumOfThree,
  q4: Hailstone,
});
function App() {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  return (
    <View style={{ flex: 1, marginTop: 50 }}>
      <TabView style={{backgroundColor: 'black'}}
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
      />
    </View>
      



  );

}



export default App;
