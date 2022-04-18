<script setup>
import { ref, computed, defineProps } from 'vue';

const props = defineProps({
  componentMode: String,
  agendaItem: Object,
});

const emit = defineEmits(['done']);
function done(modeData) {
  //console.log(`Done ${mode}ing`);
  const data = {
    mode: modeData,
    itemName: localName.value,
    selectedEmoji: localEmoji.value,
    time: localTime.value,
    id: localId.value,
  };
  emit('done', data);
}

const localEmoji = ref('');
const localName = ref('');
const localTime = ref(0);
const localId = ref(null);

const isValid = computed(() => {
  return localTime.value > 0;
});

function toMins(localTime) {
  return `${localTime / 60 < 10 ? '0' : ''}${Math.floor(
    localTime / 60
  ).toString()}`;
}
function toSecs(localTime) {
  return `${localTime % 60 < 10 ? '0' : ''}${(localTime % 60).toString()}`;
}
function modifyTime(type, amt) {
  type === 'add'
    ? (localTime.value = localTime.value + amt)
    : (localTime.value = localTime.value - amt);
}
function test() {
  console.log(props.componentMode);
}

if (props.agendaItem) {
  //console.log("Item exists", props.agendaItem);
  const { selectedEmoji, itemName, time, id } = props.agendaItem;
  localEmoji.value = selectedEmoji;
  localName.value = itemName;
  localTime.value = time;
  localId.value = id;
}
</script>

<template>
  <div class="wrap">
    <div class="time-input">
      <button @click="modifyTime('add', 60)" class="mod-time-btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="currentColor"
          class="bi bi-plus"
          viewBox="0 0 16 16"
        >
          <path
            d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
          />
        </svg>
      </button>
      <span class="time-num">{{ `${toMins(localTime)}` }}</span>
      <button
        @click="modifyTime('subtract', 60)"
        :disabled="localTime / 60 < 1"
        class="mod-time-btn"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="currentColor"
          class="bi bi-dash"
          viewBox="0 0 16 16"
        >
          <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
        </svg>
      </button>
    </div>
    <span class="time-divider">:</span>
    <div class="time-input">
      <button @click="modifyTime('add', 15)" class="mod-time-btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="currentColor"
          class="bi bi-plus"
          viewBox="0 0 16 16"
        >
          <path
            d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
          />
        </svg>
      </button>
      <span class="time-num">{{ `${toSecs(localTime)}` }}</span>
      <button
        @click="modifyTime('subtract', 15)"
        :disabled="localTime < 1"
        class="mod-time-btn"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="currentColor"
          class="bi bi-dash"
          viewBox="0 0 16 16"
        >
          <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
        </svg>
      </button>
    </div>
  </div>
  <div class="actions">
    <button class="primary-btn destructive" @click="done('Cancel')">
      Cancel
    </button>
    <button class="primary-btn" @click="done('Edit')" :disabled="!isValid">
      Done
    </button>
  </div>
</template>

<style lang="scss" scoped>
.wrap {
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.time-wrap {
  margin-left: 4px;
  position: relative;
  display: flex;
  align-items: center;
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
  font-family: 'Roboto Mono', monospace;
  font-weight: 900;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
}
.mod-time-btn {
  background-color: rgba(0, 0, 0, 0.05);
  outline: 1px solid rgb(245, 245, 250);
  height: 25%;
  width: 100%;
  color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0px;
  cursor: pointer;
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
.time-divider {
  font-size: 40px;
  position: absolute;
  color: rgba(0, 0, 0, 0.5);
}
.time-num {
  min-width: 16px;
  font-size: 40px;
  text-align: center;
  color: rgba(0, 0, 0, 0.8);
  font-weight: 800;
  text-align: center;
  cursor: default;
  z-index: 1;
}
</style>
