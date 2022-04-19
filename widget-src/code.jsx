import colorIcons from './colorIcons';
import uiIcons from './uiIcons';

const {
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
  resetIcon,
} = uiIcons;

const { widget, ui, showUI, closePlugin, timer } = figma;

const {
  AutoLayout,
  SVG,
  Text,
  Frame,
  useSyncedState,
  usePropertyMenu,
  useEffect,
  waitForTask,
  Input,
  useStickable,
} = widget;

const eventListeners = [];

export const dispatch = (action, data) => {
  ui.postMessage({ action, data });
};
export const handleEvent = (type, callback) => {
  eventListeners.push({ type, callback });
};
ui.onmessage = (message) => {
  for (let eventListener of eventListeners) {
    if (message.action === eventListener.type)
      eventListener.callback(message.data);
  }
};

// ---- FUNCTIONS ----------------
function zeroPad(num) {
  const paddedNum = num > 9 ? num : `0${num}`;
  return paddedNum;
}

// ---- WIDGET ----------------
function FigJenda() {
  // ---------------------------
  // ---- STATE ----------------
  const [items, setItem] = useSyncedState('items', []);
  const invalidItems = items.filter((el) => el.time < 1);
  const [isPlaying, togglePlay] = useSyncedState('isPlaying', false);
  const [isLocked, toggleLock] = useSyncedState('isLocked', false);
  const [isAutoPlay, toggleAutoPlay] = useSyncedState('isAutoPlay', true);
  const [themeColor, changeColor] = useSyncedState('themeColor', '#1E1E1E');
  const [currentID, updateCurrent] = useSyncedState('currentID', -1);
  const [agendaName, updateAgendaName] = useSyncedState('agendaName', {
    name: 'FigJenda',
    emoji: '📌',
  });

  useStickable();

  function openUI(mode, data, options = { height: 300, width: 332 }) {
    return new Promise((resolve) => {
      showUI(__html__, options);

      // Close the plugin
      handleEvent('close', () => {
        figma.closePlugin();
        resolve();
      });

      // Enable plugin to edit existing items
      handleEvent('UIReady', () => {
        switch (mode) {
          case 'edit':
            dispatch('edit', data);
            break;
          case 'rename':
            dispatch('rename', data);
            break;
          case 'editTime':
            dispatch('editTime', data);
            break;
          case 'templates':
            dispatch('templates', { items }, { height: 440, width: 440 });
            break;
          case 'emoji':
            dispatch('emoji', data);
        }
      });

      // Replace item with edited version from plugin
      handleEvent('editDone', (data) => {
        let updatedItems = items;
        console.log(data.index);
        updatedItems[data.index] = data;
        console.log(updatedItems);
        setItem(updatedItems);
        figma.closePlugin();
        resolve();
      });

      handleEvent('preview', (template) => {
        //console.log('Received', template);
        setItem(template.items);
      });

      handleEvent('cancelPreview', (items) => {
        setItem(items);
        figma.closePlugin();
      });

      handleEvent('loadTemplate', () => {
        figma.closePlugin();
      });

      handleEvent('renameDone', (data) => {
        updateAgendaName(data);
        figma.closePlugin();
        resolve();
      });
    });
  }

  // Add item to items array from the plugin
  const newItem = () => {
    const lastIndex = items.length - 1;
    const itemTemplate = {
      itemName: '',
      emoji: '📌',
      time: 0,
      id: items[lastIndex] ? items[lastIndex].id + 1 : 1,
    };
    let updatedItems = items;
    updatedItems.push(itemTemplate);
    setItem(updatedItems);
  };

  // Convert time value to minutes
  function toMins(time) {
    return Math.floor(time / 60);
  }
  // Account for seconds left over in minute conversion
  function toSecs(time) {
    return time % 60;
  }

  // Start playing the agenda
  function play() {
    //console.log("Started agenda")
    updateCurrent(0); // Updates currentID to be 0
    togglePlay(true);
    //console.log("Index: ", currentID) // Expected output 'Index: 0' — Actual output 'Index: -1'
    timer.start(items[currentID + 1].time);
  }

  // Reset the agenda and stop the FigJam timer
  function stop() {
    timer.stop();
    togglePlay(false);
    updateCurrent(-1);
  }

  // Skip to next item in the agenda, and play based on isAutoPlay
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

  // Keep widget alive and listen to timer events
  useEffect(() => {
    waitForTask(
      new Promise((resolve) => {
        figma.on('timerstop', () => {
          stop();
          resolve();
        });
      })
    );
    waitForTask(
      new Promise((resolve) => {
        figma.on('timerdone', () => {
          setTimeout(() => {
            if (currentID + 1 < items.length) {
              //console.log("Going next", currentID)
              next();
              resolve();
            } else {
              //console.log('done')
              updateCurrent(currentID + 1);
              figma.closePlugin();
              timer.stop();
              resolve();
            }
          }, 100);
        });
      })
    );
  });

  const stopIcon = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="${
    items.length > 0 ? '#F24822' : 'rgba(0,0,0,.3)'
  }" class="bi bi-stop" viewBox="0 0 16 16">
  <path d="M3.5 5A1.5 1.5 0 0 1 5 3.5h6A1.5 1.5 0 0 1 12.5 5v6a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 11V5zM5 4.5a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 .5-.5V5a.5.5 0 0 0-.5-.5H5z"/>
</svg>
`;
  const skipIcon = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="${
    items.length > 0 ? 'rgba(0,0,0,.8)' : 'rgba(0,0,0,.3)'
  }" class="bi bi-skip-forward" viewBox="0 0 16 16">
  <path d="M15.5 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V8.752l-6.267 3.636c-.52.302-1.233-.043-1.233-.696v-2.94l-6.267 3.636C.713 12.69 0 12.345 0 11.692V4.308c0-.653.713-.998 1.233-.696L7.5 7.248v-2.94c0-.653.713-.998 1.233-.696L15 7.248V4a.5.5 0 0 1 .5-.5zM1 4.633v6.734L6.804 8 1 4.633zm7.5 0v6.734L14.304 8 8.5 4.633z"/>
</svg>
`;

  // ---- PROPERTY MENU ----------------
  usePropertyMenu(
    [
      {
        itemType: 'color-selector',
        propertyName: 'color-selector',
        tooltip: 'Color selector',
        selectedOption: themeColor,
        options: [
          {
            tooltip: 'Purple',
            option: '#9747FF',
          },
          {
            tooltip: 'Gray',
            option: '#757575',
          },
          {
            tooltip: 'Red',
            option: '#F24822',
          },
          {
            tooltip: 'Yellow',
            option: '#FFCD29',
          },
          {
            tooltip: 'Green',
            option: '#14AE5C',
          },
          {
            tooltip: 'Blue',
            option: '#0D99FF',
          },
          {
            tooltip: 'Orange',
            option: '#FFA629',
          },
          {
            tooltip: 'Black',
            option: '#1E1E1E',
          },
        ],
      },
      {
        itemType: 'separator',
      },
      {
        itemType: 'action',
        propertyName: 'rename',
        tooltip: 'Rename Agenda',
      },
      {
        itemType: 'separator',
      },
      {
        itemType: 'action',
        propertyName: 'templates',
        tooltip: 'Templates',
      },
    ],
    ({ propertyName, propertyValue }) => {
      switch (propertyName) {
        case 'color-selector':
          changeColor(propertyValue);
          break;
        case 'rename':
          openUI('rename', {
            agendaName: agendaName.name,
            agendaEmoji: agendaName.emoji,
          });
          break;
        case 'templates':
          openUI('templates', items, { height: 440, width: 440 });
          break;
      }
    }
  );
  // ---- COMPONENTS ----------------
  const header = (
    <AutoLayout
      verticalAlignItems="center"
      height="hug-contents"
      width="fill-parent"
      padding={{
        left: 16,
        right: 8,
        top: 6,
        bottom: 6,
      }}
      spacing="auto"
      fill={themeColor}
    >
      <AutoLayout
        verticalAlignItems="center"
        height="hug-contents"
        width="hug-contents"
        padding={0}
        spacing={12}
      >
        <Text fontSize={14} lineHeight={24}>
          {agendaName.emoji}
        </Text>
        <Text
          fontSize={14}
          lineHeight={24}
          fontWeight={600}
          fontFamily="Inter"
          fill={{
            type: 'solid',
            color: '#fff',
          }}
        >
          {agendaName.name}
        </Text>
      </AutoLayout>
      <AutoLayout
        verticalAlignItems="center"
        horizontalAlignItems="center"
        height="hug-contents"
        width="hug-contents"
        fill={{
          type: 'solid',
          color: `${themeColor}`,
        }}
        padding={6}
        spacing={0}
        onClick={() => {
          toggleLock(!isLocked);
        }}
      >
        <SVG src={isLocked ? unlockIcon : lockIcon}></SVG>
      </AutoLayout>
    </AutoLayout>
  );

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
          toggleAutoPlay(!isAutoPlay);
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
            opacity: 0.8,
          }}
        >
          Auto-play
        </Text>
        <SVG src={isAutoPlay ? toggleOn : toggleOff}></SVG>
      </AutoLayout>

      <AutoLayout
        verticalAlignItems="center"
        height="hug-contents"
        width="hug-contents"
        padding={0}
        spacing={8}
      >
        <AutoLayout
          hidden={invalidItems.length < 1 && items.length > 0}
          verticalAlignItems="center"
          height="hug-contents"
          width="hug-contents"
          padding={12}
          cornerRadius={999}
          fill={{
            type: 'solid',
            color: '#000',
            opacity: 0.3,
          }}
        >
          <SVG src={playIcon}></SVG>
        </AutoLayout>
        <AutoLayout
          hidden={
            invalidItems.length > 0 || items.length < 1 || isPlaying === true
          }
          verticalAlignItems="center"
          height="hug-contents"
          width="hug-contents"
          padding={12}
          cornerRadius={999}
          fill="#18A0FB"
          onClick={() => {
            play();
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
            color: `${currentID < items.length ? '#F24822' : '#000'}`,
          }}
          onClick={() => {
            stop();
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
            color: '#000',
            opacity: 0.3,
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
            color: '#000',
            opacity: 0.8,
          }}
          onClick={() => {
            next();
          }}
        >
          <SVG src={skipIcon}></SVG>
        </AutoLayout>
      </AutoLayout>
    </AutoLayout>
  );

  const addBtn = (
    <AutoLayout
      hidden={items.length === 0 || isLocked}
      verticalAlignItems="center"
      height="hug-contents"
      width="fill-parent"
      hoverStyle={{
        fill: '#f7f7f7',
      }}
      padding={12}
      spacing={10}
      fill="#FFF"
      effect={{
        type: 'inner-shadow',
        color: '#E5E5E5',
        offset: { x: 0, y: -1 },
        blur: 0,
      }}
      onClick={() => newItem()}
    >
      <Text
        fontSize={14}
        lineHeight={24}
        fontWeight={400}
        fontFamily="Inter"
        fill={{
          type: 'solid',
          color: '#000',
          opacity: 0.8,
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
          opacity: 0.8,
        }}
      >
        Add Item
      </Text>
    </AutoLayout>
  );

  function emptyGraphic() {
    const emojis = [
      { id: 1, emoji: '👋' },
      { id: 2, emoji: '🚀' },
      { id: 3, emoji: '⚡️' },
    ];
    let emojiCards = [];
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
            color: '#FFF',
            opacity: 0.9,
          }}
          effect={{
            type: 'drop-shadow',
            color: {
              r: 0.2,
              g: 0.29,
              b: 0.74,
              a: 0.15,
            },
            offset: { x: 0, y: 4 },
            blur: 6,
          }}
        >
          <AutoLayout padding={8} cornerRadius={4} fill={themeColor}>
            <Text
              width="hug-contents"
              height="hug-contents"
              fontSize={12}
              lineHeight={12}
            >
              {item.emoji}
            </Text>
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
                type: 'solid',
                color: `${themeColor}`,
                opacity: 0.5,
              }}
            ></Frame>
            <Frame
              height={4}
              width={96}
              cornerRadius={99}
              fill={{
                type: 'solid',
                color: `${themeColor}`,
                opacity: 0.15,
              }}
            ></Frame>
          </AutoLayout>
        </AutoLayout>
      );
      emojiCards.push(emojiCard);
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
  }

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
        bottom: 32,
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
            right: 0,
          }}
        >
          <Frame
            width={248}
            height={248}
            cornerRadius={999}
            fill={{
              type: 'solid',
              color: `${themeColor}`,
              opacity: 0.1,
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
              opacity: 0.8,
            }}
          >
            It's looking a little empty here
          </Text>
          <Text
            fontSize={11}
            lineHeight={16}
            fontWeight={400}
            fontFamily="Inter"
            width="hug-contents"
            fill={{
              type: 'solid',
              color: '#000',
              opacity: 0.8,
            }}
          >
            Start by adding an agenda item 👇
          </Text>
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
            left: 12,
          }}
          spacing={4}
          fill={themeColor}
          cornerRadius={6}
          onClick={() => newItem()}
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
              color: '#FFF',
            }}
          >
            Add item
          </Text>
        </AutoLayout>
      </AutoLayout>
    </AutoLayout>
  );

  const truncateLength = 32;
  let timerList = [];
  for (let item in items) {
    const agendaItem = (
      <AutoLayout
        key={items[item].id}
        verticalAlignItems="center"
        height="hug-contents"
        width="fill-parent"
        padding={8}
        spacing={4}
        fill={
          currentID === items.indexOf(items[item])
            ? '#EDF5FA'
            : currentID > items.indexOf(items[item])
            ? '#F7F7F7'
            : '#FFF'
        }
        effect={{
          type: 'inner-shadow',
          color: '#E5E5E5',
          offset: { x: 0, y: -1 },
          blur: 0,
        }}
      >
        <Frame
          hidden={currentID !== items.indexOf(items[item])}
          height={24}
          width={4}
          cornerRadius={99}
          fill={{
            type: 'solid',
            color: '#18A0FB',
          }}
        ></Frame>
        <AutoLayout
          verticalAlignItems="center"
          height="hug-contents"
          width="fill-parent"
          padding={{
            top: 4,
            bottom: 4,
            left: 0,
            right: 4,
          }}
          spacing={0}
        >
          <AutoLayout
            onClick={(e) =>
              openUI(
                'emoji',
                {
                  emoji: items[item].emoji,
                  id: items[item].id,
                  name: items[item].name,
                  time: items[item].time,
                  index: items.indexOf(items[item]),
                },
                {
                  height: 240,
                  position: {
                    x: e.canvasX,
                    y: e.canvasY + 16,
                  },
                }
              )
            }
            padding={6}
            cornerRadius={4}
            hoverStyle={{
              fill: '#f0f0f0',
            }}
            height={28}
            width={28}
          >
            <Text
              fontSize={16}
              opacity={currentID > items.indexOf(items[item]) ? 0.25 : 1}
            >
              {items[item].emoji}
            </Text>
          </AutoLayout>
          <AutoLayout cornerRadius={4} width="fill-parent">
            <Input
              value={items[item].name}
              fontSize={14}
              placeholder="Name your agenda item..."
              inputFrameProps={{
                cornerRadius: 4,
                padding: {
                  left: 4,
                  right: 4,
                  top: 2,
                  bottom: 2,
                },
                hoverStyle: {
                  stroke: '#E5E5E5',
                },
              }}
              lineHeight={24}
              fontWeight={400}
              fontFamily="Inter"
              width="fill-parent"
              inputBehaviour="truncate"
              onTextEditEnd={(e) => {
                const updatedItems = items;
                const currentIndex = items.indexOf(items[item]);
                items[currentIndex].name = e.characters;
                setItem(updatedItems);
              }}
            ></Input>
          </AutoLayout>
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
            bottom: 4,
          }}
          cornerRadius={4}
          spacing={4}
          onClick={(e) => {
            console.log(items.indexOf(items[item]));
            openUI(
              'editTime',
              {
                emoji: items[item].emoji,
                id: items[item].id,
                index: items.indexOf(items[item]),
                name: items[item].name,
                time: items[item].time,
              },
              {
                height: 171,
                width: 200,
                position: {
                  x: e.canvasX,
                  y: e.canvasY + 16,
                },
              }
            );
          }}
          hoverStyle={{
            stroke: '#e5e5e5',
          }}
        >
          <SVG
            src={
              currentID === items.indexOf(items[item])
                ? timeIconBlue
                : currentID > items.indexOf(items[item])
                ? checkIcon
                : timeIcon
            }
          ></SVG>
          <Text
            fontSize={14}
            lineHeight={24}
            fontWeight={400}
            fontFamily="Inter"
            textDecoration={
              currentID > items.indexOf(items[item]) ? 'strikethrough' : 'none'
            }
            fill={{
              type: 'solid',
              color: `${
                currentID === items.indexOf(items[item])
                  ? '#18A0FB'
                  : currentID > items.indexOf(items[item])
                  ? '#B3B3B3'
                  : '#000'
              }`,
              opacity: 0.8,
            }}
          >
            {zeroPad(toMins(items[item].time)) +
              ':' +
              zeroPad(toSecs(items[item].time))}
          </Text>
        </AutoLayout>
        <Frame
          height={12}
          width={1}
          cornerRadius={99}
          fill={{
            type: 'solid',
            color: '#000',
            opacity: 0.06,
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
            <SVG src={deleteIconDisabled}></SVG>
          </AutoLayout>
          <AutoLayout
            verticalAlignItems="center"
            horizontalAlignItems="center"
            height="hug-contents"
            width="hug-contents"
            padding={6}
            spacing={0}
          >
            <SVG src={duplicateIconDisabled}></SVG>
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
            fill={
              currentID === items.indexOf(items[item])
                ? '#EDF5FA'
                : currentID > items.indexOf(items[item])
                ? '#F7F7F7'
                : '#FFF'
            }
            padding={6}
            cornerRadius={4}
            hoverStyle={{
              fill: '#f0f0f0',
            }}
            spacing={0}
            onClick={() => {
              const indexToDelete = items.indexOf(items[item]);
              items.splice(indexToDelete, 1);
              setItem(items);
            }}
          >
            <SVG src={deleteIcon}></SVG>
          </AutoLayout>
          <AutoLayout
            verticalAlignItems="center"
            horizontalAlignItems="center"
            height="hug-contents"
            width="hug-contents"
            fill={
              currentID === items.indexOf(items[item])
                ? '#EDF5FA'
                : currentID > items.indexOf(items[item])
                ? '#F7F7F7'
                : '#FFF'
            }
            padding={6}
            cornerRadius={4}
            hoverStyle={{
              fill: '#f0f0f0',
            }}
            spacing={0}
            onClick={() => {
              const lastId = items.length - 1;
              const currentIndex = items.indexOf(items[item]);
              const duplicatedItem = {
                emoji: items[item].emoji,
                id: items[lastId].id + 1,
                name: items[item].name,
                time: items[item].time,
              };
              let updatedItems = items;
              updatedItems.splice(currentIndex, 0, duplicatedItem);
              setItem(updatedItems);
            }}
          >
            <SVG src={duplicateIcon}></SVG>
          </AutoLayout>
        </AutoLayout>
      </AutoLayout>
    );
    timerList.push(agendaItem);
  }
  return (
    <AutoLayout
      verticalAlignItems="start"
      direction="vertical"
      height="fill-parent"
      overflow="hidden"
      padding={0}
      width={440}
      fill="#FFFFFF"
      cornerRadius={12}
      spacing={0}
      effect={
        ({
          type: 'drop-shadow',
          color: { r: 0, g: 0, b: 0, a: 0.1 },
          offset: { x: 0, y: 5 },
          blur: 24,
          spread: 0,
        },
        {
          type: 'drop-shadow',
          color: { r: 0, g: 0, b: 0, a: 0.1 },
          offset: { x: 0, y: 2 },
          blur: 8,
        })
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
