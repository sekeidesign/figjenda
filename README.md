# FigJenda

This FigJam widget allow you to create an agenda or multiple agendas for your workshop in FigJam. 
The widget uses FigJam's built in timer to provide a robust timer experience.

![CleanShot 2021-11-29 at 18 19 56@2x](https://user-images.githubusercontent.com/59372630/143958102-e877ecf7-a477-4784-8b5f-56e359df1d04.png)

# Start here

| 🧪 I am a Beta tester |  💻 I am a developer |
|-----------------------|----------------------|

---

## Beta testing FigJenda


---
#### ⚠️ The rest of this readme is a work in progress

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
