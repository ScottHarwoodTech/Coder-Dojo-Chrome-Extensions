# Your First Chrome Extension:
---

* What are Chrome extensions?  
If you use the web-browser Google Chrome you may have heard of a thing called an extension which is a addon for Chrome designed to add new features to Chrome. some examples of extensions would be: Ad Blocker which add the ability to remove advertisements or LastPass which is used to automatically enter your passwords.

![](https://github.com/ScottHarwoodTech/Coder-Dojo-Chrome-Extensions/blob/master/__Images/Extensions.PNG)
---
* what will your need?  
To create an extension all you will need is a text editor and a google Chrome installed.

**Lets get started!**

1. Create a folder called `My First Chrome Extension` from now on every time we make a new file and save it in this folder.

2. Open up your text editor

3. Create a "manifest.json" file and save this code inside:
```json
{
    "manifest_version": 2,
    "name": "First Chrome Extension",
    "version": "1.0",
    "description": "This Extension prints things to the console",
    "content_scripts": [
      {
        "matches": [
          "<all_urls>"
        ],
        "js": ["content.js"]
      }
    ]
}
```
The manifest file is used to tell Chrome special details about the extension
Lets go through these details:
```
manifest_version: tells Chrome what to do with the other details.
name: the name of the extension
version: A version number
description: This is shown to the person that installs the extension and tells them a little bit more about it
content_scripts: content_scripts is where all the information about the code will be kept.
```
In content_scripts there is something called "matches", this says what web pages to run the extension on, if it said `"<youtube.com/>"` your code will only run on Youtube sites
Now on to the good stuff: the "js" attribute, this tells google what Javascript to run from the extension.
4. Lets create the "content.js" file:
```javascript
console.log("You just made your first Chrome extension")
```
Thats it. Just a simple one liner.

5. Time to test.  
Open up Chrome and in the uni-bar (The one at the top) type `Chrome://extensions` and you will taken to a page that looks like this:
![](https://github.com/ScottHarwoodTech/Coder-Dojo-Chrome-Extensions/blob/master/__Images/ExtensionsScreen.PNG)

In the top right hand corner click turn `developer mode`:

![](https://github.com/ScottHarwoodTech/Coder-Dojo-Chrome-Extensions/blob/master/__Images/DeveloperMode.PNG)

The buttons `Load unpacked extension` and `pack extension` should appear.

![](https://github.com/ScottHarwoodTech/Coder-Dojo-Chrome-Extensions/blob/master/__Images/NewButtons.PNG)

Now cick `Load unpacked extension` and select the folder you created called `My First Chrome Extension`.

6. You should now be able to see your extension in the window and there will be a new button in the top right of your screen with the other extension.

7. Now if you go to any web page and press the buttons `Shift + Control + I` a new window will pop up called console.

8. Refresh the page and you should see `You just made your first Chrome extension` appear

---
**Conclusion:**

You just made your own extension for google Chrome and added an extra feature to google Chrome. You used json to create the manifest file which told Chrome what to do with all the information you gave it in the content file that you created using Javascript.

---
**Extension**

Why not see if you can implement some of your Javascript knowledge to print out more things to the console?


---

https://github.com/ScottHarwoodTech/Coder-Dojo-Chrome-Extensions
