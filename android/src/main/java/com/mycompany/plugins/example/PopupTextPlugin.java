package com.mycompany.plugins.example;

import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

import android.app.AlertDialog;
import android.content.DialogInterface;


@CapacitorPlugin(name = "PopupText")
public class PopupTextPlugin extends Plugin {

    private PopupText implementation = new PopupText();

  @PluginMethod
  public void showPopup(PluginCall call) {
    String message = call.getString("message", "");

    AlertDialog.Builder builder = new AlertDialog.Builder(getContext());
    builder.setMessage(message);
    builder.setPositiveButton("OK", new DialogInterface.OnClickListener() {
      @Override
      public void onClick(DialogInterface dialog, int which) {
        call.resolve();
      }
    });
    builder.show();
  }
}
