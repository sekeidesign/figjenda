<script>
const eventListeners = [];
export const dispatch = (action, data) => {
  parent.postMessage({ pluginMessage: { action, data } }, '*');
};
export const handleEvent = (type, callback) => {
  eventListeners.push({ type, callback });
};
window.onmessage = (event) => {
  const message = event.data.pluginMessage;
  if (message) {
    for (let eventListener of eventListeners) {
      if (message.action === eventListener.type)
        eventListener.callback(message.data);
    }
  }
};
</script>

<script setup>
import { ref, computed, onMounted } from 'vue';
import emojiSet from './emoji.json';
import AddEdit from './Components/AddEdit.vue';
import Rename from './Components/Rename.vue';
import TemplateGallery from './Components/TemplateGallery.vue';
import EmojiPicker from './Components/EmojiPicker.vue';

const item = ref({
  selectedEmoji: '',
  itemName: '',
  time: 0,
  id: null,
});

const agenda = ref({
  name: '',
  emoji: '',
});

const mode = ref('');

let currentItems;

handleEvent('add', () => {
  mode.value = 'Add';
  //console.log(mode.value);
});

handleEvent('emoji', (data) => {
  mode.value = 'Emoji';
  item.value.selectedEmoji = data.emoji;
  item.value.itemName = data.name;
  item.value.time = data.time;
  item.value.id = data.id;
});

handleEvent('edit', (data) => {
  mode.value = 'Edit';
  item.value.selectedEmoji = data.emoji;
  item.value.itemName = data.name;
  item.value.time = data.time;
  item.value.id = data.id;
});

handleEvent('rename', (data) => {
  mode.value = 'Rename';
  agenda.value.name = data.agendaName;
  agenda.value.emoji = data.agendaEmoji;
});

handleEvent('templates', (data) => {
  //console.log(data);
  mode.value = 'Templates';
  currentItems = data.items;
});

function pluginDone(data) {
  const { mode } = data;
  let obj = {};
  switch (mode) {
    case 'Add':
      obj = {
        id: null,
        name: data.itemName,
        emoji: data.selectedEmoji,
        time: data.time,
        editing: false,
      };
      dispatch('add', obj);
      break;
    case 'Edit':
      obj = {
        id: data.id,
        name: data.itemName,
        emoji: data.selectedEmoji,
        time: data.time,
        editing: false,
      };
      dispatch('editDone', obj);
      break;
    case 'Rename':
      obj = {
        name: data.itemName,
        emoji: data.selectedEmoji,
      };
      dispatch('renameDone', obj);
      break;
    case 'Cancel':
      dispatch('close');
      break;
  }
}

function templatePreview(template) {
  dispatch('preview', template);
}

function cancelPreview() {
  //console.log(currentItems);
  dispatch('cancelPreview', currentItems);
}

function loadTemplate() {
  dispatch('loadTemplate');
}

function test(data) {
  console.log(data, 'test');
}

onMounted(() => {
  dispatch('UIReady');
});
</script>

<template>
  <div
    style="
      padding: 0px;
      position: relative;
      display: flex;
      flex-direction: column;
      height: 100%;
      border-radius: 16px;
    "
  >
    <!-- <button @click="test"></button> -->
    <AddEdit
      v-if="mode === 'Edit' || mode === 'Add'"
      @done="
        (data) => {
          pluginDone(data);
        }
      "
      :componentMode="mode"
      :agendaItem="item"
    ></AddEdit>
    <Rename
      v-else-if="mode === 'Rename'"
      @done="
        (data) => {
          pluginDone(data);
        }
      "
    ></Rename>
    <EmojiPicker
      v-else-if="mode === 'Emoji'"
      :agendaItem="item"
      @done="
        (data) => {
          pluginDone(data);
        }
      "
    ></EmojiPicker>
    <TemplateGallery
      v-else-if="mode === 'Templates'"
      @preview="
        (template) => {
          templatePreview(template);
        }
      "
      @cancelPreview="cancelPreview()"
      @loadTemplate="loadTemplate()"
    ></TemplateGallery>
  </div>
</template>

<style lang="scss">
@font-face {
  font-family: 'Roboto Mono';
  src: local('Roboto Mono'),
    url(./public/fonts/RobotoMono-Regular.ttf) format('truetype');
}

*,
*::before,
*::after {
  box-sizing: border-box;
}
// Hide stepper arrows on inputs
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type='number'] {
  border: 1px solid transparent;
  width: 21px;
  font-size: 14px;
  -moz-appearance: textfield;
  &:focus-visible {
    border-radius: 2px;
    border: 1px solid rgba(24, 160, 251, 1);
    outline: transparent !important;
  }
}
</style>
