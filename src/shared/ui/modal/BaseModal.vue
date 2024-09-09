<script setup lang="ts">
import { ref } from 'vue';

const dialog = ref(false);

const props = defineProps<{
    closeTxt?: string;
    closeIcon?: string;
    title: string;
}>();

</script>

<template>
    <v-dialog
        v-model="dialog" 
        max-width="auto"
    >
        <template v-slot:activator="{ props: dialog }">
            <v-btn 
                v-if="props.closeTxt != undefined"
                v-bind="dialog"
                :prepend-icon="props.closeIcon"
                :text="props.closeTxt"
            ></v-btn>
            <v-btn
                v-else
                v-bind="dialog"
                :icon="closeIcon"
            ></v-btn>
        </template>
        <v-card
            :title="props.title"
        >
            <v-card-text>
                <slot name="body" />
            </v-card-text>
            <v-card-actions>
                <v-btn>
                    Закрыть
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>