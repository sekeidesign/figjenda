export default function EmptyGraphic({ themeColor }) {
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
  } = widget;
  const emojis = [
    { id: 1, emoji: "👋" },
    { id: 2, emoji: "🚀" },
    { id: 3, emoji: "⚡️" },
  ];
  emojis.map((item) => {
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
          type: "solid",
          color: "#FFF",
          opacity: 0.9,
        }}
        effect={{
          type: "drop-shadow",
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
              type: "solid",
              color: `${themeColor}`,
              opacity: 0.5,
            }}
          ></Frame>
          <Frame
            height={4}
            width={96}
            cornerRadius={99}
            fill={{
              type: "solid",
              color: `${themeColor}`,
              opacity: 0.15,
            }}
          ></Frame>
        </AutoLayout>
      </AutoLayout>
    );
  });
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
      {emojis}
    </AutoLayout>
  );
}
