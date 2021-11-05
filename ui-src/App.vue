<script setup>
import emojiSet from './emoji.json'
import { ref, computed } from 'vue';
    const emojis = Object.keys(emojiSet)
    const selectedEmoji = ref('')
    const itemName = ref('')

    function removeEmoji() {
        selectedEmoji.value = ''
    }
    function setEmoji(emoji) {
        console.log(emoji)
        selectedEmoji.value = emoji
    }
</script>

<template>
    <div style="padding: 0px; position: relative;">
        <div class="header">
            <div class="section-title-input">
                <button class="emoji-input" @click.prevent="removeEmoji">
                    <svg v-if="selectedEmoji === ''" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-smile" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                        <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
                    </svg>
                    <div v-else class="selected-emoji">{{selectedEmoji}}</div>
                </button>
                <input type="text" placeholder="Section title" class="input" v-bind="itemName">
            </div>
            <div class="time-wrap">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="rgba(0, 0, 0, 0.3)" class="bi bi-clock" viewBox="0 0 16 16">
                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
                </svg>
                <div class="input time">
                    <input type="number" min="0" placeholder="00">
                    :
                    <input type="number" min="0" max="60" placeholder="00">
                </div>
            </div>  
        </div>
        <div class="emoji-list-wrap">
            <div class="emoji-list">
                <button class="emoji-btn" :class="[emoji === selectedEmoji ? 'is-selected' : '']" v-for="emoji in emojis" :key="emoji.slug" @click="setEmoji(emoji)">{{emoji}}</button>
            </div>
        </div>
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
    input[type=number] {
        border: none;
        width: 20px;
        -moz-appearance: textfield;
    }
    
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
    }
    .time {
        padding-left: 24px;
        display: flex;
        align-items: center;
    }
    .bi-clock {
        position: absolute;
        left: 8px;
        top: 10px;
    }
    .emoji-list-wrap {
        height: 144px;
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
        font-size: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        line-height: 14px;
        color: rgba(0, 0, 0, 1);
        inset: 0px;
    }
</style>