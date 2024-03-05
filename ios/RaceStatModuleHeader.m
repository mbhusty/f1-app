//
//  RaceStat.m
//  F1Hub
//
//  Created by Anisimov Artem on 03.03.2024.
//

#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(RaceStat, NSObject)


RCT_EXTERN_METHOD(startActivity)
RCT_EXTERN_METHOD(endActivity)
RCT_EXTERN_METHOD(updateActivity: (NSString *) name)

@end
