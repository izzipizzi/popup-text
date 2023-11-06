var capacitorPopupText = (function (exports, core) {
    'use strict';

    const PopupText = core.registerPlugin('PopupText', {
        web: () => Promise.resolve().then(function () { return web; }).then(m => new m.PopupTextWeb()),
    });

    class PopupTextWeb extends core.WebPlugin {
        async showPopup(options) {
            console.log('Here we show popup', options);
            return options;
        }
    }

    var web = /*#__PURE__*/Object.freeze({
        __proto__: null,
        PopupTextWeb: PopupTextWeb
    });

    exports.PopupText = PopupText;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map
