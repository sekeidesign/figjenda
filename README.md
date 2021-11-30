# FigJenda

This FigJam widget allow you to create an agenda or multiple agendas for your workshop in FigJam. 
The widget uses FigJam's built in timer to provide a more robust experience.

### 🏁 Start here

| [🧪 I am a Beta tester](https://github.com/sekeidesign/figjenda#beta-testing-figjenda) |  [💻 I am a developer](https://github.com/sekeidesign/figjenda/blob/main/README.md#developers) |
|-----------------------|----------------------|

![CleanShot 2021-11-29 at 18 19 56@2x](https://user-images.githubusercontent.com/59372630/143958102-e877ecf7-a477-4784-8b5f-56e359df1d04.png)




## Beta testing FigJenda
##### Follow the instructions below to get FigJenda running in just 4 steps! 🚀

🗃 Download the ZIP file containing the codebase by [clicking here](https://github.com/sekeidesign/figjenda/archive/refs/heads/main.zip)

🔍 Unzip the file wherever is convenient, but **you'll need to know where it is to load it into FigJam**

✨ Create a new FigJam file and right click anywhere on the canvas. Select `Import widget from manifest...` 

![CleanShot 2021-11-29 at 18 38 09@2x](https://user-images.githubusercontent.com/59372630/143959765-8c12c507-c144-4a02-9579-7eb35191f6fb.png)

---

🔍 Head to the folder you unzipped and select the `manifest.json` file 

<img width="850" alt="CleanShot 2021-11-29 at 19 15 18@2x" src="https://user-images.githubusercontent.com/59372630/143962839-0bae2d1f-1f79-4e02-bf61-134a66c2d0e2.png">

---

🚀 You're ready to try FigJenda! Just right click on the canvas to add it from your widgets! 

![CleanShot 2021-11-29 at 18 53 24@2x](https://user-images.githubusercontent.com/59372630/143961187-55ba1982-9223-4080-b2c0-50ebab6419e7.png)

---

⚡️ From here on out you can just copy paste it around to create as many agendas as you want!

![CleanShot 2021-11-29 at 18 56 09@2x](https://user-images.githubusercontent.com/59372630/143961194-6d83c374-2f3d-4a19-8d2f-75b55586610a.png)

---

### Known bugs:
🐛 The numer inputs in the `Add`/`Edit` plugins are a UX nightmare and can feel pretty buggy. You can highlight and delete the number if things get ugly 😩

![CleanShot 2021-11-29 at 18 57 32@2x](https://user-images.githubusercontent.com/59372630/143961443-20d043ab-2006-44cd-b4da-73841b4005cd.png)

---

🪲 The widget doesn't know when FigJam's built-in timer is stopped so it will get stuck. Just press stop on the widget to reset it!!!

[CleanShot 2021-11-29 at 19 02 50](https://user-images.githubusercontent.com/59372630/143961944-27e3acdc-1522-40bc-a3bf-1f099b40c7ef.gif)





---
#### ⚠️ The rest of this readme is a work in progress
# Developers

Code organization:

| dir / path           | description                          |
| -------------------- | ------------------------------------ |
| ui-src/              | This is where the iframe code lives  |
| ui-src/index.html    | Main entry point for the iframe code |
| widget-src/code.jsx  | This is the widget code              |
| dist/                | Built output goes here               |

- The iframe code uses a tool called [vite](https://vitejs.dev/) to bundle everything into a single html file


### importing your widget
1. "Import widget from manifest"
2. Build code `npm run build`
3. Choose your manifest

## iframe development

Often the code in the iframe can get pretty complex, if helpful, you can also do

```
npm run dev:ui
```

- This command starts a development server that will serve the iframe code at http://localhost:3000
- The development server will also hot reload any changes to your iframe code


## Scripts

| script                   | description                                                             |
| ------------------------ | ----------------------------------------------------------------------- |
| npm run build:watch      | watch-move build for both the widget and iframe code. Use this while in dev |
| npm run build            | one-off full build of both the iframe and widget                        |
| npm run build:main       | one-off build of the widget code                                        |
| npm run build:ui         | one-off build of the iframe code                                        |
| npm run build:main:watch | watch-mode build of the widget code. rebuilds if when you save changes. |
| npm run build:ui:watch   | watch-mode build of the iframe code. rebuilds if when you save changes. |
