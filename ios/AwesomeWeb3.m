#import "AwesomeWeb3.h"
#import <AVFoundation/AVFoundation.h>
//#import <React/RCTBridgeModule.h>
//@import web3swift;
#import <Bitheri/BTBIP39.h>


@interface AwesomeWeb3 ()

@end


@implementation AwesomeWeb3


RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(printLog:(NSString *)info) {
    NSLog(@"%@", info);
    
}

RCT_EXPORT_METHOD(generateSeed:(NSString *)mnemonic withPsd:(NSString *)psd success:(RCTPromiseResolveBlock)successCallback failure:(RCTPromiseRejectBlock)failureCallback) {
    NSArray *array = [mnemonic componentsSeparatedByString:@" "];
    if (array.count != 12) {
        if(failureCallback){
            failureCallback(@"-1", @"mnemonic error", nil);
        }
        return;
    }
    NSData *seed = [[BTBIP39 sharedInstance] toSeed:mnemonic withPassphrase:psd];
    if (seed && successCallback) {
        NSData *base64Seed = [seed base64EncodedDataWithOptions:0];
        NSString *base64StringSeed = [NSString stringWithUTF8String:[base64Seed bytes]];
        successCallback(base64StringSeed);
    }
    
    
    
}

//设置异步处理的回调函数
//sendMessage为方法名，successCallback为成功回调，failureCallback为失败回调
RCT_EXPORT_METHOD(sendMessage:(NSString *)message success:(RCTPromiseResolveBlock)successCallback failure:(RCTPromiseRejectBlock)failureCallback {
    if (message.length>0 && successCallback){
        successCallback(@"发送成功!");
    }
    else{
        if(failureCallback){
            failureCallback(@"-1", @"发送失败", nil);
        }
    }
})


@end
