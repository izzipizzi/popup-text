export interface PopupTextPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
