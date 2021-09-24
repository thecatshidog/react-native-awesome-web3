package com.reactnativeawesomeweb3;

import android.os.Build;

import androidx.annotation.NonNull;
import androidx.annotation.RequiresApi;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.module.annotations.ReactModule;

import org.web3j.crypto.MnemonicUtils;
import java.util.Base64;

@ReactModule(name = AwesomeWeb3Module.NAME)
public class AwesomeWeb3Module extends ReactContextBaseJavaModule {
    public static final String NAME = "AwesomeWeb3";

    public AwesomeWeb3Module(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    @NonNull
    public String getName() {
        return NAME;
    }

    @RequiresApi(api = Build.VERSION_CODES.O)
    @ReactMethod
    public void generateSeed(String mnemonic, String password, Promise promise) {
      byte[] seed = MnemonicUtils.generateSeed(mnemonic, password);
      String str = Base64.getEncoder().encodeToString(seed);
      promise.resolve(str);
    }

}
