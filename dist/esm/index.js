import { registerPlugin } from '@capacitor/core';
const PopupText = registerPlugin('PopupText', {
    web: () => import('./web').then(m => new m.PopupTextWeb()),
});
export * from './definitions';
export { PopupText };
//# sourceMappingURL=index.js.map