<script setup>
import { ref } from 'vue';
import silly8s from '../Public/silly8s.png';

const isTemplateSelected = ref(false);
const selectedTemplate = ref({});

const props = defineProps({
  currentItems: Object,
});

const emit = defineEmits(['preview', 'cancelPreview', 'loadTemplate']);
const preview = (template) => {
  selectedTemplate.value = template;
  console.log(selectedTemplate.value);
  emit('preview', template);
};
function cancelPreview() {
  console.log('Canceling in Vue');
  emit('cancelPreview');
}
</script>

<script>
import templates from '../Templates.js';
</script>

<template>
  <div class="templates-wrap">
    <div>Filters</div>
    <div class="templates-container">
      <div
        v-for="item in templates"
        :key="item.id"
        class="template-item"
        @click="preview(item)"
      >
        <div
          class="template-item-cover"
          :class="{
            selected: selectedTemplate === item,
          }"
        >
          <div class="badge"></div>
          <img class="template-img" :src="silly8s" />
          <div
            class="template-category"
            :class="{
              exercise: item.templateCategory === 'Exercise',
              workshop: item.templateCategory === 'Workshop',
            }"
          >
            {{ item.templateCategory }}
          </div>
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
      <button class="primary-btn destructive" @click="cancelPreview()">
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
  align-items: stretch;
}
.templates-container {
  width: 100%;
  flex-grow: 1;
  overflow-y: scroll;
  display: flex;
  flex-wrap: wrap;
  row-gap: 1rem;
  padding: 0.5rem;
  align-items: start;
}
.template-item {
  width: 50%;
  padding: 0.5rem;
  cursor: pointer;
  &:hover .template-item-cover {
    border-color: rgba(0, 0, 0, 0.3);
    background-color: rgba(0, 0, 0, 0.06);
  }
}
.selected {
  background-color: red;
  & .template-item-cover {
    border-color: blue;
  }
}
.template-item-cover {
  background-color: rgba(0, 0, 0, 0.02);
  border: 1px solid rgba(0, 0, 0, 0);
  border-radius: 0.5rem;
  height: 6rem;
  margin-bottom: 0.5rem;
  overflow: hidden;
  width: 100%;
  padding: 0.5rem;
  padding-bottom: 0;
  position: relative;
}
.template-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
}
.template-category {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  font-size: 0.625rem;
  line-height: 0.75rem;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
}
.exercise {
  color: rgb(0, 118, 68);
  background-color: rgb(232, 249, 242);
}
.workshop {
  color: rgb(33, 0, 214);
  background-color: rgb(242, 239, 255);
}
</style>
