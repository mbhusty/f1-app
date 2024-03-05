//
//  RaceStatLiveActivity.swift
//  RaceStat
//
//  Created by Anisimov Artem on 03.03.2024.
//

import ActivityKit
import WidgetKit
import SwiftUI

struct RaceStatAttributes: ActivityAttributes {
    public struct ContentState: Codable, Hashable {
        // Dynamic stateful properties about your activity go here!
        var emoji: String
    }

    // Fixed non-changing properties about your activity go here!
    var name: String
}

struct Information: Codable {
  let status: String
  let driverName: String
  let expectedDeliveryTime: String
}

func toJson(dataString: String) -> Information {
  let decoder = JSONDecoder()
  let stateData = Data(dataString.utf8);
  let data = try? decoder.decode(Information.self, from: stateData)
  if (data == nil) {
    NSLog("Error: %@ %@", "Data is null");
    return Information(status: "No status", driverName: "No Driver Name", expectedDeliveryTime: "00:00")
  }
  return data ?? Information(status: "No status", driverName: "No Driver Name", expectedDeliveryTime: "00:00");
}

@available(iOS 16.1, *)
struct RaceStatLiveActivity: Widget {

  var body: some WidgetConfiguration {
      ActivityConfiguration(for: RaceStatAttributes.self) { context in
          // Lock screen/banner UI goes here
          VStack {
              Text("Welcome \(context.state.emoji)")
          }
          .activityBackgroundTint(Color.red)
          .activitySystemActionForegroundColor(Color.white)

      } dynamicIsland: { context in
          DynamicIsland {
              // Expanded UI goes here.  Compose the expanded UI through
              // various regions, like leading/trailing/center/bottom
            DynamicIslandExpandedRegion(.leading) {
                Text("Leading")
            }
            DynamicIslandExpandedRegion(.trailing) {
                Text("Trailing")
            }
            DynamicIslandExpandedRegion(.bottom) {
                Text("Bottom \(context.state.emoji)")
                // more content
            }
          } compactLeading: {
            Text("L")
          } compactTrailing: {
            Text("T \(context.state.emoji)")
          } minimal: {
            Text(context.state.emoji)
          }
          .widgetURL(URL(string: "http://www.apple.com"))
          .keylineTint(Color.red)
      }
  }
  
}

extension RaceStatAttributes {
    fileprivate static var preview: RaceStatAttributes {
      RaceStatAttributes(name: "World")
    }
}

extension RaceStatAttributes.ContentState {
    fileprivate static var smiley: RaceStatAttributes.ContentState {
      RaceStatAttributes.ContentState(emoji: "😀")
     }
     
     fileprivate static var starEyes: RaceStatAttributes.ContentState {
       RaceStatAttributes.ContentState(emoji: "🤩")
     }
}
