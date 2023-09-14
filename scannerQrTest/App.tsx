import React, {useEffect, useRef, useState} from 'react';
import {SafeAreaView, Alert, View, Dimensions} from 'react-native';
import {CameraScreen} from 'react-native-camera-kit';
// import Animated, {
//   useSharedValue,
//   useAnimatedProps,
// } from 'react-native-reanimated';
// import {
//   Camera,
//   useCameraDevices,
//   useFrameProcessor,
// } from 'react-native-vision-camera';
// import {
//   Camera,
//   useCameraDevices,
//   useFrameProcessor,
// } from 'react-native-vision-camera';
// import {scanBarcodes, BarcodeFormat} from 'vision-camera-code-scanner';
// import 'react-native-reanimated';

// const AnimatedText = Animated.createAnimatedComponent(TextInput);

function App(): JSX.Element {
  // const camera = useRef(null);
  // const [permissionCamera, setpermissionCamera] = useState<any>();
  // const detectorResult = useSharedValue('');

  // useEffect(() => {
  //   (async () => {
  //     const cameraStatusPermission = await Camera.requestCameraPermission();
  //     setpermissionCamera(cameraStatusPermission);
  //   })();
  // }, []);

  // const {back} = useCameraDevices();
  // const frameProcesor = useFrameProcessor(frame => {
  //   const detectedBarCodes = scanBarcodes(frame, [BarcodeFormat.QR_CODE]);
  //   const barcodesStr = detectedBarCodes
  //     .map(barcode => barcode.displayValue)
  //     .join('');
  //   console.log(barcodesStr);
  //   detectorResult.value = barcodesStr;
  // }, []);

  // const animatedTextProps = useAnimatedProps(
  //   () => ({text: detectorResult.value}),
  //   [detectorResult.value],
  // );
  const {height: H} = Dimensions.get('screen');
  return (
    <SafeAreaView style={{flex: 1, height: 500}}>
      <View style={{height: H}}>
        <CameraScreen
          scanBarcode={true}
          onReadCode={event => Alert.alert('QR code found')} // optional
          showFrame={true} // (default false) optional, show frame with transparent layer (qr code or barcode will be read on this area ONLY), start animation for scanner,that stoped when find any code. Frame always at center of the screen
          laserColor="red" // (default red) optional, color of laser in scanner frame
          frameColor="white"
          cameraRatioOverlay={undefined}
          captureButtonImage={undefined} // optional, image capture button
          captureButtonImageStyle={{}}
          cameraFlipImage={undefined} // optional, image for flipping camera button
          cameraFlipImageStyle={{}}
          hideControls={false} // (default false) optional, hides camera controls
          torchOnImage={undefined} // optional, image for toggling on flash light
          torchOffImage={undefined} // optional, image for toggling off flash light
          torchImageStyle={{}}
          onBottomButtonPressed={function () {
            throw new Error('Error not implemented');
          }} // (default false) optional, show count for photos taken during that capture session
        />
      </View>

      {/* <Camera device={back!} isActive frameProcessor={frameProcesor} /> */}
    </SafeAreaView>
  );
}

export default App;
