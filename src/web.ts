import { WebPlugin } from '@capacitor/core';

import type { PopupTextPlugin } from './definitions';

export class PopupTextWeb extends WebPlugin implements PopupTextPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
