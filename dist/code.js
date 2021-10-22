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
  function FigJenda() {
    const [items] = useSyncedState("items", [
      {
        name: "Intros",
        emoji: "\u{1F44B}",
        time: 300
      },
      {
        name: "Sailboat Exercise or something else long",
        emoji: "\u26F5\uFE0F",
        time: 1800
      },
      {
        name: "Sailboat Exercise or something else long",
        emoji: "\u26F5\uFE0F",
        time: 1800
      },
      {
        name: "Sailboat Exercise or something else long",
        emoji: "\u26F5\uFE0F",
        time: 1800
      },
      {
        name: "Sailboat Exercise or something else long",
        emoji: "\u26F5\uFE0F",
        time: 1800
      },
      {
        name: "Sailboat Exercise or something else long",
        emoji: "\u26F5\uFE0F",
        time: 1800
      }
    ]);
    function timeConvert(num) {
      const minutes = Math.floor(num / 60);
      const paddedMins = minutes > 10 ? minutes : `0${minutes}`;
      const seconds = num % 60;
      const paddedSecs = seconds > 10 ? seconds : `0${seconds}`;
      return paddedMins + ":" + paddedSecs;
    }
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
        padding: 6,
        spacing: 12
      }, /* @__PURE__ */ figma.widget.h(SVG, {
        src: deleteIcon
      }), /* @__PURE__ */ figma.widget.h(SVG, {
        src: editIcon
      })));
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
    }, /* @__PURE__ */ figma.widget.h(AutoLayout, {
      verticalAlignItems: "start",
      direction: "vertical",
      width: "fill-parent",
      height: "hug-contents",
      overflow: "scroll"
    }, timerList));
  }
  widget.register(FigJenda);
})();
