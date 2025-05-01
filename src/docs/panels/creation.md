# Panel creation

#### Panels can be created with simple HTML files. For better styling you can use CSS and if you feel like it you can add your custom JS for more custom functions.

---

&nbsp;

::: info DISCLAIMER
To create a panel basic knowledge of HTML, CSS and JSON is needed.
:::

### How to create a panel

1. Create a subdirectory in the **panels** folder.

   The directory name will be used as the panel name if the name is not defined in the **panel.json**

   _Example: Directory: "Panel_name" will become "Panel name" in the application._

&nbsp;

2. Create the following file structure:

   ```Directory
   Panel_name
   |- index.html
   |- output.css
   |- panel.json
   ```

   ::: details index.html
   This is the file that is used as a button panel. If you want to use custom JS, add script tags at the bottom of the body tag.
   :::

   ::: details output.css
   This file is loaded with the index.html and can contain custom panel styling.
   :::

   ::: details panel.json
   This file contains basic information about the pael.
   :::

   &nbsp;

3. You can save panel information in the panel.json file.

   ```json
   {
     "dir": "", // Will be removed in later updates.
     "name": "Panel name", // Will overwrite panel directory name.
     "description": "Lorem ipsum.", // Will be displayed on the panel overview page.
     "aspectRatio": "10/20", // Will be used for scaling.
     "macros": {} // Will be filled by the application.
   }
   ```

   &nbsp;

4. Create your desired button panel with HTML elements and style them with CSS.

   _A better explanation about creating panel layouts will be added later._

   &nbsp;

5. To turn an element into a trigger 2 things need to be present.

   An **ID attribute** and an **mcrm\_\_button attribute**.

   ```HTML
   <div id="button_1" mcrm__button>Example button</div>
   ```

   \*The ID will be used as to link the element to the specified macro. This link will be saved in **panel.json\***

   &nbsp;

6. It's also possible to use dialogs in the button panel itself.

   A couple of things are needed for the dialog triggers to work.

   A dialog trigger element:

   ```HTML
   <div dialog-trigger="#example-dialog" mcrm__dialog-trigger>
     Open Dialog
   </div>
   ```

   And a dialog element:

   ```HTML
   <dialog id="example-dialog" mcrm__dialog>
     <!-- Dialog content -->
   </dialog>
   ```

   Dialogs can be closed by clicking/tapping outside the dialog. Or a close element can be used.
   **This element should be inside of the dialog element.**

   ```HTML
   <div class="dialog__close"></div>
   ```
