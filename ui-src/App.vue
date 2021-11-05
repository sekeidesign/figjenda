<script setup>
import { ref } from 'vue';
    const emoji = ref('')
    const itemName = ref('')

    function removeEmoji() {
        emoji.value = ''
    }
</script>

<template>
    <div style="padding: 0px;">
        <div class="header">
            <div class="section-title-input">
                <button class="emoji-input" @click.prevent="removeEmoji">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-smile" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                        <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
                    </svg>
                </button>
                <input type="text" placeholder="Section title" class="input" v-bind="itemName">
            </div>
            <div class="time-wrap">
                <input type="text" class="input time">
            </div>  
        </div>
    </div>
</template>

<style lang="css">
    .header {
        padding: 8px;
        background-color: white;
        border-bottom: 1px solid #F0F0F0;
        box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05), 0px 5px 16px rgba(0, 0, 0, 0.1);
        display: flex;
        align-items: center;
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
        border-radius: 2px;
        padding: 4px;
        background-color: transparent;
        color: rgba(0, 0, 0, 0.3);
        height: 24px;
    }
    .emoji-input:hover {
        background: rgba(0, 0, 0, 0.06);
    }
    .input {
        height: 32px;
        padding-left: 32px;
        z-index: 10;
        border-radius: 2px;
        border: 1px solid transparent;
        color: rgba(0, 0, 0, 0.8);
        width: 100%;
    }
    .input::placeholder {
        color: rgba(0, 0, 0, 0.3);
    }
    .input:hover {
        border: 1px solid rgba(0, 0, 0, 0.1);
    }
    .time-wrap {
        flex-shrink: 2;
    }
    .time {
        padding-left: 4px;
    }
</style>