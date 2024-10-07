<script setup lang="ts">
import { useNotificationStore } from '@/shared/ui/notification';

const notificationStore = useNotificationStore();

function notify() {
    notificationStore.open({
        title: "Депозит добавлен"
    });
}

</script>

<template>
    <v-btn
        @click="notify"
    >
        Добавить
    </v-btn>
</template>

<style scoped>
    
</style>