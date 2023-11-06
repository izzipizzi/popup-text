import { WebPlugin } from '@capacitor/core';
import type { PopupTextPlugin } from './definitions';
export declare class PopupTextWeb extends WebPlugin implements PopupTextPlugin {
    showPopup(options: {
        message: string;
    }): Promise<{
        message: string;
    }>;
}
