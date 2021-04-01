import React, { useRef  } from 'react';
import { Text, View } from 'react-native';
import { RNCamera } from 'react-native-camera';
import BarcodeMask from 'react-native-barcode-mask';

export default function BarcodeScanner(props) {
  const camera = useRef(null);
  const barcodeCodes = [];
  function onBarCodeRead(scanResult) {
    let args = scanResult;
    args.isScanned = false;
    if(props.onScanned){
       props.onScanned(args)
    }
    
    if (scanResult.data != null) {
	if (!barcodeCodes.includes(scanResult.data)) {
    barcodeCodes.push(scanResult.data)
	  // console.warn('onBarCodeRead call');
	}
    }
    return;
  }

  async function takePicture() {
    if (camera) {
      const options = { quality: 0.5, base64: true };
      const data = await camera.takePictureAsync(options);
      console.log(data.uri);
    }
  }

    return (
      <View style={styles.container}>
        <RNCamera
            ref={camera}
            defaultTouchToFocus
            mirrorImage={false}
            onBarCodeRead={onBarCodeRead}
            onFocusChanged={() => {}}
            onZoomChanged={() => {}}
            style={styles.preview}
            type={RNCamera.Constants.Type.back}
        >
        <BarcodeMask />
        </RNCamera>
        <View style={[styles.overlay, styles.topOverlay]}>
	  <Text style={styles.scanScreenMessage}>Please scan the barcode.</Text>
	</View>
        {
            props.children
        }
      </View>
    );
}

const styles = {
  container: {
    flex: 1
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  overlay: {
    position: 'absolute',
    padding: 16,
    right: 0,
    left: 0,
    alignItems: 'center'
  },
  topOverlay: {
    top: 0,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  bottomOverlay: {
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.4)',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  enterBarcodeManualButton: {
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 40
  },
  scanScreenMessage: {
    fontSize: 14,
    color: 'white',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  }
};
