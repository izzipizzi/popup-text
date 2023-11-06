export interface PopupTextPlugin {
    showPopup(options: {
        message: string;
    }): Promise<{
        message: string;
    }>;
}
