//
//  RCTMyNativeModule.m
//  nativeModuleTest
//
//  Created by Slava on 12.03.2024.
//

#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(RCTMyNativeModule, NSObject)

RCT_EXTERN_METHOD(getLog:(NSString *)name text:(NSString *)text)

@end
