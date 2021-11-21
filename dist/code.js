(() => {
  // widget-src/code.jsx
  var { widget, ui, showUI, closePlugin, timer } = figma;
  var { AutoLayout, SVG, Text, Frame, useSyncedState, usePropertyMenu, useEffect } = widget;
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
    const [items, setItem] = useSyncedState("items", [
      {
        id: 1,
        name: "Intros",
        emoji: "\u{1F44B}",
        minutes: 5,
        seconds: 30
      }
    ]);
    const [isPlaying, togglePlay] = useSyncedState("isPlaying", false);
    const [isLocked, toggleLock] = useSyncedState("isLocked", false);
    const [isAutoPlay, toggleAutoPlay] = useSyncedState("isAutoPlay", true);
    const [themeColor, changeColor] = useSyncedState("themeColor", "#9747FF");
    const [currentID, updateCurrent] = useSyncedState("currentID", -1);
    function openUI(mode, options = { height: 300, width: 332 }) {
      return new Promise((resolve) => {
        showUI(__html__, options);
        handleEvent("close", () => {
          figma.closePlugin();
        });
        handleEvent("add", (data) => {
          const lastIndex = items.length - 1;
          data.id = items[lastIndex] ? items[lastIndex].id + 1 : 1;
          let updatedItems = items;
          updatedItems.push(data);
          setItem(updatedItems);
          figma.closePlugin();
        });
        handleEvent("UIReady", () => {
          if (mode == "edit") {
            dispatch("edit", "data");
          }
        });
      });
    }
    function toTime(mins, secs) {
      return mins * 60 + secs;
    }
    function playPause() {
      if (timer.state === "RUNNING") {
        togglePlay(false);
        timer.pause();
      } else if (timer.state === "STOPPED") {
        console.log("Started from stop");
        updateCurrent(currentID + 1);
        togglePlay(true);
        timer.start(toTime(items[currentID + 1].minutes, items[currentID + 1].seconds));
      } else if (timer.state === "PAUSED") {
        togglePlay(true);
        timer.resume();
      }
    }
    function stop() {
      timer.stop();
      togglePlay(false);
      updateCurrent(-1);
    }
    function next() {
      if (isAutoPlay) {
        timer.start(toTime(items[currentID + 1].minutes, items[currentID + 1].seconds));
        updateCurrent(currentID + 1);
      } else {
        timer.start(toTime(items[currentID + 1].minutes, items[currentID + 1].seconds));
        timer.pause();
        togglePlay(false);
        updateCurrent(currentID + 1);
      }
    }
    figma.on("timerstart", () => console.log(figma.timer.remaining));
    figma.on("timerpause", () => console.log("Timer paused"));
    const colorIcons = {
      purple: `<svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="12" y="12" width="28" height="28" rx="14" fill="#9747FF"/>
          </svg>`,
      gray: `<svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="12" y="12" width="28" height="28" rx="14" fill="#545454"/>
        </svg>`,
      red: `<svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="12" y="12" width="28" height="28" rx="14" fill="#E05A33"/>
        </svg>`,
      yellow: `<svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="12" y="12" width="28" height="28" rx="14" fill="#F6C944"/>
          </svg>`,
      green: `<svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="12" y="12" width="28" height="28" rx="14" fill="#4DA660"/>
          </svg>`,
      blue: `<svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="12" y="12" width="28" height="28" rx="14" fill="#739AF0"/>
        </svg>`,
      orange: `<svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="12" y="12" width="28" height="28" rx="14" fill="#C6803E"/>
          </svg>`
    };
    const timeIcon = `
<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="rgba(0, 0, 0, .3)" viewBox="0 0 16 16">
  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
</svg>
`;
    const deleteIcon = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#F24822" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg>
`;
    const editIcon = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="rgba(0, 0, 0, .3)" viewBox="0 0 16 16">
  <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z"/>
</svg>
`;
    const deleteIconDisabled = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="rgba(0, 0, 0, .1)" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg>
`;
    const editIconDisabled = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="rgba(0, 0, 0, .1)" viewBox="0 0 16 16">
  <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z"/>
</svg>
`;
    const unlockIcon = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" class="bi bi-lock" viewBox="0 0 16 16">
  <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"/>
</svg>
`;
    const lockIcon = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" class="bi bi-unlock" viewBox="0 0 16 16">
  <path d="M11 1a2 2 0 0 0-2 2v4a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h5V3a3 3 0 0 1 6 0v4a.5.5 0 0 1-1 0V3a2 2 0 0 0-2-2zM3 8a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1H3z"/>
</svg>
`;
    const toggleOn = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#000" class="bi bi-toggle-on" viewBox="0 0 16 16">
  <path d="M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10H5zm6 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/>
</svg>
`;
    const toggleOff = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#000" class="bi bi-toggle-off" viewBox="0 0 16 16">
  <path d="M11 4a4 4 0 0 1 0 8H8a4.992 4.992 0 0 0 2-4 4.992 4.992 0 0 0-2-4h3zm-6 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM0 8a5 5 0 0 0 5 5h6a5 5 0 0 0 0-10H5a5 5 0 0 0-5 5z"/>
</svg>
`;
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
    const playIcon = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" class="bi bi-play" viewBox="0 0 16 16">
  <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"/>
</svg>
`;
    const pauseIcon = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFF" class="bi bi-pause" viewBox="0 0 16 16">
  <path d="M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z"/>
</svg>
`;
    const plusIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFF" class="bi bi-plus-lg" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
  </svg>
`;
    usePropertyMenu([
      {
        tooltip: "Purple",
        propertyName: "#9747FF",
        itemType: "action",
        icon: colorIcons.purple
      },
      {
        tooltip: "Gray",
        propertyName: "#545454",
        itemType: "action",
        icon: colorIcons.gray
      },
      {
        tooltip: "Red",
        propertyName: "#E05A33",
        itemType: "action",
        icon: colorIcons.red
      },
      {
        tooltip: "Yellow",
        propertyName: "#F6C944",
        itemType: "action",
        icon: colorIcons.yellow
      },
      {
        tooltip: "Green",
        propertyName: "#4DA660",
        itemType: "action",
        icon: colorIcons.green
      },
      {
        tooltip: "Blue",
        propertyName: "#739AF0",
        itemType: "action",
        icon: colorIcons.blue
      },
      {
        tooltip: "Orange",
        propertyName: "#C6803E",
        itemType: "action",
        icon: colorIcons.orange
      }
    ], (e) => {
      changeColor(e.propertyName);
    });
    const header = /* @__PURE__ */ figma.widget.h(AutoLayout, {
      verticalAlignItems: "center",
      height: "hug-contents",
      width: "fill-parent",
      padding: {
        left: 8,
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
      spacing: 8
    }, /* @__PURE__ */ figma.widget.h(Text, {
      fontSize: 14,
      lineHeight: 24
    }, "\u{1F4CC}"), /* @__PURE__ */ figma.widget.h(Text, {
      fontSize: 14,
      lineHeight: 24,
      fontWeight: 600,
      fontFamily: "Inter",
      fill: {
        type: "solid",
        color: "#fff"
      }
    }, "FigJenda")), /* @__PURE__ */ figma.widget.h(AutoLayout, {
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
      stroke: {
        type: "solid",
        color: "#000",
        opacity: 0.3
      }
    }, /* @__PURE__ */ figma.widget.h(SVG, {
      src: stopIcon
    })), /* @__PURE__ */ figma.widget.h(AutoLayout, {
      hidden: items.length === 0,
      verticalAlignItems: "center",
      height: "hug-contents",
      width: "hug-contents",
      padding: 12,
      cornerRadius: 999,
      fill: "#FFF",
      stroke: {
        type: "solid",
        color: "#F24822"
      },
      onClick: () => {
        stop();
      }
    }, /* @__PURE__ */ figma.widget.h(SVG, {
      src: stopIcon
    })), /* @__PURE__ */ figma.widget.h(AutoLayout, {
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
      hidden: items.length === 0,
      verticalAlignItems: "center",
      height: "hug-contents",
      width: "hug-contents",
      padding: 12,
      cornerRadius: 999,
      fill: "#18A0FB",
      onClick: () => {
        playPause();
      }
    }, /* @__PURE__ */ figma.widget.h(SVG, {
      src: isPlaying ? pauseIcon : playIcon
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
      hidden: items.length === 0,
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
      width: 368,
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
      const emojis = [{ id: 1, emoji: "\u{1F44B}" }, { id: 2, emoji: "\u{1F680}" }, { id: 3, emoji: "\u26A1\uFE0F" }];
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
    ;
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
    const truncateLength = 24;
    let timerList = [];
    for (let item in items) {
      const agendaItem = /* @__PURE__ */ figma.widget.h(AutoLayout, {
        key: items[item].id,
        verticalAlignItems: "center",
        height: "hug-contents",
        width: "fill-parent",
        padding: 8,
        spacing: 4,
        fill: currentID === items[item].id ? "#EDF5FA" : "#FFF",
        effect: {
          type: "inner-shadow",
          color: "#E5E5E5",
          offset: { x: 0, y: -1 },
          blur: 0
        }
      }, /* @__PURE__ */ figma.widget.h(AutoLayout, {
        verticalAlignItems: "center",
        height: "hug-contents",
        width: "fill-parent",
        padding: 4,
        spacing: 8
      }, /* @__PURE__ */ figma.widget.h(Text, {
        fontSize: 16
      }, items[item].emoji), /* @__PURE__ */ figma.widget.h(Text, {
        fontSize: 14,
        lineHeight: 24,
        fontWeight: 400,
        fontFamily: "Inter",
        fill: {
          type: "solid",
          color: "#000",
          opacity: 0.8
        }
      }, `${items[item].name.slice(0, truncateLength)}${items[item].name.length < truncateLength ? "" : "..."}`)), /* @__PURE__ */ figma.widget.h(AutoLayout, {
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
        spacing: 4
      }, /* @__PURE__ */ figma.widget.h(SVG, {
        src: timeIcon
      }), /* @__PURE__ */ figma.widget.h(Text, {
        fontSize: 14,
        lineHeight: 24,
        fontWeight: 400,
        fontFamily: "Inter",
        fill: {
          type: "solid",
          color: "#000",
          opacity: 0.8
        }
      }, zeroPad(items[item].minutes) + ":" + zeroPad(items[item].seconds))), /* @__PURE__ */ figma.widget.h(Frame, {
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
        fill: "#FFF",
        padding: 6,
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
        fill: "#FFF",
        padding: 6,
        spacing: 0,
        onClick: () => openUI("edit")
      }, /* @__PURE__ */ figma.widget.h(SVG, {
        src: editIcon
      }))));
      timerList.push(agendaItem);
    }
    return /* @__PURE__ */ figma.widget.h(AutoLayout, {
      verticalAlignItems: "start",
      direction: "vertical",
      height: "fill-parent",
      overflow: "hidden",
      padding: 0,
      width: 368,
      height: "hug-contents",
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
