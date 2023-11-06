import Foundation

@objc public class PopupText: NSObject {
    @objc public func showPopup(_ message: String) -> String {
        print(message)
        return message
    }
}
