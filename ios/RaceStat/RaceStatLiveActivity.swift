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
        var lap: String
    }
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
        HStack {
          Text("LAP \(context.state.lap)/50")
            .font(.subheadline)
              .monospacedDigit()
              .transition(.identity)
        }
          HStack {
              Image(systemName: "flag.slash.circle")
                  .font(.largeTitle)
                  .foregroundColor(.blue)
                  .padding()
              VStack(alignment: .leading, spacing: 10) {
                ActivityRowView(position: "1", image: "person.1.fill", text: "LEC", time: "Interval")
                ActivityRowView(position: "2", image: "person.1.fill", text: "NOR", time: "+0.004")
                ActivityRowView(position: "3", image: "person.1.fill", text: "VER", time: "+0.565")
              }
              .padding()
              .cornerRadius(10)
              .shadow(radius: 5)
              Spacer()
          }

      } dynamicIsland: { context in
          DynamicIsland {
              // Expanded UI goes here.  Compose the expanded UI through
              // various regions, like leading/trailing/center/bottom
            DynamicIslandExpandedRegion(.leading) {
              HStack {
                Text("LAP \(context.state.lap)/50")
                  .font(.subheadline)
                    .monospacedDigit()
                    .transition(.identity)
              }
                HStack {
                    Image(systemName: "flag.slash.circle")
                        .font(.largeTitle)
                        .foregroundColor(.blue)
                        .padding()
                    VStack(alignment: .leading, spacing: 10) {
                      ActivityRowView(position: "1", image: "person.1.fill", text: "LEC", time: "Interval")
                      ActivityRowView(position: "2", image: "person.1.fill", text: "NOR", time: "+0.004")
                      ActivityRowView(position: "3", image: "person.1.fill", text: "VER", time: "+0.565")
                    }
                    .padding()
                    .cornerRadius(10)
                    .shadow(radius: 5)
                    Spacer()
                }
                       }
                       
             
          } compactLeading: {
            Image(systemName: "timer")
                     .imageScale(.medium)
                     .foregroundColor(.cyan)
          } compactTrailing: {
              Text("LAP \(context.state.lap)/50")
          } minimal: {
            Image(systemName: "timer")
                     .imageScale(.medium)
                     .foregroundColor(.cyan)
          }
          .widgetURL(URL(string: "http://www.apple.com"))
          .keylineTint(Color.red)
      }
  }

  
}

struct ActivityRowView: View {
    var position: String
    var image: String
    var text: String
    var time: String
    
    var body: some View {
        HStack(spacing: 10) {
          Text(position)
          Spacer()
            Image(systemName: image)
                .foregroundColor(.blue)
            Text(text)
            Spacer()
            Text(time)
        }
    }
}

extension RaceStatAttributes.ContentState {
    fileprivate static var smiley: RaceStatAttributes.ContentState {
      RaceStatAttributes.ContentState(lap: "0")
     }
     
     fileprivate static var starEyes: RaceStatAttributes.ContentState {
       RaceStatAttributes.ContentState(lap: "0")
     }
}
