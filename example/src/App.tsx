import * as React from 'react';
import 'react-native-get-random-values';
import '@ethersproject/shims';

import { utils } from 'ethers';

import { StyleSheet, View, Text, Button, NativeModules } from 'react-native';
import AwesomeWeb3 from 'react-native-awesome-web3';

export default function App() {
  const [result, setResult] = React.useState<number | undefined>();

  React.useEffect(() => {
    const obj = new AwesomeWeb3();

    obj
      .generatorSeed(
        'parrot park tornado ice cinnamon simple join federal crack ticket situate ill',
        ''
      )
      .then((seed) => {
        // console.log(seed);
        console.log(utils.HDNode.fromSeed(seed));
        console.log(
          utils.HDNode.fromMnemonic(
            'parrot park tornado ice cinnamon simple join federal crack ticket situate ill'
          )
        );
        setResult(0);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>

      <Button
        title="Button"
        onPress={() => {
          let AwesomeWeb3 = NativeModules.AwesomeWeb3;
          AwesomeWeb3.generateSeed(
            'parrot park tornado ice cinnamon simple join federal crack ticket situate ill',
            ''
          )
            .then((successResult: string) => {
              console.log('result-----' + successResult);
            })
            .catch((error: any) => {
              console.log('error----' + error.code + ', ' + error.message);
            });
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
