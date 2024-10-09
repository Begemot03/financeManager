<script setup lang="ts">
import { BaseModal } from '@/shared/ui/baseModal';
import { ref } from 'vue';

const visible = ref(false);
</script>

<template>
    <BaseModal
        title="Новая операция"
        v-model:visible="visible"
        persistent
    >
        <template #activator>
            <v-btn
                @click="() => visible = true"
                text="Открыть"
            ></v-btn>
        </template>
        <template #actions>
            <v-btn
                text="Открыть"
                @click="() => visible = false"
            ></v-btn>
            <v-btn
                text="Закрыть"
                @click="() => visible = false"
            ></v-btn>
        </template>
    </BaseModal>
</template>