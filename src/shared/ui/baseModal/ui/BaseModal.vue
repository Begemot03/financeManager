<script setup lang="ts">
const props = defineProps<{
    visible: boolean,
    title: string,
    persistent: boolean,
}>();

const emit = defineEmits(["update:visible"])

</script>

<template>
    <v-dialog
        v-model="props.visible"
        @update:model-value="(val) => emit('update:visible', val)"
        max-width="600"
        :persistent="props.persistent"
    >
        <template #activator>
            <slot name="activator"></slot>
        </template>
        <v-card
            :title="title"
        >
            <v-card-text>
                <slot></slot>
            </v-card-text>
            <v-card-actions>
                <slot name="actions"></slot>
            </v-card-actions>
        </v-card>
        
    </v-dialog>
</template>