//
//  RCTMyNativeModule.swift
//  nativeModuleTest
//
//  Created by Slava on 12.03.2024.
//

import Foundation

@objc(RCTMyNativeModule)
class RCTMyNativeModule: NSObject {

  @objc func getLog(_ name: String, text: String) -> Void {
    DispatchQueue.main.async(execute: {
      let alert = UIAlertController(title: name, message: text, preferredStyle: .alert)
      let defaultAction = UIAlertAction(title: "OK", style: .default, handler: nil)
      alert.addAction(defaultAction)
      
      UIApplication.shared.windows.filter {$0.isKeyWindow}.first?.rootViewController?.present(alert, animated: true, completion: nil)
    })
  }

  
  @objc static func requiresMainQueueSetup() -> Bool {
      return false
    }
}
