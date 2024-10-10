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
        <slot></slot>
    </v-dialog>
</template>