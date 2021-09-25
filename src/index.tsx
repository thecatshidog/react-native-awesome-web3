import { NativeModules, Platform } from 'react-native';
import base64 from 'react-native-base64';

const { AwesomeWeb3 } = NativeModules;

class NativeWeb3 {
  async generatorSeed(
    mnemonic: string,
    password?: string | undefined
  ): Promise<Uint8Array> {
    const psd = password ? password : '';
    if (Platform.OS === 'android') {
      const base64Str = await AwesomeWeb3.generateSeed(mnemonic, psd);
      const seed = new Uint8Array(
        base64
          .decode(base64Str)
          .split('')
          .map((c) => c.charCodeAt(0))
      );
      return seed;
    }
    return new Uint8Array([0]);
  }
}
export default NativeWeb3;
