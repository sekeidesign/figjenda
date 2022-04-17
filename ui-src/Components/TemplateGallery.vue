<script setup>
import { ref } from 'vue';

const selectedTemplate = ref({ templateName: '', id: '' });

const emit = defineEmits(['preview', 'cancelPreview', 'loadTemplate']);
const preview = (template) => {
  selectedTemplate.value = template;
  emit('preview', template);
};
function cancelPreview() {
  //console.log('Canceling in Vue');
  emit('cancelPreview');
}
function loadTemplate() {
  emit('loadTemplate');
}

const totalLength = (items) => {
  const lengthInSeconds = items.reduce(
    (previousValue, currentValue) => previousValue + currentValue.time,
    0
  );
  return Math.round(lengthInSeconds / 60);
};
</script>

<script>
import templates from '../Templates.js';
</script>

<template>
  <div class="templates-wrap">
    <div class="templates-container">
      <div
        v-for="item in templates"
        :key="item.id"
        class="template-item"
        :class="{
          selected:
            selectedTemplate.templateName == item.templateName &&
            selectedTemplate.id == item.id,
        }"
        @click="preview(item)"
      >
        <div class="template-item-cover">
          <img class="template-img" :src="item.imageURL" />
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
        <div class="properties">
          <h2 class="template-title">{{ item.templateName }}</h2>
          <div class="time-badge">
            <svg
              width="12"
              height="12"
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.25854 0.509436C4.17286 0.503111 4.08698 0.499942 4.00107 0.499938V0C4.09932 4.79078e-05 4.19755 0.00371661 4.29553 0.0109986L4.25854 0.509436ZM5.26041 0.734408C5.10015 0.672568 4.93556 0.622606 4.76797 0.584927L4.87746 0.0969879C5.06893 0.139983 5.25741 0.196975 5.44039 0.267967L5.26041 0.734408V0.734408ZM5.94533 1.08936C5.87385 1.04169 5.80064 0.99667 5.72585 0.954381L5.97232 0.519435C6.14325 0.616291 6.30684 0.725571 6.46176 0.846394L6.1543 1.24084C6.08652 1.18797 6.01682 1.13761 5.94533 1.08986V1.08936ZM6.86221 1.98425C6.76332 1.84376 6.65421 1.71075 6.53575 1.5863L6.89771 1.24134C7.03269 1.38383 7.15767 1.53631 7.27116 1.69629L6.86221 1.98425V1.98425ZM7.23416 2.66017C7.20135 2.58091 7.16566 2.50286 7.12718 2.4262L7.57362 2.20122C7.66191 2.37675 7.73711 2.55855 7.79859 2.74516L7.32365 2.90164C7.29679 2.82008 7.26694 2.73954 7.23416 2.66017V2.66017ZM7.49913 3.91351C7.49509 3.7417 7.47838 3.57043 7.44914 3.40107L7.94158 3.31609C7.97507 3.50906 7.99457 3.70504 7.99957 3.90101L7.49963 3.91351H7.49913ZM7.43364 4.68241C7.45014 4.59743 7.46364 4.51294 7.47413 4.42745L7.97057 4.48894C7.94656 4.68399 7.90813 4.877 7.85559 5.06637L7.37365 4.93288C7.39664 4.85039 7.41664 4.7669 7.43364 4.68241V4.68241ZM6.9577 5.87177C7.04969 5.72678 7.13068 5.5748 7.20067 5.41782L7.65761 5.6203C7.57762 5.80027 7.48513 5.97325 7.38015 6.13923L6.9577 5.87177ZM6.47576 6.47419C6.53675 6.4132 6.59524 6.35021 6.65074 6.28521L7.02969 6.61167C6.96552 6.68608 6.89865 6.75812 6.82921 6.82765L6.47576 6.47419V6.47419Z"
                fill="black"
                fill-opacity="0.3"
              />
              <path
                d="M4.00106 0.499938C3.42557 0.499979 2.85898 0.641943 2.35146 0.913255C1.84394 1.18457 1.41116 1.57685 1.09145 2.05537C0.77175 2.53388 0.574987 3.08385 0.518594 3.65657C0.462201 4.22929 0.547919 4.80708 0.768154 5.33876C0.98839 5.87044 1.33635 6.3396 1.7812 6.70469C2.22606 7.06978 2.75409 7.31952 3.31851 7.43181C3.88294 7.54409 4.46635 7.51544 5.01706 7.34841C5.56778 7.18137 6.0688 6.8811 6.47575 6.47419L6.82921 6.82765C6.36413 7.29298 5.79146 7.63641 5.16194 7.82752C4.53241 8.01863 3.86546 8.05151 3.22019 7.92325C2.57492 7.79499 1.97124 7.50955 1.46265 7.09223C0.954063 6.6749 0.55626 6.13857 0.304491 5.53075C0.0527221 4.92294 -0.0452393 4.26241 0.0192865 3.60768C0.0838124 2.95296 0.308833 2.32426 0.674411 1.77729C1.03999 1.23031 1.53484 0.781958 2.11511 0.471942C2.69538 0.161927 3.34317 -0.000174344 4.00106 1.40712e-07V0.499938Z"
                fill="black"
                fill-opacity="0.3"
              />
              <path
                d="M3.7511 1.49976C3.81739 1.49976 3.88097 1.52609 3.92785 1.57297C3.97473 1.61985 4.00107 1.68343 4.00107 1.74972V4.3544L5.62486 5.28228C5.68075 5.316 5.72124 5.37024 5.73766 5.43341C5.75409 5.49658 5.74516 5.56367 5.71278 5.62034C5.68039 5.67701 5.62713 5.71877 5.56436 5.73669C5.5016 5.75461 5.43432 5.74726 5.37689 5.71623L3.62711 4.71635C3.58885 4.6945 3.55705 4.66292 3.53493 4.62482C3.5128 4.58672 3.50114 4.54344 3.50113 4.49938V1.74972C3.50113 1.68343 3.52747 1.61985 3.57434 1.57297C3.62122 1.52609 3.6848 1.49976 3.7511 1.49976V1.49976Z"
                fill="black"
                fill-opacity="0.3"
              />
            </svg>
            {{ totalLength(item.items) }}mins
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
        @click="loadTemplate()"
        :disabled="!selectedTemplate"
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
  border-radius: 0.5rem;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.03);
  }
  &:hover .template-item-cover {
    border-color: rgba(0, 0, 0, 0.3);
    background-color: rgba(0, 0, 0, 0.06);
  }
}
.selected {
  background-color: rgba(0, 0, 0, 0.03);
  & .template-title {
    color: rgba(24, 160, 251, 1);
  }
  & .template-item-cover {
    border-color: rgba(24, 160, 251, 1);
    background-color: rgba(0, 0, 0, 0.02);
  }
  &:hover .template-item-cover {
    border-color: rgba(24, 160, 251, 1);
    background-color: rgba(0, 0, 0, 0.06);
  }
}
.template-item-cover {
  background-color: rgba(0, 0, 0, 0.02);
  border: 1px solid rgba(0, 0, 0, 0);
  border-radius: 0.25rem;
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
  display: none;
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
.properties {
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.25rem;
}
.time-badge {
  display: flex;
  gap: 4px;
  border-radius: 4px;
  padding: 4px 8px;
  background-color: rgba(0, 0, 0, 0.03);
  align-items: center;
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1rem;
  color: rgba(0, 0, 0, 0.3);
}
</style>
