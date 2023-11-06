import { WebPlugin } from '@capacitor/core';
export class PopupTextWeb extends WebPlugin {
    async showPopup(options) {
        console.log('Here we show popup', options);
        return options;
    }
}
//# sourceMappingURL=web.js.map