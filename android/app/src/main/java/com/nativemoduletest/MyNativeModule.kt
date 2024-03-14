package com.nativemoduletest; // replace your-apps-package-name with your app’s package name
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import androidx.appcompat.app.AlertDialog
import kotlinx.coroutines.*

class MyNativeModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    override fun getName() = "MyNativeModule"
    @ReactMethod fun getLog(name: String, text: String) {
        MainScope().launch {
            val builder = AlertDialog.Builder(reactApplicationContext)
            builder.setTitle(name)
            builder.setMessage(text)

            builder.setPositiveButton("Ok", null)
            builder.setNegativeButton("Cancel", null)
            builder.show()
        }
    }
}
