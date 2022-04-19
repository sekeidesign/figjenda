<script setup>
import { ref, computed, onMounted, defineProps } from 'vue';
import emojiSet from 'emojibase-data/en/data.json';

const v3Emoji = emojiSet.filter(
  (emoji) => emoji.version <= 3 && emoji.label.indexOf('regional indicator', -1)
);
const search = ref('');
const filteredEmoji = computed(() => {
  if (search.value.length === 0) {
    return v3Emoji;
  } else {
    return v3Emoji.filter(
      (emoji) =>
        emoji.label.indexOf(search.value) > -1 ||
        emoji.tags.toString().indexOf(search.value) > -1
    );
  }
});
const searchInput = ref(null);
onMounted(() => searchInput.value.focus());

const props = defineProps({
  agendaItem: Object,
});

const emit = defineEmits(['done']);
function done(modeData) {
  const data = {
    mode: modeData,
    itemName: localName.value,
    selectedEmoji: localEmoji.value,
    time: localTime.value,
    id: localId.value,
    index: localIndex.value,
  };
  //console.log(data);
  emit('done', data);
}

const localEmoji = ref('');
const localName = ref('');
const localTime = ref(0);
const localId = ref(null);
const localIndex = ref(null);

const isValid = computed(() => {
  return localEmoji.value;
});

function removeEmoji() {
  localEmoji.value = '';
}
function setEmoji(emoji) {
  localEmoji.value = emoji;
  done('Edit');
}
function test() {
  console.log('hello');
}

if (props.agendaItem) {
  // console.log('Item exists', props.agendaItem);
  const { selectedEmoji, itemName, time, id, index } = props.agendaItem;
  localEmoji.value = selectedEmoji;
  localName.value = itemName;
  localTime.value = time;
  localId.value = id;
  localIndex.value = index;
}
</script>

<template>
  <div class="header">
    <input
      type="text"
      v-model="search"
      class="search-input"
      ref="searchInput"
    />
  </div>
  <div class="emoji-list-wrap">
    <div class="emoji-list">
      <button
        class="emoji-btn"
        :class="[emoji === localEmoji ? 'is-selected' : '']"
        v-for="emoji in filteredEmoji"
        :key="emoji.hex"
        @click="setEmoji(emoji.emoji)"
      >
        {{ emoji.emoji }}
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  padding: 8px;
  background-color: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(16px);
  border-bottom: 1px solid #f0f0f0;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05), 0px 5px 16px rgba(0, 0, 0, 0.1);
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  flex-shrink: 0;
}
.search-input {
  height: 28px;
  z-index: 10;
  padding: 8px;
  background-color: rgba(10, 25, 50, 0.05);
  border-radius: 6px;
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
    border: 1px solid rgba(24, 160, 251, 1);
    outline: transparent !important;
  }
}
.emoji-list-wrap {
  flex-grow: 1;
  overflow-y: scroll;
  width: 100%;
  padding-top: 44px;
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
  border-radius: 8px;
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
</style>
