//
//  TimerEventEmitter.swift
//  F1Hub
//
//  Created by Anisimov Artem on 12.03.2024.
//

import Foundation
import React

@objc(RaceStatEmitter)
class RaceStatEmitter: RCTEventEmitter {
  
  public static var emitter: RaceStatEmitter?
  
  override init() {
    super.init()
    RaceStatEmitter.emitter = self
  }
  
  override func supportedEvents() -> [String]! {
    return ["onStart", "onReset"]
  }
}
