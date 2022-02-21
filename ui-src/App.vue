<script>
const eventListeners = [];
export const dispatch = (action, data) => {
  parent.postMessage({ pluginMessage: { action, data } }, "*");
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
import { ref, computed, onMounted } from "vue";
import emojiSet from "./emoji.json";
import AddEdit from "./Components/AddEdit.vue";

const item = ref({
  selectedEmoji: "",
  itemName: "",
  time: 0,
  id: null,
});

const mode = ref();

handleEvent("add", () => {
  mode.value = "Add";
});

handleEvent("edit", (data) => {
  mode.value = "Edit";
  item.value.selectedEmoji = data.emoji;
  item.value.itemName = data.name;
  item.value.time = data.time;
  item.value.id = data.id;
});

handleEvent("rename", () => {
  mode.value = "Rename";
});

function pluginDone(data) {
  if (data.mode === "Add") {
    const obj = {
      id: null,
      name: data.itemName,
      emoji: data.selectedEmoji,
      time: data.time,
    };
    dispatch("add", obj);
  } else if (data.mode === "Edit") {
    const obj = {
      id: data.id,
      name: data.itemName,
      emoji: data.selectedEmoji,
      time: data.time,
    };
    dispatch("editDone", obj);
  }
}

function renameAgenda() {
  const obj = {
    name: item.value.itemName,
    emoji: item.value.selectedEmoji,
  };
  dispatch("renameDone", obj);
}

function test(data) {
  console.log(data, "test");
}

onMounted(() => {
  dispatch("UIReady");
});
</script>

<template>
  <div
    style="
      padding: 0px;
      position: relative;
      display: flex;
      flex-direction: column;
      height: 300px;
    "
  >
    <!-- <button @click="test"></button> -->
    <AddEdit
      v-if="mode"
      @done="
        (data) => {
          pluginDone(data);
        }
      "
      :componentMode="mode"
      :agendaItem="item"
    ></AddEdit>
  </div>
</template>

<style lang="scss">
// Hide stepper arrows on inputs
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
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
