import { WebPlugin } from '@capacitor/core';
import type { PopupTextPlugin } from './definitions';

export class PopupTextWeb extends WebPlugin implements PopupTextPlugin {
  async showPopup(options: { message: string }): Promise<{ message: string }> {
    console.log('Here we show popup', options);
    return options;
  }
}
