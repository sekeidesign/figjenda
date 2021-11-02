(() => {
  // widget-src/code.jsx
  var { widget, ui, showUI } = figma;
  var { AutoLayout, SVG, Text, Frame, useSyncedState } = widget;
  var timeIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="rgba(0, 0, 0, .3)" viewBox="0 0 16 16">
    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
  </svg>
`;
  var deleteIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#F24822" viewBox="0 0 16 16">
    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
  </svg>
`;
  var editIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="rgba(0, 0, 0, .3)" viewBox="0 0 16 16">
    <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z"/>
  </svg>
`;
  var lockIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" class="bi bi-unlock" viewBox="0 0 16 16">
    <path d="M11 1a2 2 0 0 0-2 2v4a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h5V3a3 3 0 0 1 6 0v4a.5.5 0 0 1-1 0V3a2 2 0 0 0-2-2zM3 8a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1H3z"/>
  </svg>
`;
  var toggleOn = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#000" class="bi bi-toggle-on" viewBox="0 0 16 16">
    <path d="M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10H5zm6 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/>
  </svg>
`;
  var stopIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-stop" viewBox="0 0 16 16">
    <path d="M3.5 5A1.5 1.5 0 0 1 5 3.5h6A1.5 1.5 0 0 1 12.5 5v6a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 11V5zM5 4.5a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 .5-.5V5a.5.5 0 0 0-.5-.5H5z"/>
  </svg>
`;
  var playIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" class="bi bi-play" viewBox="0 0 16 16">
    <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"/>
  </svg>
`;
  var skipIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-skip-forward" viewBox="0 0 16 16">
    <path d="M15.5 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V8.752l-6.267 3.636c-.52.302-1.233-.043-1.233-.696v-2.94l-6.267 3.636C.713 12.69 0 12.345 0 11.692V4.308c0-.653.713-.998 1.233-.696L7.5 7.248v-2.94c0-.653.713-.998 1.233-.696L15 7.248V4a.5.5 0 0 1 .5-.5zM1 4.633v6.734L6.804 8 1 4.633zm7.5 0v6.734L14.304 8 8.5 4.633z"/>
  </svg>
`;
  function timeConvert(num) {
    const minutes = Math.floor(num / 60);
    const paddedMins = minutes > 9 ? minutes : `0${minutes}`;
    const seconds = num % 60;
    const paddedSecs = seconds > 9 ? seconds : `0${seconds}`;
    return paddedMins + ":" + paddedSecs;
  }
  function openUI(payload, options = { height: 300 }) {
    return new Promise((resolve) => {
      showUI(__html__, options);
    });
  }
  var header = /* @__PURE__ */ figma.widget.h(AutoLayout, {
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
    fill: "#4DA660"
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
    padding: 6,
    spacing: 0
  }, /* @__PURE__ */ figma.widget.h(SVG, {
    src: lockIcon
  })));
  var playControls = /* @__PURE__ */ figma.widget.h(AutoLayout, {
    verticalAlignItems: "center",
    height: "hug-contents",
    width: "fill-parent",
    padding: 12,
    spacing: "auto",
    fill: "#fff",
    effect: {
      type: "inner-shadow",
      color: "#E5E5E5",
      offset: { x: 0, y: 1 },
      blur: 0
    }
  }, /* @__PURE__ */ figma.widget.h(AutoLayout, {
    verticalAlignItems: "center",
    height: "hug-contents",
    width: "hug-contents",
    padding: 0,
    spacing: 8
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
    src: toggleOn
  })), /* @__PURE__ */ figma.widget.h(AutoLayout, {
    verticalAlignItems: "center",
    height: "hug-contents",
    width: "hug-contents",
    padding: 0,
    spacing: 8
  }, /* @__PURE__ */ figma.widget.h(AutoLayout, {
    verticalAlignItems: "center",
    height: "hug-contents",
    width: "hug-contents",
    padding: 12,
    cornerRadius: 999,
    stroke: {
      type: "solid",
      color: "#000",
      opacity: 0.8
    }
  }, /* @__PURE__ */ figma.widget.h(SVG, {
    src: stopIcon
  })), /* @__PURE__ */ figma.widget.h(AutoLayout, {
    verticalAlignItems: "center",
    height: "hug-contents",
    width: "hug-contents",
    padding: 12,
    cornerRadius: 999,
    fill: "#18A0FB"
  }, /* @__PURE__ */ figma.widget.h(SVG, {
    src: playIcon
  })), /* @__PURE__ */ figma.widget.h(AutoLayout, {
    verticalAlignItems: "center",
    height: "hug-contents",
    width: "hug-contents",
    padding: 12,
    cornerRadius: 999,
    stroke: {
      type: "solid",
      color: "#000",
      opacity: 0.8
    }
  }, /* @__PURE__ */ figma.widget.h(SVG, {
    src: skipIcon
  }))));
  var addBtn = /* @__PURE__ */ figma.widget.h(AutoLayout, {
    verticalAlignItems: "center",
    height: "hug-contents",
    width: 368,
    padding: 12,
    spacing: 10,
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
  function FigJenda() {
    const [items, setItem] = useSyncedState("items", [
      {
        id: 1,
        name: "Intros",
        emoji: "\u{1F44B}",
        time: 300
      },
      {
        id: 2,
        name: "Sailboat Exercise",
        emoji: "\u26F5\uFE0F",
        time: 1800
      }
    ]);
    const truncateLength = 24;
    let timerList = [];
    for (let item in items) {
      const agendaItem = /* @__PURE__ */ figma.widget.h(AutoLayout, {
        verticalAlignItems: "center",
        height: "hug-contents",
        width: "fill-parent",
        padding: 8,
        spacing: 4,
        fill: "#FFF",
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
        spacing: 4
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
      }, timeConvert(items[item].time))), /* @__PURE__ */ figma.widget.h(Frame, {
        height: 12,
        width: 1,
        cornerRadius: 99,
        fill: {
          type: "solid",
          color: "#000",
          opacity: 0.06
        }
      }), /* @__PURE__ */ figma.widget.h(AutoLayout, {
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
        src: deleteIcon,
        onClick: () => {
          setItem(items.filter((thing) => thing.id != items[item].id));
        }
      })), /* @__PURE__ */ figma.widget.h(AutoLayout, {
        verticalAlignItems: "center",
        horizontalAlignItems: "center",
        height: "hug-contents",
        width: "hug-contents",
        padding: 6,
        spacing: 0
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
    }, header, /* @__PURE__ */ figma.widget.h(AutoLayout, {
      verticalAlignItems: "start",
      direction: "vertical",
      width: "fill-parent",
      height: "hug-contents",
      overflow: "scroll"
    }, timerList), addBtn, playControls);
  }
  widget.register(FigJenda);
})();
