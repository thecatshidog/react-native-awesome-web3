import { NativeModules } from 'react-native';

type AwesomeWeb3Type = {
  multiply(a: number, b: number): Promise<number>;
};

const { AwesomeWeb3 } = NativeModules;

export default AwesomeWeb3 as AwesomeWeb3Type;
