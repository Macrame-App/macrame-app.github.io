# Linking devices

#### To use a device with Macrame the server and remote device should be linked. If a device is not linked panels can not be viewed or used.

---

&nbsp;

1. Open the **devices page** on the server. 

    ::: details *Example:* Server view
      ![Server Device View](../../assets/img/Devices-ServerView.jpg)
    :::

   &nbsp;

2. Scan the QR code or navigate, in a browser of your choosing, to the listed network address.

   *Example address:
   http://192.168.1.1:54321/devices*

    ::: info
    Your device will probably warn you because of the unsecured connection. If you want to keep using the application you should continue to the unsecured webpage. 

    _If you don't I don't blame you. It's an application in development, and you're just being safe._

    The connection might be secured in the future or a dedicated app will be build
    :::

&nbsp;

3. The device will automatically start an access request. 

    ::: details *Example:* Remote view
      ![Remote Server View](../../assets/img/Devices-RemoteView.jpg)
    :::

    If there are no devices linked the server will update once it has received the first access request. 

    *If there are already devices shown, you should press the **reload** button once access has been requested.*

    
    ::: details *Example:* New device requested access
      ![Server New Device View](../../assets/img/Devices-ServerView2.jpg)
    :::

    &nbsp;

4. Press **Link device**. It will show you a one-time-pin in a dialog. Enter the pin on the remote device in the dialog that popped up.

    ::: details *Example:* Pin dialog
      ![Server Pin Dialog](../../assets/img/Devices-ServerLinkPin.jpg)
    :::

    ::: details *Example:* Pin input dialog
      ![Server Pin Dialog](../../assets/img/Devices-RemoteServerPin.jpg)
    :::

    &nbsp;

5. If the pin is entered correctly the device will be authorized and linking will be succesfull! 

    ::: details *Example:* Device linked
      ![Server Pin Dialog](../../assets/img/Devices-DeviceLinked.jpg)
    :::

    ::: details *Example:* Authorized by server
      ![Server Pin Dialog](../../assets/img/Devices-ServerRemoteAuthorized.jpg)
    :::

    &nbsp;


## Restarting the linking process

*If something went wrong in the standard linking process you can restart the process with the next steps*

1. Press the **reload** button on the device. 

    *A new access request will be started.*

2. Press the **reload** button on the server. 

    The device should show up and you can continue step 4 of the linking process. 


## Removing devices manually

1. Go to the directory Macrame is saved in. Open the **devices** folder. 
    Remove the files that are inside this folder. 

2. **Restart Macrame.**

3. **Reload** the Macrame webpage on your LAN device.

&nbsp;

::: info
  If the above mentioned steps didn't work something else might be broken. 

  Please report the bug. It's much appreciated. 
:::