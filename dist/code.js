(() => {
  // widget-src/uiIcons.js
  var uiIcons = {
    timeIcon: `
<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="rgba(0, 0, 0, .3)" viewBox="0 0 16 16">
  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
</svg>
`,
    timeIconBlue: `
<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#18A0FB" viewBox="0 0 16 16">
  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
</svg>
`,
    checkIcon: `
<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="rgba(0, 0, 0, .15)" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
</svg>
`,
    deleteIcon: `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#F24822" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg>
`,
    editIcon: `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="rgba(0, 0, 0, .3)" viewBox="0 0 16 16">
  <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z"/>
</svg>
`,
    duplicateIcon: `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="rgba(0, 0, 0, .3)" class="bi bi-files" viewBox="0 0 16 16">
  <path d="M13 0H6a2 2 0 0 0-2 2 2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 13V4a2 2 0 0 0-2-2H5a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1zM3 4a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4z"/>
</svg>
`,
    deleteIconDisabled: `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="rgba(0, 0, 0, .1)" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg>
`,
    editIconDisabled: `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="rgba(0, 0, 0, .1)" viewBox="0 0 16 16">
  <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z"/>
</svg>
`,
    duplicateIconDisabled: `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="rgba(0, 0, 0, .1)" class="bi bi-files" viewBox="0 0 16 16">
  <path d="M13 0H6a2 2 0 0 0-2 2 2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 13V4a2 2 0 0 0-2-2H5a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1zM3 4a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4z"/>
</svg>
`,
    unlockIcon: `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" class="bi bi-lock" viewBox="0 0 16 16">
  <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"/>
</svg>
`,
    lockIcon: `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" class="bi bi-unlock" viewBox="0 0 16 16">
  <path d="M11 1a2 2 0 0 0-2 2v4a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h5V3a3 3 0 0 1 6 0v4a.5.5 0 0 1-1 0V3a2 2 0 0 0-2-2zM3 8a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1H3z"/>
</svg>
`,
    toggleOn: `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#000" class="bi bi-toggle-on" viewBox="0 0 16 16">
  <path d="M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10H5zm6 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/>
</svg>
`,
    toggleOff: `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#000" class="bi bi-toggle-off" viewBox="0 0 16 16">
  <path d="M11 4a4 4 0 0 1 0 8H8a4.992 4.992 0 0 0 2-4 4.992 4.992 0 0 0-2-4h3zm-6 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM0 8a5 5 0 0 0 5 5h6a5 5 0 0 0 0-10H5a5 5 0 0 0-5 5z"/>
</svg>
`,
    playIcon: `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" class="bi bi-play" viewBox="0 0 16 16">
  <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"/>
</svg>
`,
    plusIcon: `
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFF" class="bi bi-plus-lg" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
  </svg>
`,
    resetIcon: `
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#000" class="bi bi-arrow-repeat" viewBox="0 0 16 16">
    <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"/>
    <path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"/>
  </svg>
`
  };
  var uiIcons_default = uiIcons;

  // widget-src/code.jsx
  var {
    timeIcon,
    timeIconBlue,
    checkIcon,
    deleteIcon,
    editIcon,
    duplicateIcon,
    deleteIconDisabled,
    editIconDisabled,
    duplicateIconDisabled,
    unlockIcon,
    lockIcon,
    toggleOn,
    toggleOff,
    playIcon,
    plusIcon,
    resetIcon
  } = uiIcons_default;
  var { widget, ui, showUI, closePlugin, timer } = figma;
  var {
    AutoLayout,
    SVG,
    Text,
    Frame,
    useSyncedState,
    usePropertyMenu,
    useEffect,
    waitForTask,
    Input,
    useStickable
  } = widget;
  var eventListeners = [];
  var dispatch = (action, data) => {
    ui.postMessage({ action, data });
  };
  var handleEvent = (type, callback) => {
    eventListeners.push({ type, callback });
  };
  ui.onmessage = (message) => {
    for (let eventListener of eventListeners) {
      if (message.action === eventListener.type)
        eventListener.callback(message.data);
    }
  };
  function zeroPad(num) {
    const paddedNum = num > 9 ? num : `0${num}`;
    return paddedNum;
  }
  function FigJenda() {
    const [items, setItem] = useSyncedState("items", []);
    const [isPlaying, togglePlay] = useSyncedState("isPlaying", false);
    const [isLocked, toggleLock] = useSyncedState("isLocked", false);
    const [isAutoPlay, toggleAutoPlay] = useSyncedState("isAutoPlay", true);
    const [themeColor, changeColor] = useSyncedState("themeColor", "#1E1E1E");
    const [currentID, updateCurrent] = useSyncedState("currentID", -1);
    const [agendaName, updateAgendaName] = useSyncedState("agendaName", {
      name: "FigJenda",
      emoji: "\u{1F4CC}"
    });
    useStickable();
    function openUI(mode, data, options = { height: 300, width: 332 }) {
      return new Promise((resolve) => {
        showUI(__html__, options);
        handleEvent("close", () => {
          figma.closePlugin();
          resolve();
        });
        handleEvent("add", (data2) => {
          const lastIndex = items.length - 1;
          data2.id = items[lastIndex] ? items[lastIndex].id + 1 : 1;
          let updatedItems = items;
          console.log(data2);
          updatedItems.push(data2);
          setItem(updatedItems);
          figma.closePlugin();
          resolve();
        });
        handleEvent("UIReady", () => {
          switch (mode) {
            case "edit":
              dispatch("edit", data);
              break;
            case "rename":
              dispatch("rename", data);
              break;
            case "editTime":
              dispatch("editTime", data);
              break;
            case "templates":
              dispatch("templates", { items }, { height: 440, width: 440 });
              break;
            case "emoji":
              dispatch("emoji", data);
          }
        });
        handleEvent("editDone", (data2) => {
          let updatedItems = items;
          const index = items.findIndex((item) => {
            return item.id === data2.id;
          });
          updatedItems[index] = data2;
          setItem(updatedItems);
          figma.closePlugin();
          resolve();
        });
        handleEvent("preview", (template) => {
          setItem(template.items);
        });
        handleEvent("cancelPreview", (items2) => {
          setItem(items2);
          figma.closePlugin();
        });
        handleEvent("loadTemplate", () => {
          figma.closePlugin();
        });
        handleEvent("renameDone", (data2) => {
          updateAgendaName(data2);
          figma.closePlugin();
          resolve();
        });
      });
    }
    function toMins(time) {
      return Math.floor(time / 60);
    }
    function toSecs(time) {
      return time % 60;
    }
    function play() {
      updateCurrent(0);
      togglePlay(true);
      timer.start(items[currentID + 1].time);
    }
    function stop() {
      timer.stop();
      togglePlay(false);
      updateCurrent(-1);
    }
    function next() {
      if (isAutoPlay) {
        timer.start(items[currentID + 1].time);
        updateCurrent(currentID + 1);
      } else {
        timer.start(items[currentID + 1].time);
        updateCurrent(currentID + 1);
        timer.pause();
      }
    }
    useEffect(() => {
      waitForTask(new Promise((resolve) => {
        figma.on("timerstop", () => {
          stop();
          resolve();
        });
      }));
      waitForTask(new Promise((resolve) => {
        figma.on("timerdone", () => {
          setTimeout(() => {
            if (currentID + 1 < items.length) {
              next();
              resolve();
            } else {
              updateCurrent(currentID + 1);
              figma.closePlugin();
              timer.stop();
              resolve();
            }
          }, 100);
        });
      }));
    });
    const stopIcon = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="${items.length > 0 ? "#F24822" : "rgba(0,0,0,.3)"}" class="bi bi-stop" viewBox="0 0 16 16">
  <path d="M3.5 5A1.5 1.5 0 0 1 5 3.5h6A1.5 1.5 0 0 1 12.5 5v6a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 11V5zM5 4.5a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 .5-.5V5a.5.5 0 0 0-.5-.5H5z"/>
</svg>
`;
    const skipIcon = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="${items.length > 0 ? "rgba(0,0,0,.8)" : "rgba(0,0,0,.3)"}" class="bi bi-skip-forward" viewBox="0 0 16 16">
  <path d="M15.5 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V8.752l-6.267 3.636c-.52.302-1.233-.043-1.233-.696v-2.94l-6.267 3.636C.713 12.69 0 12.345 0 11.692V4.308c0-.653.713-.998 1.233-.696L7.5 7.248v-2.94c0-.653.713-.998 1.233-.696L15 7.248V4a.5.5 0 0 1 .5-.5zM1 4.633v6.734L6.804 8 1 4.633zm7.5 0v6.734L14.304 8 8.5 4.633z"/>
</svg>
`;
    usePropertyMenu([
      {
        itemType: "color-selector",
        propertyName: "color-selector",
        tooltip: "Color selector",
        selectedOption: themeColor,
        options: [
          {
            tooltip: "Purple",
            option: "#9747FF"
          },
          {
            tooltip: "Gray",
            option: "#757575"
          },
          {
            tooltip: "Red",
            option: "#F24822"
          },
          {
            tooltip: "Yellow",
            option: "#FFCD29"
          },
          {
            tooltip: "Green",
            option: "#14AE5C"
          },
          {
            tooltip: "Blue",
            option: "#0D99FF"
          },
          {
            tooltip: "Orange",
            option: "#FFA629"
          },
          {
            tooltip: "Black",
            option: "#1E1E1E"
          }
        ]
      },
      {
        itemType: "separator"
      },
      {
        itemType: "action",
        propertyName: "rename",
        tooltip: "Rename Agenda"
      },
      {
        itemType: "separator"
      },
      {
        itemType: "action",
        propertyName: "templates",
        tooltip: "Templates"
      }
    ], ({ propertyName, propertyValue }) => {
      switch (propertyName) {
        case "color-selector":
          changeColor(propertyValue);
          break;
        case "rename":
          openUI("rename", {
            agendaName: agendaName.name,
            agendaEmoji: agendaName.emoji
          });
          break;
        case "templates":
          openUI("templates", items, { height: 440, width: 440 });
          break;
      }
    });
    const header = /* @__PURE__ */ figma.widget.h(AutoLayout, {
      verticalAlignItems: "center",
      height: "hug-contents",
      width: "fill-parent",
      padding: {
        left: 16,
        right: 8,
        top: 6,
        bottom: 6
      },
      spacing: "auto",
      fill: themeColor
    }, /* @__PURE__ */ figma.widget.h(AutoLayout, {
      verticalAlignItems: "center",
      height: "hug-contents",
      width: "hug-contents",
      padding: 0,
      spacing: 12
    }, /* @__PURE__ */ figma.widget.h(Text, {
      fontSize: 14,
      lineHeight: 24
    }, agendaName.emoji), /* @__PURE__ */ figma.widget.h(Text, {
      fontSize: 14,
      lineHeight: 24,
      fontWeight: 600,
      fontFamily: "Inter",
      fill: {
        type: "solid",
        color: "#fff"
      }
    }, agendaName.name)), /* @__PURE__ */ figma.widget.h(AutoLayout, {
      verticalAlignItems: "center",
      horizontalAlignItems: "center",
      height: "hug-contents",
      width: "hug-contents",
      fill: {
        type: "solid",
        color: `${themeColor}`
      },
      padding: 6,
      spacing: 0,
      onClick: () => {
        toggleLock(!isLocked);
      }
    }, /* @__PURE__ */ figma.widget.h(SVG, {
      src: isLocked ? unlockIcon : lockIcon
    })));
    const playControls = /* @__PURE__ */ figma.widget.h(AutoLayout, {
      verticalAlignItems: "center",
      height: "hug-contents",
      width: "fill-parent",
      padding: 12,
      spacing: "auto",
      fill: "#fff"
    }, /* @__PURE__ */ figma.widget.h(AutoLayout, {
      verticalAlignItems: "center",
      height: "hug-contents",
      width: "hug-contents",
      padding: 0,
      spacing: 8,
      fill: "#FFF",
      onClick: () => {
        toggleAutoPlay(!isAutoPlay);
      }
    }, /* @__PURE__ */ figma.widget.h(Text, {
      fontSize: 14,
      lineHeight: 24,
      fontWeight: 400,
      fontFamily: "Inter",
      fill: {
        type: "solid",
        color: "#000",
        opacity: 0.8
      }
    }, "Auto-play"), /* @__PURE__ */ figma.widget.h(SVG, {
      src: isAutoPlay ? toggleOn : toggleOff
    })), /* @__PURE__ */ figma.widget.h(AutoLayout, {
      verticalAlignItems: "center",
      height: "hug-contents",
      width: "hug-contents",
      padding: 0,
      spacing: 8
    }, /* @__PURE__ */ figma.widget.h(AutoLayout, {
      hidden: items.length > 0,
      verticalAlignItems: "center",
      height: "hug-contents",
      width: "hug-contents",
      padding: 12,
      cornerRadius: 999,
      fill: {
        type: "solid",
        color: "#000",
        opacity: 0.3
      }
    }, /* @__PURE__ */ figma.widget.h(SVG, {
      src: playIcon
    })), /* @__PURE__ */ figma.widget.h(AutoLayout, {
      hidden: items.length === 0 || isPlaying === true,
      verticalAlignItems: "center",
      height: "hug-contents",
      width: "hug-contents",
      padding: 12,
      cornerRadius: 999,
      fill: "#18A0FB",
      onClick: () => {
        play();
      }
    }, /* @__PURE__ */ figma.widget.h(SVG, {
      src: playIcon
    })), /* @__PURE__ */ figma.widget.h(AutoLayout, {
      hidden: isPlaying === false,
      verticalAlignItems: "center",
      height: "hug-contents",
      width: "hug-contents",
      padding: 12,
      cornerRadius: 999,
      fill: "#FFF",
      stroke: {
        type: "solid",
        color: `${currentID < items.length ? "#F24822" : "#000"}`
      },
      onClick: () => {
        stop();
      }
    }, /* @__PURE__ */ figma.widget.h(SVG, {
      src: currentID < items.length ? stopIcon : resetIcon
    })), /* @__PURE__ */ figma.widget.h(AutoLayout, {
      hidden: items.length > 0,
      verticalAlignItems: "center",
      height: "hug-contents",
      width: "hug-contents",
      padding: 12,
      cornerRadius: 999,
      fill: "#FFF",
      stroke: {
        type: "solid",
        color: "#000",
        opacity: 0.3
      }
    }, /* @__PURE__ */ figma.widget.h(SVG, {
      src: skipIcon
    })), /* @__PURE__ */ figma.widget.h(AutoLayout, {
      hidden: isPlaying === false || currentID >= items.length - 1,
      verticalAlignItems: "center",
      height: "hug-contents",
      width: "hug-contents",
      padding: 12,
      cornerRadius: 999,
      fill: "#FFF",
      stroke: {
        type: "solid",
        color: "#000",
        opacity: 0.8
      },
      onClick: () => {
        next();
      }
    }, /* @__PURE__ */ figma.widget.h(SVG, {
      src: skipIcon
    }))));
    const addBtn = /* @__PURE__ */ figma.widget.h(AutoLayout, {
      hidden: items.length === 0 || isLocked,
      verticalAlignItems: "center",
      height: "hug-contents",
      width: "fill-parent",
      hoverStyle: {
        fill: "#f7f7f7"
      },
      padding: 12,
      spacing: 10,
      fill: "#FFF",
      effect: {
        type: "inner-shadow",
        color: "#E5E5E5",
        offset: { x: 0, y: -1 },
        blur: 0
      },
      onClick: () => openUI("add")
    }, /* @__PURE__ */ figma.widget.h(Text, {
      fontSize: 14,
      lineHeight: 24,
      fontWeight: 400,
      fontFamily: "Inter",
      fill: {
        type: "solid",
        color: "#000",
        opacity: 0.8
      }
    }, "+"), /* @__PURE__ */ figma.widget.h(Text, {
      fontSize: 14,
      lineHeight: 24,
      fontWeight: 400,
      fontFamily: "Inter",
      width: "fill-parent",
      fill: {
        type: "solid",
        color: "#000",
        opacity: 0.8
      }
    }, "Add Item"));
    function emptyGraphic() {
      const emojis = [
        { id: 1, emoji: "\u{1F44B}" },
        { id: 2, emoji: "\u{1F680}" },
        { id: 3, emoji: "\u26A1\uFE0F" }
      ];
      let emojiCards = [];
      for (let item of emojis) {
        const emojiCard = /* @__PURE__ */ figma.widget.h(AutoLayout, {
          key: item.id,
          verticalAlignItems: "center",
          horizontalAlignItems: "start",
          height: "hug-contents",
          width: 160,
          padding: 4,
          spacing: 4,
          cornerRadius: 6,
          fill: {
            type: "solid",
            color: "#FFF",
            opacity: 0.9
          },
          effect: {
            type: "drop-shadow",
            color: {
              r: 0.2,
              g: 0.29,
              b: 0.74,
              a: 0.15
            },
            offset: { x: 0, y: 4 },
            blur: 6
          }
        }, /* @__PURE__ */ figma.widget.h(AutoLayout, {
          padding: 8,
          cornerRadius: 4,
          fill: themeColor
        }, /* @__PURE__ */ figma.widget.h(Text, {
          width: "hug-contents",
          height: "hug-contents",
          fontSize: 12,
          lineHeight: 12
        }, item.emoji)), /* @__PURE__ */ figma.widget.h(AutoLayout, {
          spacing: 4,
          height: "hug-contents",
          width: "hug-contents",
          direction: "vertical"
        }, /* @__PURE__ */ figma.widget.h(Frame, {
          height: 4,
          width: 40,
          cornerRadius: 99,
          fill: {
            type: "solid",
            color: `${themeColor}`,
            opacity: 0.5
          }
        }), /* @__PURE__ */ figma.widget.h(Frame, {
          height: 4,
          width: 96,
          cornerRadius: 99,
          fill: {
            type: "solid",
            color: `${themeColor}`,
            opacity: 0.15
          }
        })));
        emojiCards.push(emojiCard);
      }
      return /* @__PURE__ */ figma.widget.h(AutoLayout, {
        verticalAlignItems: "center",
        horizontalAlignItems: "center",
        overflow: "visible",
        direction: "vertical",
        height: "hug-contents",
        width: "fill-parent",
        padding: 0,
        spacing: 8
      }, emojiCards);
    }
    const emptyState = /* @__PURE__ */ figma.widget.h(AutoLayout, {
      hidden: items.length > 0,
      verticalAlignItems: "start",
      horizontalAlignItems: "center",
      direction: "vertical",
      height: "hug-contents",
      width: "fill-parent",
      padding: {
        top: 0,
        right: 16,
        left: 16,
        bottom: 32
      },
      spacing: 16,
      fill: "#FFF"
    }, /* @__PURE__ */ figma.widget.h(AutoLayout, {
      width: "fill-parent",
      height: 180,
      verticalAlignItems: "center",
      horizontalAlignItems: "center",
      direction: "vertical"
    }, /* @__PURE__ */ figma.widget.h(AutoLayout, {
      height: 1,
      verticalAlignItems: "center",
      horizontalAlignItems: "center",
      overflow: "visible",
      padding: {
        bottom: 40,
        top: 0,
        left: 0,
        right: 0
      }
    }, /* @__PURE__ */ figma.widget.h(Frame, {
      width: 248,
      height: 248,
      cornerRadius: 999,
      fill: {
        type: "solid",
        color: `${themeColor}`,
        opacity: 0.1
      }
    })), emptyGraphic()), /* @__PURE__ */ figma.widget.h(AutoLayout, {
      verticalAlignItems: "center",
      horizontalAlignItems: "center",
      direction: "vertical",
      height: "hug-contents",
      width: "fill-parent",
      padding: 0,
      spacing: 8
    }, /* @__PURE__ */ figma.widget.h(AutoLayout, {
      verticalAlignItems: "center",
      horizontalAlignItems: "center",
      direction: "vertical",
      height: "hug-contents",
      width: "hug-contents",
      padding: 0,
      spacing: 0
    }, /* @__PURE__ */ figma.widget.h(Text, {
      fontSize: 14,
      lineHeight: 24,
      fontWeight: 600,
      fontFamily: "Inter",
      width: "hug-contents",
      fill: {
        type: "solid",
        color: "#000",
        opacity: 0.8
      }
    }, "It's looking a little empty here"), /* @__PURE__ */ figma.widget.h(Text, {
      fontSize: 11,
      lineHeight: 16,
      fontWeight: 400,
      fontFamily: "Inter",
      width: "hug-contents",
      fill: {
        type: "solid",
        color: "#000",
        opacity: 0.8
      }
    }, "Start by adding an agenda item \u{1F447}")), /* @__PURE__ */ figma.widget.h(AutoLayout, {
      verticalAlignItems: "center",
      horizontalAlignItems: "center",
      height: "hug-contents",
      width: "hug-contents",
      padding: {
        top: 4,
        right: 16,
        bottom: 4,
        left: 12
      },
      spacing: 4,
      fill: themeColor,
      cornerRadius: 6,
      onClick: () => openUI("add")
    }, /* @__PURE__ */ figma.widget.h(SVG, {
      src: plusIcon
    }), /* @__PURE__ */ figma.widget.h(Text, {
      fontSize: 14,
      lineHeight: 24,
      fontWeight: 400,
      fontFamily: "Inter",
      width: "hug-contents",
      fill: {
        type: "solid",
        color: "#FFF"
      }
    }, "Add item"))));
    const truncateLength = 32;
    let timerList = [];
    for (let item in items) {
      const agendaItem = /* @__PURE__ */ figma.widget.h(AutoLayout, {
        key: items[item].id,
        verticalAlignItems: "center",
        height: "hug-contents",
        width: "fill-parent",
        padding: 8,
        spacing: 4,
        fill: currentID === items.indexOf(items[item]) ? "#EDF5FA" : currentID > items.indexOf(items[item]) ? "#F7F7F7" : "#FFF",
        effect: {
          type: "inner-shadow",
          color: "#E5E5E5",
          offset: { x: 0, y: -1 },
          blur: 0
        }
      }, /* @__PURE__ */ figma.widget.h(Frame, {
        hidden: currentID !== items.indexOf(items[item]),
        height: 24,
        width: 4,
        cornerRadius: 99,
        fill: {
          type: "solid",
          color: "#18A0FB"
        }
      }), /* @__PURE__ */ figma.widget.h(AutoLayout, {
        verticalAlignItems: "center",
        height: "hug-contents",
        width: "fill-parent",
        padding: {
          top: 4,
          bottom: 4,
          left: 0,
          right: 4
        },
        spacing: 0
      }, /* @__PURE__ */ figma.widget.h(AutoLayout, {
        onClick: () => openUI("emoji", {
          emoji: items[item].emoji,
          id: items[item].id,
          name: items[item].name,
          time: items[item].time
        }, { height: 240 }),
        padding: 6,
        cornerRadius: 4,
        hoverStyle: {
          fill: "#f0f0f0"
        }
      }, /* @__PURE__ */ figma.widget.h(Text, {
        fontSize: 16,
        opacity: currentID > items.indexOf(items[item]) ? 0.25 : 1
      }, items[item].emoji)), /* @__PURE__ */ figma.widget.h(AutoLayout, {
        cornerRadius: 4,
        width: "fill-parent"
      }, /* @__PURE__ */ figma.widget.h(Input, {
        value: items[item].name,
        fontSize: 14,
        inputFrameProps: {
          cornerRadius: 4,
          padding: {
            left: 4,
            right: 4,
            top: 2,
            bottom: 2
          },
          hoverStyle: {
            stroke: "#E5E5E5"
          }
        },
        lineHeight: 24,
        fontWeight: 400,
        fontFamily: "Inter",
        width: "fill-parent",
        inputBehaviour: "truncate",
        onTextEditEnd: (e) => {
          const updatedItems = items.map((el) => {
            if (el.id === items[item].id && el.name === items[item].name) {
              el.name = e.characters;
              el.editing = false;
            }
            return el;
          });
          setItem(updatedItems);
        }
      }))), /* @__PURE__ */ figma.widget.h(AutoLayout, {
        verticalAlignItems: "center",
        horizontalAlignItems: "end",
        height: "hug-contents",
        width: "hug-contents",
        padding: {
          left: 8,
          right: 8,
          top: 4,
          bottom: 4
        },
        cornerRadius: 4,
        spacing: 4,
        onClick: () => openUI("editTime", {
          emoji: items[item].emoji,
          id: items[item].id,
          name: items[item].name,
          time: items[item].time
        }, { height: 171, width: 200 }),
        hoverStyle: {
          stroke: "#e5e5e5"
        }
      }, /* @__PURE__ */ figma.widget.h(SVG, {
        src: currentID === items.indexOf(items[item]) ? timeIconBlue : currentID > items.indexOf(items[item]) ? checkIcon : timeIcon
      }), /* @__PURE__ */ figma.widget.h(Text, {
        fontSize: 14,
        lineHeight: 24,
        fontWeight: 400,
        fontFamily: "Inter",
        textDecoration: currentID > items.indexOf(items[item]) ? "strikethrough" : "none",
        fill: {
          type: "solid",
          color: `${currentID === items.indexOf(items[item]) ? "#18A0FB" : currentID > items.indexOf(items[item]) ? "#B3B3B3" : "#000"}`,
          opacity: 0.8
        }
      }, zeroPad(toMins(items[item].time)) + ":" + zeroPad(toSecs(items[item].time)))), /* @__PURE__ */ figma.widget.h(Frame, {
        height: 12,
        width: 1,
        cornerRadius: 99,
        fill: {
          type: "solid",
          color: "#000",
          opacity: 0.06
        }
      }), /* @__PURE__ */ figma.widget.h(AutoLayout, {
        hidden: !isLocked,
        verticalAlignItems: "center",
        horizontalAlignItems: "center",
        height: "hug-contents",
        width: "hug-contents",
        padding: 0,
        spacing: 0
      }, /* @__PURE__ */ figma.widget.h(AutoLayout, {
        verticalAlignItems: "center",
        horizontalAlignItems: "center",
        height: "hug-contents",
        width: "hug-contents",
        padding: 6,
        spacing: 0
      }, /* @__PURE__ */ figma.widget.h(SVG, {
        src: deleteIconDisabled
      })), /* @__PURE__ */ figma.widget.h(AutoLayout, {
        verticalAlignItems: "center",
        horizontalAlignItems: "center",
        height: "hug-contents",
        width: "hug-contents",
        padding: 6,
        spacing: 0
      }, /* @__PURE__ */ figma.widget.h(SVG, {
        src: editIconDisabled
      })), /* @__PURE__ */ figma.widget.h(AutoLayout, {
        verticalAlignItems: "center",
        horizontalAlignItems: "center",
        height: "hug-contents",
        width: "hug-contents",
        padding: 6,
        spacing: 0
      }, /* @__PURE__ */ figma.widget.h(SVG, {
        src: duplicateIconDisabled
      }))), /* @__PURE__ */ figma.widget.h(AutoLayout, {
        hidden: isLocked,
        verticalAlignItems: "center",
        horizontalAlignItems: "center",
        height: "hug-contents",
        width: "hug-contents",
        padding: 0,
        spacing: 0
      }, /* @__PURE__ */ figma.widget.h(AutoLayout, {
        verticalAlignItems: "center",
        horizontalAlignItems: "center",
        height: "hug-contents",
        width: "hug-contents",
        fill: currentID === items.indexOf(items[item]) ? "#EDF5FA" : currentID > items.indexOf(items[item]) ? "#F7F7F7" : "#FFF",
        padding: 6,
        cornerRadius: 4,
        hoverStyle: {
          fill: "#f0f0f0"
        },
        spacing: 0,
        onClick: () => {
          setItem(items.filter((thing) => thing.id != items[item].id));
        }
      }, /* @__PURE__ */ figma.widget.h(SVG, {
        src: deleteIcon
      })), /* @__PURE__ */ figma.widget.h(AutoLayout, {
        verticalAlignItems: "center",
        horizontalAlignItems: "center",
        height: "hug-contents",
        width: "hug-contents",
        fill: currentID === items.indexOf(items[item]) ? "#EDF5FA" : currentID > items.indexOf(items[item]) ? "#F7F7F7" : "#FFF",
        padding: 6,
        cornerRadius: 4,
        hoverStyle: {
          fill: "#f0f0f0"
        },
        spacing: 0,
        onClick: () => openUI("edit", {
          emoji: items[item].emoji,
          id: items[item].id,
          name: items[item].name,
          time: items[item].time
        })
      }, /* @__PURE__ */ figma.widget.h(SVG, {
        src: editIcon
      })), /* @__PURE__ */ figma.widget.h(AutoLayout, {
        verticalAlignItems: "center",
        horizontalAlignItems: "center",
        height: "hug-contents",
        width: "hug-contents",
        fill: currentID === items.indexOf(items[item]) ? "#EDF5FA" : currentID > items.indexOf(items[item]) ? "#F7F7F7" : "#FFF",
        padding: 6,
        cornerRadius: 4,
        hoverStyle: {
          fill: "#f0f0f0"
        },
        spacing: 0,
        onClick: () => {
          const lastIndex = items.length - 1;
          const ogIndex = items.findIndex((element) => element.id === items[item].id);
          const duplicatedItem = {
            emoji: items[item].emoji,
            id: items[lastIndex].id + 1,
            name: items[item].name,
            time: items[item].time
          };
          let updatedItems = items;
          updatedItems.push(duplicatedItem);
          setItem(updatedItems);
        }
      }, /* @__PURE__ */ figma.widget.h(SVG, {
        src: duplicateIcon
      }))));
      timerList.push(agendaItem);
    }
    return /* @__PURE__ */ figma.widget.h(AutoLayout, {
      verticalAlignItems: "start",
      direction: "vertical",
      height: "fill-parent",
      overflow: "hidden",
      padding: 0,
      width: 440,
      fill: "#FFFFFF",
      cornerRadius: 12,
      spacing: 0,
      effect: ({
        type: "drop-shadow",
        color: { r: 0, g: 0, b: 0, a: 0.1 },
        offset: { x: 0, y: 5 },
        blur: 24,
        spread: 0
      }, {
        type: "drop-shadow",
        color: { r: 0, g: 0, b: 0, a: 0.1 },
        offset: { x: 0, y: 2 },
        blur: 8
      })
    }, header, emptyState, /* @__PURE__ */ figma.widget.h(AutoLayout, {
      hidden: items.length === 0,
      verticalAlignItems: "start",
      direction: "vertical",
      width: "fill-parent",
      height: "hug-contents",
      overflow: "scroll"
    }, timerList), addBtn, playControls);
  }
  widget.register(FigJenda);
})();
