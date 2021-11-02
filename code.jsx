const { widget, ui, showUI } = figma
const { AutoLayout, SVG, Text, useSyncedState } = widget;

const buttonSrc = `
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="16" cy="16" r="15.5" stroke="black" stroke-opacity="0.1" fill="white"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M17 8H15V15H8V17H15V24H17V17H24V15H17V8Z" fill="black" fill-opacity="0.8"/>
  </svg>
`;
const downIconSrc = `
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M7.08 0.079998H9.08L9.08 12.08L14.58 6.58L16 8L8.08 15.92L0.160004 8L1.58 6.58L7.08 12.08L7.08 0.079998Z" fill="white"/>
  </svg>
`;
const upIconSrc = `
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M9.08001 15.92L7.08001 15.92L7.08001 3.92002L1.58001 9.42002L0.160007 8.00002L8.08001 0.0800171L16 8.00002L14.58 9.42002L9.08001 3.92002L9.08001 15.92Z" fill="white"/>
  </svg>
`;
const test = `
<svg width="959" height="574" viewBox="0 0 959 574" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="959" height="574" fill="white"/>
<rect x="49" y="42" width="851" height="508" fill="#FF0000"/>
<rect x="96" y="74" width="238" height="160" fill="#C4C4C4"/>
</svg>
`;

function FigJenda() {
    const [items] = useSyncedState('items', [
        {
            name: "Intros",
            emoji: "👋",
            time: 500
        },
        {
            name: "Sailboat Exercise",
            emoji: "⛵️",
            time: 5500
        },
    ]);
    let timerList = []
    for (let item in items) {
        const child = ( 
            <AutoLayout>
                <Text children="x"></Text>
            </AutoLayout>
        );
        // const child = figma.widget.h(AutoLayout, { verticalAlignItems: "center", height: "hug-contents", width: "fill-parent", padding: 8, fill: "#EFEFEF", cornerRadius: 8 },
        //     figma.widget.h(AutoLayout, { verticalAlignItems: "center", horizontalAlignItems: "center", width: 'fill-parent', spacing: 'auto' }, 
        //         figma.widget.h(AutoLayout, { verticalAlignItems: "center", horizontalAlignItems: "start", spacing: 4, width: "fill-parent" }, 
        //             figma.widget.h(Text, { fontSize: 16 }, items[item].emoji),
        //             figma.widget.h(Text, { fontSize: 14 }, items[item].name)
        //         ),

        //     )
            
        // )
        timerList.push(child)
    }
    return (figma.widget.h(AutoLayout, { 
        verticalAlignItems: "start", 
        direction: "vertical",
        padding: { 
            left: 8, 
            right: 8, 
            top: 8, 
            bottom: 8 
        }, 
        width: 368,
        height: 440,
        fill: "#FFFFFF", 
        cornerRadius: 8, 
        spacing: 12, 
        stroke: {
            type: 'solid',
            color: '#F24822',
        }, 
        effect: {
            type: 'drop-shadow',
            color: { r: 0, g: 0, b: 0, a: 0.2 },
            offset: { x: 0, y: 0 },
            blur: 2,
            spread: 2,
        } 
    },
      timerList  
    ));
}
widget.register(FigJenda);