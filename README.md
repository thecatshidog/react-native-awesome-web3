# react-native-awesome-web3

web3 with native

## Installation

```sh
npm install react-native-awesome-web3
```

## iOS

should in ios Podfile add

```
pod 'OpenSSL', :git => 'https://github.com/bither/OpenSSL.git', :branch => 'master'
pod 'Bitheri', :git => 'https://github.com/bither/bitheri.git', :branch => 'develop'
```

## Usage

```js
import AwesomeWeb3 from "react-native-awesome-web3";

// ...

const result = await new AwesomeWeb3().generatorSeed(mnemonic, password?);
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
