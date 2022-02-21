<script setup>
import { ref, computed, defineProps } from "vue";
import emojiSet from "../emoji.json";

const props = defineProps({
  agendaInfo: Object,
});

const emit = defineEmits(["done"]);
function done(modeData) {
  //console.log(`Done ${mode}ing`);
  const data = {
    mode: modeData,
    itemName: localAgendaName.value,
    selectedEmoji: localAgendaEmoji.value,
  };
  emit("done", data);
}

Object.filter = (obj, predicate) =>
  Object.keys(obj)
    .filter((key) => predicate(obj[key]))
    .reduce((res, key) => ((res[key] = obj[key]), res), {});
const emoji3 = Object.filter(
  emojiSet,
  (emoji) => parseInt(emoji["emoji_version"], 10) <= 3
);
const emojis = Object.keys(emoji3);

const localAgendaName = ref("");
const localAgendaEmoji = ref("");

const nameInput = ref(null);

const isAgendaValid = computed(() => {
  return localAgendaEmoji.value && localAgendaName.value;
});

function removeEmoji() {
  localAgendaEmoji.value = "";
}
function setEmoji(emoji) {
  localAgendaEmoji.value = emoji;
  nameInput.value.focus();
}

function test() {
  console.log(props.componentMode);
}

if (props.agendaInfo) {
  //console.log("Item exists", props.agendaItem);
  const { agendaName, agendaEmoji } = props.agendaInfo;
  localAgendaName.value = agendaName;
  localAgendaEmoji.value = agendaEmoji;
}
</script>

<template>
  <div class="header">
    <div class="section-title-input">
      <button class="emoji-input" @click.prevent="removeEmoji">
        <svg
          v-if="localAgendaEmoji === ''"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-emoji-smile"
          viewBox="0 0 16 16"
        >
          <path
            d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
          />
          <path
            d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"
          />
        </svg>
        <div v-else class="selected-emoji">{{ localAgendaEmoji }}</div>
      </button>
      <input
        type="text"
        placeholder="Item name"
        class="input"
        ref="nameInput"
        v-model="localAgendaName"
        @keyup="focusMins"
      />
    </div>
  </div>
  <div class="emoji-list-wrap">
    <div class="emoji-list">
      <button
        class="emoji-btn"
        :class="[emoji === localAgendaEmoji ? 'is-selected' : '']"
        v-for="emoji in emojis"
        :key="emoji.slug"
        @click="setEmoji(emoji)"
      >
        {{ emoji }}
      </button>
    </div>
  </div>
  <div class="actions">
    <button class="primary-btn destructive" @click="done('Cancel')">
      Cancel
    </button>
    <button
      class="primary-btn"
      @click="done('Rename')"
      :disabled="!isAgendaValid"
    >
      Rename
    </button>
  </div>
</template>

<style lang="scss">
.header {
  padding: 8px;
  background-color: white;
  border-bottom: 1px solid #f0f0f0;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05), 0px 5px 16px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  flex-shrink: 0;
}
.section-title-input {
  position: relative;
  display: flex;
  align-items: center;
  flex-grow: 3;
}
.emoji-input {
  border: none;
  position: absolute;
  inset: 4px;
  z-index: 20;
  cursor: pointer;
  border-radius: 2px;
  padding: 4px;
  background-color: transparent;
  color: rgba(0, 0, 0, 0.3);
  height: 24px;
  &:hover {
    background: rgba(0, 0, 0, 0.06);
  }
}
.input {
  height: 32px;
  padding-left: 32px;
  z-index: 10;
  border-radius: 2px;
  border: 1px solid transparent;
  color: rgba(0, 0, 0, 0.8);
  width: 100%;
  outline: transparent;
  &::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }
  &:hover {
    border: 1px solid rgba(0, 0, 0, 0.1);
  }
  &:focus-visible {
    border-radius: 2px;
    border: 1px solid rgba(24, 160, 251, 1);
    outline: transparent !important;
  }
}
.time-wrap {
  width: 72px;
  margin-left: 4px;
  position: relative;
  display: flex;
  align-items: center;
}
.time {
  padding-left: 24px;
  font-size: 14px;
  display: flex;
  align-items: center;
  &:hover {
    border: 1px solid transparent;
  }
  &:focus-visible {
    border-radius: 2px;
    border: 1px solid transparent;
    outline: transparent !important;
  }
}
.bi-clock {
  position: absolute;
  left: 8px;
  top: 10px;
}
.emoji-list-wrap {
  flex-grow: 1;
  overflow-y: scroll;
  width: 100%;
}
.emoji-list {
  display: grid;
  grid-template: auto / repeat(10, 28px);
  align-items: center;
  justify-items: center;
  column-gap: 4px;
  row-gap: 4px;
  padding: 8px;
}
.emoji-btn {
  width: 28px;
  height: 28px;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  cursor: pointer;
  border: none;
  background-color: transparent;
  &:hover {
    background-color: rgba(0, 0, 0, 0.06);
  }
}
.is-selected {
  background-color: rgba(24, 145, 251, 0.3);
  &:hover {
    background-color: rgba(24, 145, 251, 0.3);
  }
}
.selected-emoji {
  width: 16px;
  height: 16px;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 14px;
  color: rgba(0, 0, 0, 1);
  inset: 0px;
}
.actions {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  gap: 8px;
  flex-shrink: 0;
  border-top: 1px solid #f0f0f0;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05), 0px 5px 16px rgba(0, 0, 0, 0.1);
}
.primary-btn {
  flex-basis: 0;
  flex-grow: 1;
  border: 1px solid transparent;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  line-height: 24px;
  padding: 4px;
  font-weight: 500;
  background-color: rgba(24, 160, 251, 1);
  color: white;
  &:disabled {
    background-color: rgba(0, 0, 0, 0.3);
    cursor: not-allowed;
  }
}
.destructive {
  background-color: transparent;
  border: 1px solid rgba(242, 72, 34, 1);
  color: rgba(242, 72, 34, 1);
}
.time-input {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.mod-time-btn {
  background-color: rgba(0, 0, 0, 0.03);
  border: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 4px;
  z-index: 2;
  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
  &:disabled {
    &:hover {
      background: transparent;
      cursor: default;
    }
  }
}
.time-num {
  min-width: 20px;
  text-align: center;
  cursor: default;
  z-index: 1;
}
</style>
