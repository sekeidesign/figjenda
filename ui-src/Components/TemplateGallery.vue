<script setup>
import { ref } from "vue";
import silly8s from "../Public/silly8s.png";

const isTemplateSelected = ref(false);

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
</script>

<script>
import templates from "../Templates.js";
</script>

<template>
  <div class="templates-wrap">
    <div>Filters</div>
    <div class="templates-container">
      <div v-for="item in templates" :key="item.id" class="template-item">
        <div class="template-item-cover">
          <div class="badge"></div>
          <img :src="silly8s" />
        </div>
        <div>
          <h2>{{ item.templateName }}</h2>
          <div class="properties">
            <div></div>
            <div class="small-divider"></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
    <div class="actions">
      <button class="primary-btn destructive" @click="done('Cancel')">
        Cancel
      </button>
      <button
        class="primary-btn"
        @click="done('Load template')"
        :disabled="!isTemplateSelected"
      >
        Load template
      </button>
    </div>
  </div>
</template>

<style lang="scss">
.templates-wrap {
  height: 100%;
  max-height: 100%;
  display: flex;
  flex-direction: column;
}
.templates-container {
  flex-grow: 1;
  overflow: scroll;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem 1rem;
  padding: 1rem;
}
.template-item {
  background-color: seashell;
  width: 100%;
}
.template-item-cover {
  background-color: grey;
  width: 100%;
  border-radius: 0.5rem;
  height: 5rem;
  margin-bottom: 0.5rem;
}
</style>
