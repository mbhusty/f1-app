//
//  RaceStatLiveActivityIntent.swift
//  F1Hub
//
//  Created by Anisimov Artem on 12.03.2024.
//

import Foundation
import AppIntents


@available(iOS 16, *)
public struct StartIntent: LiveActivityIntent {
  public init() {}
  public static var title: LocalizedStringResource = "Start"
  public func perform() async throws -> some IntentResult {
    RaceStatEmitter.emitter?.sendEvent(withName: "onStart", body: nil)
    return .result()
  }
}

@available(iOS 16, *)
public struct ResetIntent: LiveActivityIntent {
  public init() {}
  public static var title: LocalizedStringResource = "Reset"
  public func perform() async throws -> some IntentResult {
    RaceStatEmitter.emitter?.sendEvent(withName: "onReset", body: nil)
    return .result()
  }
}
