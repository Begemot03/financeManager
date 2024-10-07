<script setup lang="ts">
import { computed } from 'vue';
import { useNotificationStore } from '../model';

const notificationStore = useNotificationStore();

</script>

<template>
    <v-alert
        v-show="notificationStore.isOpen"
    >
        Привет привет
    </v-alert>
</template>

<style scoped>
    
</style>