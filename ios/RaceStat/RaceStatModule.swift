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
  private func areActivitiesEnabled() -> Bool {
    if #available(iOS 16.1, *) {
      return ActivityAuthorizationInfo().areActivitiesEnabled
    } else {
      return false
    }
  }
  
  @objc(startActivity:)
  func startActivity(_ name: String) {
    if (!areActivitiesEnabled()) {
          // User disabled Live Activities for the app, nothing to do
          return
    }
    let raceStatAttributes = RaceStatAttributes()
    let raceStatContentState = RaceStatAttributes.ContentState(lap: name)
    
    do{
     
      if #available(iOS 16.1, *) {
        _ = try Activity<RaceStatAttributes>.request(attributes: raceStatAttributes, contentState: raceStatContentState,  pushType: nil)
      } else {
        // Fallback on earlier versions
      }
      
    }catch (_){
      print("there is some error")
    }
  }
  
  @objc(updateActivity:)
  func updateActivity(name: String){
      if #available(iOS 16.1, *){
        let raceStatContentState = RaceStatAttributes.ContentState(lap: name)
        Task{
          for activity in Activity<RaceStatAttributes>.activities {
            await activity.update(using: raceStatContentState)
          }
        }
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
