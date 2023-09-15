/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import { Alert, SafeAreaView, StyleSheet, Text, TouchableOpacity, useColorScheme } from 'react-native';
// import { ImageLibraryOptions, launchImageLibrary, openCamera } from 'react-native-image-crop-picker';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import ImagePicker from 'react-native-image-crop-picker';
import Clipboard from '@react-native-clipboard/clipboard'

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const [selectedImage, setSelectedImage] = useState<any>()
  const [base64, setbase64] = useState('')
  
  const openImagePickerCrop = () => {
    ImagePicker.openCamera({
      cropping: true,
      mediaType: 'photo',
      compressImageMaxWidth: 1000,
      compressImageMaxHeight: 1000,
      includeExif: true,
    }).then((image) => {
      console.log('my image', image);
      setSelectedImage({
        image: {
          uri: image.path,
          width: image.width,
          height: image.height,
          mime: image.mime,
        }, 
        iamges: null,
      })
    }).catch((error) => console.error(error))
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
      <TouchableOpacity onPress={openImagePickerCrop}>
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
