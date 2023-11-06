import { registerPlugin } from '@capacitor/core';

import type { PopupTextPlugin } from './definitions';

const PopupText = registerPlugin<PopupTextPlugin>('PopupText', {
  web: () => import('./web').then(m => new m.PopupTextWeb()),
});

export * from './definitions';
export { PopupText };
