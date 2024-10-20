<script setup lang="ts">
import Dialog from 'primevue/dialog';

const props = defineProps<{
	visible: boolean;
	header: string;
	persistent: boolean;
}>();

const emit = defineEmits(['update:visible']);
</script>

<template>
	<Dialog
		v-model:visible="props.visible"
		@update:visible="(val) => emit('update:visible', val)"
		:style="{ width: '25rem' }"
		:header="props.header"
		modal
	>
		<slot />
	</Dialog>
</template>
