import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(PopupTextPlugin)
public class PopupTextPlugin: CAPPlugin {
    private let implementation = PopupText()

    @objc func showPopup(_ call: CAPPluginCall) {
        let message = call.getString("message") ?? ""

            let alertController = UIAlertController(title: nil, message: message, preferredStyle: .alert)
            alertController.addAction(UIAlertAction(title: "OK", style: .default, handler: nil))

            DispatchQueue.main.async {
                self.bridge.viewController.present(alertController, animated: true, completion: nil)
            }

            call.resolve()
    }
}
