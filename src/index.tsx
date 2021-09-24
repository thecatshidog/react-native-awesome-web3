import { NativeModules } from 'react-native';
import base64 from 'react-native-base64';

const { AwesomeWeb3 } = NativeModules;

class NativeWeb3 {
  async generatorSeed(
    mnemonic: string,
    password?: string | null
  ): Promise<Uint8Array> {
    const psd = password ? password : '';
    const base64Str = await AwesomeWeb3.generateSeed(mnemonic, psd);
    const seed = new Uint8Array(
      base64
        .decode(base64Str)
        .split('')
        .map((c) => c.charCodeAt(0))
    );
    return seed;
  }
}
export default NativeWeb3;
