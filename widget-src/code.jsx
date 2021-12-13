//import { useEffect } from "react";

const { widget, ui, showUI, closePlugin, timer } = figma
const { AutoLayout, SVG, Text, Frame, useSyncedState, usePropertyMenu, useEffect, waitForTask } = widget;
const eventListeners = [];

export const dispatch = (action, data) => {
	ui.postMessage({ action, data });
};
export const handleEvent = (type, callback) => {
	eventListeners.push({ type, callback });
};
ui.onmessage = message => {
	for (let eventListener of eventListeners) {
		if (message.action === eventListener.type) eventListener.callback(message.data);
	}
};


// ---- FUNCTIONS ----------------
function zeroPad(num){ 
  const paddedNum = num > 9 ? num : `0${num}`
  return paddedNum;         
}

// ---- WIDGET ----------------
function FigJenda() {
  
  // ---- STATE ----------------
  const [items, setItem] = useSyncedState('items', [
      {
          id: 1,
          name: "Intros",
          emoji: "👋",
          minutes: 5,
          seconds: 30
      }
  ]);
  const [isPlaying, togglePlay] = useSyncedState('isPlaying', false)
  const [isLocked, toggleLock] = useSyncedState('isLocked', false)
  const [isAutoPlay, toggleAutoPlay] = useSyncedState('isAutoPlay', true)
  const [themeColor, changeColor] = useSyncedState('themeColor', "#9747FF")
  const [currentID, updateCurrent] = useSyncedState('currentID', -1)

  function openUI(
    mode,
    data,
    options = { height: 300, width: 332 }
  ) {
    return new Promise((resolve) => {
      showUI(__html__, options);
  
      handleEvent('close', () => {
        figma.closePlugin()
        resolve()
      });

      handleEvent('add', (data) => {
        const lastIndex = items.length - 1
        data.id = items[lastIndex] ? items[lastIndex].id + 1 : 1
        let updatedItems = items
        updatedItems.push(data)
        setItem(updatedItems)
        figma.closePlugin()
        resolve()
      })

      handleEvent('UIReady', () => {
        if(mode == 'edit'){
          dispatch('edit', data)
        }
      })

      handleEvent('editDone', (data) => {
        let updatedItems = items
        updatedItems[data.id - 1] = data
        //console.log(updatedItems)
        setItem(updatedItems)
        figma.closePlugin()
        resolve()
      })

    });
  }
  
  function toTime(mins, secs){
    return (mins * 60) + secs;
  }

  function playPause() {
    //console.log("Started agenda")
    updateCurrent(0) // Updates currentID to be 0
    togglePlay(true)
    //console.log("Index: ", currentID) // Expected output 'Index: 0' — Actual output 'Index: -1'
    timer.start(toTime(items[currentID + 1].minutes, items[currentID + 1].seconds))
  }

  function stop() {
    timer.stop()
    togglePlay(false)
    updateCurrent(-1)
  }

  function next() {
    if (isAutoPlay) {
      timer.start(toTime(items[currentID + 1].minutes, items[currentID + 1].seconds))
      updateCurrent(currentID + 1)
    } else {
      timer.start(toTime(items[currentID + 1].minutes, items[currentID + 1].seconds))
      updateCurrent(currentID + 1)
      timer.pause()
    }
  }

  useEffect(() => {
    waitForTask(new Promise((resolve) => {
      figma.on("timerstop", () => {
         stop()
         resolve()
       })
    }));
    waitForTask(new Promise((resolve) => {
      figma.on("timerdone", () => {
        setTimeout(() => {
          if (currentID + 1 < items.length) {
            //console.log("Going next", currentID)
            next()
            resolve()
          } else {
            //console.log('done')
            updateCurrent(currentID + 1)
            figma.closePlugin()
            timer.stop()
            resolve()
          }

        }, 100)
      })
    }));
  });


// ---- ICONS ----------------
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
          </svg>`,
}

const timeIcon = `
<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="rgba(0, 0, 0, .3)" viewBox="0 0 16 16">
  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
</svg>
`;
const timeIconBlue = `
<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#18A0FB" viewBox="0 0 16 16">
  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
</svg>
`;
const checkIcon = `
<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="rgba(0, 0, 0, .15)" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
</svg>
`
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
const plusIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFF" class="bi bi-plus-lg" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
  </svg>
`;
const resetIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#000" class="bi bi-arrow-repeat" viewBox="0 0 16 16">
    <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"/>
    <path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"/>
  </svg>
`

// ---- PROPERTY MENU ----------------
usePropertyMenu(
  [
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
  ],
  (e)=>{
    changeColor(e.propertyName)
  }
)
  // ---- COMPONENTS ----------------
  const header = (
    <AutoLayout
      verticalAlignItems="center"
      height="hug-contents"
      width="fill-parent"
      padding={{
        left: 8,
        right: 8,
        top: 6,
        bottom: 6
      }}
      spacing="auto"
      fill={themeColor}
    >
      <AutoLayout
        verticalAlignItems="center"
        height="hug-contents"
        width="hug-contents"
        padding={0}
        spacing={8}
      >
        <Text
          fontSize={14}
          lineHeight={24}
        >
          📌
        </Text>
        <Text
          fontSize={14}
          lineHeight={24}
          fontWeight={600}
          fontFamily="Inter"
          fill={{
            type: 'solid',
            color: '#fff'
          }}
        >
          FigJenda
        </Text>
      </AutoLayout>
      <AutoLayout
        verticalAlignItems="center"
        horizontalAlignItems="center"
        height="hug-contents"
        width="hug-contents"
        fill={{
          type: 'solid',
          color: `${themeColor}`
        }}
        padding={6}
        spacing={0}
        onClick={() => {
          toggleLock(!isLocked)
        }}
      >
        <SVG 
          src={isLocked ? unlockIcon : lockIcon}
        ></SVG>
      </AutoLayout>
    </AutoLayout>
  )

  const playControls = (
    <AutoLayout
      verticalAlignItems="center"
      height="hug-contents"
      width="fill-parent"
      padding={12}
      spacing="auto"
      fill="#fff"
    >
      <AutoLayout
        verticalAlignItems="center"
        height="hug-contents"
        width="hug-contents"
        padding={0}
        spacing={8}
        fill="#FFF"
        onClick={() => {
          toggleAutoPlay(!isAutoPlay)
        }}
      >
        <Text
          fontSize={14}
          lineHeight={24}
          fontWeight={400}
          fontFamily="Inter"
          fill={{
            type: 'solid',
            color: '#000',
            opacity: .8
          }}
        >
          Auto-play
        </Text>
        <SVG 
          src={isAutoPlay ? toggleOn : toggleOff}
        >
        </SVG>
      </AutoLayout>

      <AutoLayout
        verticalAlignItems="center"
        height="hug-contents"
        width="hug-contents"
        padding={0}
        spacing={8}
      >
        <AutoLayout
          hidden={items.length > 0}
          verticalAlignItems="center"
          height="hug-contents"
          width="hug-contents"
          padding={12}
          cornerRadius={999}
          fill={{
            type: 'solid',
            color: '#000',
            opacity: .3
          }}
        >
          <SVG 
            src={playIcon}
          ></SVG>
        </AutoLayout>
        <AutoLayout
          hidden={items.length === 0 || isPlaying === true}
          verticalAlignItems="center"
          height="hug-contents"
          width="hug-contents"
          padding={12}
          cornerRadius={999}
          fill="#18A0FB"
          onClick={() => {
            playPause()
          }}
        >
          <SVG src={playIcon}></SVG>
        </AutoLayout>
        <AutoLayout
          hidden={isPlaying === false}
          verticalAlignItems="center"
          height="hug-contents"
          width="hug-contents"
          padding={12}
          cornerRadius={999}
          fill="#FFF"
          stroke={{
            type: 'solid',
            color: `${currentID < items.length ? '#F24822' : '#000'}`
          }}
          onClick={() => {
            stop()
          }}
        >
          <SVG src={currentID < items.length ? stopIcon : resetIcon}></SVG>
        </AutoLayout>
        
        <AutoLayout
          hidden={items.length > 0}
          verticalAlignItems="center"
          height="hug-contents"
          width="hug-contents"
          padding={12}
          cornerRadius={999}
          fill="#FFF"
          stroke={{
            type: 'solid',
            color: "#000",
            opacity: .3
          }}
        >
          <SVG src={skipIcon}></SVG>
        </AutoLayout>
        <AutoLayout
          hidden={isPlaying === false || currentID >= items.length - 1}
          verticalAlignItems="center"
          height="hug-contents"
          width="hug-contents"
          padding={12}
          cornerRadius={999}
          fill="#FFF"
          stroke={{
            type: 'solid',
            color: "#000",
            opacity: .8
          }}
          onClick={() => {
            next()
          }}
        >
          <SVG src={skipIcon}></SVG>
        </AutoLayout>
      </AutoLayout>
    </AutoLayout>
  )
  
  const addBtn = (
    <AutoLayout
      hidden={items.length === 0 || isLocked}
      verticalAlignItems="center"
      height="hug-contents"
      width={368}
      padding={12}
      spacing={10}
      fill="#FFF"
      effect={{
        type: 'inner-shadow',
        color: '#E5E5E5',
        offset: {x: 0, y: -1},
        blur: 0
      }}
      onClick={() => openUI('add')}
    >
      <Text
        fontSize={14}
        lineHeight={24}
        fontWeight={400}
        fontFamily="Inter"
        fill={{
          type: 'solid',
          color: '#000',
          opacity: .8
        }}
      >
        +
      </Text>
      <Text
        fontSize={14}
        lineHeight={24}
        fontWeight={400}
        fontFamily="Inter"
        width="fill-parent"
        fill={{
          type: 'solid',
          color: '#000',
          opacity: .8
        }}
      >
        Add Item
      </Text>
    </AutoLayout>
  )

  function emptyGraphic() {
    const emojis = [{id: 1, emoji: "👋"}, {id: 2, emoji: "🚀"}, {id: 3, emoji: "⚡️"}];
    let emojiCards = []
    for (let item of emojis) {
      const emojiCard = (
        <AutoLayout
          key={item.id}
          verticalAlignItems="center"
          horizontalAlignItems="start"
          height="hug-contents"
          width={160}
          padding={4}
          spacing={4}
          cornerRadius={6}
          fill={{
            type: 'solid',
            color: "#FFF",
            opacity: .9
          }}
          effect={{
            type: 'drop-shadow',
            color: {
              r: .2,
              g: .29,
              b: .74,
              a: .15
            },
            offset: {x: 0, y: 4},
            blur: 6
          }}
        >
          <AutoLayout
            padding={8}
            cornerRadius={4}
            fill={themeColor}
          >
            <Text width="hug-contents" height="hug-contents" fontSize={12} lineHeight={12}>{item.emoji}</Text>
          </AutoLayout>
          <AutoLayout
            spacing={4}
            height="hug-contents"
            width="hug-contents"
            direction="vertical"
          >
            <Frame
              height={4}
              width={40}
              cornerRadius={99}
              fill={{
                type: "solid",
                color: `${themeColor}`,
                opacity: .5
              }}
            ></Frame>
            <Frame
              height={4}
              width={96}
              cornerRadius={99}
              fill={{
                type: "solid",
                color: `${themeColor}`,
                opacity: .15
              }}
            ></Frame>
          </AutoLayout>
        </AutoLayout>
      )
      emojiCards.push(emojiCard)
    }
    return (
      <AutoLayout
        verticalAlignItems="center"
        horizontalAlignItems="center"
        overflow="visible"
        direction="vertical"
        height="hug-contents"
        width="fill-parent"
        padding={0}
        spacing={8}
      >
        {emojiCards}
      </AutoLayout>
    );
  };
  
  const emptyState = (
    <AutoLayout
      hidden={items.length > 0}
      verticalAlignItems="start"
      horizontalAlignItems="center"
      direction="vertical"
      height="hug-contents"
      width="fill-parent"
      padding={{
        top: 0,
        right: 16,
        left: 16,
        bottom: 32
      }}
      spacing={16}
      fill="#FFF"
    >
      <AutoLayout
        width="fill-parent"
        height={180}
        verticalAlignItems="center"
        horizontalAlignItems="center"
        direction="vertical"
      >
        <AutoLayout
          height={1}
          verticalAlignItems="center"
          horizontalAlignItems="center"
          overflow="visible"
          padding={{
            bottom: 40,
            top: 0,
            left: 0,
            right: 0
          }}
        >
          <Frame
            width={248}
            height={248}
            cornerRadius={999}
            fill={{
              type: 'solid',
              color: `${themeColor}`,
              opacity: .1
            }}
          ></Frame>
        </AutoLayout>
        {emptyGraphic()}
      </AutoLayout>
      <AutoLayout
        verticalAlignItems="center"
        horizontalAlignItems="center"
        direction="vertical"
        height="hug-contents"
        width="fill-parent"
        padding={0}
        spacing={8}
      >
        <AutoLayout
          verticalAlignItems="center"
          horizontalAlignItems="center"
          direction="vertical"
          height="hug-contents"
          width="hug-contents"
          padding={0}
          spacing={0}
        >
          <Text
            fontSize={14}
            lineHeight={24}
            fontWeight={600}
            fontFamily="Inter"
            width="hug-contents"
            fill={{
              type: 'solid',
              color: '#000',
              opacity: .8
            }}
          >It's looking a little empty here</Text>
          <Text
            fontSize={11}
            lineHeight={16}
            fontWeight={400}
            fontFamily="Inter"
            width="hug-contents"
            fill={{
              type: 'solid',
              color: '#000',
              opacity: .8
            }}
          >Start by adding an agenda item 👇</Text>
        </AutoLayout>
        <AutoLayout
          verticalAlignItems="center"
          horizontalAlignItems="center"
          height="hug-contents"
          width="hug-contents"
          padding={{
            top: 4,
            right: 16,
            bottom: 4,
            left: 12
          }}
          spacing={4}
          fill={themeColor}
          cornerRadius={6}
          onClick={() => openUI('add')}
        >
          <SVG src={plusIcon}></SVG>
          <Text
            fontSize={14}
            lineHeight={24}
            fontWeight={400}
            fontFamily="Inter"
            width="hug-contents"
            fill={{
              type: 'solid',
              color: '#FFF'
            }}
          >Add item</Text>
        </AutoLayout>
      </AutoLayout>
    </AutoLayout>
  )
  
  const truncateLength = 24
  let timerList = []
  for (let item in items) {
      const agendaItem = ( 
          <AutoLayout
            key={items[item].id}
            verticalAlignItems="center"
            height="hug-contents"
            width="fill-parent"
            padding={8}
            spacing={4}
            fill={currentID === items[item].id - 1 ? "#EDF5FA" : currentID > items[item].id - 1 ? "#F7F7F7" : "#FFF"}
            effect={
              {
                type: 'inner-shadow',
                color: '#E5E5E5',
                offset: {x: 0, y: - 1},
                blur: 0
              }
            }
          >
            <Frame hidden={currentID !== items[item].id -1} height={24} width={4} cornerRadius={99} fill={{
                type: 'solid',
                color: '#18A0FB'
              }}
            ></Frame>
            <AutoLayout
              verticalAlignItems="center"
              height="hug-contents"
              width="fill-parent"
              padding={4}
              spacing={8}
            >
              <Text 
                fontSize={16}
                opacity={currentID > items[item].id - 1 ? 0.25 : 1}
              >
                {items[item].emoji}
              </Text>
              <Text 
                fontSize={14}
                lineHeight={24}
                fontWeight={currentID === items[item].id - 1 ? 600 : 400}
                fontFamily="Inter"
                textDecoration={currentID > items[item].id - 1 ? "strikethrough" : "none"}
                fill={{
                  type: 'solid',
                  color: `${currentID === items[item].id - 1 ? "#18A0FB" : currentID > items[item].id - 1 ? "#B3B3B3" : "#000"}`,
                  opacity: .8
                }}
              >
                {`${items[item].name.slice(0, truncateLength)}${items[item].name.length <= truncateLength ? '' : '...'}`}
              </Text>
            </AutoLayout>
            <AutoLayout
              verticalAlignItems="center"
              horizontalAlignItems="end"
              height="hug-contents"
              width="hug-contents"
              padding={{
                left: 8,
                right: 8,
                top: 4,
                bottom: 4
              }}
              spacing={4}
            >
              <SVG src={currentID === items[item].id - 1 ? timeIconBlue : currentID > items[item].id - 1 ? checkIcon : timeIcon}></SVG>
              <Text 
                fontSize={14}
                lineHeight={24}
                fontWeight={400}
                fontFamily="Inter"
                textDecoration={currentID > items[item].id - 1 ? "strikethrough" : "none"}
                fill={{
                  type: 'solid',
                  color: `${currentID === items[item].id - 1 ? "#18A0FB" : currentID > items[item].id - 1 ? "#B3B3B3" : "#000"}`,
                  opacity: .8
                }}
              >
                {zeroPad(items[item].minutes) + ':' + zeroPad(items[item].seconds)}
              </Text>
            </AutoLayout>
            <Frame height={12} width={1} cornerRadius={99} fill={{
                type: 'solid',
                color: '#000',
                opacity: .06
              }}
            ></Frame>
            <AutoLayout
              hidden={!isLocked}
              verticalAlignItems="center"
              horizontalAlignItems="center"
              height="hug-contents"
              width="hug-contents"
              padding={0}
              spacing={0}
            >
              <AutoLayout
                verticalAlignItems="center"
                horizontalAlignItems="center"
                height="hug-contents"
                width="hug-contents"
                padding={6}
                spacing={0}
              >
                <SVG 
                  src={deleteIconDisabled}
                ></SVG>
              </AutoLayout>
              <AutoLayout
                verticalAlignItems="center"
                horizontalAlignItems="center"
                height="hug-contents"
                width="hug-contents"
                padding={6}
                spacing={0}
              >
                <SVG 
                  src={editIconDisabled}
                ></SVG>
              </AutoLayout>
            </AutoLayout>
            <AutoLayout
              hidden={isLocked}
              verticalAlignItems="center"
              horizontalAlignItems="center"
              height="hug-contents"
              width="hug-contents"
              padding={0}
              spacing={0}
            >
              <AutoLayout
                verticalAlignItems="center"
                horizontalAlignItems="center"
                height="hug-contents"
                width="hug-contents"
                fill={currentID === items[item].id - 1 ? "#EDF5FA" : currentID > items[item].id - 1 ? "#F7F7F7" : "#FFF"}
                padding={6}
                spacing={0}
                onClick={() => {
                  setItem(items.filter(thing => thing.id != items[item].id))
                }}
              >
                <SVG 
                  src={deleteIcon}
                ></SVG>
              </AutoLayout>
              <AutoLayout
                verticalAlignItems="center"
                horizontalAlignItems="center"
                height="hug-contents"
                width="hug-contents"
                fill={currentID === items[item].id - 1 ? "#EDF5FA" : currentID > items[item].id - 1 ? "#F7F7F7" : "#FFF"}
                padding={6}
                spacing={0}
                onClick={() => openUI('edit', {
                  emoji: items[item].emoji,
                  id: items[item].id,
                  name: items[item].name,
                  minutes: items[item].minutes,
                  seconds: items[item].seconds
                })}
              >
                <SVG 
                  src={editIcon}
                ></SVG>
              </AutoLayout>
            </AutoLayout>
          </AutoLayout>
      );
      timerList.push(agendaItem)
  }
  return (
    <AutoLayout
      verticalAlignItems="start" 
      direction="vertical"
      height="fill-parent"
      overflow="hidden"
      padding={0}
      width={368}
      height="hug-contents"
      fill="#FFFFFF" 
      cornerRadius={12} 
      spacing={0}
      effect={{
          type: 'drop-shadow',
          color: { r: 0, g: 0, b: 0, a: 0.1 },
          offset: { x: 0, y: 5 },
          blur: 24,
          spread: 0
        },
        {
          type: 'drop-shadow',
          color: { r: 0, g: 0, b: 0, a: 0.1 },
          offset: { x: 0, y: 2 },
          blur: 8,
        }
      }
    >
      {header}
      {emptyState}
      <AutoLayout
        hidden={items.length === 0}
        verticalAlignItems="start" 
        direction="vertical"
        width="fill-parent"
        height="hug-contents"
        overflow="scroll"
      >
        {timerList}
      </AutoLayout>
      {addBtn}
      {playControls}
    </AutoLayout>
  );
}
widget.register(FigJenda);