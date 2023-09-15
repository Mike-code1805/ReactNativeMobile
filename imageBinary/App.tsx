/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, useColorScheme } from 'react-native';
import { ImageLibraryOptions, launchImageLibrary, launchCamera } from 'react-native-image-picker';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import Clipboard from '@react-native-clipboard/clipboard'

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const [selectedImage, setSelectedImage] = useState()
  const [base64, setbase64] = useState('')
  const openImagePicker = () => {
    const options: ImageLibraryOptions = {
      mediaType: 'photo',
      includeBase64: true,
      quality: 0.5,
    };
    launchCamera(options, (response: any) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('Image picker error: ', response.error);
      } else {
        console.log('==================================================================================================================');
        console.log('==================================================================================================================');
        console.log(response);
        let imageUri = response.uri || response.assets?.[0]?.uri;
        let base = response.assets?.[0].base64 || 'No image base 64';
        setSelectedImage(imageUri);
        setbase64(base);
      }
    })
  }
  const [copiedText, setCopiedText] = useState('');

  const copyToClipboard = () => {
    Clipboard.setString(base64);
  };

  const fetchCopiedText = async () => {
    const text = await Clipboard.getString();
    setCopiedText(text);
  };
  // launchImageLibrary(options, (response: any) => {
  //   if (response.didCancel) {
  //     console.log('User cancelled image picker');
  //   } else if (response.error) {
  //     console.log('Image picker error: ', response.error);
  //   } else {
  //     console.log('==================================================================================================================');
  //     console.log('==================================================================================================================');
  //     console.log(response);
  //     let imageUri = response.uri || response.assets?.[0]?.uri;
  //     setSelectedImage(imageUri);
  //   }
  // });
  console.log({ selectedImage, copiedText })
  return (
    <SafeAreaView style={backgroundStyle}>
      <TouchableOpacity onPress={openImagePicker}>
        <Text>TOUCH ME</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={copyToClipboard}>
        <Text>Copy</Text>
      </TouchableOpacity>
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
