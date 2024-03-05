//
//  RaceStat.swift
//  F1Hub
//
//  Created by Anisimov Artem on 03.03.2024.
//

import Foundation
import ActivityKit

@objc(RaceStat)
class RaceStat: NSObject {
  // RaceStatAttributes
  @objc
    static func requiresMainQueueSetup() -> Bool {
      return false
    }

  @objc(startActivity)
  func startActvity(){
    do{
      if #available(iOS 16.1, *){
        let raceStatAttributes = RaceStatAttributes(name: "Food Delivery")
        let raceStatContentState = RaceStatAttributes.ContentState(emoji: "https://t.me/react_pain")
        let activity = try Activity<RaceStatAttributes>.request(attributes: raceStatAttributes, contentState: raceStatContentState,  pushType: nil)
        
      }else{
        print("Dynamic Island and live activies not supported")
      }
      
    }catch (_){
      print("there is some error")
    }
  }
  
  @objc(updateActivity:)
  func updateActivity(name: String){
    do{
      if #available(iOS 16.1, *){
        let raceStatContentState = RaceStatAttributes.ContentState(emoji: name)
        Task{
          for activity in Activity<RaceStatAttributes>.activities {
            await activity.update(using: raceStatContentState)
          }
        }
      }
    }catch(_){
      print("some error")
    }
  }

 @objc(endActivity)
  func endActivity(){
    Task{
      if #available(iOS 16.1, *){
        for activity in Activity<RaceStatAttributes>.activities {
          await activity.end()
        }
      }
    }
  }

      
//  @objc(listAllActivities:rejecter:)
//      func listAllActivities(_ resolve: RCTPromiseResolveBlock, rejecter reject:RCTPromiseRejectBlock) -> Void {
//          if #available(iOS 16.1, *) {
//              var activities = Activity<RaceStatAttributes>.activities
//              activities.sort { $0.id > $1.id }
//              
//              return resolve(activities.map{["id": $0.id, "data": $0.contentState.data ]})
//          } else {
//            reject("Not available", "", NSError())
//          }
//      }
      
 
}
