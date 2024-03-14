/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  Button,
  Dimensions,
  NativeModules,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

function App(): React.JSX.Element {
  const [title, setTitle] = useState<string>('');
  const [text, setText] = useState<string>('');

  const isDarkMode = useColorScheme() === 'dark';

  const {MyNativeModule} = NativeModules;

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const getLogHandler = () => {
    MyNativeModule.getLog(title, text);
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={{
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={[
            backgroundStyle,
            {
              rowGap: 10,
            },
          ]}>
          <TextInput
            value={title}
            onChangeText={setTitle}
            placeholder="title"
            style={{backgroundColor: '#fff'}}
          />
          <TextInput
            value={text}
            onChangeText={setText}
            placeholder="text"
            style={{backgroundColor: '#fff'}}
          />
          <Button title="alert" onPress={getLogHandler} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
