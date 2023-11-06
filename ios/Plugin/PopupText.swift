import Foundation

@objc public class PopupText: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
